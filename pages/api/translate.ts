





const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { text, targets } = req.body as { text: string, targets: string[] }
  if (!text |!Array.isArray(targets) |targets.length === 0) {
    return res.status(400).json({ error: 'Invalid input' })
  }
  try {
    const system = 'You are a professional localization specialist. Maintain meaning, tone, and formatting. Output only the translated text.'
    const results: Record<string, string> = {}
    for (const lng of targets) {
      const langName = (
        lng.startsWith('pt') ? 'Portuguese' :
        lng.startsWith('es') ? 'Spanish' :
        lng.startsWith('ar') ? 'Arabic' :
        'English'


      results[lng] = translated
    }
    return res.status(200).json(results)
  } catch (err: any) {
    console.error('Translation error', err)

    return res.status(500).json({ error: 'Translation failed' })
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ translation: 'Translated content' });
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { text, targets } = req.body as { text: string, targets: string[] },;
  if (!text || !Array.isArray(targets) || targets.length === 0) {;
    return res.status(400).json({ error: 'Invalid input' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }


  }
}





