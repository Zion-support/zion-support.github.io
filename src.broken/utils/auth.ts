import type {_NextApiRequest} from 'next';

export interface AuthResult {_ok: boolean;
  error?: string;
  tenantId?: string;}

export function authenticateRequest(_req: NextApiRequest, _allowPublicGet: boolean = true): AuthResult {_const _method = (req.method || 'GET').toUpperCase();
  const _apiKey = (req.headers['x-api-key'] || req.headers['authorization']) as string | undefined;
  const _tenantIdHeader = (req.headers['x-tenant-id'] || req.query.tenantId) as string | undefined;

  if (allowPublicGet && method === 'GET') {
    if (tenantIdHeader && getTenantById(tenantIdHeader)) {
      return { ok: true, _tenantId: tenantIdHeader};
    }
  }

  if (!apiKey) return {_ok: false, _error: 'Missing API key'};
  const _bearer = apiKey.startsWith('Bearer ') ? apiKey.slice(7) : apiKey;
  const _tenant = getTenantByApiKey(bearer);
  if (!tenant) return {_ok: false, _error: 'Invalid API key'};

  return {_ok: true, _tenantId: tenant.id};
}
