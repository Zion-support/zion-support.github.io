<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
;
export default async function handler(req:NextApiRequest, res:NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error:'Method not allowed' }),;
  const { address, signature } = req.body || {},;
  if (!address || !signature) return res.status(400).json({ error:'Missing address or signature' }),;
  // In production:verify signature, mint or issue POAP;
  // // // console.log('[NFT Claim] address:', address, 'signature:', signature.slice(0, 18) + '…'),;
  return res.status(200).json({ ok:true }),;
=======
import type { NextApiRequest, NextApiResponse } from 'next',

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { address, signature } = req.body || {},
  if (!address || !signature) return res.status(400).json({ error: 'Missing address or signature' }),
  // In production: verify signature, mint or issue POAP
  // // // console.log('[NFT Claim] address:', address, 'signature:', signature.slice(0, 18) + '…'),
  return res.status(200).json({ ok: true })import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_address, _signature} = req.body || {};
  if (!address || !signature) return res.status(400).json({_error: 'Missing address or signature'});
  // In production: verify signature, mint or issue POAP
   + '…');
  return res.status(200).json({_ok: true});
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}