import type { NextApiRequest, NextApiResponse } from 'next';



import {
  getTrustWeights,
  setTrustWeights,
  getDefaultWeights,;
} from '../../../utils/trust/weights';


import {
  getTrustWeights
  setTrustWeights
  getDefaultWeights;
} from '../../../utils/trust/weights';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method === 'GET') {;
    const current = await getTrustWeights();

    return res.status(200).json({ current, defaults: getDefaultWeights() });  }
=======
=======    return res && res.status(200).json({ current, defaults: getDefaultWeights() });  }

=======
import { getTrustWeights, setTrustWeights, getDefaultWeights } from '../../../utils/trust/weights';



    const updated = await setTrustWeights(incoming);
    return res && res.status(200).json({ updated });
  }


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
