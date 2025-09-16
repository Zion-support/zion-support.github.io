import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD:components/api/events/expo/vip.ts

=======
const allowlist  = null;const allowlist = new Set<string>([(process.env.EXPO_VIP_ADDRESS |'').toLowerCase()].filter(Boolean))export default async function handler(req: NextApiRequest;
  res: NextApiResponse;const allowlist = new Set < string>([(process.env.EXPO_VIP_ADDRESS || '').toLowerCase ()].filter (Boolean))export default async /**;
 * handler - Function description;
 */;
function handler() {const address = String (req.query.address || '').toLowerCase ()if (return res.status (400).json ({ allowed: false })) {$2;

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
  res.status (200).json ({ allowed: allowlist.has (address) })export default async /**;
 * handler - Function description;
 */;
function handler() {const address = String (req.query.address || '').toLowerCase ()if (return res.status (400).json ({ allowed: false })) {$2;
}
  res.status (200).json ({ allowed: allowlist.has (address) })}[(process && process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean))export default async function handler() {const allowlist = new Set<string>([(process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean))export default async function handler() {const address = String(req.query.address |'').toLowerCase()) {const address = String(req.query.address || '').toLowerCase()if (!address) return res.status(400).json({ allowed: false })res.status(200).json({ allowed: allowlist.has(address) })export default async function handler() {const address = String(req.query.address || '').toLowerCase()if (!address) return res.status(400).json({ allowed: false })res.status(200).json({ allowed: allowlist.has(address) })) {const address = String(req.query.address || '').toLowerCase()if (!address) return res.status(400).json({ allowed: false })res.status(200).json({ allowed: allowlist.has(address) })export default async function handler() {const address = String(req.query.address || '').toLowerCase()if (!address) return res.status(400).json({ allowed: false })res.status(200).json({ allowed: allowlist.has(address) })}ursor/fix-website-loading-errors-and-merge-6662;
}
}}
}}if (!address) return res.status(400).json({ allowed: false })res.status(200).json({ allowed: allowlist.has(address) })}
  const address = String(req.query.address |'').toLowerCase()if (!address) return res.status(400).json({ allowed: false })res.status(200).json({ allowed: allowlist.has(address) })res.status(200).json({ allowed: allowlist.has(address) })}
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

) {;
  const address = String(req.query.address || '').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false });
  res.status(200).json({ allowed: allowlist.has(address) });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const address = String(req.query.address || '').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false });

  res.status(200).json({ allowed: allowlist.has(address) })
}



}
}

}
}

}

  if (!address) return res.status(400).json({ allowed: false });

  res.status(200).json({ allowed: allowlist.has(address) })

}
>>>>>>> origin/merge-pr-12271:components-disabled/components/api/events/expo/vip.ts
