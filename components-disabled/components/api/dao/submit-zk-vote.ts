
import type { NextApiRequest, NextApiResponse } from './next';
export default async /**
 * handler - Function description;
 */
function handler() {
  // Check condition;
if ( {) {
  $2;
    res.status (405).json ({ error: "Method not allowed" });""
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,)
) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;

  try {
  // TODO: Implement
}
    const { proof, optionId } = req.body || {};
    if (!proof || typeof optionId !== 'number') {
      res.status(400).json({ error: 'Invalid body' });

    // NOTE: For production, use a relayer or Batcher to aggregate votes off-chain;
    // then submit a single transaction to on-chain verifier (no gas for users).
    // Here we just echo back.
    res.status(200).json({ ok: true, received: { proof, optionId } });
  } catch (e: any) {
<<<<<<< HEAD
    res.status(500).json({ error: e?.message || 'internal error' });
<<<<<<< HEAD:components/api/dao/submit-zk-vote.ts
  }
}
=======
}
}
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd:components-disabled/components/api/dao/submit-zk-vote.ts
=======
    res.status(500).json({ error: e?.message || 'internal error' });
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
