import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { updatePipelineItemStatus } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD

  if (req.method !== 'POST')
  if (req.method !== 'POST');
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    return res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req.body |{}
  if (!itemId |!status)
    return res.status(400).json({ error: 'Missing required fields' });

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req.body |{}
  if (!itemId |!status)
    return res.status(400).json({ error: 'Missing required fields' });

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import { updatePipelineItemStatus } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req.body || {},
  if (!itemId || !status) return res.status(400).json({ error: 'Missing required fields' });
origin/cursor/automate-test-improve-and-merge-code-2533
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res.status(200).json({ ok: true });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
<<<<<<< HEAD
<<<<<<< HEAD
  }export default function handler(req: NextApiRequest, res: NextApiResponse) {;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req.body || {};
  if (!itemId || !status) return res.status(400).json({ error: 'Missing required fields' });
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res && res.status(200).json({ ok: true });
  } catch (e: any) {
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  }
<<<<<<< HEAD
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res.status(200).json({ ok: true })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
}

}

}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
