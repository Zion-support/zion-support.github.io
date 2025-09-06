import type { NextApiRequest, NextApiResponse } from 'next';
import { updatePipelineItemStatus } from '../../../utils/vendor-store';
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD

  if (req.method !== 'POST')
=======
  if (req.method !== 'POST');
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    return res.status(405).json({ error: 'Method not allowed' });
<<<<<<< HEAD
  const { itemId, status } = req.body |{}
  if (!itemId |!status)
=======
  
}

const { itemId, status } = req.body || {};
  if (!itemId || !status)
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    return res.status(400).json({ error: 'Missing required fields' });

  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res.status(200).json({ ok: true });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
<<<<<<< HEAD
<<<<<<< HEAD
  }export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
  }export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req.body |{}
  if (!itemId |!status) return res.status(400).json({ error: 'Missing required fields' });
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res.status(200).json({ ok: true })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
<<<<<<< HEAD
}
=======
  }
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
=======
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
