<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  try {
    const { proof, optionId } = req.body |{}
    if (!proof |typeof optionId !== "number") {
      res.status(400).json({ error: "Invalid body" });
      return;
    }
    // NOTE: For production, use a relayer or Batcher to aggregate votes off-chain;
    // then submit a single transaction to on-chain verifier (no gas for users).;
=======
import type { NextApiRequest, NextApiResponse } from './next';
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.status (405).json ({ error: "Method not allowed" });
    return;
  }
  try {
    const { proof, option_id } = req.body || {}
    // Check condition
if ( {) {
  $2
}
      res.status (400).json ({ error: "Invalid body" });
      return;
    }
    // NOTE: For production, use a relayer or Batcher to aggregate votes off - chain;
    // then submit a single transaction to on - chain verifier (no gas for users).;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    // Here we just echo back.;
    res.status (200).json ({ ok: true, received: { proof, option_id } });
  } catch (e: any) {
<<<<<<< HEAD
    res.status(500).json({ error: e?.message |"internal error" });
=======
    res.status (500).json ({ error: e?.message || "internal error" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}