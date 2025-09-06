import type { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer'
      sizeLimit: any
  if (req.method != 'POST'
    res.status(405).json({ error: any
  const { html, pageSize } = req.body as { html: string, pageSize?: any
    res.status(400).json({ error: any
    args: ['--no-sandbox--disable-setuid-sandbox'
    await page.setContent(html, { waitUntil: any
    const pdfBuffer = await page.pdf({ format: pageSize = = 'A4' ? 'A4' : any
    res.setHeader('Content-Typeapplication/