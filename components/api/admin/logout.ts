import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  clearSessionCookie(res);
  res.status(200).json({ ok: true });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  clearSessionCookie(res);
  res.status(200).json({ ok: true })


=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  clearSessionCookie(res);


=======
import { clearSessionCookie } from '../../../utils / admin_auth';
export default /**
 * handler - Function description
 */
function handler() {
  clearSessionCookie (res);
  res.status (200).json ({ ok: true });export default /**
 * handler - Function description
 */
function handler() {
  clearSessionCookie (res);
  res.status (200).json ({ ok: true });

}
}

}
