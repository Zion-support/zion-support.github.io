import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest } from '@/utils/auth';
<<<<<<< HEAD
import {
  createTenant,
  getTenants,
  rotateTenantApiKey,
  updateTenant,;
} from '@/utils/tenant';
=======
import { createTenant, getTenants, rotateTenantApiKey, updateTenant } from '@/utils/tenant';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'GET').toUpperCase();

  if (method === 'GET') {
    return res.status(200).json({ tenants: getTenants() });
  }

  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });

  if (method === 'POST') {
    const { branding } = req.body || {};
<<<<<<< HEAD
    if (!branding?.name)
      return res.status(400).json({ error: 'branding.name required' });
    const tenant = createTenant(branding);
    return res.status(201).json({ tenant });
=======
    if (!branding?.name) return res.status(400).json({ error: 'branding.name required' });
    const tenant = createTenant(branding);
    return res.status(201).json({ tenant })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  if (method === 'PUT') {
    const { tenantId, update } = req.body || {};
    if (!tenantId) return res.status(400).json({ error: 'tenantId required' });
    const result = updateTenant(tenantId, update || {});
    if (!result) return res.status(404).json({ error: 'Tenant not found' });
<<<<<<< HEAD
    return res.status(200).json({ tenant: result });
=======
    return res.status(200).json({ tenant: result })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  if (method === 'PATCH') {
    const { tenantId, rotateKey } = req.body || {};
<<<<<<< HEAD
    if (!tenantId || !rotateKey)
      return res.status(400).json({ error: 'tenantId and rotateKey required' });
    const result = rotateTenantApiKey(tenantId);
    if (!result) return res.status(404).json({ error: 'Tenant not found' });
    return res.status(200).json({ tenant: result });
  }

  return res.status(405).json({ error: 'Method not allowed' });
=======
    if (!tenantId || !rotateKey) return res.status(400).json({ error: 'tenantId and rotateKey required' });
    const result = rotateTenantApiKey(tenantId);
    if (!result) return res.status(404).json({ error: 'Tenant not found' });
    return res.status(200).json({ tenant: result })
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
