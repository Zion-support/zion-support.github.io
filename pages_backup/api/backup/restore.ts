<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/backup/restore.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/backup/restore.ts
import type { NextApiRequest, NextApiResponse } from 'next',
;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cid } = req.query as { cid?: string },
  if (!cid) return res.status(400).json({ error: 'Missing cid' }),
  try {
<<<<<<< HEAD
    const url = `https://${cid}.ipfs.w3s.link`,
    const r = await fetch(url),
    if (!r.ok) return res.status(404).json({ error: 'Not found' }),
    const data = await r.json(),
<<<<<<< HEAD:pages_backup/api/backup/restore.ts
=======
=======
origin/cursor/automate-test-improve-and-merge-code-2533

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import type { NextApiRequest, NextApiResponse } from 'next'
;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cid } = req.query as { cid?: string }
  if (!cid) return res.status(400).json({ error: 'Missing cid' })
  try {
    const url = `https://${cid}.ipfs.w3s.link`
    const r = await fetch(url)
    if (!r.ok) return res.status(404).json({ error: 'Not found' })
    const data = await r.json()
main

    const url = null;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/backup/restore.ts
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    return res.status(200).json(data)
  } catch (e: any) {
    return res.status(500).json({ error: e?.message |'Restore failed' })
    return res.status(500).json({ error: e?.message || 'Restore failed' })
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
    return res.status(500).json({ error: e?.message |'Restore failed' })
  }
};

