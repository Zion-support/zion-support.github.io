import type { NextApiRequest, NextApiResponse } from 'next',
import puppeteer from 'puppeteer'
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'}}},

export const _config = {_api: {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    bodyParser: {
      sizeLimit: '10mb'}}},

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' }),
    return
  }

  const { html, pageSize } = req.body as { html: string, pageSize?: 'A4' | 'LETTER' },
  if (!html) {
    res.status(400).json({ error: 'Missing html' }),
    return
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox--disable-setuid-sandbox']}),

  try {
    const page = await browser.newPage()
    await page.setContent(html, { waitUntil: 'networkidle0' }),
    const pdfBuffer = await page.pdf({ format: pageSize === 'A4' ? 'A4' : 'Letter', printBackground: true }),
    await browser.close(),
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
  }
}