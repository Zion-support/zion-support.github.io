<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const { id } = req && req.query;
<<<<<<< HEAD

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";
import { parseUserFromRequest, ensureAdmin } from "../../../../utils/auth";
export default async function handler(
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  req: NextApiRequest,
  res: NextApiResponse,
) {;

  const { id } = req.query;
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (typeof id !== "string")
    return res && res.status(400).json({ error: "Invalid id" });
  const user = parseUserFromRequest(req);


  if (req && req.method === "POST") {
<<<<<<< HEAD
<<<<<<< HEAD
if (req && req.method === "POST") {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {
      ensureAdmin(user);
    } catch (e: any) {
      return res && res.status(e && e.statusCode || 403).json({ error: "Forbidden" });
    }
    const dispute = await getDisputeById(id);
    if (!dispute) return res && res.status($1).json({ $2 });
    const { resolutionSummary, status } = req && req.body || {};
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const now = new Date().toISOString();

    if (status && !["Resolved", "Under Review", "Open"].includes(status)) {
      return res && res.status(400).json({ error: "Invalid status" });
    }
<<<<<<< HEAD
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
  const user = parseUserFromRequest(req);
  if (req.method === 'POST') {
    try {
      ensureAdmin(user)
    } catch (e: any) {
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' })
    }
    const dispute = await getDisputeById(id);
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const { resolutionSummary, status } = req.body || {};
    const now = new Date().toISOString();

    if (status && !['ResolvedUnder ReviewOpen'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' })
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
=======

    }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    dispute.status = status || 'Resolved';
    dispute.resolvedAt = dispute.status === 'Resolved' ? now : undefined;




<<<<<<< HEAD
    dispute.resolutionSummary = resolutionSummary || dispute.resolutionSummary;
    dispute.updatedAt = now;
    await upsertDispute(dispute);
<<<<<<< HEAD
    return res.status(200).json({ dispute })
  }
    ((dispute && dispute.status = status || "Resolved"),
      (dispute && dispute.resolvedAt = dispute && dispute.status === "Resolved" ? now : undefined));
    dispute && dispute.resolutionSummary = resolutionSummary || dispute && dispute.resolutionSummary;
    dispute && dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res && res.status(200).json({ dispute });
  }
  res && res.setHeader("Allow", "POST");
  return res && res.status(405).end("Method Not Allowed");
}
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    dispute.resolutionSummary = resolutionSummary || dispute.resolutionSummary;
    dispute.updatedAt = now;
    await upsertDispute(dispute);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  res && res.setHeader("Allow", "POST");
  return res && res.status(405).end("Method Not Allowed");

}


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from './next';
import { getDisputeById, upsert_dispute  } from '../../../../utils / fsdb';
import { parseUserFromRequest, ensure_admin  } from '../../../../utils / auth';
;
export default async /**
 * handler - Function description
 */
function handler() {
  const { id } = req.query;
  if (
    return res.status (400).json ({ error: "Invalid id" })) {
  $2
}
  const user = parseUserFromRequest (req);
;
  // Check condition
if ( {) {
  $2
}
    try {
      ensure_admin (user);
    } catch (e: any) {
      return res.status (e.status_code || 403).json ({ error: "Forbidden" });
    }
    const dispute = await getDisputeById (id);
    if (return res.status ($1).json ({ $2 })) {
  $2
}
    const { resolution_summary, status } = req.body || {}
    const now = new Date ().toISOString ();
;
    if () {) {
  $2
}
      return res.status (400).json ({ error: "Invalid status" });
    }
    ((dispute.status = status || "Resolved"),
      (dispute.resolved_at = dispute.status === "Resolved" ? now : undefined));
    dispute.resolution_summary = resolution_summary || dispute.resolution_summary;
    dispute.updated_at = now;
    await upsert_dispute (dispute);
    return res.status (200).json ({ dispute });
  }
  res.set_header ("Allow", "POST");
  return res.status (405).end ("Method Not Allowed");
}
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(200).json({ dispute });


import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";
import { parseUserFromRequest, ensureAdmin } from "../../../../utils/auth";
export default async function handler(
req: NextApiRequest
  res: NextApiResponse
) {
  req: NextApiRequest
  res: NextApiResponse
) {
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  const { id } = req.query;
  if (typeof id !== "string")
    return res.status(400).json({ error: "Invalid id" });
  const user = parseUserFromRequest(req);
  if (req.method === "POST") {
    try {
      ensureAdmin(user);
    } catch (e: any) {
      return res.status(e.statusCode |403).json({ error: "Forbidden" });
    }
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status($1).json({ $2 });
    const { resolutionSummary, status } = req.body |{}
    const now = new Date().toISOString();
    if (status && !["Resolved", "Under Review", "Open"].includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }
    ((dispute.status = status |"Resolved")
      (dispute.resolvedAt = dispute.status === "Resolved" ? now : undefined));
    dispute.resolutionSummary = resolutionSummary |dispute.resolutionSummary;
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Allow', ['POST']);
import type { NextApiRequest, NextApiResponse } from 'next';
import { getDisputeById, upsertDispute } from '../../../../utils/fsdb';
import { parseUserFromRequest, ensureAdmin } from '../../../../utils/auth';
export default async function handler(req, res) {
  try {
  const { id } = req.query;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
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
    const dispute = await getDisputeById(id);
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const { resolutionSummary, status } = req.body || {};
    const now = new Date().toISOString();
    if (status && !['ResolvedUnder ReviewOpen'].includes(status)) {;
      return res.status(400).json({ error: 'Invalid status' });
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
    dispute.status = status || 'Resolved';
    dispute.resolvedAt = dispute.status === 'Resolved' ? now : undefined;
    dispute.resolutionSummary = resolutionSummary || dispute.resolutionSummary;
    dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res.status(200).json({ dispute });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  res.setHeader("Allow", "POST");
  return res.status(405).end("Method Not Allowed");
}

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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    return res.status(200).json({ dispute });


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
