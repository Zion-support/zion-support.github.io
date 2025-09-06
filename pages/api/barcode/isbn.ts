<<<<<<< HEAD
<<<<<<< HEAD
=======


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from 'next';
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import type { NextApiRequest, NextApiResponse } from 'next',;
const bwipjs = require('bwip-js'),

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string) || '',
  if (!code) {
    res.status(400).json({ error: 'Missing code' }),
    return
  }

  try {
    const png = await bwipjs.toBuffer({
      bcid: 'ean13',
      text: code.replace(/[^0-9]/g, ''),
      scale: 3,
      height: 10,
      includetext: false}),
    res.setHeader('Content-Typeimage/png'),
    res.status(200).send(png)
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to render barcode' })
  }
<<<<<<< HEAD
}
;
  try {
    const png = await bwipjs.toBuffer({;
      bcid: 'ean13';
      text: code.replace(/[^0-9]/g, '');
      scale: 3,;
      height: 10,;
      includetext: false});
    res.setHeader('Content-Typeimage/png');
    res.status(200).send(png);
  } catch (error) {
    res.status(500).json({ error: e?.message || 'Failed to render barcode' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  }
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
