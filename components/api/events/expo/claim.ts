<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { address, signature } = req.body || {};
  if (!address || !signature) return res.status(400).json({ error: 'Missing address or signature' });
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import type { NextApiRequest, NextApiResponse } from "next";

import type { NextApiRequest, NextApiResponse } from "next";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { address, signature } = req.body || {};
  if (!address || !signature) return res.status(400).json({ error: 'Missing address or signature' });

  // In production: verify signature, mint or issue POAP
  console.log(
    "[NFT Claim] address:"
    address
    "signature:"
    signature.slice(0, 18) + "…"
  );
  return res.status(200).json({ ok: true });
<<<<<<< HEAD
  const { address, signature } = req.body |{}
  if (!address |!signature)
    return res.status(400).json({ error: "Missing address or signature" });
=======
  if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
  const { address, signature } = req.body |{}
  if (!address |!signature)
    return res.status(400).json({ error: "Missing address or signature" });

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // In production: verify signature, mint or issue POAP
  console.log(
    "[NFT Claim] address:"
    address
    "signature:"
    signature.slice(0, 18) + "…"
  );
  return res.status(200).json({ ok: true });
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  try {
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { address, signature } = req && req.body || {};
=======

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
<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
  return res.status(200).json({ ok: true });
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
