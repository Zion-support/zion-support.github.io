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
    return;
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'}}};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return
  }

  const { html, pageSize } = req.body as { html: string, pageSize?: 'A4' | 'LETTER' };
  if (!html) {
    res.status(400).json({ error: 'Missing html' });
    return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  const browser = await puppeteer.launch({
    headless: true,
<<<<<<< HEAD
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
=======
    args: ['--no-sandbox--disable-setuid-sandbox']});
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

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
    res.status(500).json({ error: e?.message || 'Failed to render PDF' });
  }
=======
    const pdfBuffer = await page.pdf({ format: pageSize === 'A4' ? 'A4' : 'Letter', printBackground: true });
    await browser.close();

    res.setHeader('Content-Typeapplication/pdf');
    res.setHeader('Content-Dispositionattachment, filename="zion-os-book.pdf"');
    res.status(200).send(pdfBuffer)
  } catch (e: any) {
    try { await browser.close() } catch {}
    res.status(500).json({ error: e?.message || 'Failed to render PDF' })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
