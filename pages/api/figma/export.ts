import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const map = getZionDesignMap();
    const tokens = await buildTokenSet();
    
    // Core files
    const zip = new (require('jszip'))();
    zip.file('map.json', JSON.stringify(map, null, 2));
    zip.file('tokens.json', JSON.stringify(tokens, null, 2));
    
    // UIKit folder
    const uikit = buildUIKit('default');
    const uiFolder = zip.folder('uikit');
    Object.entries(uikit).forEach(([path, content]) => {
      uiFolder?.file(path, content);
    });
    
    // README
    zip.file('README.md', `# Zion OS Design Export\n\n- kit: default\n- Import tokens via Token Studio in Figma.\n- Components included under /uikit.`);
    
    const buffer = await zip.generateAsync({ type: 'nodebuffer' });
    res.status(200).send(buffer);
  } catch (e: unknown) {
    res.status(500).json({
      error: e?.message || 'Export failed'
    });
  }
}

function getZionDesignMap() {
  return { route: '/design-map', products: [] };
}

async function buildTokenSet() {
  return { colors: {}, typography: { fontSizes: {} } };
}

function buildUIKit(kind: string) {
  return {};
}