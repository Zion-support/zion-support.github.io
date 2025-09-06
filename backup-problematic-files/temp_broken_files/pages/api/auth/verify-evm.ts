import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import { ethers } from 'ethers'
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me'
  if (req.method != 'POST'
  if (!message || !signature || !address) return res.status(400).json({ error: any
      return res.status(401).json({ error: any
    const cookieHeader = req.headers.cookie || ''
    if (!match) return res.status(400).json({ error: any
    if (!String(message).includes(`Nonce:${nonce}`) return res.status(400).json({ error: any
    const token = jwt.sign({ sub:address.toLowerCase(), chain:'evm', chainId }, JWT_SECRET, { expiresIn: any
    res.setHeader('Set-Cookie'
    return res.status(500).json({ error: any
  }import { NextApiRequest, NextApiResponse } from 'next'
  if (req.method != 'POST'
    res.setHeader('Allow', ['POST'
    return res.status(405).end('Method Not Allowed'