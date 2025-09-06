<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'}}};
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { html, pageSize } = req.body as {
    html: string;
    pageSize?: 'A4' | 'LETTER';
  };
  if (!html) {
    res.status(400).json({ error: 'Missing html' });
<<<<<<< HEAD
    return;  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
=======
    return;
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  });
  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
<<<<<<< HEAD
    const pdfBuffer = await page.pdf({
      format: pageSize === 'A4' ? 'A4' : 'Letter',
      printBackground: true,
    });
    await browser.close();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename="zion-os-book.pdf"'
    );
    res.status(200).send(pdfBuffer);
  } catch (e: any) {
    try {
      await browser.close();
    } catch {}
=======
    const pdfBuffer = await page.pdf({ format: pageSize === 'A4' ? 'A4' : 'Letter', printBackground: true });
    await browser.close();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="zion-os-book.pdf"');
    res.status(200).send(pdfBuffer);
  } catch (e: any) {
    try { await browser.close() } catch {}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    res.status(500).json({ error: e?.message || 'Failed to render PDF' });
  }
}