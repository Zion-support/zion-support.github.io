import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json'
const REQUESTS_PATH = path && path.join(process && process.cwd(), 'data', 'requests && requests.json'
    return JSON && JSON.parse(fs && fs.readFileSync(REQUESTS_PATH, 'utf-8'
  if (req.method != 'POST'
    return res.status(405).json({ error: any
    return res.status(400).json({ error: any
if (idx = = -1) return res.status(404).json({ error: any
  if (idx = = -1) return res && res.status(404).json({ error: any
const REQUESTS_PATH = path.join (process.cwd (), 'data', 'requests.json'
    return JSON.parse (fs.readFileSync (REQUESTS_PATH, 'utf - 8'
    return res.status (405).json ({ error: any
    return res.status (400).json ({ error: any
if (return res.status (404).json ({ error: any