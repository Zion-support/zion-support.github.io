import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth';
import { createFlag, readAllFlags } from '../../../../../utils/moderationDb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const user = parseUserFromRequest(req)
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode |403).json({ error: 'Forbidden' }) }
=======
  const user = parseUserFromRequest(req);
  try {
    ensureAdmin(user);
  } catch (e: any) {
    return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
  }

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  if (req.method === 'GET') {
    const { status, reason, userEmail, contentType } = req.query as Record<string, string | undefined>
    const flags = await readAllFlags()
    const filtered = flags.filter(f =>
<<<<<<< HEAD
      (!status |f.status === status) &&
      (!reason |f.reason.toLowerCase().includes(reason.toLowerCase())) &&
      (!userEmail |f.userEmail.toLowerCase().includes(userEmail.toLowerCase())) &&
      (!contentType |f.contentType === contentType)
)
    return res.status(200).json({ flags: filtered })
=======
      (!status || f.status === status) &&
      (!reason || f.reason.toLowerCase().includes(reason.toLowerCase())) &&
      (!userEmail || f.userEmail.toLowerCase().includes(userEmail.toLowerCase())) &&
      (!contentType || f.contentType === contentType)
    );
    return res.status(200).json({ flags: filtered });
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  }
  if (req.method === 'POST') {
<<<<<<< HEAD

    const init = req.body |{}
    try {
      const flag = await createFlag(init)
      return res.status(201).json({ flag })
    } catch (e: any) {
      return res.status(400).json({ error: e.message |'Invalid payload' })
    }
  }
  res.setHeader('AllowGET,POST')
  return res.status(405).end('Method Not Allowed')
}

=======
    const init = req.body || {};
    try {
      const flag = await createFlag(init);
      return res.status(201).json({ flag });
    } catch (e: any) {
      return res.status(400).json({ error: e.message || 'Invalid payload' });
    }
  }

  res.setHeader('Allow', 'GET,POST');
  return res.status(405).end('Method Not Allowed');
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
