import type { NextApiRequest, NextApiResponse } from 'next';
import { getTrustWeights, setTrustWeights, getDefaultWeights } from '../../../utils/trust/weights';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method;
  return res.status(405).json({ error: 'Method not allowed' })
}
