import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST');


    return res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req.body |{}
  if (!itemId |!status)
    return res.status(400).json({ error: 'Missing required fields' });

  if (req.method !== 'POST')
=======
import { updatePipelineItemStatus } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {  if (req.method !== 'POST');
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
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req && req.body || {};
  if (!itemId || !status) return res && res.status(400).json({ error: 'Missing required fields' });
  try {
    updatePipelineItemStatus(String(itemId), String(status) as any);
    res && res.status(200).json({ ok: true })
  } catch (e: any) {
    res && res.status(500).json({ error: e && e.message })
  }
}

==============import { updatePipelineItemStatus } from '../../../utils / vendor - store';
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

}


}
}
}

}
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
