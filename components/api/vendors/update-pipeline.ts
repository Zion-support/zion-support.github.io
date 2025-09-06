import type { NextApiRequest, NextApiResponse } from 'next';
import { updatePipelineItemStatus } from '../../../utils/vendor-store';
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req.body || {},
  if (!itemId || !status) return res.status(400).json({ error: 'Missing required fields' });
=======
  if (req.method !== 'POST')
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res.status(200).json({ ok: true });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
<<<<<<< HEAD
  }export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req.body |{}
  if (!itemId |!status) return res.status(400).json({ error: 'Missing required fields' });
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res.status(200).json({ ok: true })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
=======
  }
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
