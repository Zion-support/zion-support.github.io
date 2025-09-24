import type { NextApiRequest, NextApiResponse } from 'next',
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse) {
  if (req.method !== 'POST'),
    return res.status(405).json({ error: 'Method not allowed' }),  const { region, stakeUsd } = req.body |{},export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST'),
    return res.status(405).json({ error: 'Method not allowed' }),  const { region, stakeUsd } = req.body || {},export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { region, stakeUsd } = req.body |{}
  const stake = Number(stakeUsd |0),
  // Simple heuristics,
  // - Low stake: prefer low fees (Polygon, BNB, Avalanche),
  // - High stake: prefer high trust L2s (Arbitrum/Optimism) or Ethereum,
  // - Region hints (very rough):,
  //   APAC -> BNB/Avalanche, NA/EU -> Arbitrum/Optimism/Ethereum>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))}}}