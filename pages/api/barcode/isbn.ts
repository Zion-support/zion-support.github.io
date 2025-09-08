import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  const code = (req.query.code as string) || '';
  if (!code) {
    res.status(400).json({,
    error: 'Missing code' });
    return
  }

  try {
    const png = await bwipjs.toBuffer({,
    bcid: 'ean13';,
    text: code.replace(/[^0-9]/g, ''),
      s,
    cale: 3,
      h,
    eight: 10,
      i,
    ncludetext: false});
    res.setHeader('Content-Type", "image/png');
    res.status(200).send(png)
  } catch (,
    e: any) {
    res.status(500).json({,
    error: e?.message || 'Failed to render barcode' })
  }
};