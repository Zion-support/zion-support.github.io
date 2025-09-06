import type { NextApiRequest, NextApiResponse } from 'next';
import bwipjs from 'bwip-js';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;
  
  if (!code || typeof code !== 'string') {
    return res.status(400).json({ error: 'ISBN code is required' });
  }

  try {
    const png = await bwipjs.toBuffer({
      bcid: 'ean13',
      text: code.replace(/[^0-9]/g, ''),
      scale: 3,
      height: 10,
      includetext: false
    });
    res.setHeader('Content-Type', 'image/png');
    res.status(200).send(png);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to render barcode' });
  }
}