import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth';
import { createFlag, readAllFlags } from '../../../../../utils/moderationDb'
;
export default async function handler($2) {
  const user = parseUserFromRequest(req);
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }
:pages/api/admin/moderation/flags/index.ts


  if (req.method === 'GET') {
    const { status, reason, userEmail, contentType } = req.query as Record<string, string | undefined>,
    const flags = await readAllFlags(),

;
  if (req.method === 'GET') {;
    const { status, reason, userEmail, contentType } = req.query as Record<string, string | undefined>;
    const flags = await readAllFlags();
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/admin/moderation/flags/index.ts
    const filtered = flags.filter(f =>

      (!status || f.status === status) &&
      (!reason || f.reason.toLowerCase().includes(reason.toLowerCase())) &&
      (!userEmail || f.userEmail.toLowerCase().includes(userEmail.toLowerCase())) &&
      (!contentType || f.contentType === contentType)
:pages/api/admin/moderation/flags/index.ts

    ),
    );
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/admin/moderation/flags/index.ts
    return res.status(200).json({ flags: filtered })
  }



:pages/api/admin/moderation/flags/index.ts
  res.setHeader('AllowGET,POST');
  return res.status(405).end('Method Not Allowed')
};
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/admin/moderation/flags/index.ts
