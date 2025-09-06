import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth';
import { getFlagById } from '../../../../../utils/moderationDb';
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const user = parseUserFromRequest(req);
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }); }

  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
=======

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req);
  try {
    ensureAdmin(user);
  } catch (e: any) {
    return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
 
}

  const { id } = req.query;
  if (typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid id' });
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

  if (req.method === 'GET') {
    const flag = await getFlagById(id);
    if (!flag) return res.status(404).json({ error: 'Not found' });
    return res.status(200).json({ flag });
 
}

<<<<<<< HEAD
  res.setHeader('AllowGET');
  return res.status(405).end('Method Not Allowed')
}
=======
  const user = parseUserFromRequest(req)
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode |403).json({ error: 'Forbidden' }) }
  const { id } = req.query
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' })
  if (req.method === 'GET') {
    const flag = await getFlagById(id)
    if (!flag) return res.status(404).json({ error: 'Not found' })
    return res.status(200).json({ flag })
  }
  res.setHeader('AllowGET')
  return res.status(405).end('Method Not Allowed');
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
  res.setHeader('Allow', 'GET');
  return res.status(405).end('Method Not Allowed');
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
