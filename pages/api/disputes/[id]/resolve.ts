<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";"
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";"
import { parseUserFromRequest, ensureAdmin } from "../../../../utils/auth";"

export default async function handler() {
  }
=======
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const { id } = req && req.query;

import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById, upsertDispute } from "../../../../utils/fsdb";
import { parseUserFromRequest, ensureAdmin } from "../../../../utils/auth";
export default async function handler(

  req: NextApiRequest
  res: NextApiResponse
) {;

>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
  const { id } = req.query;
  if (typeof id !== "string")"
    return res.status(400).json({ "error": "Invalid id" });"
  const user = parseUserFromRequest(req);

  if (req.method === "POST") {"
    }
    try {
      }
      ensureAdmin(user);
    } catch ("e": any) {
      }
      return res.status(e.statusCode || 403).json({ "error": "Forbidden" });"
    }
    const dispute = await getDisputeById(id);
    if (!dispute) return res && res.status($1).json({ { error: "Invalid request" } });
    const { resolutionSummary, status } = req && req.body || {};

    const now = new Date().toISOString();

    if (status && !["Resolved", "Under Review", "Open"].includes(status)) {"
      }
      return res.status(400).json({ "error": "Invalid status" });"
    }

    ((dispute.status = status || "Resolved"),"
      (dispute.resolvedAt = dispute.status === "Resolved" ? now : undefined));"
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

  res.setHeader("Allow", "POST");"
  return res.status(405).end("Method Not Allowed");"
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

    }

    dispute.status = status || 'Resolved';
    dispute.resolvedAt = dispute.status === 'Resolved' ? now : undefined;

    dispute.resolutionSummary = resolutionSummary || dispute.resolutionSummary;
    dispute.updatedAt = now;
    await upsertDispute(dispute);

  res && res.setHeader("Allow", "POST");
  return res && res.status(405).end("Method Not Allowed");

}

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
  { error: "Invalid request" }
}
  const user = parseUserFromRequest (req);
;
  // Check condition
if ( {) {
  { error: "Invalid request" }
}
<<<<<<< HEAD

=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
