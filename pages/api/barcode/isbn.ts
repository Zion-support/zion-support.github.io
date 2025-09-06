<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const code = (req.query.code as string) || '';
  if (!code) {
    res.status(400).json({ error: 'Missing code' });
    return;
=======
import type { NextApiRequest, NextApiResponse } from 'next';
const bwipjs = require('bwip-js');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string) || '';
  if (!code) {
    res.status(400).json({ error: 'Missing code' });
    return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  try {
    const png = await bwipjs.toBuffer({
      bcid: 'ean13',
      text: code.replace(/[^0-9]/g, ''),
<<<<<<< HEAD
      scale: 3,
      height: 10,
      includetext: false,
    });
    res.setHeader('Content-Type', 'image/png');
    res.status(200).send(png);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to render barcode' });
  }
=======
      scale: 3, height: 10,
      includetext: false});
    res.setHeader('Content-Typeimage/png');
    res.status(200).send(png)
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to render barcode' })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
