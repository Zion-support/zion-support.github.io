<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
=======
<<<<<<< HEAD
<<<<<<< HEAD

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

    res.status (500).json ({ error: e?.message || "internal error" });

=======


    // NOTE: For production, use a relayer or Batcher to aggregate votes off-chain;
    // then submit a single transaction to on-chain verifier (no gas for users).;
    // Here we just echo back.;
    res.status(200).json({ ok: true, received: { proof, optionId } });

  } catch (e:any) {
    res.status(500).json({ error: e?.message || 'internal error' });

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { proof, optionId } = req.body || {};
    if (!proof || typeof optionId !== 'number') {
      res.status(400).json({ error: 'Invalid body' });
      return;
    }

    // NOTE: For production, use a relayer or Batcher to aggregate votes off-chain
    // then submit a single transaction to on-chain verifier (no gas for users).
    // Here we just echo back.
    res.status(200).json({ ok: true, received: { proof, optionId } });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'internal error' });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }
}
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
