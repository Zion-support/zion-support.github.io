
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs - extra'
import path from 'path'
  'data'
  'certifications'
  'certifications.json'
  if (req.method != 'GET'
    res.setHeader('Allow', 'GET'
    return res.status(405).json({ error: any