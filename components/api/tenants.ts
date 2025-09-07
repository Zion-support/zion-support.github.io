import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest } from '@/utils/auth';
import { createTenant, getTenants, rotateTenantApiKey, updateTenant } from '@/utils/tenant';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'GET').toUpperCase($2);
  if (method === 'GET') {
    return res.status(200).json({ tenants: getTenants() })
  }

  const auth = authenticateRequest($2);
  if (!auth.ok) return res.status(401).json($2);
  if (method = $2;
    if (!branding?.name) return res.status(400).json($2);
    const tenant = createTenant($2);
    return res.status(201).json({ tenant })
  }

  if (method === 'PUT') {
    const { tenantId, update } = req.body || {},
    if (!tenantId) return res.status(400).json($2);
    const result = updateTenant($2);
    if (!result) return res.status(404).json($2);
    return res.status(200).json({ tenant: result})
  }

  if (method === 'PATCH') {
    const { tenantId, rotateKey } = req.body || {},
    if (!tenantId || !rotateKey) return res.status(400).json($2);
    const result = rotateTenantApiKey($2);
    if (!result) return res.status(404).json($2);
    return res.status(200).json({ tenant: result})
  }

  return res.status(405).json({ error: 'Method not allowed' })
}