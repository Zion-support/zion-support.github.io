import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const REQUESTS_PATH = path.join(process.cwd(), 'datarequests.json'
    return JSON.parse(fs.readFileSync(REQUESTS_PATH, 'utf-8'
  if (req.method != 'POST') return res.status(405).json({ error: any
  if (!id || !status) return res.status(400).json({ error: any
  if (idx = = -1) return res.status(404).json({ error: any