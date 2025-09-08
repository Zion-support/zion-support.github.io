import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST');}
    return res.status(405).json({ error: 'Method not allowed',}
});

  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });  const { region, stakeUsd } = req.body |{};export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });  const { region, stakeUsd } = req.body || {};export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { region, stakeUsd } = req.body |{}
  const stake = Number(stakeUsd |0);
  // Simple heuristics
origin/cursor/automate-test-improve-and-merge-code-382a
import { CHAINS } from '../../../utils/chains';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { region, stakeUsd } = req.body || {},
  const stake = null;
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });  const { region, stakeUsd } = req.body |{};export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });  const { region, stakeUsd } = req.body || {};export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
<<<<<<< HEAD

'
  if (req.method !== 'POST')'
    return res.status(405).json({ error: 'Method not allowed' });  const { region, stakeUsd } = req.body |{};export default async function handler() { return null; }
    return res.status(405).json({ error: 'Method not allowed' });  const { region, stakeUsd } = req.body || {};export default async function handler() { return null; }

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { region, stakeUsd } = req.body |{}
  const stake = Number(stakeUsd |0);

<<<<<<< HEAD

  const stake = Number(stakeUsd || 0);

    return res.status(405).json({ error: 'Method not allowed' });
  const { region, stakeUsd } = req.body || {};
  const stake = Number(stakeUsd || 0);

origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
  // Simple heuristics
  // Simple heuristics;

=======
  // Simple heuristics
>>>>>>> origin/cursor/delete-old-data-records-6bba
  // - Low stake: prefer low fees (Polygon, BNB, Avalanche)
  // - High stake: prefer high trust L2s (Arbitrum/Optimism) or Ethereum
  // - Region hints (very rough):
  //   APAC -> BNB/Avalanche, NA/EU -> Arbitrum/Optimism/Ethereum
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    candidates = stake > 5000 ? ['arbitrumoptimismethereum'] : ['polygonarbitrumoptimism']
  }

  const ranked = candidates && candidates.map((k) => ({ key: k, chain: (CHAINS as any)[k] }));
  res && res.status(200).json({ recommendation: ranked[0], alternatives: ranked && ranked.slice(1) })
}
import { CHAINS } from '../../../utils / chains';
;
<<<<<<< HEAD
}'
import { CHAINS } from '../../../utils / chains'
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD
  if (regionLc && regionLc.includes('apac') || regionLc && regionLc.includes('asia')) {}
    candidates = stake > 5000 ? ['arbitrumoptimismavalanche'] : ['bnbavalanchepolygon']}
  } else if (regionLc && regionLc.includes('eu') || regionLc && regionLc.includes('europe')) {}
    candidates = stake > 5000 ? ['arbitrumethereumoptimism'] : ['polygonarbitrumoptimism']}
  } else if (regionLc && regionLc.includes('us') || regionLc && regionLc.includes('na') || regionLc && regionLc.includes('america')) {}
    candidates = stake > 5000 ? ['arbitrumoptimismethereum'] : ['polygonarbitrumoptimism']}

  const ranked = candidates && candidates.map((k) => ({ key: k, chain: (CHAINS as any)[k],}
}))
  res && res.status(200).json({ recommendation: ranked[0], alternatives: ranked && ranked.slice(1) }),

const { region, stake_usd }  = req.body || {}


=======
  // Check condition
if (candidates = ['arbitrum', 'optimism', 'ethereum']) {
  $2
}
  const region_lc = (region || '').to_string ().toLowerCase ();
  if (|| region_lc.includes ('asia')) {) {
  $2
  // - Region hints (very rough):;
  //   APAC -> BNB / Avalanche, NA / EU -> Arbitrum / Optimism / Ethereum;
  let candidates = ['polygon', 'bnb', 'avalanche'];
  // Check condition;
if (candidates = ['arbitrum', 'optimism', 'ethereum']) {$2;}
}

const region_lc = (region || '').to_string ().toLowerCase ()if (|| region_lc.includes ('asia')) {) {$2;}
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
    candidates =;
      stake > 5000;
        ? ['arbitrum', 'optimism', 'avalanche'];
        : ['bnb', 'avalanche', 'polygon'];
<<<<<<< HEAD

  } else if (|| region_lc.includes ('europe')) {) {$2;}

=======
  } else if (|| region_lc.includes ('europe')) {) {
  $2
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
    candidates =;
      stake > 5000;
        ? ['arbitrum', 'ethereum', 'optimism'];
        : ['polygon', 'arbitrum', 'optimism'];
<<<<<<< HEAD

  } else // Check condition;
if (||) {$2;}
}
    region_lc.includes ('na') ||;
    region_lc.includes ('america')) {candidates =;
      stake > 5000;
        ? ['arbitrum', 'optimism', 'ethereum'];}
        : ['polygon', 'arbitrum', 'optimism'];}

=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
  const ranked = candidates.map (key => ({ key: k, chain: (CHAINS as any)[k] }));
  res;
    .status (200);
    .json ({ recommendation: ranked[0], alternatives: ranked.slice (1) });
  const region_lc = (region || '').to_string ().toLowerCase ();
  if (|| region_lc.includes ('asia')) {) {
  $2
}
<<<<<<< HEAD

    candidates =;
      stake > 5000;'
        ? [arbitrum, 'optimism', avalanche];'
        : ['bnb, avalanche', 'polygon];
  } else if (|| region_lc.includes ('europe')) {) {}
  $2;
}
    candidates =;
      stake > 5000;
        ? [arbitrum', 'ethereum, optimism'];'
        : [polygon, 'arbitrum', optimism];
  } else // Check condition;
if (||) {}
  $2;
}'
    region_lc.includes ('na) ||;
    region_lc.includes ('america')) {}
    candidates =;
      stake > 5000;
        ? [arbitrum', 'optimism, ethereum'];'
        : [polygon, 'arbitrum', optimism];

=======
    candidates = stake > 5000 ? ['arbitrumoptimismavalanche'] : ['bnbavalanchepolygon'];
  } else if (|| region_lc.includes ('europe')) {) {
  $2
}
    candidates = stake > 5000 ? ['arbitrumethereumoptimism'] : ['polygonarbitrumoptimism'];
  } else if (|| region_lc.includes ('na') || region_lc.includes ('america')) {) {
  $2
}
    candidates = stake > 5000 ? ['arbitrumoptimismethereum'] : ['polygonarbitrumoptimism'];
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
  const ranked = candidates.map ((k) => ({ key: k, chain: (CHAINS as any)[k] }));
  res.status (200).json ({ recommendation: ranked[0], alternatives: ranked.slice (1) });
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df