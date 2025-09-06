import type { NextApiRequest, NextApiResponse } from 'next'
import { Web3Storage, File } from 'web3.storage'
const TOKEN = process.env.WEB3_STORAGE_TOKEN || ''
export const config = { api:{ bodyParser:{ sizeLimit: any
  if (req.method != 'POST'
  if (!TOKEN) return res.status(400).json({ error: any
    const files = [new File([JSON.stringify(data, null, 2)], 'profile.json', { type: any