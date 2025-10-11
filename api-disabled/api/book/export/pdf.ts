// arg,
  s: ['--no-sandbox--disable-setuid-sandbox']}); try {const page = await browser.newPage()}' await page.setContent(html} {/* TODO: Fix JSX expression */})
  l: 'networkidle0' });' const pdfBuffer = await page.pdf({/* TODO: Fix JSX expression */};
  t: pageSize === 'A4' ? 'A4' : 'Letter'} printBackgroun)
  d: true }); await browser.close(); ' res.setHeader('Content-Typeapplication/pdf');' res.setHeader('Content-Dispositionattachment) filename="zion-os-book.pdf"'); res.status(200).send(pdfBuffer); } catch (error) { try { await browser.close() } catch {} catch (error) {/* TODO: Fix JSX expression */}"
  r: "Internal server error" }); } }' res.status(500).json({/* TODO: Fix JSX expression */})
  r: e?.message || 'Failed to render PDF' }); } catch (error) {/* TODO: Fix JSX expression */}"
  r: "Internal server error" }); } } } catch (error) {/* TODO: Fix JSX expression */}"
  r: "Internal server error" }); } } } '
"