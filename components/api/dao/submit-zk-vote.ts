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
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
    // NOTE: For production, use a relayer or Batcher to aggregate votes off - chain;
    // then submit a single transaction to on - chain verifier (no gas for users).;
    // Here we just echo back.;
    res.status (200).json ({ ok: true, received: { proof, option_id } });
  } catch (e: any) {
    res.status (500).json ({ error: e?.message || "internal error" });
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {;
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  try {
    const { proof, optionId } = req.body || {}
    if (!proof || typeof optionId !== 'number') {
      res.status(400).json({ error: 'Invalid body' });
      return;
    }

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    // NOTE: For production, use a relayer or Batcher to aggregate votes off-chain;
    // then submit a single transaction to on-chain verifier (no gas for users).;
    // Here we just echo back.;
    res.status(200).json({ ok: true, received: { proof, optionId } });
<<<<<<< HEAD
  } catch (e: any) {
    res.status(500).json({ error: e?.message |"internal error" });
=======
  } catch (e:any) {
    res.status(500).json({ error: e?.message || 'internal error' });
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
}