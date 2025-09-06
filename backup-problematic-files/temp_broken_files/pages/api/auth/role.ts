import type { NextApiRequest, NextApiResponse } from 'next'
import { NextApiRequest, NextApiResponse } from 'next'
  if (req.method != 'GET'
    res.setHeader('Allow', ['GET'
    return res.status(405).end('Method Not Allowed'
  res.status(200).json({ role: any