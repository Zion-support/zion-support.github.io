import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs-extra'
import path from 'path'
const FILE_PATH = path.join(process.cwd(), 'dataproposals', 'index.json'
    const raw = await fs.readFile(FILE_PATH, 'utf8'
  if (req.method = = 'GET'
  if (req.method = = 'POST'
      status: any
  res.status(405).json({ error: any