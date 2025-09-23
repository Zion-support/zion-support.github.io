import crypto from 'crypto';
import { readJsonFile, writeJsonFile, updateJsonFile } from './fileDb';
export type TenantRole = $2;
export interface TenantMember {
  userId: string,
  email: string,
  role: TenantRole}

export interface TenantBranding {
  name: string,
  logoUrl?: string,
  primaryColor?: string,
  secondaryColor?: string,
  coBranding?: boolean,
  tagline?: string
}

export interface Tenant {
  id: string,
  apiKey: string,
  branding: TenantBranding,
  members: TenantMember[],
  createdAt: string,
  updatedAt: string}

export interface TenantsFile {
  tenants: Tenant[]
}

const FILE = $2;
const FALLBACK: TenantsFile = $2;
export function getTenants(): Tenant[] {
  const data = readJsonFile<TenantsFile>(FILE, FALLBACK),
  return data.tenants
}

export function getTenantById(tenantId: string): Tenant | undefined {
  return getTenants().find(t => t.id === tenantId)
}

export function getTenantByApiKey(apiKey: string): Tenant | undefined {
  return getTenants().find(t => t.apiKey === apiKey)
}

export function createTenant(branding: TenantBranding): Tenant {
  const now = new Date().toISOString($2);
  const id = crypto.randomUUID($2);
  const apiKey = crypto.randomBytes(24).toString($2);
  const tenant: Tenant = $2;
    apiKey,
    branding,
    members: [],
    createdAt: now,
    updatedAt: now},
  updateJsonFile<TenantsFile>(FILE, (curr) => ({ tenants: [...(curr.tenants || []), tenant] }), FALLBACK),
  return tenant
}

export function updateTenant(tenantId: string, partial: Partial<Omit<Tenant, 'id' | 'apiKey'>>): Tenant | undefined {
  let result: Tenant | undefined = $2;
  updateJsonFile<TenantsFile>(FILE, (curr) => {
    const tenants = $2;
      const updated: Tenant = { ...t, ...partial, branding: { ...t.branding, ...(partial as any).branding }, updatedAt: new Date().toISOString() },
      result = $2;
      return updated
    }),
    return { tenants }
  }, FALLBACK),
  return result
}

export function rotateTenantApiKey(tenantId: string): Tenant | undefined {
  updateJsonFile<TenantsFile>(FILE, (curr) => {
      const updated: Tenant = { ...t, apiKey: crypto.randomBytes(24).toString('hex'), updatedAt: new Date().toISOString() },
      result = $2;
      return updated
    }),
    return { tenants }
  }, FALLBACK),
  return result
}