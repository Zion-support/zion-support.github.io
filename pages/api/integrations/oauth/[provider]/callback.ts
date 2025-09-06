import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    ok: true,
<<<<<<< HEAD
    message:
      'OAuth mock callback successful. Use /api/integrations/connect to finalize connection.',
  });
=======
    message: 'OAuth mock callback successful. Use /api/integrations/connect to finalize connection.'
  });
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
