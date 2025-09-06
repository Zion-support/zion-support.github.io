import type { NextApiRequest, NextApiResponse } from 'next';
const bwipjs = null;
    res.status(200).send(png)
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to render barcode' })
  }
}