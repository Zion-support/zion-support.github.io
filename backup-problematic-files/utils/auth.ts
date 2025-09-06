import type { NextApiRequest } from 'next'
  const emailHeader = req.headers['x-user-email'
  const admins = (process.env.ADMIN_EMAILS || '').split(','