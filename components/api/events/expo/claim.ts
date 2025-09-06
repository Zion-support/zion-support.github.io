

<<<<<<< HEAD
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { address, signature } = req.body || {};
  if (!address || !signature) return res.status(400).json({ error: 'Missing address or signature' });
import type { NextApiRequest, NextApiResponse } from "next";

import type { NextApiRequest, NextApiResponse } from "next";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { address, signature } = req.body || {};
  if (!address || !signature) return res.status(400).json({ error: 'Missing address or signature' });
=======
  if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
  const { address, signature } = req.body |{}
  if (!address |!signature)
    return res.status(400).json({ error: "Missing address or signature" });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  // In production: verify signature, mint or issue POAP
  console.log(
    "[NFT Claim] address:"
    address
    "signature:"
    signature.slice(0, 18) + "…"
  );
  return res.status(200).json({ ok: true });

<<<<<<< HEAD
=======
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { address, signature } = req && req.body || {};

  const { address, signature } = req.body || {};

  if (!address || !signature)
    return res && res.status(400).json({ error: "Missing address or signature" });
  // In production: verify signature, mint or issue POAP
  console && console.log(
    "[NFT Claim] address:",
    address,
    "signature:",
    signature && signature.slice(0, 18) + "…",
  );
<<<<<<< HEAD
  return res && res.status(200).json({ ok: true });
  const { address, signature } = req && req.body || {};
  if (!address || !signature)
    return res && res.status(400).json({ error: "Missing address or signature" });
  // In production: verify signature, mint or issue POAP
  console && console.log(
    "[NFT Claim] address:",
    address,
    "signature:",
    signature && signature.slice(0, 18) + "…",
  );
  return res && res.status(200).json({ ok: true });
}


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import type { NextApiRequest, NextApiResponse } from './next';
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}
  const { address, signature } = req.body || {}
  if (
    return res.status (400).json ({ error: "Missing address or signature" })) {
  $2
}
  // In production: verify signature, mint or issue POAP;
  console.log (
    "[NFT Claim] address:",
    address,
    "signature:",
    signature.slice (0, 18) + "…",
  );
  return res.status (200).json ({ ok: true });
  const { address, signature } = req.body || {}
  if (
    return res.status (400).json ({ error: "Missing address or signature" })) {
  $2
}
  // In production: verify signature, mint or issue POAP;
  console.log (
    "[NFT Claim] address:",
    address,
    "signature:",
    signature.slice (0, 18) + "…",
  );
  return res.status (200).json ({ ok: true });
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

  return res.status(200).json({ ok: true });
}
  const { address, signature } = req.body || {};
  if (!address || !signature)
    return res.status(400).json({ error: "Missing address or signature" });
  // In production: verify signature, mint or issue POAP
  console.log(
    "[NFT Claim] address:",
    address,
    "signature:",
    signature.slice(0, 18) + "…",
  );
  return res.status(200).json({ ok: true });
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
