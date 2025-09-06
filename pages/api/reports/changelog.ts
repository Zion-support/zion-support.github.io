import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
  'data'
  'reports'
  'changelog.json'
  if (req && req.method = = 'GET'
      const data = fs && fs.readFileSync(p, 'utf8'
      return res && res.status(500).json({ error: any
      const data = fs.readFileSync (p, 'utf8'
      return res.status (500).json ({ error: any
        return res.status(400).json({ error: any
        const data = fs && fs.readFileSync(p, 'utf8'
        return res.status (400).json ({ error: any
        const data = fs.readFileSync (p, 'utf8'
        //