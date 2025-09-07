<<<<<<< HEAD
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91

export default function handler(req: NextApiRequest, res: NextApiResponse) {
const { userId } = req.query
  const txs = getAllTransactions()
  const filtered = typeof userId === "string" ? txs.filter((t) => t.userId === userId) : txs
  res.status(200).json({ transactions: filtered })

<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ tokens: [] });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
