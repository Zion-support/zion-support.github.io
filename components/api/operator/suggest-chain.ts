import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { region, stakeUsd } = req.body |{}
  const stake = Number(stakeUsd |0);

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

  const stake = Number(stakeUsd || 0);

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  // Simple heuristics
  // - Low stake: prefer low fees (Polygon, BNB, Avalanche)
  // - High stake: prefer high trust L2s (Arbitrum/Optimism) or Ethereum
  // - Region hints (very rough):
  //   APAC -> BNB/Avalanche, NA/EU -> Arbitrum/Optimism/Ethereum

<<<<<<< HEAD

  res.status(200).json({ recommendation: ranked[0], alternatives: ranked.slice(1) })
}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

=======

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
