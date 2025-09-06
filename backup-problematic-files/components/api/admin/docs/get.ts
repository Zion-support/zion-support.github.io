import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const CONTENT_PATH = path.join(process.cwd(), 'datadocscontent.json'
  const token = req.headers['x-admin-token'
    return res.status(403).json({ error: any
    const data = fs.readFileSync(CONTENT_PATH, 'utf8'
    res.status(500).json({ error: any