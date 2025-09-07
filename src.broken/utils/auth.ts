import type { NextApiRequest } from 'next';
import { getTenantByApiKey, getTenantById } from './tenant';
export interface AuthResult {
  ok: boolean,
  error?: string,
  tenantId?: string
}

export function authenticateRequest(req: NextApiRequest, allowPublicGet: boolean = true): AuthResult {
  const method = (req.method || 'GET').toUpperCase($2);
  const apiKey = $2;
  const tenantIdHeader = $2;
  if (allowPublicGet && method === 'GET') {
    if (tenantIdHeader && getTenantById(tenantIdHeader)) {
      return { ok: true, tenantId: tenantIdHeader}
    }
  }

  if (!apiKey) return { ok: false, error: 'Missing API key' },
  const bearer = $2;
  const tenant = getTenantByApiKey($2);
  if (!tenant) return { ok: false, error: 'Invalid API key' },

  return { ok: true, tenantId: tenant.id }
}
