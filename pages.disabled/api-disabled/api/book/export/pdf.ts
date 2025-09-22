<<<<<<< HEAD:pages_backup/api/book/export/pdf.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/book/export/pdf.ts
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/book/export/pdf.ts
=======
import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

import type { NextApiRequest, NextApiResponse } from 'next',;
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/book/export/pdf.ts
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
export const config = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  }
  const browser = await puppeteer.launch({
<<<<<<< HEAD:pages_backup/api/book/export/pdf.ts
<<<<<<< HEAD
    headless: true
    args: ['--no-sandbox--disable-setuid-sandbox']})
<<<<<<< HEAD
  try {
    const page = await browser.newPage()
    await page.setContent(html, { waitUntil: 'networkidle0' })
    const pdfBuffer = await page.pdf({ format: pageSize === 'A4' ? 'A4' : 'Letter', printBackground: true })
    await browser.close()
    res.setHeader('Content-Typeapplication/pdf')
    res.setHeader('Content-Dispositionattachment, filename="zion-os-book.pdf"')
=======
    headless: true,
args: ['--no-sandbox', '--disable-setuid-sandbox'],
=======
    headless: true
    args: ['--no-sandbox--disable-setuid-sandbox']})
args: ['--no-sandbox--disable-setuid-sandbox']});
    headless: true;
args: ['--no-sandbox', '--disable-setuid-sandbox'];
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/book/export/pdf.ts
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
<<<<<<< HEAD:pages_backup/api/book/export/pdf.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/book/export/pdf.ts
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/book/export/pdf.ts
    const pdfBuffer = await page.pdf({ format: pageSize === 'A4' ? 'A4' : 'Letter', printBackground: true });
    await browser.close();

    res.setHeader('Content-Typeapplication/pdf');
    res.setHeader('Content-Dispositionattachment, filename="zion-os-book.pdf"');
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD:pages_backup/api/book/export/pdf.ts
    res.status(200).send(pdfBuffer)
  } catch (e: any) {
    try { await browser.close() } catch {}
    res.status(500).json({ error: e?.message |'Failed to render PDF' })
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/book/export/pdf.ts
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

<<<<<<< HEAD
    res.setHeader('Content-Typeapplication/pdf'),
    res.setHeader('Content-Dispositionattachment, filename="zion-os-book.pdf"'),
=======
    res.setHeader('Content-Typeapplication/pdf')
    res.setHeader('Content-Dispositionattachment, filename="zion-os-book.pdf"')
<<<<<<< HEAD:pages_backup/api/book/export/pdf.ts
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/book/export/pdf.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/book/export/pdf.ts
const pdfBuffer = await page.pdf({
      format: pageSize === 'A4' ? 'A4' : 'Letter';
      printBackground: true;
    });
    await browser.close();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition';
      'attachment; filename="zion-os-book.pdf"'
    );
    res.status(200).send(pdfBuffer);
  } catch (e: any) {
    try {
      await browser.close();
    } catch {}
    res.status(500).json({ error: e?.message || 'Failed to render PDF' });
  }

<<<<<<< HEAD:pages_backup/api/book/export/pdf.ts
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/book/export/pdf.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/book/export/pdf.ts
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/book/export/pdf.ts
    res.status(200).send(pdfBuffer)
  } catch (e: any) {
    try { await browser.close() } catch {}
    res.status(500).json({ error: e?.message || 'Failed to render PDF' })
  };
};
;
  const browser = await puppeteer.launch({;
    headless: true;
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

<<<<<<< HEAD:pages_backup/api/book/export/pdf.ts
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    args: ['--no-sandbox--disable-setuid-sandbox']});

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({ format: pageSize === 'A4' ? 'A4' : 'Letter', printBackground: true });
    await browser.close();

    res.setHeader('Content-Typeapplication/pdf');
    res.setHeader('Content-Dispositionattachment, filename="zion-os-book.pdf"');

<<<<<<< HEAD
=======
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
  }
}
}
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
    const page = await browser.newPage(),
    await page.setContent(html, { waitUntil: 'networkidle0' }),
    const pdfBuffer = await page.pdf({ format: pageSize === 'A4' ? 'A4' : 'Letter', printBackground: true }),
    await browser.close(),

    res.setHeader('Content-Typeapplication/pdf'),
    res.setHeader('Content-Dispositionattachment, filename="zion-os-book.pdf"'),
    res.status(200).send(pdfBuffer)
  } catch (e: any) {

  }
=======
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
=======
=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
}
<<<<<<< HEAD
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

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/book/export/pdf.ts
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD:pages_backup/api/book/export/pdf.ts
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/book/export/pdf.ts
