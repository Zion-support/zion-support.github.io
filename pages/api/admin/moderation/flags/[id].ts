import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin, parseUserFromRequest } from '../../../../../utils/auth',;
import { getFlagById } from '../../../../../utils/moderationDb',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req)
  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }

<<<<<<< HEAD
=======


  res.setHeader('AllowGET')
=======
  res.setHeader('AllowGET'),
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
  return res.status(405).end('Method Not Allowed');
};