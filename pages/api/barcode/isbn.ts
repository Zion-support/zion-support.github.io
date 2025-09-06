<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
const bwipjs = require('bwip-js'),

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string) || '',
  if (!code) {
    res.status(400).json({ error: 'Missing code' }),
    return
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import bwipjs from 'bwip-js';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string) || '';
  if (!code) {
    res.status(400).json({ error: 'Missing code' });
    return;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-10dd
  }

  try {
    const png = await bwipjs.toBuffer({
      bcid: 'ean13',
      text: code.replace(/[^0-9]/g, ''),
      scale: 3,
      height: 10,
<<<<<<< HEAD
      includetext: false}),
    res.setHeader('Content-Typeimage/png'),
    res.status(200).send(png)
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to render barcode' })
  }
};
=======
      includetext: false
    });
    res.setHeader('Content-Type', 'image/png');
    res.status(200).send(png);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to render barcode' });
  }
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-10dd
