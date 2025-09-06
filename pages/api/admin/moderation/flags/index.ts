<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth',;
import { createFlag, readAllFlags } from '../../../../../utils/moderationDb',;
;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req),
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


    const filtered = flags.filter(f =>

      (!status || f.status === status) &&
      (!reason || f.reason.toLowerCase().includes(reason.toLowerCase())) &&
      (!userEmail || f.userEmail.toLowerCase().includes(userEmail.toLowerCase())) &&
      (!contentType || f.contentType === contentType)
    );
    return res.status(200).json({ flags: filtered });
  }

<<<<<<< HEAD
  if (req.method === 'POST') {
    const init = req.body || {},
    try {
      const flag = await createFlag(init),
      return res.status(201).json({ flag })
    } catch (e: any) {
      return res.status(400).json({ error: e.message || 'Invalid payload' })
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth';
import { createFlag, readAllFlags } from '../../../../../utils/moderationDb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req)
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode |403).json({ error: 'Forbidden' }) }
  if (req.method === 'GET') {
    const { status, reason, userEmail, contentType } = req.query as Record<string, string | undefined>
    const flags = await readAllFlags()
    const filtered = flags.filter(f =>
      (!status |f.status === status) &&
      (!reason |f.reason.toLowerCase().includes(reason.toLowerCase())) &&
      (!userEmail |f.userEmail.toLowerCase().includes(userEmail.toLowerCase())) &&
      (!contentType |f.contentType === contentType)
)
    return res.status(200).json({ flags: filtered })
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

  }
  if (req.method === 'POST') {

    const init = req.body || {};
    try {
      const flag = await createFlag(init);
      return res.status(201).json({ flag });
    } catch (e: any) {
      return res.status(400).json({ error: e.message || 'Invalid payload' });
    }
  }

<<<<<<< HEAD
<<<<<<< HEAD
import { readAllFlags } from '../../../../../utils/moderationDb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = parseUserFromRequest(req);
    try { 
      ensureAdmin(user) 
    } catch (e: any) { 
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) 
    }

    }

  res.setHeader('AllowGET,POST'),
  return res.status(405).end('Method Not Allowed');
};
    if (req.method === 'GET') {
      const { status, reason, userEmail, contentType } = req.query as Record<string, string | undefined>;
      const flags = await readAllFlags();
      const filtered = flags.filter(f =>
        (!status || f.status === status) &&
        (!reason || f.reason?.includes(reason)) &&
        (!userEmail || f.userEmail?.includes(userEmail)) &&
        (!contentType || f.contentType === contentType)
      );
      res.json({ flags: filtered });
    } else {
      res.setHeader('Allow', 'GET');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
=======
>>>>>>> 7c8bc30d7f67e73b4eaa80d227738ae796deedb9
  res.setHeader('Allow', 'GET,POST');
  return res.status(405).end('Method Not Allowed');

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
