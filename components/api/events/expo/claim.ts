import type { NextApiRequest, NextApiResponse } from "next";

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
}
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
