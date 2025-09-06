import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
<<<<<<< HEAD
=======
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const { address, signature } = req.body || {};
  if (!address || !signature)
    return res.status(400).json({ error: 'Missing address or signature' });
  // In production: verify signature, mint or issue POAP
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  console.log(
    '[NFT Claim] address:',
    address,
    'signature:',
    signature.slice(0, 18) + '…'
  );
<<<<<<< HEAD
  return res.status(200).json({ ok: true });
=======
  return res.status(200).json({ ok: true });
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { address, signature } = req.body || {};
  if (!address || !signature) return res.status(400).json({ error: 'Missing address or signature' });
  // In production: verify signature, mint or issue POAP
  console.log('[NFT Claim] address:', address, 'signature:', signature.slice(0, 18) + '…');
  return res.status(200).json({ ok: true })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  console.log('[NFT Claim] address:', address, 'signature:', signature.slice(0, 18) + '…');
  return res.status(200).json({ ok: true })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
