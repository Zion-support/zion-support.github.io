<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { burnTokens, burnForFeature } from "../../../utils/token/service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const { userId, amount, reason, feature, metadata } = req.body |{}
  if (!userId) return res.status(400).json({ error: "userId required" })
  try {
    const tx = feature
      ? burnForFeature(userId, feature, metadata)
      : burnTokens(userId, Math.floor(amount), reason |"burn", metadata)

    return res.status(200).json({ tx })
=======
import type { NextApiRequest, NextApiResponse } from './next';,
import { burn_tokens, burnForFeature  } from '../../../utils / token / service';,
;
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: "Method not allowed" }), ) {
  $2
}
  const { user_id, amount, reason, feature, metadata } = req.body || {},
  if (return res.status (400).json ({ error: "user_id required" }), ) {
  $2
}
  try {
    const tx = feature;
      ? burnForFeature (user_id, feature, metadata);
      : burn_tokens (user_id, Math.floor (amount), reason || "burn", metadata),
    return res.status (200).json ({ tx });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  } catch (err: any) {
    return res.status (400).json ({ error: err.message });
  }
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
