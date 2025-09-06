import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  res.status(200).json({,
    ok: true, m,
    essage: 'OAuth mock callback successful. Use /api/integrations/connect to finalize connection.' })
}