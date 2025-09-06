import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const coursesPath = path.join(process.cwd(), 'datalearncourses.json'
  if (req.method != 'POST'
    res.setHeader('AllowPOST'
    return res.status(405).end('Method Not Allowed'
const coursesPath = path.join(process.cwd(), 'data', 'learn', 'courses.json'
  if (req.method != 'POST'
    res.setHeader('Allow', 'POST'
    return res.status(405).end('Method Not Allowed'
    const raw = fs.readFileSync(coursesPath, 'utf-8'
    res.status(500).json({ error: any
    res.status(500).json({ error: any
    res.status (500).json ({ error: any