import type { NextApiRequest, NextApiResponse } from 'next';
import { buildPressRelease } from '../../../utils/mediaKit';
<<<<<<< HEAD
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {
      type = 'launch',
      companyName = 'Zion',
      date = new Date().toISOString().substring(0, 10),
      raiseAmount,
      tokenName,
    } = req.body || {};
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { type = 'launch', companyName = 'Zion', date = new Date().toISOString().substring(0,10), raiseAmount, tokenName } = req.body || {};
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { type = 'launch', companyName = 'Zion', date = new Date().toISOString().substring(0,10), raiseAmount, tokenName } = req.body || {};
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

    const apiKey = process.env.OPENAI_API_KEY;
    if (apiKey) {
      try {
        const { OpenAI } = await import('openai');
        const client = new OpenAI({ apiKey });
        const prompt = `Write a concise ${type} press release for ${companyName} (date ${date}) with clear headlines, 2 paragraphs, and one quote.`;
        const completion = await client.chat.completions.create({
          model: 'gpt-4o-mini';
          messages: [
            { role: 'system', content: 'You are a seasoned tech PR writer.' },
<<<<<<< HEAD
<<<<<<< HEAD
            { role: 'user', content: prompt },
=======
            { role: 'user', content: prompt }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          ],
          temperature: 0.4,
          max_tokens: 500
        });
        const text = completion.choices?.[0]?.message?.content?.trim();
        if (text) {
          res.status(200).json({ ok: true, text });
<<<<<<< HEAD
          return;
=======
            { role: 'user', content: prompt }
          ],
          temperature: 0.4,
          max_tokens: 500});
        const text = completion.choices?.[0]?.message?.content?.trim();
        if (text) {
          res.status(200).json({ ok: true, text });
          return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }
      } catch (_) {
        // fall through to template
      }
    }

<<<<<<< HEAD
<<<<<<< HEAD
    const text = buildPressRelease(type, {
      companyName,
      date,
      raiseAmount,
      tokenName,
    } as any);
    res.status(200).json({ ok: true, text, fallback: true });
=======
    const text = buildPressRelease(type, { companyName, date, raiseAmount, tokenName } as any);
    res.status(200).json({ ok: true, text, fallback: true })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e?.message || 'Unknown error' })
  }
<<<<<<< HEAD
=======
    const text = buildPressRelease(type, { companyName, date, raiseAmount, tokenName } as any);
    res.status(200).json({ ok: true, text, fallback: true })
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e?.message || 'Unknown error' })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
