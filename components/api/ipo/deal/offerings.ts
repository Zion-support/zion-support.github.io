import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  if (req.method === 'GET') {
    const offerings = readJsonFile('deal/offerings.json', {
      safe: true,
      equity: true,
      token: false,
    });
    return res.status(200).json(offerings);
  }
  if (req.method === 'POST') {
    const body = req.body || {};
    const offerings = {
      safe: !!body.safe,
      equity: !!body.equity,
      token: !!body.token,
    };
    writeJsonFile('deal/offerings.json', offerings);
    return res.status(200).json(offerings);
  }
<<<<<<< HEAD
  return res.status(405).json({ error: 'Method not allowed' });
=======
  return res.status(405).json({ error: 'Method not allowed' });
<<<<<<< HEAD
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  if (req.method === 'GET') {
    const offerings = readJsonFile('deal/offerings.json', { safe: true, equity: true, token: false });
    return res.status(200).json(offerings)
  }
  if (req.method === 'POST') {
    const body = req.body || {};
    const offerings = { safe: !!body.safe, equity: !!body.equity, token: !!body.token };
    writeJsonFile('deal/offerings.json', offerings);
    return res.status(200).json(offerings)
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
