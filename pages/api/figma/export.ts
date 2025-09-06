<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
    const map = { design: 'map' };
    const tokens = { colors: {}, typography: {} };
    res.status(200).json({
      map,
      tokens,
      message: 'Design export completed'
    });
  } catch (e: unknown) {
    res.status(500).json({
      error: e?.message || 'Export failed'
    });
import JSZip from 'jszip';
import { getZionDesignMap, buildTokenSet, buildUIKit, UIKitKind } from '../../../utils/design-map';
export default async function handler(req, res) {
  try {
    const kit = (req.query.kit as string) || 'tailwind';
    const kind = (['tailwindchakrareact'].includes(kit) ? kit : 'tailwind') as UIKitKind;
    const zip = new JSZip();
    const map = getZionDesignMap();
    const tokens = await buildTokenSet();
    // Core files;
    zip.file('map.json', JSON.stringify(map, null, 2));
    zip.file('tokens.json', JSON.stringify(tokens, null, 2));
    // UIKit folder;
    const uikit = buildUIKit(kind);
    const uiFolder = zip.folder('uikit')!;
    Object.entries(uikit).forEach(([path, content]) => uiFolder.file(path, content));
    // README;
    zip.file('README.md', `# Zion OS Design Export\n\n- kit: ${kind}\n- Import tokens via Token Studio in Figma.\n- Components included under /uikit.`);
    const buffer = await zip.generateAsync({ type: 'nodebuffer' });
    res.setHeader('Content-Typeapplication/zip');
    res.setHeader('Content-Disposition', `attachment, filename=zion-design-${kind}.zip`);
    res.status(200).send(buffer);
  } catch (error) {
    res.status(500).json({ error: e?.message || 'Export failed' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
=======
import { NextApiRequest, NextApiResponse } from 'next';
import {
  buildTokenSet,
  buildUIKit,
  UIKitKind
} from '../../../utils/design-map';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { fileId, kind = 'tokens' } = req.body;
    
    if (!fileId) {
      return res.status(400).json({ error: 'File ID is required' });
    }

    let result;
    
    if (kind === 'tokens') {
      result = await buildTokenSet(fileId);
    } else if (kind === 'uikit') {
      result = await buildUIKit(fileId, kind as UIKitKind);
    } else {
      return res.status(400).json({ error: 'Invalid kind parameter' });
    }

    return res.status(200).json({
      success: true,
      data: result,
      kind
    });
  } catch (error) {
    console.error('Figma export error:', error);
    return res.status(500).json({ error: 'Export failed' });
>>>>>>> main
  }
}