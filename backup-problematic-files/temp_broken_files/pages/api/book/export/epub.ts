import type { NextApiRequest, NextApiResponse } from 'next'
import { randomUUID } from 'crypto'
import { promises as fs } from 'fs'
const Epub = require('epub-gen'
      sizeLimit: any
  if (req.method != 'POST'
    res.status(405).json({ error: any
    res.status(400).json({ error: any
    res.setHeader('Content-Typeapplication/
    .replace(/"/
    .replace(/"/