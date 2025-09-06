import type { NextApiRequest, NextApiResponse } from 'next';
import { buildPressRelease } from '../../../utils/mediaKit';

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

    const result = await buildPressRelease({
      type,
      companyName,
      date,
      raiseAmount,
      tokenName,
    });

    res.status(200).json({ success: true, result });
  } catch (error: any) {
    console.error('Error generating media:', error);
    res.status(500).json({ error: 'Failed to generate media' });
  }
}