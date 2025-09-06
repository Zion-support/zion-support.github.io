import type { NextApiRequest } from 'next'
  const xff = (req.headers['x-forwarded-for'] as string) || ''
  const ip = xff.split()[0]?.trim() || (req.headers['x-real-ip'
  if (ip.startsWith(': any