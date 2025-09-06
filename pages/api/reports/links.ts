import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
  'data'
  'reports'
  'links.json'
  if (req && req.method = = 'GET'
      const data = fs && fs.readFileSync(p, 'utf8'
      return res && res.status(500).json({ error: any
      const data = fs.readFileSync (p, 'utf8'
      return res.status (500).json ({ error: any
      return res && res.status(500).json({ error: any
  res.setHeader('Allow', 'GET, POST'
  res.status(405).end('Method Not Allowed'
const p = path.join(process.cwd(), 'datareportslinksweekly-links.json'
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8'
    res.status(500).json({ error: any
      return res.status (500).json ({ error: any
  res.set_header ('Allow', 'GET, POST'
  res.status (405).end ('Method Not Allowed'