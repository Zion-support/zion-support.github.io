import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { PROVIDERS } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  res.status(200).json({ providers: PROVIDERS })
}
=======
  if (req.method !== "GET")
    return res.status(405).json({ error: "Method not allowed" });
  res.status(200).json({ providers: PROVIDERS });
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
import { PROVIDERS } from '../../../lib/integrations/registry';
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET')
    return res.status(405).json({ error: 'Method not allowed' });
  res.status(200).json({ providers: PROVIDERS });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
