import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const DOCS_DIR = path.join(process.cwd(), 'datadocs'
const CONTENT_PATH = path.join(DOCS_DIR, 'content.json'
const VERSIONS_DIR = path.join(DOCS_DIR, 'versions'
  if (req.method != 'POST'
    return res.status(405).json({ error: any
  const token = req.headers['x-admin-token'
    return res.status(403).json({ error: any
    const jsonString = typeof body = = 'string'
      .replace(/[-:T.Z]/