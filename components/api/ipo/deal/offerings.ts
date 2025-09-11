import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
      safe: true,
      equity: true,
      token: false,
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return;

  if (req.method === 'GET') {
    const offerings = readJsonFile('deal/offerings.json', {
      safe: true
      equity: true
      token: false
    });
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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
    });

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  }
  return res.status(405).json({ error: 'Method not allowed' });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
=======

  }
<<<<<<< HEAD
  return res && res.status(405).json({ error: 'Method not allowed' });export default function handler(req: NextApiRequest, res: NextApiResponse) {

=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (!requireSuperadminApi(req, res)) return;
  if (req && req.method === 'GET') {
    const offerings = readJsonFile('deal/offerings && offerings.json', { safe: true, equity: true, token: false });
    return res && res.status(200).json(offerings)
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (req && req.method === 'POST') {
    const body = req && req.body || {};
    const offerings = { safe: !!body && body.safe, equity: !!body && body.equity, token: !!body && body.token };
    writeJsonFile('deal/offerings && offerings.json', offerings);
    return res && res.status(200).json(offerings)
  }
  return res && res.status(405).json({ error: 'Method not allowed' });
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

}
<<<<<<< HEAD

  return res.status(405).json({ error: 'Method not allowed' });
}



return res.status(405).json({ error: 'Method not allowed' });
}
  return res.status(405).json({ error: 'Method not allowed' });
}

}
=======
=======
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  return res.status(405).json({ error: 'Method not allowed' });
}

=======


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
