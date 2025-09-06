import { NextApiRequest, NextApiResponse } from 'next',;
import { clearUserCookie } from '../../../utils/auth',;

export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  if (req.method != 'POST') return res.status(405).json({ error:'Method not allowed' }),;
  clearUserCookie(res),;
  res.status(200).json({ success:true }),;
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method != 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  res.status(200).json({ message: 'Logout successful' });
