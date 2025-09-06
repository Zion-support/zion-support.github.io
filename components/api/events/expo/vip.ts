import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
const allowlist = null;
=======
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
const allowlist = new Set<string>(
  [(process.env.EXPO_VIP_ADDRESS |'').toLowerCase()].filter(Boolean)
);
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const address = String(req.query.address |'').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false });
  res.status(200).json({ allowed: allowlist.has(address) });
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const address = String(req.query.address |'').toLowerCase();
  if (!address) return res.status(400).json({ allowed: false });
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  res.status(200).json({ allowed: allowlist.has(address) })
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
