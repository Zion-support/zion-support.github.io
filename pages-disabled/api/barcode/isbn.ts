const bwipjs = require('bwip-js'),

import type { NextApiRequest, NextApiResponse } from 'next';
const bwipjs = require('bwip-js')

  }

  try {
    const png = await bwipjs.toBuffer({

      text: code.replace(/[^0-9]/g, ''),
scale: 3,
      height: 10,

    res.status(200).send(png)
  } catch (e: any) {'
    res.status(500).json({ error: e?.message || 'Failed to render barcode' })
  }