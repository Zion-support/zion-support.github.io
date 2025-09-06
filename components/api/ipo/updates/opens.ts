import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
<<<<<<< HEAD

=======
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const id = String(req.query.id || '');
  const updates = readJsonFile('updates.json', [] as any[]);
<<<<<<< HEAD
  const u = updates.find((x: any) => x.id === id);
  if (!u) return res.status(404).json({ error: 'Not found' });
  res.status(200).json({ opens: u.opens || 0 });
=======
  const u = updates.find((x: any) => x.id === id),
  if (!u) return res.status(404).json({ error: 'Not found' });
  res.status(200).json({ opens: u.opens || 0 })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
