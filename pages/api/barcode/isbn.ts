<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
const bwipjs = null;
=======
const bwipjs = require('bwip-js')
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string) |''
  if (!code) {
    res.status(400).json({ error: 'Missing code' })
    return
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const code = (req.query.code as string) || '';
  if (!code) {
    res.status(400).json({ error: 'Missing code' });
    return;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  }
  try {
    const png = await bwipjs.toBuffer({
<<<<<<< HEAD
      bcid: 'ean13'
      text: code.replace(/[^0-9]/g, '')
      scale: 3
      height: 10
includetext: false})
    res.setHeader('Content-Typeimage/png')
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    res.status(200).send(png)
  } catch (e: any) {
    res.status(500).json({ error: e?.message |'Failed to render barcode' })
  }
}
=======
      bcid: 'ean13',
      text: code.replace(/[^0-9]/g, ''),
      scale: 3,
      height: 10,
      includetext: false,
    });
    res.setHeader('Content-Type', 'image/png');
    res.status(200).send(png);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to render barcode' });
  }
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
