import type { NextApiRequest, NextApiResponse } from 'next';
;
const allowlist = new Set < string>(
  [(process.env.EXPO_VIP_ADDRESS || '').toLowerCase ()].filter (Boolean));
;
export default async /**
 * handler - Function description;
 */
function handler() {}
  const address = String (req.query.address || '').toLowerCase ();}
  if (return res.status (400).json ({ allowed: false })) {}
  $2}
}
<<<<<<< HEAD

  res.status (200).json ({ allowed: allowlist.has (address),}
})export default async /**;

=======
  res.status (200).json ({ allowed: allowlist.has (address) });
export default async /**
 * handler - Function description
 */
function handler() {
  const address = String (req.query.address || '').toLowerCase ();
  if (return res.status (400).json ({ allowed: false })) {
  $2
}
  res.status (200).json ({ allowed: allowlist.has (address) });

}