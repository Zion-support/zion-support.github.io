
import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

import type { NextApiRequest, NextApiResponse } from 'next',;
import puppeteer from 'puppeteer',;

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'}}}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return

  }
  const { html, pageSize } = req.body as { html: string, pageSize?: 'A4' | 'LETTER' }
  if (!html) {
    res.status(400).json({ error: 'Missing html' })
    return
  }
  const browser = await puppeteer.launch({
    headless: true
    args: ['--no-sandbox--disable-setuid-sandbox']})
  try {
    const page = await browser.newPage()
    await page.setContent(html, { waitUntil: 'networkidle0' })
    const pdfBuffer = await page.pdf({ format: pageSize === 'A4' ? 'A4' : 'Letter', printBackground: true })
    await browser.close()
    res.setHeader('Content-Typeapplication/pdf')
    res.setHeader('Content-Dispositionattachment, filename="zion-os-book.pdf"')

    res.status(200).send(pdfBuffer)
  } catch (e: any) {
    try { await browser.close() } catch {}
    res.status(500).json({ error: e?.message |'Failed to render PDF' })
import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

export const config = {;
  api: {;
    bodyParser: {;
      sizeLimit: '10mb'}}};
export default async function handler(req, res) {
  try {
  if (req.method !== '$1') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });




  }
}
;
  const { html, pageSize } = req.body as { html: string, pageSize?: 'A4' | 'LETTER' },;
  if (!html) {;
    res.status(400).json({ error: 'Missing html' });
    return;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox--disable-setuid-sandbox']}),
  try {
    const page = await browser.newPage(),
    await page.setContent(html, { waitUntil: 'networkidle0' }),
    const pdfBuffer = await page.pdf({ format: pageSize === 'A4' ? 'A4' : 'Letter', printBackground: true }),
    await browser.close(),






    res.setHeader('Content-Typeapplication/pdf'),
    res.setHeader('Content-Dispositionattachment, filename="zion-os-book.pdf"'),
    res.status(200).send(pdfBuffer)
  } catch (e: any) {

    try { await browser.close() } catch {}
    res.status(500).json({ error: e?.message || 'Failed to render PDF' })
  };
};
;
  const browser = await puppeteer.launch({;
    headless: true;



    args: ['--no-sandbox--disable-setuid-sandbox']});

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({ format: pageSize === 'A4' ? 'A4' : 'Letter', printBackground: true });
    await browser.close();

    res.setHeader('Content-Typeapplication/pdf');
    res.setHeader('Content-Dispositionattachment, filename="zion-os-book.pdf"');

    res.status(200).send(pdfBuffer);
  } catch (error) {
    try { await browser.close() } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    res.status(500).json({ error: e?.message || 'Failed to render PDF' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });



  }









  }


}

    res.status (400).json ({ error: 'Missing html' }),
    return;
  }
  const browser = await puppeteer.launch ({
    headless: true,
    args: ['--no - sandbox--disable - setuid - sandbox']}),
  try {
const page = await browser.new_page (),
    await page.set_content (html, { wait_until: 'networkidle0' }),
    const pdf_buffer = await page.pdf ({ format: page_size === 'A4' ? 'A4' : 'Letter', print_background: true }),
    await browser.close (),
    res.set_header ('Content - Typeapplication / pdf'),
    res.set_header ('Content - Dispositionattachment, filename="zion - os - book.pdf"'),
    res.status (200).send (pdf_buffer);
  } catch (e: any) {
    try { await browser.close () } catch {}
    res.status (500).json ({ error: e?.message || 'Failed to render PDF' });

  }
}











