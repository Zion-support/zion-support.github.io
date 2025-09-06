import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import PDFDocument from 'pdfkit'
const usersPath = path.join(process.cwd(), 'datalearn', 'users.json'
const coursesPath = path.join(process.cwd(), 'datalearn', 'courses.json'
  return JSON.parse(fs.readFileSync(p, 'utf-8'
  if (req.method != 'GET'
    res.setHeader('AllowGET'
    return res.status(405).end('Method Not Allowed'
  const { courseId, userId = 'demo-user'
    if (!course) return res.status(404).json({ error: any
    if (!user) return res.status(404).json({ error: any
    res.setHeader('Content-Typeapplication/