<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    res.status (500).json ({ error: e?.message || "internal error" });

=======

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    // NOTE: For production, use a relayer or Batcher to aggregate votes off-chain;
    // then submit a single transaction to on-chain verifier (no gas for users).;
    // Here we just echo back.;
    res.status(200).json({ ok: true, received: { proof, optionId } });
<<<<<<< HEAD
<<<<<<< HEAD
  } catch (e:any) {
    res.status(500).json({ error: e?.message || 'internal error' });

// NOTE: For production, use a relayer or Batcher to aggregate votes off - chain;
    // then submit a single transaction to on - chain verifier (no gas for users).;
    // Here we just echo back.;
    res.status (200).json ({ ok: true, received: { proof, option_id } });
  } catch (e: any) {
    res.status (500).json ({ error: e?.message || "internal error" });
    return;
  } catch (e: any) {
    res.status(500).json({ error: e?.message |"internal error" });
  } catch (e:any) {
    res.status(500).json({ error: e?.message || 'internal error' });
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  } catch (e:any) {
    res.status(500).json({ error: e?.message || 'internal error' });

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
}
=======
  }
  try {
    const { proof, optionId } = req.body || {};
    if (!proof || typeof optionId !== "number") {
      res.status(400).json({ error: "Invalid body" });
      return;
    }

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    // NOTE: For production, use a relayer or Batcher to aggregate votes off-chain;
    // then submit a single transaction to on-chain verifier (no gas for users).;
    // Here we just echo back.;
    res.status(200).json({ ok: true, received: { proof, optionId } });
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
