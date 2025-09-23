import crypto from 'crypto';
import { readJsonFile, writeJsonFile, updateJsonFile } from './fileDb';

export type TenantRole = 'owner' | 'admin' | 'recruiter' | 'viewer';

export interface TenantMember {
  userId: string;
  email: string;
  role: TenantRole;
}

export interface TenantBranding {
  name: string;
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  coBranding?: boolean;
  tagline?: string;
}

export interface Tenant {
  id: string;
  apiKey: string;
  branding: TenantBranding;
  members: TenantMember[];
  createdAt: string;
  updatedAt: string;
}

export interface TenantsFile {
  tenants: Tenant[];
}

const FILE = 'tenants.json';
const FALLBACK: TenantsFile ={ tenants: [] };

export function getTenants(): Tenant[] {
  const data = readJsonFile<TenantsFile>(FILE, FALLBACK);
  return data.tenants;
}

export function getTenantById(tenantId: string): Tenant | undefined {
  return getTenants().find(t => t.id === tenantId);
}

export function getTenantByApiKey(apiKey: string): Tenant | undefined {
  return getTenants().find(t => t.apiKey === apiKey);
}

export function createTenant(branding: TenantBranding): Tenant {
  const now = new Date().toISOString();
  const id = crypto.randomUUID();
  const apiKey = crypto.randomBytes(24).toString('hex');
  const tenant: Tenant = {
    id,
    apiKey,
    branding,
    members: [],
    createdAt: now,
