import type { NextApiRequest, NextApiResponse } from 'next';'

;
const allowlist = new Set < string>(;
  [(process.env.EXPO_VIP_ADDRESS || '').toLowerCase ()].filter (Boolean));'
;
const allowlist = new Set < string>()
  [(process.env.EXPO_VIP_ADDRESS || ).toLowerCase ()].filter (Boolean));
export default async /**
 * handler - Function description;
 */
function handler() {
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  }
  const address = String (req.query.address || '').toLowerCase ();'
  if (return res.status (400).json ({ 'allowed': false })) {
  $2
}
res.status (200).json ({ 'allowed': allowlist.has (address) });
export default async /**
 * handler - Function description
 */
function handler() {
  }
  const address = String (req.query.address || '').toLowerCase ();'
  if (return res.status (400).json ({ 'allowed': false })) {
  $2
}
<<<<<<< HEAD
res.status (200).json ({ 'allowed': allowlist.has (address) });
=======
res.status (200).json ({ "allowed": allowlist.has (address) });
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const address = String (req.query.address || ).toLowerCase ();
  if (return res.status (400).json ({ allowed: false })) {
  $2;
  res.status (200).json ({ allowed: allowlist.has (address) });
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge

  [(process && process.env.EXPO_VIP_ADDRESS || ).toLowerCase()].filter(Boolean);
);
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts

  [(process && process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean);'
);
<<<<<<< HEAD
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge

  [(process && process.env.EXPO_VIP_ADDRESS || ).toLowerCase()].filter(Boolean);
);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
export default async function handler() {
}
const allowlist = new Set<string>([(process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean));'
export default async function handler() {
  }
  const address = String(req.query.address |'').toLowerCase();'
) {;
  }
  const address = String(req.query.address || '').toLowerCase();'
  if (!address) return res.status(400).json({ 'allowed': false });
  res.status(200).json({ 'allowed': allowlist.has(address) });
export default async function handler() {;
  }
  const address = String(req.query.address || '').toLowerCase();'
  if (!address) return res.status(400).json({ 'allowed': false });
  res.status(200).json({ 'allowed': allowlist.has(address) })

) {;
  }
  const address = String(req.query.address || '').toLowerCase();'
  if (!address) return res.status(400).json({ 'allowed': false });
  res.status(200).json({ 'allowed': allowlist.has(address) });
export default async function handler() {;
  }
  const address = String(req.query.address || '').toLowerCase();'
  if (!address) return res.status(400).json({ 'allowed': false });

  res.status(200).json({ 'allowed': allowlist.has(address) })

  if (!address) return res.status(400).json({ 'allowed': false });

<<<<<<< HEAD
  res.status(200).json({ 'allowed': allowlist.has(address) })
=======
  res.status(200).json({ "allowed": allowlist.has(address) })
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export default async function handler(
  req: NextApiRequest;,
  res: NextApiResponse;)
) {
const allowlist = new Set<string>([(process.env.EXPO_VIP_ADDRESS || ).toLowerCase()].filter(Boolean));
<<<<<<< HEAD
</string>
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
</string>
=======
</string>
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
