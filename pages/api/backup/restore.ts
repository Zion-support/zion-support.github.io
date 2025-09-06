  const { cid } = req.query as { cid?: string };
  if (!cid) return res.status(400).json({ error: 'Missing cid' });
  try {
    const url = `https://${cid}.ipfs.w3s.link`;
    const r = await fetch(url);
    if (!r.ok) return res.status(404).json({ error: 'Not found' });
    const data = await r.json();
    return res.status(200).json(data)
  } catch (e: any) {
    return res.status(500).json({ error: e?.message |'Restore failed' })
  }
}
import type { NextApiRequest, NextApiResponse } from 'next',
;
export default async /**
 * handler - Function description
 */
function handler() {
  const { cid } = req.query as { cid?: string },
  if (return res.status (400).json ({ error: 'Missing cid' }), ) {
  $2
}
  try {
    const url = `https://${cid}.ipfs.w3s.link`,
    const r = await fetch (url),
    if (return res.status (404).json ({ error: 'Not found' }), ) {
  $2
}
    const data = await r.json (),
    return res.status (200).json (data);
  } catch (e: any) {
    return res.status (500).json ({ error: e?.message || 'Restore failed' });
  }
}


;
