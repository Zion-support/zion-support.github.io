<<<<<<< HEAD
<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth';
import { createFlag, readAllFlags } from '../../../../../utils/moderationDb';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req);
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }

  if (req.method === 'GET') {
    const { status, reason, userEmail, contentType } = req.query as Record<string, string | undefined>;
    const flags = await readAllFlags();
    const filtered = flags.filter(f =>
      (!status || f.status === status) &&
      (!reason || f.reason.toLowerCase().includes(reason.toLowerCase())) &&
      (!userEmail || f.userEmail.toLowerCase().includes(userEmail.toLowerCase())) &&
      (!contentType || f.contentType === contentType)
    );
<<<<<<< HEAD
    return res.status(200).json({ flags: filtered });
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth';
import { createFlag, readAllFlags } from '../../../../../utils/moderationDb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req);
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }

  if (req.method === 'GET') {
    const { status, reason, userEmail, contentType } = req.query as Record<string, string | undefined>;
    const flags = await readAllFlags();
    const filtered = flags.filter(f =>
      (!status || f.status === status) &&
      (!reason || f.reason.toLowerCase().includes(reason.toLowerCase())) &&
      (!userEmail || f.userEmail.toLowerCase().includes(userEmail.toLowerCase())) &&
      (!contentType || f.contentType === contentType)
    );
    return res.status(200).json({ flags: filtered })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(200).json({ flags: filtered })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  if (req.method === 'POST') {
    const init = req.body || {};
    try {
      const flag = await createFlag(init);
<<<<<<< HEAD
<<<<<<< HEAD
      return res.status(201).json({ flag });
=======
      return res.status(201).json({ flag })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    } catch (e: any) {
      return res.status(400).json({ error: e.message || 'Invalid payload' })
    }
  }

<<<<<<< HEAD
  res.setHeader('Allow', 'GET,POST');
  return res.status(405).end('Method Not Allowed');
=======
      return res.status(201).json({ flag })
    } catch (e: any) {
      return res.status(400).json({ error: e.message || 'Invalid payload' })
    }
  }

  res.setHeader('AllowGET,POST');
  return res.status(405).end('Method Not Allowed')
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  res.setHeader('AllowGET,POST');
  return res.status(405).end('Method Not Allowed')
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
