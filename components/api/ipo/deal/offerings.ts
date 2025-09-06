import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
<<<<<<< HEAD
  if (req.method;
=======
  if (req.method === 'GET') {
    const offerings = readJsonFile('deal/offerings.json', {
      safe: true
      equity: true
      token: false
    });
    return res.status(200).json(offerings);
 
}
  if (req.method === 'POST') {
    const body = req.body |{}
    const offerings = {
      safe: !!body.safe
      equity: !!body.equity
      token: !!body.token
    }
    writeJsonFile('deal/offerings.json', offerings);
    return res.status(200).json(offerings);
<<<<<<< HEAD
  }
  return res.status(405).json({ error: 'Method not allowed' });export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  if (req.method === 'GET') {
    const offerings = readJsonFile('deal/offerings.json', { safe: true, equity: true, token: false });
    return res.status(200).json(offerings)
  }
  if (req.method === 'POST') {
    const body = req.body |{}
    const offerings = { safe: !!body.safe, equity: !!body.equity, token: !!body.token }
    writeJsonFile('deal/offerings.json', offerings);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    return res.status(200).json(offerings)
  }
return res.status(405).json({ error: 'Method not allowed' });
}
=======
 
}
  return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
