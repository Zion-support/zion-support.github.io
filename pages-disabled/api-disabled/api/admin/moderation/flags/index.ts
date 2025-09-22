:pages/api/admin/moderation/flags/index.ts
<<<<<<< HEAD
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  }
  if (req.method === 'POST') {

    const init = req.body || {};
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  res.setHeader('Allow', 'GET,POST');
  return res.status(405).end('Method Not Allowed');

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/admin/moderation/flags/index.ts

  res.setHeader('AllowGET,POST');
  return res.status(405).end('Method Not Allowed')
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
