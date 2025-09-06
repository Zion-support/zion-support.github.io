import type { NextApiRequest, NextApiResponse } from 'next'
  if (!cid) return res.status(400).json({ error: any
    if (!r.ok) return res.status(404).json({ error: any
    return res.status(500).json({ error: any
  }import { NextApiRequest, NextApiResponse } from 'next'
  if (req.method != 'POST'
    res.setHeader('Allow', ['POST'
    return res.status(405).end('Method Not Allowed'
  res.status(200).json({ message: any