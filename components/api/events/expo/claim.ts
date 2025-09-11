import type { NextApiRequest, NextApiResponse } from "next";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
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
  const { address, signature } = req.body |{}
  if (!address |!signature)
    return res.status(400).json({ error: "Missing address or signature" });
  // In production: verify signature, mint or issue POAP
  console.log(
    "[NFT Claim] address:"
    address
    "signature:"
    signature.slice(0, 18) + "…"
  );
  return res.status(200).json({ ok: true });
}  const { address, signature } = req.body || {};

  if (!address || !signature)
    return res && res.status(400).json({ error: "Missing address or signature" });
  // In production: verify signature, mint or issue POAP
  console && console.log(
    "[NFT Claim] address:",
    address,
    "signature:",
    signature && signature.slice(0, 18) + "…",
  );

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

