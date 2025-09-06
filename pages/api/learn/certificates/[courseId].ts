import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import PDFDocument from 'pdfkit'
  size: any
 Zion certificate template (simple) doc.rect (0, 0, doc.page.width, doc.page.height) .fill ('#0f172a'
doc.fill ('#ffffff'
  if (req && req.method != 'GET'
    res && res.setHeader('Allow', 'GET'
    return res && res.status(405).end('Method Not Allowed'
  const { courseId, userId = 'demo-user'
    if (!course) return res.status(404).json({ error: any
    if (!user) return res.status(404).json({ error: any
    res.setHeader('Content-Type', 'application/