// POST /api/recommend — AI-powered service recommendation engine
// Accepts: { answers: { budget: string, timeline: string, needs: string[] } }
// Returns: { matches, top3, totalConsidered }
// Cached 5 min; uses existing llm/chat endpoint

export async function POST(request: Request) {
  const { answers } = await request.json();
  if (!answers || typeof answers !== 'object') {
    return new Response(JSON.stringify({ error: 'Invalid answers payload' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  const fs = require('fs');
  const path = require('path');
  const crypto = require('crypto');

  const CACHE_DIR = path.join(process.cwd(), 'automation', 'cache');
  const CACHE_FILE = path.join(CACHE_DIR, 'recommend-cache.json');
  const CACHE_TTL = 5 * 60 * 1000;

  try { fs.mkdirSync(CACHE_DIR, { recursive: true }); } catch {}

  function loadCache() {
    try {
      if (!fs.existsSync(CACHE_FILE)) return { entries: [] };
      const data = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
      const now = Date.now();
      data.entries = (data.entries || []).filter((e: any) => (now - e.timestamp) < CACHE_TTL);
      return data;
    } catch { return { entries: [] }; }
  }

  function saveCache(cache: any) {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
  }

  const key = crypto.createHash('md5').update(JSON.stringify(answers)).digest('hex');
  const cache = loadCache();
  const cached = cache.entries.find((e: any) => e.key === key);
  if (cached) {
    return new Response(JSON.stringify({ ...cached.result, cached: true, cachedAt: cached.timestamp }), {
      status: 200, headers: { 'Content-Type': 'application/json' }
    });
  }

  // Load services from catalog
  const servicesPath = path.join(process.cwd(), 'app', 'data', 'servicesData.ts');
  const content = fs.readFileSync(servicesPath, 'utf8');

  const services: any[] = [];
  const idMatches = [...content.matchAll(/id:\s*"([^"]+)"/g)];
  const titleMatches = [...content.matchAll(/title:\s*"([^"]+)"/g)];
  const catMatches = [...content.matchAll(/category:\s*'([^']+)'/g)];

  for (let i = 0; i < idMatches.length; i++) {
    if (idMatches[i][1] && titleMatches[i]?.[1]) {
      services.push({
        id: idMatches[i][1],
        title: titleMatches[i][1],
        category: catMatches[i]?.[1] || 'ai'
      });
    }
  }

  const preview = services.slice(0, 150).map(s => `ID:${s.id} | ${s.category.toUpperCase()} | ${s.title}`).join('\n');

  const prompt = `Match user needs to best services.

User: ${JSON.stringify(answers)}

Catalog:
${preview}

Return ONLY valid JSON (no markdown):
{
  "matches": [{"serviceId":"id","score":0.0-1.0,"reason":"..."}],
  "suggestedNextStep": "actionable next step"
}`;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const resp = await fetch(`${baseUrl}/api/llm/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, temperature: 0.3, max_tokens: 400 })
    });

    if (!resp.ok) throw new Error(`LLM: ${resp.status}`);

    const data = await resp.json();
    const text = (data.text || data.response || '').trim();
    const jsonMatch = text.match(/\{[\s\S]*\}/); // dotAll via [\s\S]

    let matches: any[] = [];
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      matches = (parsed.matches || [])
        .map((m: any) => ({ ...m, service: services.find((s: any) => s.id === m.serviceId) || null }))
        .filter((m: any) => m.service && typeof m.score === 'number' && m.score >= 0.5)
        .sort((a: any, b: any) => b.score - a.score)
        .slice(0, 5);
    }

    const result = {
      matches: matches.map((m: any) => ({
        serviceId: m.service.id,
        title: m.service.title,
        category: m.service.category,
        score: Number(m.score.toFixed(2)),
        reason: String(m.reason || 'Matches your criteria')
      })),
      top3: matches.slice(0, 3).map((m: any) => ({
        id: m.service.id,
        title: m.service.title,
        category: m.service.category,
        score: Number(m.score.toFixed(2)),
        reason: m.reason
      })),
      totalConsidered: services.length,
      generatedAt: new Date().toISOString()
    };

    cache.entries.push({ key, result, timestamp: Date.now() });
    saveCache(cache);

    return new Response(JSON.stringify({ ...result, cached: false }), {
      status: 200, headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
