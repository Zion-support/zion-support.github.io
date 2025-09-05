<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { PROVIDERS } from '../../../lib/integrations/registry',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  if (req.method !== 'GET') return res.status(405).json({ error:'Method not allowed' }),;
  res.status(200).json({ providers:PROVIDERS }),;
}
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import { PROVIDERS } from '../../../lib/integrations/registry',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' }),
  res.status(200).json({ providers: PROVIDERS })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
