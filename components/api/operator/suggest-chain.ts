import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======
<<<<<<< HEAD
  try {
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });  const { region, stakeUsd } = req && req.body || {};export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
  const { region, stakeUsd } = req && req.body || {};
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { region, stakeUsd } = req.body || {};
  const stake = Number(stakeUsd || 0);

=======
import { CHAINS } from '../../../utils/chains';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

<<<<<<< HEAD
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
<<<<<<< HEAD

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { region, stakeUsd } = req.body |{}
  const stake = Number(stakeUsd |0);
=======

  const stake = Number(stakeUsd || 0);

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });  const { region, stakeUsd } = req.body |{};export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });  const { region, stakeUsd } = req.body || {};export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { region, stakeUsd } = req.body |{}
  const stake = Number(stakeUsd |0);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Simple heuristics
  // - Low stake: prefer low fees (Polygon, BNB, Avalanche)
  // - High stake: prefer high trust L2s (Arbitrum/Optimism) or Ethereum
  // - Region hints (very rough):
  //   APAC -> BNB/Avalanche, NA/EU -> Arbitrum/Optimism/Ethereum
<<<<<<< HEAD

<<<<<<< HEAD
  res.status(200).json({ recommendation: ranked[0], alternatives: ranked.slice(1) })

=======

=======

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
const regionLc = (region || '').toString().toLowerCase();
  if (regionLc && regionLc.includes('apac') || regionLc && regionLc.includes('asia')) {
=======
  let candidates = ['polygon', 'bnb', 'avalanche'];
  if (stake > 5000) candidates = ['arbitrum', 'optimism', 'ethereum'];
  const regionLc = (region |'').toString().toLowerCase();
  if (regionLc.includes('apac') |regionLc.includes('asia')) {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
  const regionLc = (region || '').toString().toLowerCase();
  if (regionLc.includes('apac') || regionLc.includes('asia')) {
    candidates = stake > 5000 ? ['arbitrumoptimismavalanche'] : ['bnbavalanchepolygon']
  } else if (regionLc.includes('eu') |regionLc.includes('europe')) {
    candidates = stake > 5000 ? ['arbitrumethereumoptimism'] : ['polygonarbitrumoptimism']
  } else if (regionLc.includes('us') |regionLc.includes('na') |regionLc.includes('america')) {
    candidates = stake > 5000 ? ['arbitrumoptimismethereum'] : ['polygonarbitrumoptimism']
  }
  const ranked = candidates.map((k) => ({ key: k, chain: (CHAINS as any)[k] }));
  res.status(200).json({ recommendation: ranked[0], alternatives: ranked.slice(1) })
}
<<<<<<< HEAD
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
import { CHAINS } from '../../../utils / chains';
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}  const { region, stake_usd } = req.body || {}export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  const { region, stake_usd } = req.body || {}
  const stake = Number (stake_usd || 0);
;
  // Simple heuristics;
  // - Low stake: prefer low fees (Polygon, BNB, Avalanche);
  // - High stake: prefer high trust L2s (Arbitrum / Optimism) or Ethereum;
  // - Region hints (very rough):;
  //   APAC -> BNB / Avalanche, NA / EU -> Arbitrum / Optimism / Ethereum;
  let candidates = ['polygon', 'bnb', 'avalanche'];
  // Check condition
if (candidates = ['arbitrum', 'optimism', 'ethereum']) {
  $2
}
  const region_lc = (region || '').to_string ().toLowerCase ();
  if (|| region_lc.includes ('asia')) {) {
  $2
}
    candidates =;
      stake > 5000;
        ? ['arbitrum', 'optimism', 'avalanche'];
        : ['bnb', 'avalanche', 'polygon'];
  } else if (|| region_lc.includes ('europe')) {) {
  $2
}
    candidates =;
      stake > 5000;
        ? ['arbitrum', 'ethereum', 'optimism'];
        : ['polygon', 'arbitrum', 'optimism'];
  } else // Check condition
if (||) {
  $2
}
    region_lc.includes ('na') ||;
    region_lc.includes ('america')) {
    candidates =;
      stake > 5000;
        ? ['arbitrum', 'optimism', 'ethereum'];
        : ['polygon', 'arbitrum', 'optimism'];
  }
  const ranked = candidates.map (key => ({ key: k, chain: (CHAINS as any)[k] }));
  res;
    .status (200);
    .json ({ recommendation: ranked[0], alternatives: ranked.slice (1) });
  const region_lc = (region || '').to_string ().toLowerCase ();
  if (|| region_lc.includes ('asia')) {) {
  $2
}
    candidates = stake > 5000 ? ['arbitrumoptimismavalanche'] : ['bnbavalanchepolygon'];
  } else if (|| region_lc.includes ('europe')) {) {
  $2
}
    candidates = stake > 5000 ? ['arbitrumethereumoptimism'] : ['polygonarbitrumoptimism'];
  } else if (|| region_lc.includes ('na') || region_lc.includes ('america')) {) {
  $2
}
    candidates = stake > 5000 ? ['arbitrumoptimismethereum'] : ['polygonarbitrumoptimism'];
  }
  const ranked = candidates.map ((k) => ({ key: k, chain: (CHAINS as any)[k] }));
  res.status (200).json ({ recommendation: ranked[0], alternatives: ranked.slice (1) });

}
=======
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}

}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
