
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth';
import { createFlag, readAllFlags } from '../../../../../utils/moderationDb';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req);
  try {
    ensureAdmin(user);
  } catch (error: any) {
    return res.status(error.statusCode || 403).json({ error: 'Forbidden' });
  }

  if (req.method === 'GET') {

import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth';
import { createFlag, readAllFlags } from '../../../../../utils/moderationDb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req);
  try { ensureAdmin(user); } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }); }

  if (req.method === 'GET') {
    const { status, reason, userEmail, contentType } = req.query as Record<string, string | undefined>;
    const flags = await readAllFlags();

    const filtered = flags.filter(f =>
      (!status || f.status === status) &&
      (!reason || f.reason.toLowerCase().includes(reason.toLowerCase())) &&
      (!userEmail || f.userEmail.toLowerCase().includes(userEmail.toLowerCase())) &&
      (!contentType || f.contentType === contentType)

    const flags = await readAllFlags();
    return res.status(200).json({ flags });

  }

  if (req.method === 'POST') {
    const flag = await createFlag(req.body);
    return res.status(201).json({ flag });
  }


    );
    return res.status(200).json({ flags: filtered });
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

  res.setHeader('Allow', 'GET,POST');
  return res.status(405).end('Method Not Allowed');
}

=======
  return res.status(405).end('Method Not Allowed');
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-e9d8
