import type { NextApiRequest, NextApiResponse } from "next";
import { earnTokens } from "../../../utils/token/service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const { userId, amount, reason, metadata } = req.body |{}
  if (!userId |typeof amount !== "number" |!reason) {
    return res.status(400).json({ error: "userId, amount, reason required" })
  }
  try {
    const tx = earnTokens(userId, Math.floor(amount), reason, metadata)

    return res.status(200).json({ tx })
=======
import type { NextApiRequest, NextApiResponse } from './next';,
import { earn_tokens  } from '../../../utils / token / service';,
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: "Method not allowed" }), ) {
  $2
}
  } catch (err: any) {
    return res.status (400).json ({ error: err.message });
  }
=======
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
