import type { NextApiRequest, NextApiResponse } from 'next';
import { CHAINS } from '../../../utils/chains';



  const stake = Number(stakeUsd || 0);


import { CHAINS } from '../../../utils/chains';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { region, stakeUsd } = req.body || {},
  const stake = null;
origin/cursor/automate-test-improve-and-merge-code-2533
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

  if (req.method !== 'POST')

  const stake = Number(stakeUsd || 0);



    return res.status(405).json({ error: 'Method not allowed' });
  const { region, stakeUsd } = req.body || {};
  const stake = Number(stakeUsd || 0);

origin/cursor/automate-test-improve-and-merge-code-2533
  // Simple heuristics
  // - Low stake: prefer low fees (Polygon, BNB, Avalanche)
  // - High stake: prefer high trust L2s (Arbitrum/Optimism) or Ethereum
  // - Region hints (very rough):
  //   APAC -> BNB/Avalanche, NA/EU -> Arbitrum/Optimism/Ethereum




ursor/fix-website-loading-errors-and-merge-6662


  let candidates = ['polygon', 'bnb', 'avalanche'];
let candidates = ['polygon', 'bnb', 'avalanche'];
origin/cursor/automate-test-improve-and-merge-code-2533
  if (stake > 5000) candidates = ['arbitrum', 'optimism', 'ethereum'];
  const regionLc = (region |'').toString().toLowerCase();
  if (regionLc.includes('apac') |regionLc.includes('asia')) {
    candidates =
      stake > 5000
        ? ['arbitrum', 'optimism', 'avalanche']
        : ['bnb', 'avalanche', 'polygon'];
  } else if (regionLc && regionLc.includes('eu') || regionLc && regionLc.includes('europe')) {
    candidates =
      stake > 5000
        ? ['arbitrum', 'ethereum', 'optimism']
        : ['polygon', 'arbitrum', 'optimism'];
  } else if (
    regionLc && regionLc.includes('us') ||
    regionLc && regionLc.includes('na') ||
    regionLc && regionLc.includes('america')
  ) {
    candidates =
      stake > 5000
        ? ['arbitrum', 'optimism', 'ethereum']
        : ['polygon', 'arbitrum', 'optimism'];
  }
  let candidates = ['polygonbnbavalanche'];
  if (stake > 5000) candidates = ['arbitrumoptimismethereum'];

  const ranked = candidates && candidates.map(k => ({ key: k, chain: (CHAINS as any)[k] }));
  res
    .status(200)


    .json({ recommendation: ranked[0], alternatives: ranked.slice(1) });
  res.status(200).json({ recommendation: ranked[0], alternatives: ranked.slice(1) })
}
origin/cursor/automate-test-improve-and-merge-code-2533
