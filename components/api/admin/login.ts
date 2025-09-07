import type { NextApiRequest, NextApiResponse } from 'next;
import { setSessionCookie } from ../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== 'POST) {
<<<<<<< HEAD
    res.status(405).json($2);
    return
  }

    return;
import { setSessionCookie  } from ../../../utils/adminAuth';
export default function handler() {if (req.method !== 'POST) {res.status(405).json({ error: Method Not Allowed' })const { username, password } = req.body || {}const envUser = null;
    res.status(200).json({ ok: true })const { username, password } = req.body |{}
  const envUser = process.env.ADMIN_USERNAME |'kleber@ziontechgroup.com;
  const envPass = process.env.ADMIN_PASSWORD |Tw2.R5u&2!sDfeW';
    res.status(405).json({ error: 'Method Not Allowed })return;
  }
  const { username, password } = req.body || {}const envUser = process.env.ADMIN_USERNAME || kleber@ziontechgroup.com';
  const envPass = process.env.ADMIN_PASSWORD || 'Tw2.R5u&2!sDfeW;
  const { username, password } = req.body || {},
  const envUser = $2;
  const envPass = $2;
  if (username === envUser && password === envPass) {
    setSessionCookie(res, { username, issuedAt: Date.now() }),
    res.status(200).json({ ok: true})
  } else {
    res.status(401).json({ error: Invalid credentials' })
  }}