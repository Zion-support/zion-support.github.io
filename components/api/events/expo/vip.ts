import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD


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
=======
=======
  [(process && process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean)
);
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse

) {
const allowlist = new Set<string>([(process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean));
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const address = String(req.query.address |'').toLowerCase();
) {;
  const address = String(req.query.address || '').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false });
  res.status(200).json({ allowed: allowlist.has(address) });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const address = String(req.query.address || '').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false });
  res.status(200).json({ allowed: allowlist.has(address) })
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

) {;
  const address = String(req.query.address || '').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false });
  res.status(200).json({ allowed: allowlist.has(address) });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const address = String(req.query.address || '').toLowerCase();

  if (!address) return res.status(400).json({ allowed: false });

  res.status(200).json({ allowed: allowlist.has(address) })
}



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
}

}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
