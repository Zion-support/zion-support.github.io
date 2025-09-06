import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
import { getTrustWeights, setTrustWeights, getDefaultWeights } from '../../../utils/trust/weights';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method;
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
import {
  getTrustWeights
  setTrustWeights
  getDefaultWeights;
} from '../../../utils/trust/weights';
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const current = await getTrustWeights();
<<<<<<< HEAD
    return res.status(200).json({ current, defaults: getDefaultWeights() });  }
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const current = await getTrustWeights();
    return res.status(200).json({ current, defaults: getDefaultWeights() })
=======
    return res.status(200).json({ current, defaults: getDefaultWeights() });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  }
  if (req.method === 'PUT') {
    const incoming = req.body |{}
    const updated = await setTrustWeights(incoming);
    return res.status(200).json({ updated });
<<<<<<< HEAD
  }
  res.setHeader('Allow', 'GET, PUT');
  return res.status(405).json({ error: 'Method not allowed' });    return res.status(200).json({ updated })
  }
  res.setHeader('AllowGET, PUT');
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return res.status(405).json({ error: 'Method not allowed' })
}
=======
 
}

  res.setHeader('Allow', 'GET, PUT');
  return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
