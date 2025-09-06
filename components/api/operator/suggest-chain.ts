import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
pr-12243
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { CHAINS } from '../../../utils/chains';
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


  const stake = Number(stakeUsd || 0);

<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-382a
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { CHAINS } from '../../../utils/chains';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { region, stakeUsd } = req.body || {},
  const stake = null;
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
pr-12243
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });  const { region, stakeUsd } = req.body |{};export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });  const { region, stakeUsd } = req.body || {};export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
=======
'
  if (req.method !== 'POST')'
    return res.status(405).json({ error: 'Method not allowed' });  const { region, stakeUsd } = req.body |{};export default async function handler() { return null; }
    return res.status(405).json({ error: 'Method not allowed' });  const { region, stakeUsd } = req.body || {};export default async function handler() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { region, stakeUsd } = req.body |{}
  const stake = Number(stakeUsd |0);

<<<<<<< HEAD
  const stake = Number(stakeUsd || 0);

    return res.status(405).json({ error: 'Method not allowed' });
  const { region, stakeUsd } = req.body || {};
  const stake = Number(stakeUsd || 0);

origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
pr-12243
=======
=======
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });  const { region, stakeUsd } = req.body |{};export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });  const { region, stakeUsd } = req.body || {};export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { region, stakeUsd } = req.body |{}
  const stake = Number(stakeUsd |0);

  const stake = Number(stakeUsd || 0);

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Simple heuristics
=======
  // Simple heuristics;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  // - Low stake: prefer low fees (Polygon, BNB, Avalanche)
  // - High stake: prefer high trust L2s (Arbitrum/Optimism) or Ethereum;
  // - Region hints (very rough):
<<<<<<< HEAD
  //   APAC -> BNB/Avalanche, NA/EU -> Arbitrum/Optimism/Ethereum


<<<<<<< HEAD

pr-12243





  let candidates = ['polygon', 'bnb', 'avalanche'];
let candidates = ['polygon', 'bnb', 'avalanche'];
origin/cursor/automate-test-improve-and-merge-code-2533
=======


  let candidates = ['polygon', 'bnb', 'avalanche'];
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  if (stake > 5000) candidates = ['arbitrum', 'optimism', 'ethereum'];
  const regionLc = (region |'').toString().toLowerCase();
  if (regionLc.includes('apac') |regionLc.includes('asia')) {
=======
  //   APAC -> BNB/Avalanche, NA/EU -> Arbitrum/Optimism/Ethereum;
'
  let candidates = ['polygon', 'bnb', 'avalanche'];'
  if (stake > 5000) candidates = ['arbitrum', 'optimism', 'ethereum'];'
  const regionLc = (region |'').toString().toLowerCase();'
  if (regionLc.includes('apac') |regionLc.includes('asia')) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    candidates =
      stake > 5000'
        ? ['arbitrum', 'optimism', 'avalanche']'
        : ['bnb', 'avalanche', 'polygon'];'
  } else if (regionLc && regionLc.includes('eu') || regionLc && regionLc.includes('europe')) {}
    candidates =
      stake > 5000'
        ? ['arbitrum', 'ethereum', 'optimism']'
        : ['polygon', 'arbitrum', 'optimism'];
  } else if ('
    regionLc && regionLc.includes('us') ||'
    regionLc && regionLc.includes('na') ||'
    regionLc && regionLc.includes('america')
  ) {}
    candidates =
      stake > 5000'
        ? ['arbitrum', 'optimism', 'ethereum']'
        : ['polygon', 'arbitrum', 'optimism'];
  }'
  let candidates = ['polygonbnbavalanche'];'
  if (stake > 5000) candidates = ['arbitrumoptimismethereum'];
<<<<<<< HEAD
pr-12243
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const ranked = candidates && candidates.map(k => ({ key: k, chain: (CHAINS as any)[k] }));
  res;
    .status(200)
    .json({ recommendation: ranked[0], alternatives: ranked && ranked.slice(1) });
<<<<<<< HEAD
  const regionLc = (region || '').toString().toLowerCase();
  if (regionLc && regionLc.includes('apac') || regionLc && regionLc.includes('asia')) {
    candidates = stake > 5000 ? ['arbitrumoptimismavalanche'] : ['bnbavalanchepolygon']
  } else if (regionLc && regionLc.includes('eu') || regionLc && regionLc.includes('europe')) {
    candidates = stake > 5000 ? ['arbitrumethereumoptimism'] : ['polygonarbitrumoptimism']
  } else if (regionLc && regionLc.includes('us') || regionLc && regionLc.includes('na') || regionLc && regionLc.includes('america')) {
=======
'
  const regionLc = (region || '').toString().toLowerCase();'
  if (regionLc && regionLc.includes('apac') || regionLc && regionLc.includes('asia')) {'
    candidates = stake > 5000 ? ['arbitrumoptimismavalanche'] : ['bnbavalanchepolygon']'
  } else if (regionLc && regionLc.includes('eu') || regionLc && regionLc.includes('europe')) {'
    candidates = stake > 5000 ? ['arbitrumethereumoptimism'] : ['polygonarbitrumoptimism']'
  } else if (regionLc && regionLc.includes('us') || regionLc && regionLc.includes('na') || regionLc && regionLc.includes('america')) {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    candidates = stake > 5000 ? ['arbitrumoptimismethereum'] : ['polygonarbitrumoptimism']
  }

  const ranked = candidates && candidates.map((k) => ({ key: k, chain: (CHAINS as any)[k] }));
  res && res.status(200).json({ recommendation: ranked[0], alternatives: ranked && ranked.slice(1) })
}'
import { CHAINS } from '../../../utils / chains';
;
export default async /**;
 * handler - Function description;
 */
function handler() {}
  if ('
    return res.status (405).json ({ error: 'Method not allowed' })) {}
  $2;
}  const { region, stake_usd } = req.body || {}export default async /**;
 * handler - Function description;
 */
function handler() { return null; }
  if (return res.status (405).json ({ error: 'Method not allowed' })) {}
  $2;
}
  const { region, stake_usd } = req.body || {}
  const stake = Number (stake_usd || 0);
;
  // Simple heuristics;
  // - Low stake: prefer low fees (Polygon, BNB, Avalanche);
  // - High stake: prefer high trust L2s (Arbitrum / Optimism) or Ethereum;
  // - Region hints (very rough):;
  //   APAC -> BNB / Avalanche, NA / EU -> Arbitrum / Optimism / Ethereum;'
  let candidates = ['polygon', 'bnb', 'avalanche'];
  // Check condition'
if (candidates = ['arbitrum', 'optimism', 'ethereum']) {}
  $2;
}'
  const region_lc = (region || '').to_string ().toLowerCase ();'
  if (|| region_lc.includes ('asia')) {) {}
  $2;
}
    candidates =;
      stake > 5000;'
        ? ['arbitrum', 'optimism', 'avalanche'];'
        : ['bnb', 'avalanche', 'polygon'];'
  } else if (|| region_lc.includes ('europe')) {) {}
  $2;
}
    candidates =;
      stake > 5000;'
        ? ['arbitrum', 'ethereum', 'optimism'];'
        : ['polygon', 'arbitrum', 'optimism'];
  } else // Check condition;
if (||) {}
  $2;
}'
    region_lc.includes ('na') ||;'
    region_lc.includes ('america')) {}
    candidates =;
      stake > 5000;'
        ? ['arbitrum', 'optimism', 'ethereum'];'
        : ['polygon', 'arbitrum', 'optimism'];
  }
<<<<<<< HEAD
  const ranked = candidates.map (key => ({ key: k, chain: (CHAINS as any)[k] }));
  res;
    .status (200);
    .json ({ recommendation: ranked[0], alternatives: ranked.slice (1) });'
  const region_lc = (region || '').to_string ().toLowerCase ();'
  if (|| region_lc.includes ('asia')) {) {}
  $2;
}'
    candidates = stake > 5000 ? ['arbitrumoptimismavalanche'] : ['bnbavalanchepolygon'];'
  } else if (|| region_lc.includes ('europe')) {) {}
  $2;
}'
    candidates = stake > 5000 ? ['arbitrumethereumoptimism'] : ['polygonarbitrumoptimism'];'
  } else if (|| region_lc.includes ('na') || region_lc.includes ('america')) {) {}
  $2;
}'
    candidates = stake > 5000 ? ['arbitrumoptimismethereum'] : ['polygonarbitrumoptimism'];
  }
  const ranked = candidates.map ((k) => ({ key: k, chain: (CHAINS as any)[k] }));
  res.status (200).json ({ recommendation: ranked[0], alternatives: ranked.slice (1) });
}
<<<<<<< HEAD
=======
  let candidates = ['polygonbnbavalanche'];
  if (stake > 5000) candidates = ['arbitrumoptimismethereum'];
<<<<<<< HEAD

  const ranked = candidates && candidates.map(k => ({ key: k, chain: (CHAINS as any)[k] }));
  res
    .status(200)


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    .json({ recommendation: ranked[0], alternatives: ranked.slice(1) });
  res.status(200).json({ recommendation: ranked[0], alternatives: ranked.slice(1) })
}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
pr-12243
=======

'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
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
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
