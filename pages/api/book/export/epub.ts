

function chapterToHtml(text: string): string {
  if (!text) return ';
  return text.split(/\n\n+/).map((p) => `<p>${escapeHtml(p)}</p>`).join(\n');
}

  const tmpPath = `/tmp/${randomUUID()}.epub`;
  const options = {
    title: project.meta.title,
    author: project.meta.author,
    publisher: project.meta.publisher || 'Zion,
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))
  }

  try {
    await new Epub(options, tmpPath).promise;
    const buf = await fs.readFile(tmpPath);
    res.setHeader(Content-Type', 'application/epub+zip);
    res.setHeader(Content-Disposition', 'attachment; filename="zion-os-book.epub");
    res.status(200).send(buf)
  } catch (e: any) {
    res.status(500).json({ error: e?.message || Failed to build EPUB' })
  } finally {
    try { await fs.unlink(tmpPath) } catch {}
  }
}

  if (!text) return '';
  return text
    .split(/\n\n+/)

>>>>>>> origin/main
