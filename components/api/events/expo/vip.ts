import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
const allowlist = new Set<string>(
<<<<<<< HEAD
  [(process.env.EXPO_VIP_ADDRESS |'').toLowerCase()].filter(Boolean)
=======
  [(process && process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
);
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  const address = String(req.query.address |'').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false });
  res.status(200).json({ allowed: allowlist.has(address) });
=======
const allowlist = new Set<string>([(process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean));

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const address = String(req.query.address |'').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false });

  res.status(200).json({ allowed: allowlist.has(address) })
}
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
