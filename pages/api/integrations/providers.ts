import type { NextApiRequest, NextApiResponse } from 'next';
import { PROVIDERS } from '../../../lib/integrations/registry';
<<<<<<< HEAD
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET')
    return res.status(405).json({ error: 'Method not allowed' });
  res.status(200).json({ providers: PROVIDERS });
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  res.status(200).json({ providers: PROVIDERS })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  res.status(200).json({ providers: PROVIDERS })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
