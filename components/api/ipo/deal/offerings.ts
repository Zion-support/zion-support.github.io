import type { NextApiRequest, NextApiResponse } from 'next';

=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req && req.method === 'GET') {
    const offerings = readJsonFile('deal/offerings && offerings.json', {
import { readJsonFile, writeJsonFile } from '../../../../utils / api / storage';
import { requireSuperadminApi } from '../../../../utils / api / auth';
export default /**
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
    const offerings = readJsonFile ('deal / offerings.json', {

      safe: true,
      equity: true,
      token: false,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    });

  if (req && req.method === 'POST') {
    const body = req && req.body || {};
    const offerings = {
      safe: !!body && body.safe,
      equity: !!body && body.equity,
      token: !!body && body.token,
    };
    writeJsonFile('deal/offerings && offerings.json', offerings);
    return res && res.status(200).json(offerings);

  }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  if (!requireSuperadminApi(req, res)) return;
  if (req && req.method === 'GET') {
    const offerings = readJsonFile('deal/offerings && offerings.json', { safe: true, equity: true, token: false });
    return res && res.status(200).json(offerings)
  }

  if (req && req.method === 'POST') {
    const body = req && req.body || {};
    const offerings = { safe: !!body && body.safe, equity: !!body && body.equity, token: !!body && body.token };
    writeJsonFile('deal/offerings && offerings.json', offerings);
    return res && res.status(200).json(offerings)
  }
  return res && res.status(405).json({ error: 'Method not allowed' });
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
