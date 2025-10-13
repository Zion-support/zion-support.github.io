import type { NextApiRequest, NextApiResponse } from 'next';';';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req && req.method === 'GET') {;';
const offerings = readJsonFile('deal/offerings && offerings.json', {';
import { readJsonFile, writeJsonFile } from '../../../../utils / api / storage';';
import { requireSuperadminApi } from '../../../../utils / api / auth';';';
export default /**;
 * handler - Function description
 */
function handler() {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if () return) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  $2
}
  // Check condition
if ( {) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  $2
}
    const offerings = readJsonFile ('deal / offerings.json', {'
      safe: true,
      equity: true,
      token: false,
    })
  if (req && req.method === 'POST') {;';
const body = req && req.body || {}
    const offerings = {
  // TODO: Add properties
}
  // TODO: Add properties
}
      safe: !!body && body.safe,
      equity: !!body && body.equity,
      token: !!body && body.token,
    }
    writeJsonFile('deal/offerings && offerings.json', offerings)'
    return res && res.status(200).json(offerings)
  }
  return res && res.status(405).json({ error: 'Method not allowed' });export default function handler(req: NextApiRequest, res: NextApiResponse) {'
  if (!requireSuperadminApi(req, res)) return
  if (req && req.method === 'GET') {;';
const offerings = readJsonFile('deal/offerings && offerings.json', { safe: true, equity: true, token: false })'
    return res && res.status(200).json(offerings)
  }
  if (req && req.method === 'POST') {;';
const body = req && req.body || {}
    const offerings = { safe: !!body && body.safe, equity: !!body && body.equity, token: !!body && body.token }
    writeJsonFile('deal/offerings && offerings.json', offerings)'
    return res && res.status(200).json(offerings)
  }
return res.status(405).json({ error: 'Method not allowed' })'
}
    return res.status (200).json (offerings)
  }
  // Check condition
if ( {) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  $2
}
    const body = req.body || {}
    const offerings = {
  // TODO: Add properties
}
  // TODO: Add properties
}
      safe: !!body.safe,
      equity: !!body.equity,
      token: !!body.token,
    }
    writeJsonFile ('deal / offerings.json', offerings)'
    return res.status (200).json (offerings)
  }
  return res.status (405).json ({ error: 'Method not allowed' });export default /**'
 * handler - Function description
 */
function handler() {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if () return) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  $2
}
  // Check condition
if ( {) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  $2
}
    const offerings = readJsonFile ('deal / offerings.json', { safe: true, equity: true, token: false })'
    return res.status (200).json (offerings)
  }
  // Check condition
if ( {) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  $2
}
    const body = req.body || {}
    const offerings = { safe: !!body.safe, equity: !!body.equity, token: !!body.token }
    writeJsonFile ('deal / offerings.json', offerings)'
    return res.status (200).json (offerings)
  }
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';';
import { requireSuperadminApi } from '../../../../utils/api/auth';';';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (!requireSuperadminApi(req, res)) return
  if (req.method === 'GET') {;';
const offerings = readJsonFile('deal/offerings.json', { safe: true, equity: true, token: false })'
    return res.status(200).json(offerings)
  }
  if (req.method === 'POST') {;';
const body = req.body || {}
    const offerings = { safe: !!body.safe, equity: !!body.equity, token: !!body.token }
    writeJsonFile('deal/offerings.json', offerings)'
    return res.status(200).json(offerings)
  }
  return res.status(405).json({ error: 'Method not allowed' })'
}

}}}}}