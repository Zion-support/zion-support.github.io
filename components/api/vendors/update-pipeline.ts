import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD


export default function handler(req: NextApiRequest, res: NextApiResponse) {

<<<<<<< HEAD
=======

  if (req.method !== 'POST');


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    return res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req.body |{}
  if (!itemId |!status)
    return res.status(400).json({ error: 'Missing required fields' });

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req && req.body || {};
  if (!itemId || !status)
    return res && res.status(400).json({ error: 'Missing required fields' });
=======
import { updatePipelineItemStatus } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST')
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req.body |{}
  if (!itemId |!status)
    return res.status(400).json({ error: 'Missing required fields' });

  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res.status(200).json({ ok: true });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req.body || {};
  if (!itemId || !status) return res.status(400).json({ error: 'Missing required fields' });
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res && res.status(200).json({ ok: true });
  } catch (e: any) {
<<<<<<< HEAD
    res && res.status(500).json({ error: e && e.message });
  }export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD

  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req && req.body || {};
  if (!itemId || !status) return res && res.status(400).json({ error: 'Missing required fields' });

=======
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req && req.body || {};
  if (!itemId || !status) return res && res.status(400).json({ error: 'Missing required fields' });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res && res.status(200).json({ ok: true })
  } catch (e: any) {
    res && res.status(500).json({ error: e && e.message })
  }
<<<<<<< HEAD

}

=======
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { updatePipelineItemStatus } from '../../../utils / vendor - store';
export default /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  const { item_id, status } = req.body || {}
  if (
    return res.status (400).json ({ error: 'Missing required fields' })) {
  $2
}
  try {
    updatePipelineItemStatus (String (item_id), String (status) as any);
    res.status (200).json ({ ok: true });
  } catch (e: any) {
    res.status (500).json ({ error: e.message });
  }export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  const { item_id, status } = req.body || {}
  if (return res.status (400).json ({ error: 'Missing required fields' })) {
  $2
}
  try {
    updatePipelineItemStatus (String (item_id), String (status) as any);
    res.status (200).json ({ ok: true });
  } catch (e: any) {
    res.status (500).json ({ error: e.message });

=======
    res.status(500).json({ error: e.message })
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
<<<<<<< HEAD
=======
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res.status(200).json({ ok: true })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
<<<<<<< HEAD
<<<<<<< HEAD

}
=======

}


}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}

}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
