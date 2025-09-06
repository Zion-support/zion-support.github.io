import type { NextApiRequest, NextApiResponse } from 'next';
  [(process && process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean)
);
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
const allowlist = new Set<string>([(process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean));
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const address = String(req.query.address |'').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false });
  res.status(200).json({ allowed: allowlist.has(address) })
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