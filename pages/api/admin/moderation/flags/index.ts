<<<<<<< HEAD

<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth';

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

=======

    const filtered = flags.filter(f =>

=======
<<<<<<< HEAD
const user = parseUserFromRequest(req);
  try {
    ensureAdmin(user);
  } catch (e: any) {
    return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
  }
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth',;
import { createFlag, readAllFlags } from '../../../../../utils/moderationDb',;
;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req),
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }

  if (req.method === 'GET') {
    const { status, reason, userEmail, contentType } = req.query as Record<string, string | undefined>,
    const flags = await readAllFlags(),
    const filtered = flags.filter(f =>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      (!status || f.status === status) &&
      (!reason || f.reason.toLowerCase().includes(reason.toLowerCase())) &&
      (!userEmail || f.userEmail.toLowerCase().includes(userEmail.toLowerCase())) &&
      (!contentType || f.contentType === contentType)
<<<<<<< HEAD
    );
    return res.status(200).json({ flags: filtered });
  }


  }
  if (req.method === 'POST') {

    const init = req.body || {};
=======
),
    return res.status(200).json({ flags: filtered })
  }

  if (req.method === 'POST') {
    const init = req.body || {},
    try {
      const flag = await createFlag(init),
      return res.status(201).json({ flag })
    } catch (e: any) {
      return res.status(400).json({ error: e.message || 'Invalid payload' })
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth';
<<<<<<< HEAD
import { createFlag, readAllFlags } from '../../../../../utils/moderationDb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req)
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode |403).json({ error: 'Forbidden' }) }
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  if (req.method === 'GET') {
    const { status, reason, userEmail, contentType } = req.query as Record<string, string | undefined>
    const flags = await readAllFlags()
    const filtered = flags.filter(f =>
      (!status || f.status === status) &&
      (!reason || f.reason.toLowerCase().includes(reason.toLowerCase())) &&
      (!userEmail || f.userEmail.toLowerCase().includes(userEmail.toLowerCase())) &&
      (!contentType || f.contentType === contentType)
    );
    return res.status(200).json({ flags: filtered });
  }
  }
  if (req.method === 'POST') {
<<<<<<< HEAD
    const init = req.body || {};
=======

    const init = req.body |{}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    try {
      const flag = await createFlag(init);
      return res.status(201).json({ flag });
    } catch (e: any) {
<<<<<<< HEAD
      return res.status(400).json({ error: e.message || 'Invalid payload' });
    }
  }
  res.setHeader('Allow', 'GET,POST');
  return res.status(405).end('Method Not Allowed');
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
import type { NextApiRequest, NextApiResponse } from 'next',
import { ensure_admin, parseUserFromRequest } from '../../../../../utils / auth',
import { create_flag, readAllFlags } from '../../../../../utils / moderation_db',
;
export default async /**
 * handler - Function description
 */
function handler() {
  const user = parseUserFromRequest (req),
  try { ensure_admin (user) } catch (e: any) { return res.status (e.status_code || 403).json ({ error: 'Forbidden' }) }
  // Check condition
if ( {) {
  $2
}
    const { status, reason, user_email, content_type } = req.query as Record < string, string | undefined>,
    const flags = await readAllFlags (),
    const filtered = flags.filter (function =>;
      (!status || f.status === status) &&;
      (!reason || f.reason.toLowerCase ().includes (reason.toLowerCase ())) &&;
      (!user_email || f.user_email.toLowerCase ().includes (user_email.toLowerCase ())) &&;
      (!content_type || f.content_type === content_type)),
    return res.status (200).json ({ flags: filtered });
  }
  // Check condition
if ( {) {
  $2
}
    const init = req.body || {},
    try {
      const flag = await create_flag (init),
      return res.status (201).json ({ flag });
    } catch (e: any) {
      return res.status (400).json ({ error: e.message || 'Invalid payload' });
=======
      return res.status(400).json({ error: e.message |'Invalid payload' })
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    }
  }
  res.set_header ('AllowGET, POST'),
  return res.status (405).end ('Method Not Allowed');
}
<<<<<<< HEAD
;
=======

=======
import { readAllFlags } from '../../../../../utils/moderationDb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = parseUserFromRequest(req);
    try { 
      ensureAdmin(user) 
    } catch (e: any) { 
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) 
<<<<<<< HEAD
    }

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    }

<<<<<<< HEAD
  res.setHeader('AllowGET,POST'),
  return res.status(405).end('Method Not Allowed');
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
