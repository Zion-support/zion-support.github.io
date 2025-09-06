<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextApiRequest, NextApiResponse } from 'next',;
const bwipjs = require('bwip-js'),
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1


    res.status(200).send(png)
  } catch (e: any) {
<<<<<<< HEAD
<<<<<<< HEAD
    res.status(500).json({ error: e?.message |'Failed to render barcode' })
=======
=======
=======
    res.status(500).json({ error: e?.message |'Failed to render barcode' })
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
    res.status(500).json({ error: e?.message || 'Failed to render barcode' })
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
const bwipjs = require('bwip-js');
export default async function handler(req, res) {
  try {
  const code = (req.query.code as string) || '';
  if (!code) {;
    res.status(400).json({ error: 'Missing code' });
    return;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
}
=======
  }
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  }
}
  }
}
=======


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
