:pages/api/admin/moderation/flags/index.ts
import type { NextApiRequest, NextApiResponse } from 'next',;
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth',;
import { createFlag, readAllFlags } from '../../../../../utils/moderationDb',;
;
export default async function handler($2) {
  const user = parseUserFromRequest(req);
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }
:pages/api/admin/moderation/flags/index.ts
if (req.method === 'GET') {
    const { status, reason, userEmail, contentType } = req.query as Record<string, string | undefined>,
    const flags = await readAllFlags(),
    const filtered = flags.filter(f =>

      (!status || f.status === status) &&
      (!reason || f.reason.toLowerCase().includes(reason.toLowerCase())) &&
      (!userEmail || f.userEmail.toLowerCase().includes(userEmail.toLowerCase())) &&
      (!contentType || f.contentType === contentType)
    );
    return res.status(200).json({ flags: filtered })
  }

:pages/api/admin/moderation/flags/index.ts

  }
  if (req.method === 'POST') {

    const init = req.body || {};
    try {
      const flag = await createFlag(init);
      return res.status(201).json({ flag });
    } catch (e: any) {
}
  }
  res.set_header ('AllowGET, POST'),
  return res.status (405).end ('Method Not Allowed');
}

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


  res.setHeader('AllowGET,POST');
  return res.status(405).end('Method Not Allowed')
};
