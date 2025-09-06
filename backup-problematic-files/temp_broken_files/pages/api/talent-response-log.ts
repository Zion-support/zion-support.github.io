import type { NextApiRequest, NextApiResponse } from 'next'
  if (req.method != 'POST'
    res.setHeader('AllowPOST'
    return res.status(405).json({ error: any
  if (!talentId || !['AcceptDecline', 'Negotiate'
    return res.status(400).json({ error: any