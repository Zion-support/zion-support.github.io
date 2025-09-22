<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
import type { NextApiRequest, NextApiResponse } from './next';,
import { revoke_tokens  } from '../../../../utils / token / service';,
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: "Method not allowed" }), ) {
  $2
}
  const { user_id, amount, reason } = req.body || {},
  if (return res.status (400).json ({ error: "user_id and amount required" }), ) {
  $2
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import type { NextApiRequest, NextApiResponse } from "next",;
import { revokeTokens } from "../../../../utils/token/service",;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
import type { NextApiRequest, NextApiResponse } from "next",;
import { revokeTokens } from "../../../../utils/token/service",;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/admin/tokens/revoke.ts
=======
import type { NextApiRequest, NextApiResponse } from "next",;
import { revokeTokens } from "../../../../utils/token/service",;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const { userId, amount, reason } = req.body || {},
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" }),
  try {
    const tx = revokeTokens(userId, Math.floor(amount), reason || "admin_revoke"),
    return res.status(200).json({ tx })
<<<<<<< HEAD
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { userId, amount, reason } = req.body || {};
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" });

  try {
    const tx = await revokeTokens(userId, amount, reason);
    return res.status(200).json({ tx });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
};
};
import type { NextApiRequest, NextApiResponse } from "next";
import { revokeTokens } from "../../../../utils/token/service";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  try {
    const tx = revokeTokens(userId, Math.floor(amount), reason |"admin_revoke")
    return res.status(200).json({ tx })

  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  }
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
