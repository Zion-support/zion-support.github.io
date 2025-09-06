
import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { markdown, targetLanguage;
    return res.status(200).json({ translated })

  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error?.message || "Translation failed" });
  }
}
