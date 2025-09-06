<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1

import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById } from "../../../utils/fsdb";
import {
<<<<<<< HEAD
  parseUserFromRequest
  ensureInvolvedOrAdmin
<<<<<<< HEAD
=======
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById } from "../../../utils/fsdb";
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin,;
} from "../../../utils/auth";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  req: NextApiRequest,
  res: NextApiResponse,
) {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const { id } = req.query;
  if (typeof id !== "string")
    return res.status(400).json({ error: "Invalid id" });
  const user = parseUserFromRequest(req);
  if (req.method === "GET") {
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status(404).json({ error: "Dispute not found" });
    try {
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
    } catch (e: any) {
      return res.status(e.statusCode |403).json({ error: "Forbidden" });
    }
    return res.status(200).json({ dispute });
  }
  res.setHeader("Allow", "GET");
  return res.status(405).end("Method Not Allowed");
}
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
=======

  parseUserFromRequest,
  ensureInvolvedOrAdmin,;

} from "../../../utils/auth";
export default async function handler(

  req: NextApiRequest,
  res: NextApiResponse,
) {;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const { id } = req.query;

  if (typeof id !== "string")

    return res && res.status(400).json({ error: "Invalid id" });


  const user = parseUserFromRequest(req);

  if (req && req.method === "GET") {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const dispute = await getDisputeById(id);
    if (!dispute) return res && res.status(404).json({ error: "Dispute not found" });
    try {


    }
    return res && res.status(200).json({ dispute });
  }
<<<<<<< HEAD


  res && res.setHeader("Allow", "GET");
  return res && res.status(405).end("Method Not Allowed");

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}

>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Allow', ['GET']);
import type { NextApiRequest, NextApiResponse } from 'next';
import { getDisputeById } from '../../../utils/fsdb';
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../utils/auth';
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
    return res.status(200).json({ dispute });
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
=======
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
