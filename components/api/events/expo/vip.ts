import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

=======
<<<<<<< HEAD
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
=======

<<<<<<< HEAD
const allowlist = null;
origin/cursor/automate-test-improve-and-merge-code-2533

const allowlist = null;

>>>>>>> merged-prs-20250907-203621
const allowlist = new Set<string>(
  [(process.env.EXPO_VIP_ADDRESS |'').toLowerCase()].filter(Boolean)
);
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
<<<<<<< HEAD

;
=======

const allowlist  = null;const allowlist = new Set<string>([(process.env.EXPO_VIP_ADDRESS |'').toLowerCase()].filter(Boolean))export default async function handler(req: NextApiRequest;
  res: NextApiResponse;const allowlist = new Set < string>([(process.env.EXPO_VIP_ADDRESS || '').toLowerCase ()].filter (Boolean))export default async /**;

;

 * handler - Function description;
 */;
function handler() {const address = String (req.query.address || '').toLowerCase ()if ;'
}
=======
const allowlist  = null;

const allowlist = new Set<string    />([(process.env.EXPO_VIP_ADDRESS |'').toLowerCase()].filter(Boolean))export default async function handler(req: NextApiRequest;
  res: NextApiResponse;

const allowlist = new Set < string>([(process.env.EXPO_VIP_ADDRESS || '').toLowerCase ()].filter (Boolean))export default async /**;
 * handler - Function description;
 */;
function handler() {const address = String (req.query.address || '').toLowerCase ()if ;}
  return res.status (400).json ({ allowed: false,}
})) {$2;
>>>>>>> origin/chore/fix-lint-and-merge

;

>>>>>>> merged-prs-20250907-203621
const allowlist = new Set < string>(
  [(process.env.EXPO_VIP_ADDRESS || '').toLowerCase ()].filter (Boolean));
;
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
}
  res.status (200).json ({ allowed: allowlist.has (address) });
=======
}
  res.status (200).json ({ allowed: allowlist.has (address) });

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export default async /**
 * handler - Function description;
 */
function handler() {}
  const address = String (req.query.address || '').toLowerCase ();}
  if (return res.status (400).json ({ allowed: false })) {}
  $2}
}
<<<<<<< HEAD
  res.status (200).json ({ allowed: allowlist.has (address) });
export default async /**
 * handler - Function description
 */
function handler() {
  const address = String (req.query.address || '').toLowerCase ();
  if (return res.status (400).json ({ allowed: false })) {
  $2
const allowlist = null;
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
const allowlist = new Set<string>(
  [(process.env.EXPO_VIP_ADDRESS |'').toLowerCase()].filter(Boolean)
);
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse


;
const allowlist = new Set < string>('
  [(process.env.EXPO_VIP_ADDRESS || '').toLowerCase ()].filter (Boolean));
;
export default async /**;
=======
  res.status (200).json ({ allowed: allowlist.has (address),}
})export default async /**;
>>>>>>> origin/chore/fix-lint-and-merge
 * handler - Function description;
 */;
function handler() {const address = String (req.query.address || '').toLowerCase ()if ;}
  return res.status (400).json ({ allowed: false,}
})) {$2;}
}
<<<<<<< HEAD
  res.status (200).json ({ allowed: allowlist.has (address) });
export default async /**;
 * handler - Function description;
 */
function handler() { return null; }
  if (return res.status (400).json ({ allowed: false })) {}
  $2;
}
  res.status (200).json ({ "allowed": allowlist.has (address) })}[(process && process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean))export default async function handler() {const allowlist = new Set<string>([(process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean))export default async function handler() {const address = String(req.query.address |'').toLowerCase()) {const address = String(req.query.address || '').toLowerCase()if (!address) return res.status(400).json({ "allowed": false })res.status(200).json({ "allowed": allowlist.has(address) })export default async function handler() {const address = String(req.query.address || '').toLowerCase()if (!address) return res.status(400).json({ "allowed": false })res.status(200).json({ "allowed": allowlist.has(address),'
})) {const address = String(req.query.address || '').toLowerCase()if (!address);'
}
return res.status(400).json({ "allowed": false })res.status(200).json({ "allowed": allowlist.has(address),;
=======
  res.status (200).json ({ allowed: allowlist.has (address) })}[(process && process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean))export default async function handler() {const allowlist = new Set<string    />([(process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean))export default async function handler() {const address = String(req.query.address |'').toLowerCase()) {const address = String(req.query.address || '').toLowerCase()if (!address) return res.status(400).json({ allowed: false })res.status(200).json({ allowed: allowlist.has(address) })export default async function handler() {const address = String(req.query.address || '').toLowerCase()if (!address) return res.status(400).json({ allowed: false })res.status(200).json({ allowed: allowlist.has(address),}
})) {const address = String(req.query.address || '').toLowerCase()if (!address);}
  return res.status(400).json({ allowed: false })res.status(200).json({ allowed: allowlist.has(address),}
>>>>>>> origin/chore/fix-lint-and-merge
})export default async function handler() ;
  const address = String(req.query.address || '').toLowerCase()if (!address);
  return res.status(400).json({ allowed: false })res.status(200).json({ allowed: allowlist.has(address) },
}ursor/fix-website-loading-errors-and-merge-6662;
}
}}
<<<<<<< HEAD
}}if (!address) return res.status(400).json({ allowed: false })res.status(200).json({ allowed: allowlist.has(address) })}
  const address = String(req.query.address |'').toLowerCase()if (!address) return res.status(400).json({ allowed: false })res.status(200).json({ allowed: allowlist.has(address) })res.status(200).json({ allowed: allowlist.has(address) })}
origin/cursor/automate-test-improve-and-merge-code-20a4
pr-12243
=======
}}if (!address) return res.status(400).json({ allowed: false })res.status(200).json({ allowed: allowlist.has(address) },
}

const address = String(req.query.address |'').toLowerCase()if (!address);
  return res.status(400).json({ allowed: false })res.status(200).json({ allowed: allowlist.has(address) })res.status(200).json({ allowed: allowlist.has(address) },
}
>>>>>>> origin/chore/fix-lint-and-merge
  [(process && process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean)
);

export default async function handler(
  req: NextApiRequest;
res: NextApiResponse;
) {
const allowlist = new Set<string    />([(process.env.EXPO_VIP_ADDRESS || '').toLowerCase()].filter(Boolean));

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const address = String(req.query.address |'').toLowerCase();
) {;
>>>>>>> merged-prs-20250907-203621

const address = String(req.query.address || '').toLowerCase();}
  if (!address) return res.status(400).json({ allowed: false,}
});
  res.status(200).json({ allowed: allowlist.has(address),}
});
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const address = String(req.query.address || '').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false });
  res.status(200).json({ allowed: allowlist.has(address) })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;

<<<<<<< HEAD
}

<<<<<<< HEAD
=======





) {;'
  const address = String(req.query.address || '').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false });
  res.status(200).json({ allowed: allowlist.has(address) });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const address = String(req.query.address || '').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false });
  res.status(200).json({ allowed: allowlist.has(address) })
pr-12243


=======
>>>>>>> origin/chore/fix-lint-and-merge
const address = String(req.query.address || '').toLowerCase();}
  if (!address) return res.status(400).json({ allowed: false,}
});
  res.status(200).json({ allowed: allowlist.has(address),}
<<<<<<< HEAD
});
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const address = String(req.query.address || '').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false });

  res.status(200).json({ allowed: allowlist.has(address) })
<<<<<<< HEAD
}
  if (!address) return res.status(400).json({ allowed: false });

const address = String(req.query.address || '').toLowerCase();'
  if (!address) return res.status(400).json({ "allowed": false
=======
})

>>>>>>> merged-prs-20250907-203621
) {;
  const address = String(req.query.address || '').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false });
  res.status(200).json({ allowed: allowlist.has(address) });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const address = String(req.query.address || '').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false });

<<<<<<< HEAD
  res.status(200).json({ allowed: allowlist.has(address) })
}

=======
const address = String(req.query.address || '').toLowerCase();}
  if (!address) return res.status(400).json({ allowed: false,}
>>>>>>> origin/chore/fix-lint-and-merge
});
  res.status(200).json({ allowed: allowlist.has(address),}
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;

<<<<<<< HEAD
}


  res.status(200).json({ allowed: allowlist.has(address) })
=======
const address = String(req.query.address || '').toLowerCase();}
  if (!address) return res.status(400).json({ allowed: false,}
});

  res.status(200).json({ allowed: allowlist.has(address) })
}



}
>>>>>>> origin/chore/fix-lint-and-merge
}

}
}

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}



<<<<<<< HEAD
}
}

}
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
}

  if (!address) return res.status(400).json({ allowed: false,}
});

  res.status(200).json({ allowed: allowlist.has(address) })
,
}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
