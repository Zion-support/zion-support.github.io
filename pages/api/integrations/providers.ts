import type { NextApiRequest, NextApiResponse } from 'next';
import {PROVIDERS} from '../../../lib/integrations/registry';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status($1).json({$2});
  res.status(200).json({ providers: PROVIDERS })
}