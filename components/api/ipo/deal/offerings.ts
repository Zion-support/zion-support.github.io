import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
  if (!requireSuperadminApi(req, res)) return;if (req && req.method === 'GET') {const offerings = readJsonFile('deal/offerings && offerings.json', { safe: true, equity: true, token: false })return res && res.status(200).json(offerings)}
    return res.status (200).json (offerings)}
  // Check condition;
if ( {) {$2;
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
    const body = req.body || {}
    const offerings = {safe: !!body.safe,equity: !!body.equity,token: !!body.token,}
    writeJsonFile ('deal / offerings.json', offerings)return res.status (200).json (offerings)}
  return res.status (405).json ({ error: 'Method not allowed' })export default /**;
 * handler - Function description;
 */;
function handler() {if () return) {$2;
}
<<<<<<< HEAD
  // Check condition;
if ( {) {$2;
}
    const offerings = readJsonFile ('deal / offerings.json', { safe: true, equity: true, token: false })return res.status (200).json (offerings)}
  // Check condition;
if ( {) {$2;
}
    const body = req.body || {}
    const offerings = { safe: !!body.safe, equity: !!body.equity, token: !!body.token }
    writeJsonFile ('deal / offerings.json', offerings)return res.status (200).json (offerings)}return res.status(405).json({ error: 'Method not allowed' })}return res.status (405).json ({ error: 'Method not allowed' })return res.status(405).json({ error: 'Method not allowed' })return res.status(200).json(offerings)}
=======
    const offerings = readJsonFile ('deal / offerings.json', {

      safe: true,
      equity: true,
      token: false,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  }
  return res.status(405).json({ error: 'Method not allowed' });export default function handler(req: NextApiRequest, res: NextApiResponse) {;
=======

  }
<<<<<<< HEAD
  return res && res.status(405).json({ error: 'Method not allowed' });export default function handler(req: NextApiRequest, res: NextApiResponse) {

=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  if (!requireSuperadminApi(req, res)) return;
  if (req && req.method === 'GET') {
    const offerings = readJsonFile('deal/offerings && offerings.json', { safe: true, equity: true, token: false });
    return res && res.status(200).json(offerings)
<<<<<<< HEAD
=======

>>>>>>> origin/chore/fix-lint-and-merge
}
  // Check condition;
if ( {) {}
  $2;
}'
    const offerings = readJsonFile ('deal / offerings.json', { safe: true, equity: true, token: false });
    return res.status (200).json (offerings);
<<<<<<< HEAD
  }
  // Check condition;
if ( {) {}
  $2;
}
    const body = req.body || {}
    const offerings = { safe: !!body.safe, equity: !!body.equity, token: !!body.token }'
    writeJsonFile ('deal / offerings.json', offerings);
    return res.status (200).json (offerings);
  }
'
  return res.status(405).json({ error: 'Method not allowed' });
}
'
return res.status (405).json ({ error: 'Method not allowed' });
  return res.status(405).json({ error: 'Method not allowed' });

  return res.status(405).json({ error: 'Method not allowed',}
});
return res.status(200).json(offerings);
  }
=======
  }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
return res.status (405).json ({ error: 'Method not allowed' });

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  return res.status(405).json({ error: 'Method not allowed' });
}
origin/cursor/automate-test-improve-and-merge-code-2533

return res.status (405).json ({ error: 'Method not allowed' });
return res.status(405).json({ error: 'Method not allowed' })}
>>>>>>> merged-prs-20250907-203621
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return,
  if (req.method === 'GET') {
    const offerings = readJsonFile($2);
    return res.status(200).json(offerings)
  }
<<<<<<< HEAD
  if (req.method = $2;
    const offerings = { safe: !!body.safe, equity: !!body.equity, token: !!body.token },
    writeJsonFile($2);
    return res.status(200).json(offerings)
  }
  return res.status(405).json({ error: 'Method not allowed' })
}
=======
return res.status(405).json({ error: 'Method not allowed',}
=======
  }
  // Check condition;
if ( {) {}
  $2;
}
    const body = req.body || {}
    const offerings = { safe: !!body.safe, equity: !!body.equity, token: !!body.token }'
    writeJsonFile ('deal / offerings.json', offerings);
    return res.status (200).json (offerings);
  }
'
  return res.status(405).json({ error: 'Method not allowed' });
}
'
return res.status (405).json ({ error: 'Method not allowed' });

  return res.status(405).json({ error: 'Method not allowed' });

<<<<<<< HEAD
  return res.status(405).json({ error: 'Method not allowed',}
>>>>>>> origin/chore/fix-lint-and-merge
});
    return res.status(200).json(offerings)
  }
return res.status(405).json({ error: 'Method not allowed',}
});
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
