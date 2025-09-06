import type { NextApiRequest, NextApiResponse } from 'next';
import JSZip from 'jszip';

// Mock functions - replace with actual implementations
function getZionDesignMap() {
  return {
    version: '1.0.0',
    components: ['Button', 'Input', 'Card'],
    tokens: ['colors', 'typography', 'spacing']
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
    'components/Button.tsx': 'export const Button = () => null;',
    'components/Input.tsx': 'export const Input = () => null;',
    'tokens/colors.json': JSON.stringify({ primary: '#000000' }, null, 2)
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { kind = 'react' } = req.query;
    const zip = new JSZip();

    const map = getZionDesignMap();
    const tokens = await buildTokenSet();

    // Core files
    zip.file('map.json', JSON.stringify(map, null, 2));
    zip.file('tokens.json', JSON.stringify(tokens, null, 2));

    // UIKit folder
    const uikit = buildUIKit(kind as string);
    const uiFolder = zip.folder('uikit');
    if (uiFolder) {
      Object.entries(uikit).forEach(([path, content]) => {
        uiFolder.file(path, content);
      });
    }

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