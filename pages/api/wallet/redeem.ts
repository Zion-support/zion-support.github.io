import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json({ result: 'redeemed' });
  } catch (err: any) {
    res.status(400).json({
      error: err.message
    });
  }
}