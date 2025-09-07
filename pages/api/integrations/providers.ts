import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllProviders } from '../../../lib/integrations/registry';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const providers = getAllProviders();
  res.status(200).json({ providers });
}