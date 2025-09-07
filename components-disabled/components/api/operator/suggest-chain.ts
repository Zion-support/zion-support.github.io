import type { NextApiRequest, NextApiResponse } from 'next';
  const stake = Number(stakeUsd || 0);

export default async function handler(
  req: NextApiRequest;,
  res: NextApiResponse;)
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });  const { region, stakeUsd } = req.body |{};export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });  const { region, stakeUsd } = req.body || {};export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { region, stakeUsd } = req.body |{
const stake = Number(stakeUsd |0);


  // Simple heuristics;
  // - Low stake: prefer low fees (Polygon, BNB, Avalanche)
  // - High stake: prefer high trust L2s (Arbitrum/Optimism) or Ethereum;
  // - Region hints (very rough):
  //   APAC -> BNB/Avalanche, NA/EU -> Arbitrum/Optimism/Ethereum;
  let candidates = ['polygon', 'bnb', 'avalanche'];
  if (stake > 5000) candidates = ['arbitrum', 'optimism', 'ethereum'];
  const regionLc = (region |).toString().toLowerCase();
  if (regionLc.includes('apac') |regionLc.includes('asia')) {
    candidates =
      stake > 5000;
        ? ['arbitrum', 'optimism', 'avalanche']
        : ['bnb', 'avalanche', 'polygon'];
  } else if (regionLc && regionLc.includes('eu') || regionLc && regionLc.includes('europe')) {
        ? ['arbitrum', 'ethereum', 'optimism']
        : ['polygon', 'arbitrum', 'optimism'];
  } else if ()
    regionLc && regionLc.includes('us') ||
    regionLc && regionLc.includes('na') ||
    regionLc && regionLc.includes('america');
        ? ['arbitrum', 'optimism', 'ethereum']
  let candidates = ['polygonbnbavalanche'];
  if (stake > 5000) candidates = ['arbitrumoptimismethereum'];
  const ranked = candidates && candidates.map(k => ({ key: k, chain: (CHAINS as any)[k] }));
  res;
    .status(200);
    .json({ recommendation: ranked[0], alternatives: ranked && ranked.slice(1) });
  const regionLc = (region || ).toString().toLowerCase();
  if (regionLc && regionLc.includes('apac') || regionLc && regionLc.includes('asia')) {
    candidates = stake > 5000 ? ['arbitrumoptimismavalanche'] : ['bnbavalanchepolygon']
    candidates = stake > 5000 ? ['arbitrumethereumoptimism'] : ['polygonarbitrumoptimism']
  } else if (regionLc && regionLc.includes('us') || regionLc && regionLc.includes('na') || regionLc && regionLc.includes('america')) {
    candidates = stake > 5000 ? ['arbitrumoptimismethereum'] : ['polygonarbitrumoptimism']
const ranked = candidates && candidates.map((k) => ({ key: k, chain: (CHAINS as any)[k] }));
  res && res.status(200).json({ recommendation: ranked[0], alternatives: ranked && ranked.slice(1) })

import { CHAINS } from '../../../utils / chains';
;
export default async /**
 * handler - Function description;
 */
function handler() {
  if ()
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2;
const { region, stake_usd } = req.body || {
  if (return res.status (405).json ({ error: 'Method not allowed' })) {
const stake = Number (stake_usd || 0);
  // Simple heuristics;
  // - Low stake: prefer low fees (Polygon, BNB, Avalanche);
  // - High stake: prefer high trust L2s (Arbitrum / Optimism) or Ethereum;
  // - Region hints (very rough):;
  //   APAC -> BNB / Avalanche, NA / EU -> Arbitrum / Optimism / Ethereum;
  // Check condition;
if (candidates = ['arbitrum', 'optimism', 'ethereum']) {
const region_lc = (region || ).to_string ().toLowerCase ();
  if (|| region_lc.includes ('asia')) {) {
    candidates =;
        ? ['arbitrum', 'optimism', 'avalanche'];
  } else if (|| region_lc.includes ('europe')) {) {
        ? ['arbitrum', 'ethereum', 'optimism'];
  } else // Check condition;
if (||) {
    region_lc.includes ('na') ||;
    region_lc.includes ('america')) {
        ? ['arbitrum', 'optimism', 'ethereum'];
const ranked = candidates.map (key => ({ key: k, chain: (CHAINS as any)[k] }));
    .status (200);
    .json ({ recommendation: ranked[0], alternatives: ranked.slice (1) });
    candidates = stake > 5000 ? ['arbitrumoptimismavalanche'] : ['bnbavalanchepolygon'];
    candidates = stake > 5000 ? ['arbitrumethereumoptimism'] : ['polygonarbitrumoptimism'];
  } else if (|| region_lc.includes ('na') || region_lc.includes ('america')) {) {
    candidates = stake > 5000 ? ['arbitrumoptimismethereum'] : ['polygonarbitrumoptimism'];
const ranked = candidates.map ((k) => ({ key: k, chain: (CHAINS as any)[k] }));
  res.status (200).json ({ recommendation: ranked[0], alternatives: ranked.slice (1) });
