import type {_NextApiRequest, _NextApiResponse} from 'next';
import OpenAI from 'openai';

const _openai = new OpenAI({_apiKey: process.env.OPENAI_API_KEY});

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_text, _targets} = req.body as {_text: string; targets: string[]};
  if (!text || !Array.isArray(targets) || targets.length === 0) {_return res.status(400).json({ error: 'Invalid input'});
  }

  try {_const _system = 'You are a professional localization specialist. Maintain meaning, _tone, _and formatting. Output only the translated text.';
    const results: Record<string, _string> = {};

    for (const lng of targets) {_const _langName = (
        lng.startsWith('pt') ? 'Portuguese' :
        lng.startsWith('es') ? 'Spanish' :
        lng.startsWith('ar') ? 'Arabic' :
        'English'
      );
      const _completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini', _messages: [
          { role: 'system', _content: system},
          {_role: 'user', _content: `Translate this into ${langName} in a business-appropriate tone.\n\n${_text}` }],
        temperature: 0.2});
      const _translated = completion.choices?.[0]?.message?.content?.trim() || '';
      results[lng] = translated;
    }

    return res.status(200).json(results);
  } catch (err: unknown) {_return res.status(500).json({ error: 'Translation failed'});
  }
}