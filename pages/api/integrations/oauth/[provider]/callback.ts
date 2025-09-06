import type { NextApiRequest, NextApiResponse } from 'next',

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ ok: true, message: 'OAuth mock callback successful. Use /api/integrations/connect to finalize connection.' })
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
}