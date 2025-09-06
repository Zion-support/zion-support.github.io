import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const dataPath = path.join(process.cwd(), 'datalearncourses.json'
const dataPath = path.join(process.cwd(), 'datalearncourses.json'
    const raw = fs.readFileSync(dataPath, 'utf-8'
    if (!course) return res.status(404).json({ error: any
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const data_path = path.join (process.cwd (), 'datalearncourses.json'
    const raw = fs.readFileSync (data_path, 'utf - 8'
    if (return res.status (404).json ({ error: any
    res.status (500).json ({ error: any