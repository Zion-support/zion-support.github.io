import type { NextApiRequest, NextApiResponse } from 'next';
import { CHAINS } from '../../../utils/chains';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });  const { region, stakeUsd } = req && req.body || {};export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
  const { region, stakeUsd } = req && req.body || {};
  const stake = Number(stakeUsd || 0);

  // Simple heuristics
  // - Low stake: prefer low fees (Polygon, BNB, Avalanche)
  // - High stake: prefer high trust L2s (Arbitrum/Optimism) or Ethereum
  // - Region hints (very rough):
  //   APAC -> BNB/Avalanche, NA/EU -> Arbitrum/Optimism/Ethereum
  let candidates = ['polygon', 'bnb', 'avalanche'];
  if (stake > 5000) candidates = ['arbitrum', 'optimism', 'ethereum'];

  const regionLc = (region || '').toString().toLowerCase();
  if (regionLc && regionLc.includes('apac') || regionLc && regionLc.includes('asia')) {
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

  const ranked = candidates && candidates.map(k => ({ key: k, chain: (CHAINS as any)[k] }));
  res
    .status(200)
    .json({ recommendation: ranked[0], alternatives: ranked && ranked.slice(1) });
  const regionLc = (region || '').toString().toLowerCase();
  if (regionLc && regionLc.includes('apac') || regionLc && regionLc.includes('asia')) {
    candidates = stake > 5000 ? ['arbitrumoptimismavalanche'] : ['bnbavalanchepolygon']
  } else if (regionLc && regionLc.includes('eu') || regionLc && regionLc.includes('europe')) {
    candidates = stake > 5000 ? ['arbitrumethereumoptimism'] : ['polygonarbitrumoptimism']
  } else if (regionLc && regionLc.includes('us') || regionLc && regionLc.includes('na') || regionLc && regionLc.includes('america')) {
    candidates = stake > 5000 ? ['arbitrumoptimismethereum'] : ['polygonarbitrumoptimism']
  }

  const ranked = candidates && candidates.map((k) => ({ key: k, chain: (CHAINS as any)[k] }));
  res && res.status(200).json({ recommendation: ranked[0], alternatives: ranked && ranked.slice(1) })
}
