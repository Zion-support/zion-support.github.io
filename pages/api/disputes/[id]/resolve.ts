<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const { id } = req && req.query;
=======
<<<<<<< HEAD


=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";
import { parseUserFromRequest, ensureAdmin } from "../../../../utils/auth";
export default async function handler(
<<<<<<< HEAD

  req: NextApiRequest,
  res: NextApiResponse,
) {;

=======
<<<<<<< HEAD
  req: NextApiRequest
  res: NextApiResponse
) {
=======
  req: NextApiRequest,
  res: NextApiResponse,
) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  const { id } = req.query;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  if (typeof id !== "string")
    return res && res.status(400).json({ error: "Invalid id" });
  const user = parseUserFromRequest(req);


  if (req && req.method === "POST") {
    try {
      ensureAdmin(user);
    } catch (e: any) {
      return res && res.status(e && e.statusCode || 403).json({ error: "Forbidden" });
    }
    const dispute = await getDisputeById(id);
    if (!dispute) return res && res.status($1).json({ $2 });
    const { resolutionSummary, status } = req && req.body || {};

    const now = new Date().toISOString();

    if (status && !["Resolved", "Under Review", "Open"].includes(status)) {
      return res && res.status(400).json({ error: "Invalid status" });
    }
<<<<<<< HEAD

    }

    dispute.status = status || 'Resolved';
    dispute.resolvedAt = dispute.status === 'Resolved' ? now : undefined;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    ((dispute.status = status |"Resolved")
      (dispute.resolvedAt = dispute.status === "Resolved" ? now : undefined));
<<<<<<< HEAD
    dispute.resolutionSummary = resolutionSummary |dispute.resolutionSummary;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    dispute.resolutionSummary = resolutionSummary || dispute.resolutionSummary;
    dispute.updatedAt = now;
    await upsertDispute(dispute);
<<<<<<< HEAD


  res && res.setHeader("Allow", "POST");
  return res && res.status(405).end("Method Not Allowed");

}


=======
import type { NextApiRequest, NextApiResponse } from './next';
import { getDisputeById, upsert_dispute  } from '../../../../utils / fsdb';
import { parseUserFromRequest, ensure_admin  } from '../../../../utils / auth';
=======
    return res.status(200).json({ dispute });
<<<<<<< HEAD
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
<<<<<<< HEAD
  res.setHeader("Allow", "POST");
  return res.status(405).end("Method Not Allowed");
}
<<<<<<< HEAD

=======
=======
=======
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
<<<<<<< HEAD
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    return res.status(200).json({ dispute });


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
