import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD


export default function handler(req: NextApiRequest, res: NextApiResponse) {

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

      safe: true,
      equity: true,
      token: false,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });

=======
      safe: true,
      equity: true,
      token: false,
=======
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return;

  if (req.method === 'GET') {
    const offerings = readJsonFile('deal/offerings.json', {
      safe: true
      equity: true
      token: false
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  if (req && req.method === 'POST') {
    const body = req && req.body || {};
    const offerings = {
      safe: !!body && body.safe,
      equity: !!body && body.equity,
      token: !!body && body.token,
    };
    writeJsonFile('deal/offerings && offerings.json', offerings);
    return res && res.status(200).json(offerings);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
<<<<<<< HEAD
  return res && res.status(405).json({ error: 'Method not allowed' });export default function handler(req: NextApiRequest, res: NextApiResponse) {

=======
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
  return res.status(405).json({ error: 'Method not allowed' });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  if (!requireSuperadminApi(req, res)) return;
  if (req && req.method === 'GET') {
    const offerings = readJsonFile('deal/offerings && offerings.json', { safe: true, equity: true, token: false });
    return res && res.status(200).json(offerings)
  }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  if (req && req.method === 'POST') {
    const body = req && req.body || {};
    const offerings = { safe: !!body && body.safe, equity: !!body && body.equity, token: !!body && body.token };
    writeJsonFile('deal/offerings && offerings.json', offerings);
    return res && res.status(200).json(offerings)
  }
  return res && res.status(405).json({ error: 'Method not allowed' });
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
return res.status (405).json ({ error: 'Method not allowed' });

}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  return res.status(405).json({ error: 'Method not allowed' });
}

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
return res.status(405).json({ error: 'Method not allowed' });
}
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
