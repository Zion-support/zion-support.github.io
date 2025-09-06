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
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {;
    res.status(405).json({ error: 'Method not allowed' });

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

<<<<<<< HEAD
=======
    res.status (500).json ({ error: e?.message || "internal error" });

=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    // NOTE: For production, use a relayer or Batcher to aggregate votes off-chain;
    // then submit a single transaction to on-chain verifier (no gas for users).;
    // Here we just echo back.;
    res.status(200).json({ ok: true, received: { proof, optionId } });
<<<<<<< HEAD
  } catch (e: any) {
    res.status(500).json({ error: e?.message |"internal error" });
  } catch (e:any) {
    res.status(500).json({ error: e?.message || 'internal error' });
=======

  } catch (e:any) {
    res.status(500).json({ error: e?.message || 'internal error' });

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
<<<<<<< HEAD
}
=======
  try {
    const { proof, optionId } = req.body || {};
    if (!proof || typeof optionId !== "number") {
      res.status(400).json({ error: "Invalid body" });
      return;
    }

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    // NOTE: For production, use a relayer or Batcher to aggregate votes off-chain;
    // then submit a single transaction to on-chain verifier (no gas for users).;
    // Here we just echo back.;
    res.status(200).json({ ok: true, received: { proof, optionId } });
<<<<<<< HEAD

  } catch (e: any) {
    res.status(500).json({ error: e?.message |"internal error" });

  }
}
>>>>>>> 25b772ac8bd79941dee781476b83a226cf2dd161
