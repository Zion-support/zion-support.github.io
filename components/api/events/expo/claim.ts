<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";

=======
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // In production: verify signature, mint or issue POAP
  console.log(
    "[NFT Claim] address:"
    address
    "signature:"
    signature.slice(0, 18) + "…"
  );
  return res.status(200).json({ ok: true });
  // In production: verify signature, mint or issue POAP
  console && console.log(
    "[NFT Claim] address:",
    address,
    "signature:",
    signature && signature.slice(0, 18) + "…",
  );
<<<<<<< HEAD
=======
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


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
