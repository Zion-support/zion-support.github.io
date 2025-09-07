import type { NextApiRequest, NextApiResponse } from 'next';
import { buildPressRelease } from '../../../utils/mediaKit';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { type = 'launch', companyName = 'Zion', date = new Date().toISOString().substring(0,10), raiseAmount, tokenName } = req.body || {},

    const apiKey = $2;
    if (apiKey) {
      try {
        const { OpenAI } = await import($2);
        const client = new OpenAI($2);
        const prompt = `Write a concise ${type} press release for ${companyName} (date ${date}) with clear headlines, 2 paragraphs, and one quote.`,
        const completion = await client.chat.completions.create($2);
        const text = completion.choices?.[0]?.message?.content?.trim($2);
        if (text) {
          res.status(200).json($2);
          return
        }
      } catch (_) {
        // fall through to template
      }

    const text = buildPressRelease($2);
    res.status(200).json({ ok: true, text, fallback: true})
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e ?.message || 'Unknown error' })
  }