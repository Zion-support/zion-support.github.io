<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import JSZip from 'jszip';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { kind = 'default' } = req.query as { kind?: string };
    
    const zip = new JSZip();
    const uikit = {
      'components/Button.json': JSON.stringify({ name: 'Button', type: 'component' }),
      'tokens/colors.json': JSON.stringify({ primary: '#007bff', secondary: '#6c757d' })
    };

    const uiFolder = zip.folder("uikit");
    Object.entries(uikit).forEach(([path, content]) => {
      uiFolder?.file(path, content);
    });

    // README
    zip.file('README.md', `# Zion OS Design Export\n\n- kit: ${kind}\n- Import tokens via Token Studio in Figma.\n- Components included under /uikit.`);

    const buffer = await zip.generateAsync({ type: 'nodebuffer' });
    
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename="zion-os-${kind}.zip"`);
    res.status(200).send(buffer);
  } catch (e: any) {
    console.error('Export error:', e);
    res.status(500).json({ error: e?.message || 'Export failed' });
=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
  }
}