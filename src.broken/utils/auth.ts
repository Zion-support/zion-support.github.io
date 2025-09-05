<<<<<<< HEAD
import type { NextApiRequest } from 'next',
import { getTenantByApiKey, getTenantById } from './tenant',

export interface AuthResult {
  ok: boolean,
  error?: string,
  tenantId?: string
}

export function authenticateRequest(req: NextApiRequest, allowPublicGet: boolean = true): AuthResult {
  const method = (req.method || 'GET').toUpperCase(),
  const apiKey = (req.headers['x-api-key'] || req.headers['authorization']) as string | undefined,
  const tenantIdHeader = (req.headers['x-tenant-id'] || req.query.tenantId) as string | undefined,

  if (allowPublicGet && method === 'GET') {
    if (tenantIdHeader && getTenantById(tenantIdHeader)) {
      return { ok: true, tenantId: tenantIdHeader }
    }
  }

  if (!apiKey) return { ok: false, error: 'Missing API key' },
  const bearer = apiKey.startsWith('Bearer ') ? apiKey.slice(7) : apiKey,
  const tenant = getTenantByApiKey(bearer),
  if (!tenant) return { ok: false, error: 'Invalid API key' },

  return { ok: true, tenantId: tenant.id }
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
