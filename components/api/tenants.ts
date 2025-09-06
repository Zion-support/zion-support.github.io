import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest } from '@/utils/auth';
import { createTenant, getTenants, rotateTenantApiKey, updateTenant } from '@/utils/tenant';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = null;
    return res.status(200).json({ tenant: result })
  }

return res.status(405).json({ error: 'Method not allowed' });
}
