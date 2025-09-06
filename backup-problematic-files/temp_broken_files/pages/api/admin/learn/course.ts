import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const coursesPath = path.join(process.cwd(), 'datalearn', 'courses.json'
  if (req.method != 'POST'
    res.setHeader('AllowPOST'
    return res.status(405).end('Method Not Allowed'
    const raw = fs.readFileSync(coursesPath, 'utf-8'
    res.status(500).json({ error: any
  }import { NextApiRequest, NextApiResponse } from 'next'
  res.status(200).json({ message: any