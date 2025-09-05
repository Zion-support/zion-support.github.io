<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cid } = req.query as { cid?: string },
  if (!cid) return res.status(400).json({ error: 'Missing cid' }),
  try {
    const url = `https://${cid}.ipfs.w3s.link`,
    const r = await fetch(url),
    if (!r.ok) return res.status(404).json({ error: 'Not found' }),
    const data = await r.json(),
    return res.status(200).json(data)
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Restore failed' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { cid} = req.query as {_cid?: string};
  if (!cid) return res.status(400).json({_error: 'Missing cid'});
  try {_const _url = `https://${cid}.ipfs.w3s.link`;
    const _r = await fetch(url);
    if (!r.ok) return res.status(404).json({_error: 'Not found'});
    const _data = await r.json();
    return res.status(200).json(data);
  } catch (e: unknown) {_return res.status(500).json({ error: e?.message || 'Restore failed'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}