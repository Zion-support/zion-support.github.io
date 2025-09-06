<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById } from "../../../utils/fsdb";
import {
<<<<<<< HEAD

=======
  parseUserFromRequest
  ensureInvolvedOrAdmin
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { getDisputeById } from "../../../utils/fsdb";
import {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  parseUserFromRequest,
  ensureInvolvedOrAdmin,;

} from "../../../utils/auth";
export default async function handler(

  req: NextApiRequest,
  res: NextApiResponse,
) {;
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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



=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  res.setHeader("Allow", "GET");
  return res.status(405).end("Method Not Allowed");
}
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
import type { NextApiRequest, NextApiResponse } from './next';
import { getDisputeById  } from '../../../utils / fsdb';
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin,
} from '../../../utils / auth';
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




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
