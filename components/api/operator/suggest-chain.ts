<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { CHAINS } from '../../../utils/chains',
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { region, stakeUsd } = req.body || {},
  const stake = Number(stakeUsd || 0),
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_region, _stakeUsd} = req.body || {};
  const _stake = Number(stakeUsd || 0);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Simple heuristics
  // - Low stake: prefer low fees (Polygon, BNB, Avalanche)
  // - High stake: prefer high trust L2s (Arbitrum/Optimism) or Ethereum
  // - Region hints (very rough):
  //   APAC -> BNB/Avalanche, NA/EU -> Arbitrum/Optimism/Ethereum
<<<<<<< HEAD
  let candidates = ['polygonbnbavalanche'],
  if (stake > 5000) candidates = ['arbitrumoptimismethereum'],

  const regionLc = (region || '').toString().toLowerCase(),
  if (regionLc.includes('apac') || regionLc.includes('asia')) {
    candidates = stake > 5000 ? ['arbitrumoptimismavalanche'] : ['bnbavalanchepolygon']
  } else if (regionLc.includes('eu') || regionLc.includes('europe')) {
    candidates = stake > 5000 ? ['arbitrumethereumoptimism'] : ['polygonarbitrumoptimism']
  } else if (regionLc.includes('us') || regionLc.includes('na') || regionLc.includes('america')) {
    candidates = stake > 5000 ? ['arbitrumoptimismethereum'] : ['polygonarbitrumoptimism']
  }

  const ranked = candidates.map((k) => ({ key: k, chain: (CHAINS as any)[k] })),
  res.status(200).json({ recommendation: ranked[0], alternatives: ranked.slice(1) })
=======
  let _candidates = ['polygon', 'bnb', 'avalanche'];
  if (stake > 5000) candidates = ['arbitrum', 'optimism', 'ethereum'];

  const _regionLc = (region || '').toString().toLowerCase();
  if (regionLc.includes('apac') || regionLc.includes('asia')) {_candidates = stake > 5000 ? ['arbitrum', _'optimism', _'avalanche'] : ['bnb', _'avalanche', _'polygon'];} else if (regionLc.includes('eu') || regionLc.includes('europe')) {_candidates = stake > 5000 ? ['arbitrum', _'ethereum', _'optimism'] : ['polygon', _'arbitrum', _'optimism'];} else if (regionLc.includes('us') || regionLc.includes('na') || regionLc.includes('america')) {_candidates = stake > 5000 ? ['arbitrum', _'optimism', _'ethereum'] : ['polygon', _'arbitrum', _'optimism'];}

  const _ranked = candidates.map(_(k) => ({_key: k, _chain: (CHAINS as any)[k]}));
  res.status(200).json({_recommendation: ranked[0], _alternatives: ranked.slice(1)});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}