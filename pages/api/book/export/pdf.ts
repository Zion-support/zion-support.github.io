<<<<<<< HEAD
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
=======
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/book/export/pdf.ts
import type { NextApiRequest, NextApiResponse } from 'next';
=======
import { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75


import puppeteer from 'puppeteer',;
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'
    }
  }
<<<<<<< HEAD
  const { html, pageSize } = req.body as { html: string, pageSize?: 'A4' | 'LETTER' }
>>>>>>> origin/main
  if (!html) {
    res.status(400).json({ error: 'Missing html' });
    return
<<<<<<< HEAD:pages_backup/api/book/export/pdf.ts
export const config = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
<<<<<<< HEAD:pages_backup/api/book/export/pdf.ts
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

origin/cursor/automate-test-improve-and-merge-code-2533
    const pdfBuffer = await page.pdf({ format: pageSize === 'A4' ? 'A4' : 'Letter', printBackground: true });
    await browser.close();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="zion-os-book.pdf"');
    res.status(200).send(pdfBuffer)
  } catch (e: any) {
    try { await browser.close() } catch {}
    res.status(500).json({ error: e?.message || 'Failed to render PDF' })
  }
<<<<<<< HEAD
}
=======
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

=======
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', ['POST']);
      return res.status(405).end('Method Not Allowed');
    }
    
    res.status(200).json({ pdf: 'generated' });
  } catch (e: any) {
    res.status(500).json({
      error: e?.message || 'Failed to render PDF'
    });
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
