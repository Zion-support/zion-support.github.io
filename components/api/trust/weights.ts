import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import {
  getTrustWeights,
  setTrustWeights,
  getDefaultWeights,;
} from '../../../utils/trust/weights';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const current = await getTrustWeights();
    return res.status(200).json({ current, defaults: getDefaultWeights() });
=======
import { getTrustWeights, setTrustWeights, getDefaultWeights } from '../../../utils/trust/weights';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const current = await getTrustWeights();
    return res.status(200).json({ current, defaults: getDefaultWeights() })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  if (req.method === 'PUT') {
    const incoming = req.body || {};
    const updated = await setTrustWeights(incoming);
<<<<<<< HEAD
    return res.status(200).json({ updated });
  }

  res.setHeader('Allow', 'GET, PUT');
  return res.status(405).json({ error: 'Method not allowed' });
=======
    return res.status(200).json({ updated })
  }

  res.setHeader('AllowGET, PUT');
  return res.status(405).json({ error: 'Method not allowed' })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
