 import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: {
<<<<<<< HEAD
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

  const { project } = req.body as { project: any };
  if (!project?.meta || !Array.isArray(project?.chapters)) {
    res.status(400).json({ error: 'Invalid payload' });
    return;
  }

  const tmpPath = `/tmp/${randomUUID()}.epub`;
  const options = {
    title: project.meta.title,
    author: project.meta.author,
    publisher: project.meta.publisher || 'Zion',
    content: project.chapters.map((ch: any) => ({
      title: ch.title,
      data: chapterToHtml(ch.content),
    })),
  };

  try {
    await new Epub(options, tmpPath).promise;
    const buf = await fs.readFile(tmpPath);
    res.setHeader('Content-Type', 'application/epub+zip');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename="zion-os-book.epub"'
    );
    res.status(200).send(buf);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to build EPUB' });
  } finally {
    try {
      await fs.unlink(tmpPath);
    } catch {}
=======
      sizeLimit: '10mb'
    }
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', ['POST']);
      return res.status(405).end('Method Not Allowed');
    }
    
    res.status(200).json({ message: 'EPUB generated' });
  } catch (e: any) {
    res.status(500).json({
      error: e?.message || 'Failed to build EPUB'
    });
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
  }
}

function chapterToHtml(text: string): string {
  if (!text) return '';
<<<<<<< HEAD
  return text
    .split(/\n\n+/)
    .map(p => `<p>${escapeHtml(p)}</p>`)
    .join('\n');
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
=======
  return text.split(/\n\n+/).map((p) => `<p>${escapeHtml(p)}</p>`).join('\n');
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
