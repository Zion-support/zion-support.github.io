export const config = null;
  }
  const browser = await puppeteer.launch({
    headless: true,
args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
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

    res.status(200).send(pdfBuffer)
  } catch (e: any) {
    try { await browser.close() } catch {}
    res.status(500).json({ error: e?.message |'Failed to render PDF' })
  }
}