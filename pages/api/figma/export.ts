import type { NextApiRequest, NextApiResponse } from 'next';
import JSZip from 'jszip';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }
    
    const { kind } = req.body;
    
    const map = { route: '/', products: [] }; // getZionDesignMap()
    const tokens = { colors: {}, typography: {} }; // await buildTokenSet()
    
    const zip = new JSZip();
    
    // Core files
    zip.file('map.json', JSON.stringify(map, null, 2));
    zip.file('tokens.json', JSON.stringify(tokens, null, 2));
    
    // UIKit folder
    const uikit = {}; // buildUIKit(kind)
    const uiFolder = zip.folder('uikit')!;
    Object.entries(uikit).forEach(([path, content]) => {
      uiFolder.file(path, content);
    });
    
    // README
    zip.file('README.md', `# Zion OS Design Export\n\n- kit: ${kind}\n- Import tokens via Token Studio in Figma.\n- Components included under /uikit.`);
    
    const buffer = await zip.generateAsync({ type: 'nodebuffer' });
    res.status(200).send(buffer);
  } catch (e: unknown) {
    res.status(500).json({
      error: (e as Error)?.message || 'Export failed'
    });
  }
}