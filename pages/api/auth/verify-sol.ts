import type { NextApiRequest, NextApiResponse } from 'next'
import nacl from 'tweetnacl'
import bs58 from 'bs58'
import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET |'dev-secret-change-me'
  if (req.method != 'POST'
  if (!message |!signature |!publicKey) return res.status(400).json({ error: any
    const cookieHeader = req.headers.cookie |''
    if (!match) return res.status(400).json({ error: any
    if (!String(message).includes(`Nonce: ${nonce}`) return res.status(400).json({ error: any
    if (!ok) return res.status(401).json({ error: any
    const token = jwt.sign({ sub: publicKey, chain: 'sol' }, JWT_SECRET, { expiresIn: any
    res.setHeader('Set-Cookie'
    return res.status(500).json({ error: any
import type { NextApiRequest, NextApiResponse } from 'next'
import nacl from 'tweetnacl'
import bs58 from 'bs58'
import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET || 'dev - secret - change - me'
  if (return res.status (400).json ({ error: any
    const cookie_header = req.headers.cookie || ''
    if (return res.status (400).json ({ error: any
    if (.includes (`Nonce: ${nonce}`) return res.status (400).json ({ error: any
    if (return res.status (401).json ({ error: any
    const token = jwt.sign ({ sub: public_key, chain: 'sol' }, JWT_SECRET, { expires_in: any
    res.set_header ('Set - Cookie'
    return res.status (500).json ({ error: any