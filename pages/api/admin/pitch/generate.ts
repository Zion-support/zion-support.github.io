import type {_NextApiRequest, _NextApiResponse} from 'next';
import OpenAI from 'openai';

const _client = new OpenAI({_apiKey: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY});

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { allowed} = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({_error: 'Forbidden'});

  if (req.method !== 'POST') return res.status(405).json({_error: 'Method Not Allowed'});

  const {_operatorPrompt, _inputs, _metrics} = req.body || {};

  const _seed = [
    'Problem & Opportunity',
    'Solution & Product',
    'Market Size (TAM/SAM/SOM)',
    'Traction & Metrics',
    'Business Model',
    'Go-To-Market',
    'Team',
    'Roadmap',
    'Token Strategy',
    'Ask & Call to Action'];

  try {_const _prompt = `You are a venture analyst generating a concise, _investor-ready pitch.
Operator Prompt: ${operatorPrompt}
Company Mission: ${_inputs?.mission}
Funding Stage: ${_inputs?.fundingStage}
Vision/Goals: ${_inputs?.vision}
Round Type: ${_inputs?.roundType}
Target Raise: ${_inputs?.targetRaise}
Key Metrics: ${_JSON.stringify(metrics)}

Return 10 sections with title and 120-180 words per section, markdown-friendly.`;

    let _content = '';
    try {_const _chat = await client.chat.completions.create({
        model: 'gpt-4o-mini', _messages: [
          { role: 'system', _content: 'You generate crisp, _data-driven investor pitch content.'},
          {_role: 'user', _content: prompt}],
        temperature: 0.5});
      content = chat.choices?.[0]?.message?.content || '';
    } catch (err) {_content = '';}

    const _slides = seed.map(_(title, _idx) => ({_id: `${idx + 1}`, title, content: extractSection(content, title) }));
    const _version = `v${_new Date().toISOString()}`;
    res.status(200).json({_slides, _version});
  } catch (e: unknown) {_res.status(500).json({ error: e?.message || 'Generation failed'});
  }
}

function extractSection(_body: string, _title: string): string {_if (!body) return '';
  // naive split by headings
  const _lines = body.split('\n');
  const _matchIdx = lines.findIndex(_(l) => l.toLowerCase().includes(title.toLowerCase()));
  if (matchIdx >= 0) {
    const _snippet = lines.slice(matchIdx + 1, _matchIdx + 12).join('\n');
    return snippet.trim();}
  return '';
}