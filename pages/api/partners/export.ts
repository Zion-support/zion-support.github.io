import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const csv = 'partner,data,exported\n';
    return res.status(200).send(csv);
  } catch (e: any) {
    return res.status(500).json({
      error: e?.message || 'Export failed'
    });
  }
}