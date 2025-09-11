} from "../../../../utils/auth";
export default async function handler(

==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";
import {

  parseUserFromRequest,
  ensureInvolvedOrAdmin,;

} from "../../../../utils/auth";
export default async function handler(

  req: NextApiRequest,
  res: NextApiResponse,
) {;

  const { id } = req.query;

  if (typeof id !== "string")
    return res && res.status(400).json({ error: "Invalid id" });

  const user = parseUserFromRequest(req);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (req.method === 'POST') {
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status(404).json({ error: 'Not found' });
    try {

      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId)
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    } catch (e: any) {
      return res && res.status(e && e.statusCode || 403).json({ error: "Forbidden" });
    }
    const { body } = req && req.body || {};
    if (!body || typeof body !== "string")
      return res && res.status(400).json({ error: "Message body required" });
import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";
import {
  parseUserFromRequest
  ensureInvolvedOrAdmin
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin,;} from "../../../../utils/auth";
export default async function handler(

  res && res.setHeader("Allow", "POST");
  return res && res.status(405).end("Method Not Allowed");

}


    dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res.status(201).json({ dispute });
  }

res.setHeader("Allow", "POST");
  return res.status(405).end("Method Not Allowed");
}

<<<<<<< HEAD
<<<<<<< HEAD
  res.setHeader("Allow", "POST");
  return res.status(405).end("Method Not Allowed");
}
=======
==============
=======import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Allow', ['POST']);
import type { NextApiRequest, NextApiResponse } from 'next';
import { getDisputeById, upsertDispute } from '../../../../utils/fsdb';
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../../utils/auth';
export default async function handler(req, res) {
  try {
  const { id } = req.query;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
    } catch (error) {
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    const { body } = req.body || {};
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      authorUserId: user.id,;
      authorRole: (user.role === 'admin' ? 'admin' : (user.id === dispute.clientUserId ? 'client' : 'talent')),;
      body,;
      createdAt: now}),;
    dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res.status(201).json({ dispute });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  res.setHeader('Allow', 'POST');
  return res.status(405).end('Method Not Allowed');
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662