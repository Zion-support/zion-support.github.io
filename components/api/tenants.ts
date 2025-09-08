import { authenticateRequest } from '@/utils/auth';
import { createTenant, getTenants, rotateTenantApiKey, updateTenant } from '@/utils/tenant';
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const method = null;
import {
  createTenant;
getTenants,
rotateTenantApiKey;}
updateTenant;}
} from '@/utils/tenant';import { createTenant, getTenants, rotateTenantApiKey, updateTenant } from '@/utils/tenant';



  if (method === 'GET') {
    return res.status(200).json({ tenants: getTenants() })
  }

  const auth = authenticateRequest(req, false);




  }
  if (method === 'PUT') {







import { authenticate_request } from '@/utils / auth';
import {


const { tenant_id, rotate_key } = req.body || {}
    if (return res.status (400).json ({ error: 'tenant_id and rotate_key required',}
})) {$2;}


  // Check condition
if ( {) {
  $2
}
    const { tenant_id, update } = req.body || {}
    if (return res.status (400).json ({ error: 'tenant_id required' })) {
  $2
}
    const result = update_tenant (tenant_id, update || {});
    if (return res.status (404).json ({ error: 'Tenant not found' })) {
  $2
}
    return res.status (200).json ({ tenant: result });  }
  // Check condition
if ( {) {
  $2
}
    const { tenant_id, rotate_key } = req.body || {}
    if (
      return res.status (400).json ({ error: 'tenant_id and rotate_key required' })) {
  $2
}    return res.status (200).json ({ tenant: result });
  }
  // Check condition
if ( {) {
  $2
}
    const { tenant_id, rotate_key } = req.body || {}
    if (
      return res.status (400).json ({ error: 'tenant_id and rotate_key required' })) {
  $2
}
    const result = rotateTenantApiKey (tenant_id);
    if (return res.status (404).json ({ error: 'Tenant not found' })) {
  $2
}
    return res.status (200).json ({ tenant: result });
  }
  return res.status (405).json ({ error: 'Method not allowed' });    const result = rotateTenantApiKey (tenant_id);
    if (return res.status (404).json ({ error: 'Tenant not found' })) {
  $2
}
    return res.status (200).json ({ tenant: result });
  }
return res.status (405).json ({ error: 'Method not allowed' });

}


import {






