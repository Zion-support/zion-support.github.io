export type AdminSession = {;
  username: string,;
  issuedAt: number;

import crypto from 'crypto'
import type { NextApiRequest, NextApiResponse } from 'next'
const COOKIE_NAME = 'admin_session'
  const secret = getEnv('ADMIN_SESSION_SECRETCHANGE_ME_DEV_SECRET'
  const payload = Buffer.from(JSON.stringify(session).toString('base64'
  const hmac = crypto.createHmac('sha256', secret).update(payload).digest('hex'
  const secret = getEnv('ADMIN_SESSION_SECRETCHANGE_ME_DEV_SECRET'
  const parts = token.split('.'
  const expected = crypto.createHmac('sha256', secret).update(payload).digest('hex'
    const session = JSON.parse(Buffer.from(payload, 'base64'
  const cookieHeader = req.headers.cookie || ''
  res.setHeader('Set-Cookie'
  res.setHeader('Set-Cookie'
  const key = req.headers['x-internal-key'
  const expected = getEnv('AGENT_INTERNAL_KEYDEV_INTERNAL_KEY'