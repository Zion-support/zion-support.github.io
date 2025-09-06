import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const csv = 'partner,data,export';
    return res.status(200).send(csv);
  } catch (e: any) {
    return res.status(500).json({
      error: e?.message
    });
  }
}