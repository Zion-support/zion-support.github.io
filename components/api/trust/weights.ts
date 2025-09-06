import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { getTrustWeights, setTrustWeights, getDefaultWeights } from '../../../utils/trust/weights';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method;
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
import {
  getTrustWeights,
  setTrustWeights,;
  getDefaultWeights,;
} from '../../../utils/trust/weights';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

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
  if (req.method === 'GET') {;
    const current = await getTrustWeights();
<<<<<<< HEAD
    return res.status(200).json({ current, defaults: getDefaultWeights() });  }
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {;
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

  return res.status(405).json({ error: 'Method not allowed' })
<<<<<<< HEAD
}
=======
 
}

  res.setHeader('Allow', 'GET, PUT');
  return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
}
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
