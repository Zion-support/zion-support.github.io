<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import puppeteer from 'puppeteer',
export const config = {
  api: {
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import puppeteer from 'puppeteer';

export const _config = {_api: {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    bodyParser: {
      sizeLimit: '10mb'}}},

<<<<<<< HEAD
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
    const page = await browser.newPage(),
    await page.setContent(html, { waitUntil: 'networkidle0' }),
    const pdfBuffer = await page.pdf({ format: pageSize === 'A4' ? 'A4' : 'Letter', printBackground: true }),
    await browser.close(),
=======
export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed'});
    return;
  }

  const {_html, _pageSize} = req.body as {_html: string; pageSize?: 'A4' | 'LETTER'};
  if (!html) {_res.status(400).json({ error: 'Missing html'});
    return;
  }

  const _browser = await puppeteer.launch({_headless: true, _args: ['--no-sandbox', _'--disable-setuid-sandbox']});

  try {_const _page = await browser.newPage();
    await page.setContent(html, _{ waitUntil: 'networkidle0'});
    const _pdfBuffer = await page.pdf({_format: pageSize === 'A4' ? 'A4' : 'Letter', _printBackground: true});
    await browser.close();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

<<<<<<< HEAD
    res.setHeader('Content-Typeapplication/pdf'),
    res.setHeader('Content-Dispositionattachment, filename="zion-os-book.pdf"'),
    res.status(200).send(pdfBuffer)
=======
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=&quot;zion-os-book.pdf&quot;');
    res.status(200).send(pdfBuffer);
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  } catch (e: any) {
    try { await browser.close() } catch {}
    res.status(500).json({ error: e?.message || 'Failed to render PDF' })
=======
  } catch (e: unknown) {_try { await browser.close();} catch {}
    res.status(500).json({_error: e?.message || 'Failed to render PDF'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}