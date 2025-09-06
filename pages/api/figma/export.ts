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
  }
}