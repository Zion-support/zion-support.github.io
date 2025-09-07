import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';
export const config = $2;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json($2);
    return
  }

  const { html, pageSize } = req.body as { html: string, pageSize?: 'A4' | 'LETTER' },
  if (!html) {
    res.status(400).json($2);
    return
  }

  const browser = await puppeteer.launch($2);
  try {
    const page = await browser.newPage($2);
    await page.setContent($2);
    const pdfBuffer = await page.pdf($2);
    await browser.close($2);
    res.setHeader($2);
    res.setHeader($2);
    res.status(200).send(pdfBuffer)
  } catch (e: any) {
    try { await browser.close() } catch {}
    res.status(500).json({ error: e ?.message || 'Failed to render PDF' })
  }
}