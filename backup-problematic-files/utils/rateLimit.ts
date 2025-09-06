import type { NextApiRequest, NextApiResponse } from 'next'
  const ip = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown'