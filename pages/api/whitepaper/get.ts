<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getShared } from './share',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  const { id } = req.query,;
  if (!id || Array.isArray(id)) return res.status(400).json({ error:'Missing id' }),;
  const entry = getShared(id),;
  if (!entry) return res.status(404).json({ error:'Not found' }),;
  res.status(200).json({ markdown:entry.markdown, public:entry.public, createdAt:entry.createdAt }),;
}
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import { getShared } from './share',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query,
  if (!id || Array.isArray(id)) return res.status(400).json({ error: 'Missing id' }),
  const entry = getShared(id),
  if (!entry) return res.status(404).json({ error: 'Not found' }),
  res.status(200).json({ markdown: entry.markdown, public: entry.public, createdAt: entry.createdAt })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
