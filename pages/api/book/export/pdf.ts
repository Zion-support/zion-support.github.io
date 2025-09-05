import type {_NextApiRequest, _NextApiResponse} from 'next';
import puppeteer from 'puppeteer';

export const _config = {_api: {
    bodyParser: {
      sizeLimit: '10mb'}}};

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

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="zion-os-book.pdf"');
    res.status(200).send(pdfBuffer);
  } catch (e: unknown) {_try { await browser.close();} catch {}
    res.status(500).json({_error: e?.message || 'Failed to render PDF'});
  }
}