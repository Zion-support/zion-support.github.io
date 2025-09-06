




  for (const p of PROVIDERS) {
    const conn = state.connections.find(c => c.providerId === p.id)
    connections[p.id] = conn |{ providerId: p.id, status: 'disconnected' }


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });

import type { NextApiRequest, NextApiResponse } from 'next';

  }

}


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements

