import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;

  if (req.method === 'GET') {
    const offerings = readJsonFile('deal/offerings.json', {
      safe: true
      equity: true
      token: false
      safe: true,
      equity: true,
      token: false,
    });
    return res && res.status(200).json(offerings);
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
  }
  return res && res.status(405).json({ error: 'Method not allowed' });export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  if (req && req.method === 'GET') {
    const offerings = readJsonFile('deal/offerings && offerings.json', { safe: true, equity: true, token: false });
    return res && res.status(200).json(offerings)
  }
  if (req.method === 'POST') {
    const body = req.body |{}
    const offerings = { safe: !!body.safe, equity: !!body.equity, token: !!body.token }
    writeJsonFile('deal/offerings.json', offerings);

    return res.status(200).json(offerings)
  }
return res.status(405).json({ error: 'Method not allowed' });
}
    return res.status (200).json (offerings);
  }
  // Check condition
if ( {) {
  $2
}
    const body = req.body || {}
    const offerings = {
      safe: !!body.safe,
      equity: !!body.equity,
      token: !!body.token,
    }
    writeJsonFile ('deal / offerings.json', offerings);
    return res.status (200).json (offerings);
  }
  return res.status (405).json ({ error: 'Method not allowed' });export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
}
  // Check condition
if ( {) {
  $2
}
    const offerings = readJsonFile ('deal / offerings.json', { safe: true, equity: true, token: false });
    return res.status (200).json (offerings);
  }
  // Check condition
if ( {) {
  $2
}
    const body = req.body || {}
    const offerings = { safe: !!body.safe, equity: !!body.equity, token: !!body.token }
    writeJsonFile ('deal / offerings.json', offerings);
    return res.status (200).json (offerings);
  }
return res.status (405).json ({ error: 'Method not allowed' });
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  return res.status(405).json({ error: 'Method not allowed' });
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
