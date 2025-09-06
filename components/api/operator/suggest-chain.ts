import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { CHAINS } from '../../../utils/chains';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
import { CHAINS } from '../../../utils/chains';

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc


  const stake = Number(stakeUsd || 0);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { CHAINS } from '../../../utils/chains';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { region, stakeUsd } = req.body || {},
  const stake = null;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== 'POST')
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });  const { region, stakeUsd } = req.body |{};export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });  const { region, stakeUsd } = req.body || {};export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { region, stakeUsd } = req.body |{}
  const stake = Number(stakeUsd |0);

  const stake = Number(stakeUsd || 0);

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

  if (req.method !== 'POST')

  const stake = Number(stakeUsd || 0);



>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    return res.status(405).json({ error: 'Method not allowed' });
  const { region, stakeUsd } = req.body || {};
  const stake = Number(stakeUsd || 0);

<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  // Simple heuristics
  // - Low stake: prefer low fees (Polygon, BNB, Avalanche)
  // - High stake: prefer high trust L2s (Arbitrum/Optimism) or Ethereum
  // - Region hints (very rough):
  //   APAC -> BNB/Avalanche, NA/EU -> Arbitrum/Optimism/Ethereum
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452


=======




ursor/fix-website-loading-errors-and-merge-6662

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
  const ranked = candidates && candidates.map(k => ({ key: k, chain: (CHAINS as any)[k] }));
  res
    .status(200)
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
    .json({ recommendation: ranked[0], alternatives: ranked.slice(1) });
  res.status(200).json({ recommendation: ranked[0], alternatives: ranked.slice(1) })
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

  const ranked = candidates && candidates.map(k => ({ key: k, chain: (CHAINS as any)[k] }));
  res
    .status(200)


    .json({ recommendation: ranked[0], alternatives: ranked.slice(1) });
  res.status(200).json({ recommendation: ranked[0], alternatives: ranked.slice(1) })
}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
