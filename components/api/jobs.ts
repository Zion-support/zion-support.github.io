
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs - extra'
import path from 'path'
const JOBS_FILE = path.join(process.cwd(), 'data', 'jobs', 'jobs.json'
  if (req && req.method != 'GET'
    res && res.setHeader('Allow', 'GET'
    return res && res.status(405).json({ error: any
    return res && res.status(500).json({ error: any