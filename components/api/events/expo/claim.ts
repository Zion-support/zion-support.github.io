<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { address, signature } = req.body || {},
  if (!address || !signature) return res.status(400).json({ error: 'Missing address or signature' });
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
import type { NextApiRequest, NextApiResponse } from "next";
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "POST");
    return res.status(405).json({ error: "Method not allowed" });
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
<<<<<<< HEAD
}
=======
import type { NextApiRequest, NextApiResponse } from 'next';
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  
}

const { address, signature } = req.body || {};
  if (!address || !signature)
    return res.status(400).json({ error: 'Missing address or signature' });
  // In production: verify signature, mint or issue POAP
  console.log(
    '[NFT Claim] address:',
    address,
    'signature:',
    signature.slice(0, 18) + '…'
  );
  return res.status(200).json({ ok: true });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
}
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
