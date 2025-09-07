import type { NextApiRequest, NextApiResponse } from 'next';
  if (!requireSuperadminApi(req, res)) return;
<<<<<<< HEAD
  if (req && req.method === 'GET') {
    const offerings = readJsonFile('deal/offerings && offerings.json', { safe: true, equity: true, token: false });
    return res && res.status(200).json(offerings)
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

  return res.status(405).json({ error: 'Method not allowed' });
}

return res.status (405).json ({ error: 'Method not allowed' });
=======
  return res.status(405).json({ error: 'Method not allowed' });
    return res.status(200).json(offerings)
  }
return res.status(405).json({ error: 'Method not allowed' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
