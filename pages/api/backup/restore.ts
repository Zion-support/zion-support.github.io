<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
=======
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  const { cid } = req.query as { cid?: string };
  if (!cid) return res.status(400).json({ error: 'Missing cid' });
  try {
    const url = `https://${cid}.ipfs.w3s.link`;
    const r = await fetch(url);
    if (!r.ok) return res.status(404).json({ error: 'Not found' });
    const data = await r.json();
<<<<<<< HEAD
    return res.status(200).json(data);
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Restore failed' });
  }
=======
    return res.status(200).json(data)
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Restore failed' })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
