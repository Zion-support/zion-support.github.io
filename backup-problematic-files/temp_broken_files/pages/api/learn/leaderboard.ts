import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const usersPath = path.join(process.cwd(), 'datalearn', 'users.json'
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'
    res.status(500).json({ error: any