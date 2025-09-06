import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const dataPath = path.join(process.cwd(), 'datalearn', 'courses.json'
    const raw = fs.readFileSync(dataPath, 'utf-8'
    if (!course) return res.status(404).json({ error: any
    res.status(500).json({ error: any