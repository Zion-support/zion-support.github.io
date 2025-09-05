import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.setHeader('Allow', _'POST');
    return res.status(405).end('Method Not Allowed');}

  const {_prompt} = req.body || {};
  if (!prompt) return res.status(400).json({_error: 'prompt required'});

  try {_const _apiKey = process.env.OPENAI_API_KEY;
    if (apiKey) {
      const { OpenAI} = await import('openai');
      const _openai = new OpenAI({_apiKey});
      const _resp = await openai.chat.completions.create({_model: 'gpt-4o-mini', _messages: [
          { role: 'system', _content: 'You are ZionGPT Coach, _a helpful and concise AI tutor for Zion Academy courses. Provide short, _actionable guidance.'},
          {_role: 'user', _content: String(prompt)}
        ]
      });
      const _text = resp.choices?.[0]?.message?.content || 'No response';
      return res.status(200).json({_text});
    }

    // Fallback without API key
    return res.status(200).json({_text: 'Tip: Break complex topics into small steps. Revisit objectives and test your understanding with quick quizzes.'});
  } catch (e: unknown) {_return res.status(500).json({ error: e?.message ?? 'Coach error'});
  }
}