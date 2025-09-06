import type { NextApiRequest, NextApiResponse } from 'next';
import JSZip from 'jszip';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { kind = 'default' } = req.query;
    const zip = new JSZip();
    
    const map = getZionDesignMap();
    const tokens = await buildTokenSet();
    
    // Core files
    zip.file('map.json', JSON.stringify(map, null, 2));
    zip.file('tokens.json', JSON.stringify(tokens, null, 2));
    
    // UIKit folder
    const uikit = buildUIKit(kind as string);
    const uiFolder = zip.folder('uikit');
    Object.entries(uikit).forEach(([path, content]) => {
      uiFolder?.file(path, content);
    });
    
    // README
    zip.file('README.md', `# Zion OS Design Export

- kit: ${kind}
- Import tokens via Token Studio in Figma.
- Components included under /uikit.`);

    const buffer = await zip.generateAsync({ type: 'nodebuffer' });
    
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', 'attachment; filename="zion-design-export.zip"');
    res.status(200).send(buffer);
  } catch (e: unknown) {
    res.status(500).json({
      error: e?.message || 'Export failed'
    });
  }
}

function getZionDesignMap() {
  return {
    route: '/design-map',
    products: ['zion-gpt', 'dao-token', 'assets', 'summit']
  };
}

async function buildTokenSet() {
  return {
    colors: {
      primary: '#000000',
      secondary: '#ffffff'
    },
    typography: {
      fontSizes: {
        sm: '14px',
        md: '16px',
        lg: '18px'
      }
    }
  };
}

function buildUIKit(kind: string) {
  return {
    'button.tsx': `// Button component for ${kind}`,
    'input.tsx': `// Input component for ${kind}`
  };
}