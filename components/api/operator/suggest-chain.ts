import type { NextApiRequest, NextApiResponse } from 'next';
import { CHAINS } from '../../../utils/chains';
<<<<<<< HEAD
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const { region, stakeUsd } = req.body || {};
  const stake = Number(stakeUsd || 0);

  // Simple heuristics
  // - Low stake: prefer low fees (Polygon, BNB, Avalanche)
  // - High stake: prefer high trust L2s (Arbitrum/Optimism) or Ethereum
  // - Region hints (very rough):
  //   APAC -> BNB/Avalanche, NA/EU -> Arbitrum/Optimism/Ethereum
<<<<<<< HEAD
<<<<<<< HEAD
  let candidates = ['polygon', 'bnb', 'avalanche'];
  if (stake > 5000) candidates = ['arbitrum', 'optimism', 'ethereum'];
=======
  let candidates = ['polygonbnbavalanche'];
  if (stake > 5000) candidates = ['arbitrumoptimismethereum'];
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  const regionLc = (region || '').toString().toLowerCase();
  if (regionLc.includes('apac') || regionLc.includes('asia')) {
    candidates = stake > 5000 ? ['arbitrumoptimismavalanche'] : ['bnbavalanchepolygon']
  } else if (regionLc.includes('eu') || regionLc.includes('europe')) {
    candidates = stake > 5000 ? ['arbitrumethereumoptimism'] : ['polygonarbitrumoptimism']
  } else if (regionLc.includes('us') || regionLc.includes('na') || regionLc.includes('america')) {
    candidates = stake > 5000 ? ['arbitrumoptimismethereum'] : ['polygonarbitrumoptimism']
  }

<<<<<<< HEAD
  const ranked = candidates.map(k => ({ key: k, chain: (CHAINS as any)[k] }));
  res
    .status(200)
    .json({ recommendation: ranked[0], alternatives: ranked.slice(1) });
=======
  let candidates = ['polygonbnbavalanche'];
  if (stake > 5000) candidates = ['arbitrumoptimismethereum'];

  const regionLc = (region || '').toString().toLowerCase();
  if (regionLc.includes('apac') || regionLc.includes('asia')) {
    candidates = stake > 5000 ? ['arbitrumoptimismavalanche'] : ['bnbavalanchepolygon']
  } else if (regionLc.includes('eu') || regionLc.includes('europe')) {
    candidates = stake > 5000 ? ['arbitrumethereumoptimism'] : ['polygonarbitrumoptimism']
  } else if (regionLc.includes('us') || regionLc.includes('na') || regionLc.includes('america')) {
    candidates = stake > 5000 ? ['arbitrumoptimismethereum'] : ['polygonarbitrumoptimism']
  }

  const ranked = candidates.map((k) => ({ key: k, chain: (CHAINS as any)[k] }));
  res.status(200).json({ recommendation: ranked[0], alternatives: ranked.slice(1) })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const ranked = candidates.map((k) => ({ key: k, chain: (CHAINS as any)[k] }));
  res.status(200).json({ recommendation: ranked[0], alternatives: ranked.slice(1) })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
