import type { NextApiRequest, NextApiResponse } from 'next';
import JSZip from 'jszip';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { kind } = req.body;
    
    if (!kind) {
      return res.status(400).json({ error: 'Design kind required' });
    }

    const zip = new JSZip();
    const map = getZionDesignMap();
    const tokens = await buildTokenSet();

    // Core files
    zip.file('map.json', JSON.stringify(map, null, 2));
    zip.file('tokens.json', JSON.stringify(tokens, null, 2));

    // UIKit folder
    const uikit = buildUIKit(kind);
    const uiFolder = zip.folder('uikit');
    Object.entries(uikit).forEach(([path, content]) => {
      uiFolder?.file(path, content);
    });

    // README
    zip.file('README.md', `# Zion OS Design Export\n\n- kit: ${kind}\n- Import tokens via Token Studio in Figma.\n- Components included under /uikit.`);

    const buffer = await zip.generateAsync({ type: 'nodebuffer' });
    
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename="zion-design-${kind}.zip"`);
    res.status(200).send(buffer);
  } catch (e: unknown) {
    res.status(500).json({ error: 'Export failed' });
  }
}

function getZionDesignMap() {
  return {
    version: '1.0.0',
    components: []
  };
}

async function buildTokenSet() {
  return {
    colors: {},
    typography: {}
  };
}

function buildUIKit(kind: string) {
  return {
    'button.json': JSON.stringify({ type: 'button', kind }, null, 2),
    'input.json': JSON.stringify({ type: 'input', kind }, null, 2)
  };
}