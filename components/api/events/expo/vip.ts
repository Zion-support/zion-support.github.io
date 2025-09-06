import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
  [(process && process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean)
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
const allowlist = new Set<string>(
  [(process.env.EXPO_VIP_ADDRESS |'').toLowerCase()].filter(Boolean)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
);
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
<<<<<<< HEAD

  if (!address) return res.status(400).json({ allowed: false });
  res.status(200).json({ allowed: allowlist.has(address) })
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
  res.status (200).json ({ allowed: allowlist.has (address) });
export default async /**
 * handler - Function description
 */
function handler() {
  const address = String (req.query.address || '').toLowerCase ();
  if (return res.status (400).json ({ allowed: false })) {
  $2
}
  res.status (200).json ({ allowed: allowlist.has (address) });

}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

) {;
  const address = String(req.query.address || '').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false });
  res.status(200).json({ allowed: allowlist.has(address) });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const address = String(req.query.address || '').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false });

  res.status(200).json({ allowed: allowlist.has(address) })
}
<<<<<<< HEAD
}

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
}

}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}

}

  if (!address) return res.status(400).json({ allowed: false });

  res.status(200).json({ allowed: allowlist.has(address) })

}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
