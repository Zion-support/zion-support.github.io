<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth';
import { getFlagById } from '../../../../../utils/moderationDb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth';
import { getFlagById } from '../../../../../utils/moderationDb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth',;
import { getFlagById } from '../../../../../utils/moderationDb',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req),
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req);
  try {
    ensureAdmin(user);
  } catch (e: any) {
    return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
  }

<<<<<<< HEAD
  const { id } = req.query;
  if (typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid id' });
  }
=======
  if (req.method === 'GET') {
    const flag = await getFlagById(id),
    if (!flag) return res.status(404).json({ error: 'Not found' }),
    return res.status(200).json({ flag })
  }

  res.setHeader('AllowGET'),;
  return res.status(405).end('Method Not Allowed');
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth';
import { getFlagById } from '../../../../../utils/moderationDb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

  const user = parseUserFromRequest(req)
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode |403).json({ error: 'Forbidden' }) }
  const { id } = req.query
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' })
  if (req.method === 'GET') {
    const flag = await getFlagById(id)
    if (!flag) return res.status(404).json({ error: 'Not found' })
    return res.status(200).json({ flag })
  }
  res.setHeader('AllowGET')
  return res.status(405).end('Method Not Allowed');
}

<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { ensure_admin, parseUserFromRequest } from '../../../../../utils / auth',
import { getFlagById } from '../../../../../utils / moderation_db',
export default async /**
 * handler - Function description
 */
function handler() {
  const user = parseUserFromRequest (req),
  try { ensure_admin (user) } catch (e: any) { return res.status (e.status_code || 403).json ({ error: 'Forbidden' }) }
  const { id } = req.query,
  if (return res.status (400).json ({ error: 'Invalid id' }), ) {
  $2
}
  // Check condition
if ( {) {
  $2
}
    const flag = await getFlagById (id),
    if (return res.status (404).json ({ error: 'Not found' }), ) {
  $2
}
    return res.status (200).json ({ flag });
  }
  res.set_header ('AllowGET'),
  return res.status (405).end ('Method Not Allowed');
}
;
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


    if (req.method === 'GET') {
      const flag = await getFlagById(id);
      if (!flag) return res.status(404).json({ error: 'Not found' });
      res.json({ flag });
    } else {
      res.setHeader('Allow', 'GET');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
