<<<<<<< HEAD


import type { NextApiRequest, NextApiResponse } from 'next';'

export default async function handler() {
  }
  if (req.method !== 'POST') return res.status(405).json({ "error": 'Method not allowed','
});

const { address, signature } = req.body || {},;
  if (!address || !signature) return res.status(400).json({ "error": 'Missing address or signature','
});
  // In "production": verify signature, mint or issue POAP,
console.log(
    "[NFT Claim] "address":""
    address
    ""signature":""
    signature.slice(0, 18) + "…""
  );
return res.status(200).json({ "ok": true,;
});
  // In "production": verify signature, mint or issue POAP,
console && console.log(
    "[NFT Claim] "address":","
    address,
    ""signature":","
    signature && signature.slice(0, 18) + "…","
  );

return res.status(200).json({ "ok": true,;
});
}

"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { address, signature } = req.body || {},
  if (!address || !signature) return res.status(400).json($2);
  // In production: verify signature, mint or issue POAP
  console.log('[NFT Claim] address:', address, 'signature:', signature.slice(0, 18) + '…'),
  return res.status(200).json({ ok: true})
}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
