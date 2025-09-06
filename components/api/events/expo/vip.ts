import type { NextApiRequest, NextApiResponse } from 'next';
  [(process && process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean)
);
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
<<<<<<< HEAD
) {
const allowlist = new Set<string>([(process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean));
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const address = String(req.query.address |'').toLowerCase();
=======
) {;
  const address = String(req.query.address || '').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false });
  res.status(200).json({ allowed: allowlist.has(address) });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const address = String(req.query.address || '').toLowerCase();
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (!address) return res.status(400).json({ allowed: false });
  res.status(200).json({ allowed: allowlist.has(address) })
<<<<<<< HEAD
}
  try {
  const address = String(req && req.query.address || '').toLowerCase();
  if (!address) return res && res.status(400).json({ allowed: false });
  res && res.status(200).json({ allowed: allowlist && allowlist.has(address) });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  const address = String(req && req.query.address || '').toLowerCase();
  if (!address) return res && res.status(400).json({ allowed: false });
  res && res.status(200).json({ allowed: allowlist && allowlist.has(address) })
}
;
const allowlist = new Set < string>(
  [(process.env.EXPO_VIP_ADDRESS || '').toLowerCase ()].filter (Boolean));
;
export default async /**
 * handler - Function description
 */
function handler() {
  const address = String (req.query.address || '').toLowerCase ();
  if (return res.status (400).json ({ allowed: false })) {
  $2
}
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
=======
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
