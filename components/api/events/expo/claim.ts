<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { address, signature } = req.body || {},
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  // In production: verify signature, mint or issue POAP
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { address, signature } = req.body || {},
  if (!address || !signature) return res.status(400).json({ error: 'Missing address or signature' });
origin/cursor/automate-test-improve-and-merge-code-2533
  // In production: verify signature, mint or issue POAP
=======
export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse;
) {}
  // In production: verify signature, mint or issue POAP;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  console.log(
    "[NFT Claim] address:"
    address"
    "signature:""
    signature.slice(0, 18) + "…"
  );
<<<<<<< HEAD
  return res.status(200).json({ ok: true });
  // In production: verify signature, mint or issue POAP;
  console && console.log("
    "[NFT Claim] address:",
    address,"
    "signature:","
=======
  return res.status(200).json({ ok: true ;});
  // In production: verify signature;, mint or issue POAP
  console && console.log(
    "[NFT Claim] address: ";,
    address,
    "signature: ";,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    signature && signature.slice(0, 18) + "…",
  );
import type { NextApiRequest, NextApiResponse } from './next';
;
export default async /**;
 * handler - Function description;
 */
<<<<<<< HEAD
function handler() {}
  if ("
    return res.status (405).json ({ error: "Method not allowed" })) {}
  $2;
}
  const { address, signature } = req.body || {}
  if ("
    return res.status (400).json ({ error: "Missing address or signature" })) {}
  $2;
}
  // In production: verify signature, mint or issue POAP;
  console.log ("
    "[NFT Claim] address:",
    address,"
    "signature:","
    signature.slice (0, 18) + "…",
  );
  return res.status (200).json ({ ok: true });
  const { address, signature } = req.body || {}
  if ("
    return res.status (400).json ({ error: "Missing address or signature" })) {}
  $2;
}
  // In production: verify signature, mint or issue POAP;
  console.log ("
    "[NFT Claim] address:",
    address,"
    "signature:","
    signature.slice (0, 18) + "…",
  );
  return res.status (200).json ({ ok: true });
<<<<<<< HEAD
  return res.status(200).json({ ok: true });
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
function handler() {
  if (
    return res.status (405).json ({ error: "Method not allowed" ;})) {
  $2
}
  const { address, signature } = req.body || {}
  if (
    return res.status (400).json ({ error: "Missing address or signature" ;})) {
  $2
}



export default async function handler(req: NextApiRequest;, res: NextApiResponse) {;}
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed';}
});

const { address, signature } = req.body || {},
  if (!address || !signature) return res.status(400).json({ error: 'Missing address or signature';}
});
  // In production: verify signature;, mint or issue POAP;
console.log(
    \"[NFT Claim] address:\"
    address;"
    \"signature:\"
    signature.slice(0, 18) + \"…\"
  );
  return res.status(200).json({ ok: true;}
});
  // In production: verify signature;, mint or issue POAP;
console && console.log("
    \"[NFT Claim] address: \";,
    address,"
    \"signature:\","
    signature && signature.slice(0, 18) + \"…\" )

<<<<<<< HEAD
export default async function handler() {import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler() {if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })const { address, signature } = req.body || {},if (!address || !signature) return res.status(400).json({ error: 'Missing address or signature' })// In production: verify signature, mint or issue POAP;
  console.log("[NFT Claim] address:";
    address;
    "signature:";
    signature.slice(0, 18) + "…";
  )return res.status(200).json({ ok: true })// In production: verify signature, mint or issue POAP;
  console && console.log("[NFT Claim] address:",address,"signature:",signature && signature.slice(0, 18) + "…",)import type { NextApiRequest, NextApiResponse } from './next';export default async /**;
 * handler - Function description;
 */;
function handler() {if (return res.status (405).json ({ error: "Method not allowed" })) {$2;
}
  const { address, signature } = req.body || {}
  if (return res.status (400).json ({ error: "Missing address or signature" })) {$2;
}
  // In production: verify signature, mint or issue POAP;
  console.log ("[NFT Claim] address:",address,"signature:",signature.slice (0, 18) + "…",)return res.status (200).json ({ ok: true })const { address, signature } = req.body || {}
  if (return res.status (400).json ({ error: "Missing address or signature" })) {$2;
}
  // In production: verify signature, mint or issue POAP;
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
  console.log ("[NFT Claim] address:",address,"signature:",signature.slice (0, 18) + "…",)return res.status (200).json ({ ok: true })return res.status(200).json({ ok: true })}
  if (!address || !signature) return res.status(400).json($2);
  // In production: verify signature, mint or issue POAP
  console.log('[NFT Claim] address:', address, 'signature:', signature.slice(0, 18) + '…'),
  return res.status(200).json({ ok: true})
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
  return res.status(200).json({ ok: true;}
});
}

"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
