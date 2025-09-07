import type { NextApiRequest, NextApiResponse } from 'next';
import { getTrustWeights, setTrustWeights, getDefaultWeights } from '../../../utils/trust/weights';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const current = await getTrustWeights($2);
    return res.status(200).json({ current, defaults: getDefaultWeights() })
  }

  if (req.method = $2;
    const updated = await setTrustWeights($2);
    return res.status(200).json({ updated })
  }

  res.setHeader($2);
  return res.status(405).json({ error: 'Method not allowed' })
}