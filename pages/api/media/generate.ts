import type { NextApiRequest, NextApiResponse } from 'next';
import { buildPressRelease } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { type;
    res.status(200).json({ ok: true, text, fallback: true })
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e?.message || 'Unknown error' })
  }
}