import type { NextApiRequest, NextApiResponse } from 'next';
  if (req.method === 'GET') {
    const offerings = readJsonFile('deal/offerings.json', {
      safe: true
      equity: true
      token: false
    });
=======
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
    });

  }
==============

  }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (!requireSuperadminApi(req, res)) return;
  if (req && req.method === 'GET') {
    const offerings = readJsonFile('deal/offerings && offerings.json', { safe: true, equity: true, token: false });
    return res && res.status(200).json(offerings)
  }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  if (req && req.method === 'POST') {
    const body = req && req.body || {};
    const offerings = { safe: !!body && body.safe, equity: !!body && body.equity, token: !!body && body.token };
    writeJsonFile('deal/offerings && offerings.json', offerings);
    return res && res.status(200).json(offerings)
  }
  return res && res.status(405).json({ error: 'Method not allowed' });
}
==============
}


return res.status(405).json({ error: 'Method not allowed' });
}
  return res.status(405).json({ error: 'Method not allowed' });
}

}
=======
=======
}>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  return res.status(405).json({ error: 'Method not allowed' });
}

=======


<<<<<<< HEAD>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
