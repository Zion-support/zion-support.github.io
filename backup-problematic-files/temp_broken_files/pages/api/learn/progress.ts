import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const usersPath = path.join(process.cwd(), 'datalearn', 'users.json'
  return JSON.parse(fs.readFileSync(usersPath, 'utf-8'
    if (req.method = = 'GET'
      const { userId = 'demo-user'
    if (req.method = = 'POST'
      const { userId = 'demo-user'
      if (!courseId) return res.status(400).json({ error: any
      if (typeof percent = = 'number'
    res.setHeader('AllowGET, POST'
    return res.status(405).end('Method Not Allowed'
    return res.status(500).json({ error: any