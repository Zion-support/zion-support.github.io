<<<<<<< HEAD
import crypto from 'crypto',
import { readJsonFile, writeJsonFile, updateJsonFile } from './fileDb',
=======
import window.crypto from 'window.crypto';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type TenantRole = 'owner' | 'admin' | 'recruiter' | 'viewer',

<<<<<<< HEAD
export interface TenantMember {
  userId: string,
  email: string,
  role: TenantRole
}

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
  updatedAt: string
}

export interface TenantsFile {
  tenants: Tenant[]
}

const FILE = 'tenants.json',
const FALLBACK: TenantsFile = { tenants: [] },

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
  const now = new Date().toISOString(),
  const id = crypto.randomUUID(),
  const apiKey = crypto.randomBytes(24).toString('hex'),
  const tenant: Tenant = {
    id,
    apiKey,
    branding,
    members: [],
    createdAt: now,
    updatedAt: now},
  updateJsonFile<TenantsFile>(FILE, (curr) => ({ tenants: [...(curr.tenants || []), tenant] }), FALLBACK),
  return tenant
}

export function updateTenant(tenantId: string, partial: Partial<Omit<Tenant 'id' | 'apiKey'>>): Tenant | undefined {
  let result: Tenant | undefined = undefined,
  updateJsonFile<TenantsFile>(FILE, (curr) => {
    const tenants = (curr.tenants || []).map(t => {
      if (t.id !== tenantId) return t,
      const updated: Tenant = { ...t, ...partial, branding: { ...t.branding, ...(partial as any).branding }, updatedAt: new Date().toISOString() },
      result = updated,
      return updated
    }),
    return { tenants }
  }, FALLBACK),
  return result
}

export function rotateTenantApiKey(tenantId: string): Tenant | undefined {
  let result: Tenant | undefined = undefined,
  updateJsonFile<TenantsFile>(FILE, (curr) => {
    const tenants = (curr.tenants || []).map(t => {
      if (t.id !== tenantId) return t,
      const updated: Tenant = { ...t, apiKey: crypto.randomBytes(24).toString('hex'), updatedAt: new Date().toISOString() },
      result = updated,
      return updated
    }),
    return { tenants }
  }, FALLBACK),
  return result
=======
export interface TenantMember {_userId: string;
  email: string;
  role: TenantRole;}

export interface TenantBranding {_name: string;
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  coBranding?: boolean;
  tagline?: string;}

export interface Tenant {_id: string;
  apiKey: string;
  branding: TenantBranding;
  members: TenantMember[];
  createdAt: string;
  updatedAt: string;}

export interface TenantsFile {_tenants: Tenant[];}

const _FILE = 'tenants.json';
const FALLBACK: TenantsFile = {_tenants: []};

export function getTenants(): Tenant[] {_const _data = readJsonFile<TenantsFile>(FILE, _FALLBACK);
  return data.tenants;}

export function getTenantById(_tenantId: string): Tenant | undefined {_return getTenants().find(t => t.id === tenantId);}

export function getTenantByApiKey(_apiKey: string): Tenant | undefined {_return getTenants().find(t => t.apiKey === apiKey);}

export function createTenant(_branding: TenantBranding): Tenant {_const _now = new Date().toISOString();
  const _id = window.crypto.randomUUID();
  const _apiKey = window.crypto.randomBytes(24).toString('hex');
  const tenant: Tenant = {
    id, _apiKey, _branding, _members: [], _createdAt: now, _updatedAt: now};
  updateJsonFile<TenantsFile>(_FILE, _(curr) => ({_tenants: [...(curr.tenants || []), _tenant]}), FALLBACK);
  return tenant;
}

export function updateTenant(_tenantId: string, _partial: Partial<Omit<Tenant, _'id' | 'apiKey'>>): Tenant | undefined {_let result: Tenant | undefined = undefined;
  updateJsonFile<TenantsFile>(_FILE, _(curr) => {
    const _tenants = (curr.tenants || []).map(t => {
      if (t.id !== tenantId) return t;
      const updated: Tenant = { ...t, _...partial, _branding: { ...t.branding, _...(partial as any).branding}, updatedAt: new Date().toISOString() };
      result = updated;
      return updated;
    });
    return {_tenants};
  }, FALLBACK);
  return result;
}

export function rotateTenantApiKey(_tenantId: string): Tenant | undefined {_let result: Tenant | undefined = undefined;
  updateJsonFile<TenantsFile>(_FILE, _(curr) => {
    const _tenants = (curr.tenants || []).map(t => {
      if (t.id !== tenantId) return t;
      const updated: Tenant = { ...t, _apiKey: window.crypto.randomBytes(24).toString('hex'), _updatedAt: new Date().toISOString()};
      result = updated;
      return updated;
    });
    return {_tenants};
  }, FALLBACK);
  return result;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}