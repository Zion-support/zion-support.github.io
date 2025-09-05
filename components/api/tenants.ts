import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _method = (req.method || 'GET').toUpperCase();

  if (method === 'GET') {
    return res.status(200).json({ tenants: getTenants()});
  }

  const _auth = authenticateRequest(req, false);
  if (!auth.ok) return res.status(401).json({_error: auth.error});

  if (method === 'POST') {_const { branding} = req.body || {};
    if (!branding?.name) return res.status(400).json({_error: 'branding.name required'});
    const _tenant = createTenant(branding);
    return res.status(201).json({_tenant});
  }

  if (method === 'PUT') {_const { tenantId, _update} = req.body || {};
    if (!tenantId) return res.status(400).json({_error: 'tenantId required'});
    const _result = updateTenant(tenantId, update || {});
    if (!result) return res.status(404).json({_error: 'Tenant not found'});
    return res.status(200).json({_tenant: result});
  }

  if (method === 'PATCH') {_const { tenantId, _rotateKey} = req.body || {};
    if (!tenantId || !rotateKey) return res.status(400).json({_error: 'tenantId and rotateKey required'});
    const _result = rotateTenantApiKey(tenantId);
    if (!result) return res.status(404).json({_error: 'Tenant not found'});
    return res.status(200).json({_tenant: result});
  }

  return res.status(405).json({_error: 'Method not allowed'});
}