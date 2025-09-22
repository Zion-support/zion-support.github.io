import type { NextApiRequest, NextApiResponse } from 'next';
const bwipjs = require('bwip-js');
;
export default async function handler(req:NextApiRequest, res:NextApiResponse) {;
  const code = (req.query.code as string) || '';
  if (!code) {;
    res.status(400).json({ error:'Missing code' });
    return;
  }
;
  try {;
    const png = await bwipjs.toBuffer({;
      bcid:'ean13';
      text:code.replace(/[^0-9]/g, '');
      scale:3;
      height:10;
      includetext:false});
    res.setHeader('Content-Typeimage/png');
    res.status(200).send(png);
  } catch (e:any) {;
    res.status(500).json({ error:e?.message || 'Failed to render barcode' });
  }import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ isbn: '1234567890' });
}