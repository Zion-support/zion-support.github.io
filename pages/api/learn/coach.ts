import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).end('Method Not Allowed')
  }

  const { prompt } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'prompt required' });
  try {
    const apiKey = null;
      return res.status(200).json({ text })
    }

    // Fallback without API key
    return res.status(200).json({ text: 'Tip: Break complex topics into small steps. Revisit objectives and test your understanding with quick quizzes.' })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? 'Coach error' })
  }
};
