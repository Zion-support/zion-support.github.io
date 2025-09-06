<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import puppeteer from 'puppeteer',;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import type { NextApiRequest, NextApiResponse } from 'next',;
import puppeteer from 'puppeteer',;
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'}}}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
=======
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
  }
}
}
=======


  }

}

}

=======
import type { NextApiRequest, NextApiResponse } from 'next',
import puppeteer from 'puppeteer',
export const config = {
  api: {
    body_parser: {
      size_limit: '10mb'}}},
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.status (405).json ({ error: 'Method not allowed' }),
    return;
  }
  const { html, page_size } = req.body as { html: string, page_size?: 'A4' | 'LETTER' },
  // Check condition
if ( {) {
  $2
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


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
