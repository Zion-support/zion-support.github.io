import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  res.status(200).json({
    ok: true,
    message:
      'OAuth mock callback successful. Use /api/integrations/connect to finalize connection.',
  });
=======
  res.status(200).json({ ok: true, message: 'OAuth mock callback successful. Use /api/integrations/connect to finalize connection.' })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
