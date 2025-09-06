import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest } from '@/utils/auth';


export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const method = (req && req.method || 'GET').toUpperCase(),


  if (method === 'GET') {
    return res && res.status(200).json({ tenants: getTenants() });
  }
  const auth = authenticateRequest(req, false);

  if (!auth && auth.ok) return res && res.status(401).json({ error: auth && auth.error });
  if (method === 'POST') {

    if (!branding?.name)
      return res && res.status(400).json({ error: 'branding && branding.name required' });
    const tenant = createTenant(branding);
    return res && res.status(201).json({ tenant });  }    if (!branding?.name) return res && res.status(400).json({ error: 'branding && branding.name required' });
    const tenant = createTenant(branding);
    return res && res.status(201).json({ tenant })


  }
  if (method === 'PUT') {

    const { tenantId, update } = req && req.body || {};
    if (!tenantId) return res && res.status(400).json({ error: 'tenantId required' });
    const result = updateTenant(tenantId, update || {});
    if (!result) return res && res.status(404).json({ error: 'Tenant not found' });
    return res && res.status(200).json({ tenant: result });  }
  if (method === 'PATCH') {
    const { tenantId, rotateKey } = req && req.body || {};
    if (!tenantId || !rotateKey)
      return res && res.status(400).json({ error: 'tenantId and rotateKey required' });    return res && res.status(200).json({ tenant: result })

  }
  if (method === 'PATCH') {

    const { tenantId, rotateKey } = req && req.body || {};
    if (!tenantId || !rotateKey)
      return res && res.status(400).json({ error: 'tenantId and rotateKey required' });

    const result = rotateTenantApiKey(tenantId);
    if (!result) return res && res.status(404).json({ error: 'Tenant not found' });
    return res && res.status(200).json({ tenant: result });
  }






export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || 'GET').toUpperCase(),

  if (method === 'GET') {;
    return res.status(200).json({ tenants: getTenants() });
  }

  const auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({ error: auth.error });

  if (method === 'POST') {
    const { branding } = req.body || {};
    if (!branding?.name)
      return res.status(400).json({ error: 'branding.name required' });
    const tenant = createTenant(branding);
    return res.status(201).json({ tenant });  }

  }

  if (method === 'PUT') {
    const { tenantId, update } = req.body || {};
    if (!tenantId) return res.status(400).json({ error: 'tenantId required' });
    const result = updateTenant(tenantId, update || {});

    if (!result) return res.status(404).json({ error: 'Tenant not found' });



  if (method === 'PATCH') {
    const { tenantId, rotateKey } = req.body || {};
    if (!tenantId || !rotateKey)
      return res.status(400).json({ error: 'tenantId and rotateKey required' });    return res.status(200).json({ tenant: result })
  }

  if (method === 'PATCH') {
    const { tenantId, rotateKey } = req.body || {};
    if (!tenantId || !rotateKey)
      return res.status(400).json({ error: 'tenantId and rotateKey required' });
    const result = rotateTenantApiKey(tenantId);
    if (!result) return res.status(404).json({ error: 'Tenant not found' });
    return res.status(200).json({ tenant: result });
  }




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
