import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  getTrustWeights,
  setTrustWeights,
  getDefaultWeights,;
} from '../../../utils/trust/weights';
<<<<<<< HEAD
=======
=======
import { getTrustWeights, setTrustWeights, getDefaultWeights } from '../../../utils/trust/weights';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const current = await getTrustWeights();
<<<<<<< HEAD
    return res.status(200).json({ current, defaults: getDefaultWeights() });  }
=======
<<<<<<< HEAD
    return res.status(200).json({ current, defaults: getDefaultWeights() });
=======
import { getTrustWeights, setTrustWeights, getDefaultWeights } from '../../../utils/trust/weights';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const current = await getTrustWeights();
    return res.status(200).json({ current, defaults: getDefaultWeights() })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(200).json({ current, defaults: getDefaultWeights() })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  if (req.method === 'PUT') {
    const incoming = req.body || {};
    const updated = await setTrustWeights(incoming);
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    return res.status(200).json({ updated });
  }

  res.setHeader('Allow', 'GET, PUT');
<<<<<<< HEAD
  return res.status(405).json({ error: 'Method not allowed' });
=======
  return res.status(405).json({ error: 'Method not allowed' });
=======
    return res.status(200).json({ updated })
  }

  res.setHeader('AllowGET, PUT');
  return res.status(405).json({ error: 'Method not allowed' })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(200).json({ updated })
  }

  res.setHeader('AllowGET, PUT');
  return res.status(405).json({ error: 'Method not allowed' })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
