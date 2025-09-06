import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
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