import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  clearSessionCookie(res);




  res.status(200).json({ ok: true })




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  clearSessionCookie(res);







>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



=======
import { clearSessionCookie } from '../../../utils/adminAuth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  clearSessionCookie(res);
  res.status(200).json({ ok: true });
}
>>>>>>> origin/auto/autonomy-17186719616
