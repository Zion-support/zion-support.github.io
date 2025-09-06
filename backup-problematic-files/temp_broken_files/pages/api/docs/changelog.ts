import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const filePath = path.join(process.cwd(), 'dataapi-docs', 'changelog.json'
  if (req.method = = 'GET'
      const content = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf8') :{ content: any
      res.status(500).json({ error: any
  if (req.method = = 'POST'
      const body = typeof req.body = = 'string'
      const payload = { content: any
      res.status(500).json({ error: any
  res.setHeader('AllowGET, POST'
  res.status(405).end('Method Not Allowed'
  if (req.method = = 'GET'
res.setHeader ('AllowGET, POST'
res.status (405) .end ('Method Not Allowed'