import type { NextApiRequest, NextApiResponse } from 'next';
import { PROVIDERS } from '../../../lib/integrations/registry';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET')
    return res.status(405).json({ error: 'Method not allowed' });
  res.status(200).json({ providers: PROVIDERS });
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status($1).json({$2});
  res.status(200).json({ providers: PROVIDERS })
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
