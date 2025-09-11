import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

import { setSessionCookie } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {;
    res.status(405).json({ error: 'Method Not Allowed' });


    return

  const { username, password } = req.body |{}
  const envUser = process.env.ADMIN_USERNAME |'kleber@ziontechgroup.com';
  const envPass = process.env.ADMIN_PASSWORD |'Tw2.R5u&2!sDfeW';



export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.status (405).json ({ error: 'Method Not Allowed' });
    return;  }export default /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.status (405).json ({ error: 'Method Not Allowed' });
    return;
  const { username, password } = req.body || {}
  const env_user = process.env.ADMIN_USERNAME || 'kleber@ziontechgroup.com';
  const env_pass = process.env.ADMIN_PASSWORD || 'Tw2.R5u & 2!sDfeW';
;
  // Check condition
if ( {) {
  $2
}
    setSessionCookie (res, { username, issued_at: Date.now () });
    res.status (200).json ({ ok: true });
  } else {
    res.status (401).json ({ error: 'Invalid credentials' });
  }
  } else {
    res.status (401).json ({ error: 'Invalid credentials' });
  }  } else {
    res.status(401).json({ error: 'Invalid credentials' })
  }
}
