<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ ok: true })
}
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ ok: true });
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
