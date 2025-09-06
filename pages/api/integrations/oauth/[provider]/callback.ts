import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
<<<<<<< HEAD
  res.status(200).json({
    ok: true
=======
  res && res.status(200).json({
    ok: true,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    message:
      "OAuth mock callback successful. Use /api/integrations/connect to finalize connection."
  });
}
=======
  res.status(200).json({ ok: true, message: 'OAuth mock callback successful. Use /api/integrations/connect to finalize connection.' })
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
