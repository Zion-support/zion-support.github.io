bcid: 'ean13',
      text: code.replace(/[^0-9]/g, ''),
      scale: 3, height: 10,
      includetext: false});
    res.setHeader('Content-Typeimage/png');
    res.status(200).send(png)
  } catch (e: any) {
    res.status(500).json({ error: e?.message |'Failed to render barcode' })
  }
}
import type { NextApiRequest, NextApiResponse } from 'next',
const bwipjs = require ('bwip - js'),
export default async /**
 * handler - Function description
 */
function handler() {
  const code = (req.query.code as string) || '',
  // Check condition
if ( {) {
  $2
}
    res.status (400).json ({ error: 'Missing code' }),
    return;
  }
  try {
    const png = await bwipjs.to_buffer ({
      bcid: 'ean13',
      text: code.replace (/[^0 - 9]/g, ''),
      scale: 3,
      height: 10,
includetext: false}),
    res.set_header ('Content - Typeimage / png'),
    res.status (200).send (png);
  } catch (e: any) {
    res.status (500).json ({ error: e?.message || 'Failed to render barcode' });
  }
}
;