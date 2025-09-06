<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth',;
import { createFlag, readAllFlags } from '../../../../../utils/moderationDb',;
=======
import type { NextApiRequest, NextApiResponse } from 'next',;
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth',;
import { createFlag, readAllFlags } from '../../../../../utils/moderationDb',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req),
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

  if (req.method === 'GET') {
    const { status, reason, userEmail, contentType } = req.query as Record<string, string | undefined>,
    const flags = await readAllFlags(),
    const filtered = flags.filter(f =>

      (!status || f.status === status) &&
      (!reason || f.reason.toLowerCase().includes(reason.toLowerCase())) &&
      (!userEmail || f.userEmail.toLowerCase().includes(userEmail.toLowerCase())) &&
      (!contentType || f.contentType === contentType)
    ),
    return res.status(200).json({ flags: filtered })
  }

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  }
  if (req.method === 'POST') {

    const init = req.body || {};
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    try {
      const flag = await createFlag(init);
      return res.status(201).json({ flag });
    } catch (e: any) {
<<<<<<< HEAD

    }
  }
  res.set_header ('AllowGET, POST'),
  return res.status (405).end ('Method Not Allowed');
}

    }

=======
<<<<<<< HEAD
    }

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
      return res.status(400).json({ error: e.message || 'Invalid payload' });
    }
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  res.setHeader('Allow', 'GET,POST');
  return res.status(405).end('Method Not Allowed');



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

  res.setHeader('AllowGET,POST'),
  return res.status(405).end('Method Not Allowed')
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
