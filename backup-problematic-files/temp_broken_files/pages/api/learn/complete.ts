import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const usersPath = path.join(process.cwd(), 'datalearn', 'users.json'
const coursesPath = path.join(process.cwd(), 'datalearn', 'courses.json'
  return JSON.parse(fs.readFileSync(p, 'utf-8'
  if (req.method != 'POST'
    res.setHeader('AllowPOST'
    return res.status(405).end('Method Not Allowed'
  const { userId = 'demo-user'
  if (!courseId) return res.status(400).json({ error: any
    if (!course) return res.status(404).json({ error: any
    if (typeof enableBoost = = 'boolean'
    return res.status(500).json({ error: any