import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth',;
import { createFlag, readAllFlags } from '../../../../../utils/moderationDb'
;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req)
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }

  if (req.method === 'GET') {
    const { status, reason, userEmail, contentType } = req.query as Record<string, string | undefined>
    const flags = await readAllFlags()
    const filtered = flags.filter(f =>

      (!status || f.status === status) &&
      (!reason || f.reason.toLowerCase().includes(reason.toLowerCase())) &&
      (!userEmail || f.userEmail.toLowerCase().includes(userEmail.toLowerCase())) &&
      (!contentType || f.contentType === contentType)
    )
    return res.status(200).json({ flags: filtered })
  }

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

  }
  if (req.method === 'POST') {

    const init = req.body || {};
    try {
      const flag = await createFlag(init);
      return res.status(201).json({ flag });
    } catch (e: any) {
    }

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
  res.setHeader('Allow', 'GET,POST');
  return res.status(405).end('Method Not Allowed');




  res.setHeader('AllowGET,POST')
  return res.status(405).end('Method Not Allowed')
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req);
  try {
    ensureAdmin(user);
  } catch (error: any) {
    return res.status(error.statusCode || 403).json({ error: 'Forbidden' });
  }

  if (req.method === 'GET') {
    const flags = await readAllFlags();
    return res.status(200).json({ flags });
  }
  if (req.method === 'POST') {
    const flag = await createFlag(req.body);
    return res.status(201).json({ flag });
  }

  return res.status(405).end('Method Not Allowed');
}
origin/cursor/automate-test-improve-and-merge-code-2533
