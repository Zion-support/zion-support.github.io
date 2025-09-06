<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import type { NextApiRequest, NextApiResponse } from "next";
import { handleAction } from "../../../utils/token/service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const { userId, action, metadata } = req.body |{}
  if (!userId |!action) return res.status(400).json({ error: "userId and action required" })
  try {
    const tx = handleAction(userId, action, metadata)

    return res.status(200).json({ tx })
=======
import type { NextApiRequest, NextApiResponse } from './next';,
import { handle_action  } from '../../../utils / token / service';,
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: "Method not allowed" }), ) {
  $2
}
<<<<<<< HEAD
=======
  const { user_id, action, metadata } = req.body || {},
  if (return res.status (400).json ({ error: "user_id and action required" }), ) {
  $2
}
  try {
    const tx = handle_action (user_id, action, metadata),
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
