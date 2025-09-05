import type {_NextApiRequest, _NextApiResponse} from 'next';
import OpenAI from 'openai';

const _client = new OpenAI({_apiKey: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY});

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { allowed} = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({_error: 'Forbidden'});

  if (req.method !== 'POST') return res.status(405).json({_error: 'Method Not Allowed'});

  const {_slide} = req.body || {};
  if (!slide) return res.status(400).json({_error: 'Missing slide'});

  try {_const _prompt = `Rephrase the following slide content for an investor deck. Keep it 120-150 words, _punchy, _and data-driven. Return JSON with keys title and content.
Title: ${slide.title}\nContent:\n${_slide.content}`;

    let _title = slide.title;
    let _content = slide.content;
    try {_const _chat = await client.chat.completions.create({
        model: 'gpt-4o-mini', _messages: [
          { role: 'system', _content: 'You rewrite concise investor content and return JSON only.'},
          {_role: 'user', _content: prompt}],
        temperature: 0.6,
        response_format: {_type: 'json_object'} as any});
      const _raw = chat.choices?.[0]?.message?.content || '{}';
      const _parsed = JSON.parse(raw);
      title = parsed.title || title;
      content = parsed.content || content;
    } catch (err) {_// keep original if AI fails}

    res.status(200).json({_title, _content});
  } catch (e: unknown) {_res.status(500).json({ error: e?.message || 'Rewrite failed'});
  }
}