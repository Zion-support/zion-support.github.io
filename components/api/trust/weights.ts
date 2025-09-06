import type { NextApiRequest, NextApiResponse } from 'next';
import {
  getTrustWeights,
  setTrustWeights,
  getDefaultWeights,;
} from '../../../utils/trust/weights';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const current = await getTrustWeights();
    return res.status(200).json({ current, defaults: getDefaultWeights() });  }
=======
    return res.status(200).json({ current, defaults: getDefaultWeights() })
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  if (req.method === 'PUT') {
    const incoming = req.body || {};
    const updated = await setTrustWeights(incoming);
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
