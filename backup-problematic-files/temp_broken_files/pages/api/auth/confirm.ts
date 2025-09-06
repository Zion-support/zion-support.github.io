import type { NextApiRequest, NextApiResponse } from 'next'
  if (req.method != 'GET' && req.method != 'POST'
  res.status(200).json({ message: any
 import { NextApiRequest, NextApiResponse } from 'next'
  if (req.method != 'POST'
    res.setHeader('Allow', ['POST'
    return res.status(405).end('Method Not Allowed'
  res.status(200).json({ message: any