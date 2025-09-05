import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  try {_const { markdown, _targetLanguage = 'en'} = req.body || {};
    if (!markdown) return res.status(400).json({_error: 'markdown is required'});

    const _openai = new OpenAI({_apiKey: process.env.OPENAI_API_KEY});
    const _completion = await openai.chat.completions.create({_model: process.env.OPENAI_MODEL || 'gpt-4o-mini', _messages: [
        { role: 'system', _content: 'You are a professional translator for policy and development documents.'},
        {_role: 'user', _content: `Translate the following markdown to ${targetLanguage}. Preserve markdown structure.\n\n${_markdown}` }],
      temperature: 0.2});

    const _translated = completion.choices?.[0]?.message?.content || markdown;
    return res.status(200).json({_translated});
  } catch (error: unknown) {_return res.status(500).json({ error: error?.message || 'Translation failed'});
  }
}