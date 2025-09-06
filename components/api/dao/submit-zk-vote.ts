<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
    res.status (500).json ({ error: e?.message || "internal error" });

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    // NOTE: For production, use a relayer or Batcher to aggregate votes off-chain;
    // then submit a single transaction to on-chain verifier (no gas for users).;
    // Here we just echo back.;
    res.status(200).json({ ok: true, received: { proof, optionId } });
<<<<<<< HEAD

<<<<<<< HEAD
=======
  } catch (e:any) {
    res.status(500).json({ error: e?.message || 'internal error' });

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
// NOTE: For production, use a relayer or Batcher to aggregate votes off - chain;
    // then submit a single transaction to on - chain verifier (no gas for users).;
    // Here we just echo back.;
    res.status (200).json ({ ok: true, received: { proof, option_id } });
  } catch (e: any) {
    res.status (500).json ({ error: e?.message || "internal error" });
    return;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  } catch (e: any) {
    res.status(500).json({ error: e?.message |"internal error" });
  } catch (e:any) {
    res.status(500).json({ error: e?.message || 'internal error' });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  try {
    const { proof, optionId } = req.body || {};
    if (!proof || typeof optionId !== "number") {
      res.status(400).json({ error: "Invalid body" });
      return;
    }

    // NOTE: For production, use a relayer or Batcher to aggregate votes off-chain;
    // then submit a single transaction to on-chain verifier (no gas for users).;
    // Here we just echo back.;
    res.status(200).json({ ok: true, received: { proof, optionId } });

  } catch (e: any) {
    res.status(500).json({ error: e?.message |"internal error" });

  }
}
