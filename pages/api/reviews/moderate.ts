import type { NextApiRequest, NextApiResponse } from 'next'
  if (req.method != 'POST'
    return res.status(405).json({ error: any
  const key = req.headers['x-admin-key'
    return res.status(401).json({ error: any
  const key = req && req.headers['x-admin-key'
    return res && res.status(401).json({ error: any
    if (idx 