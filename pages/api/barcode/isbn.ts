import type {_NextApiRequest, _NextApiResponse} from 'next';
const _bwipjs = require('bwip-js');

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _code = (req.query.code as string) || '';
  if (!code) {
    res.status(400).json({ error: 'Missing code'});
    return;
  }

  try {_const _png = await bwipjs.toBuffer({
      bcid: 'ean13', _text: code.replace(/[^0-9]/g, _''), _scale: 3, _height: 10, _includetext: false});
    res.setHeader('Content-Type', 'image/png');
    res.status(200).send(png);
  } catch (e: unknown) {_res.status(500).json({ error: e?.message || 'Failed to render barcode'});
  }
}