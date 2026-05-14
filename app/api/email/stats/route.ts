// GET /api/email/stats — email processing dashboard
export async function GET() {
  const fs = require('fs');
  const path = require('path');

  const QUEUE_DIR = path.join(process.cwd(), 'automation', 'email-queue');

  const readJson = (file) => {
    try {
      const p = path.join(QUEUE_DIR, file);
      if (!fs.existsSync(p)) return [];
      return JSON.parse(fs.readFileSync(p, 'utf8'));
    } catch { return []; }
  };

  const pending = readJson('pending.json');
  const processed = readJson('processed.json');
  const failed = readJson('failed.json');

  const intents = {};
  processed.forEach((p) => { intents[p.intent] = (intents[p.intent] || 0) + 1; });

  const latest = processed.slice(0, 5).map((p) => ({
    from: p.from,
    subject: p.subject?.slice(0, 60),
    intent: p.intent,
    confidence: p.confidence,
    processedAt: p.processedAt
  }));

  return new Response(JSON.stringify({
    totalProcessed: processed.length,
    totalPending: pending.length,
    totalFailed: failed.length,
    byIntent: intents,
    latest,
    queueHealthy: pending.length < 100,
    tip: "Set EMAIL_DRY_RUN=false to send real replies (configure EMAIL_HOST/USER/PASS)"
  }, null, 2), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
