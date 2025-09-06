import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD

const store: Record<string, any> = (global as any).__ZION_DID_STORE__ || {},
=======

const store: Record<string, any> = (global as any).ZION_DID_STORE || {};
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address } = req.query as { address?: string },
  if (!address) return res.status(400).json({ error: 'Missing address' });
<<<<<<< HEAD
  const data = null;
=======
const store: Record<string, any> = (global as any).__ZION_DID_STORE__ |{}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { address } = req.query as { address?: string }
  if (!address) return res.status(400).json({ error: 'Missing address' })
  const data = store[String(address).toLowerCase()] |null
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return res.status(200).json({ data })
}
=======
  
}

const data = store[String(address).toLowerCase()] || null;
  return res.status(200).json({ data });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
