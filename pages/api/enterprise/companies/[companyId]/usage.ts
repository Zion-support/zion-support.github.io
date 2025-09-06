import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' })
  }
  const company = null;
    return res.status(ok ? 200 : 404).json(ok ? { success: true } : { error: 'company_not_found' })
  }

  return res.status(405).json({ error: "method_not_allowed" });
}
