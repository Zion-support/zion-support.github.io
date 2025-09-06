import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
const openai = new OpenAI($2);
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { text, targets } = req.body as { text: string, targets: string[] },
  if (!text || !Array.isArray(targets) || targets.length === 0) {
    return res.status(400).json({ error: 'Invalid input' })
  }

  try {
    const system = 'You are a professional localization specialist. Maintain meaning, tone, and formatting. Output only the translated text.',
    const results: Record<string, string> = {},

    for (const lng of targets) {
      const langName = $2;
      const completion = await openai.chat.completions.create($2);
      const translated = $2;
      results[lng] = translated
    }

    return res.status(200).json(results)
  } catch (err: any) {
    console.error($2);
    return res.status(500).json({ error: 'Translation failed' })
  }
}