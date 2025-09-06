import { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
import { getUserFromRequest } from '../../utils/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = null;
=======
import { getUserFromRequest } from '../../../utils/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = getUserFromRequest(req)
  if (!user) return res.status(200).json({ user: null })
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  res.status(200).json({ user })
}
=======
import { getUserFromRequest } from '../../../utils/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = getUserFromRequest(req);
  if (!user) return res.status(200).json({ user: null });
  res.status(200).json({ user });
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
