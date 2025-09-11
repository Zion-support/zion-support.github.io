import type { NextApiRequest, NextApiResponse } from 'next';


export default function handler(req: NextApiRequest, res: NextApiResponse) {


  if (req.method !== 'POST');


    return res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req.body |{}
  if (!itemId |!status)
    return res.status(400).json({ error: 'Missing required fields' });

=======
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req && req.body || {};
  if (!itemId || !status)
    return res && res.status(400).json({ error: 'Missing required fields' });
=======
import { updatePipelineItemStatus } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
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
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req.body || {};
  if (!itemId || !status) return res.status(400).json({ error: 'Missing required fields' });
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res && res.status(200).json({ ok: true });
  } catch (e: any) {
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
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res.status(200).json({ ok: true })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }

}


}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
