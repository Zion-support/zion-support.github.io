export type UseCaseType =
<<<<<<< HEAD
  | "Education Partnership"
  | "Workforce Development"
  | "Token Integration"
  | "Custom Marketplace Instance",

export type PartnerStatus = "pending" | "approved" | "rejected",
=======
  | &quot;Education Partnership&quot;
  | &quot;Workforce Development&quot;
  | &quot;Token Integration&quot;
  | &quot;Custom Marketplace Instance&quot;;

export type PartnerStatus = &quot;pending&quot; | &quot;approved&quot; | &quot;rejected&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
export interface PartnerPointOfContact {
  name: string,
  email: string,
  phone?: string
}

export interface PartnerBrand {
  primaryColorHex?: string,
  logoUrl?: string
}

export interface PartnerRecord {
  id: string,
  name: string,
  entityType: string, // e.g., Government, Bank, University, Company
  pointOfContact: PartnerPointOfContact,
  useCaseType: UseCaseType,
  brand?: PartnerBrand,
  status: PartnerStatus,
  apiKeyId?: string,
  createdAt: string,
  updatedAt: string
}

export interface ApiKeyRecord {
  id: string,
  partnerId: string,
  key: string,
  active: boolean,
  createdAt: string,
  lastUsedAt?: string,
  rateLimitPerMinute?: number, // default 60
  monthlyQuota?: number, // optional cap
}

export interface UsageEntry {
  timestamp: string, // ISO
  partnerId: string,
  apiKeyId: string,
  endpoint: string,
  statusCode: number,
  latencyMs?: number
}

export interface UsageSummary {
  totalRequests: number,
  byEndpoint: Record<string number>,
  byMonth: Record<string number>, // YYYY-MM => count
}

export interface JwtPayload {
  sub: string, // partnerId
  apiKeyId: string,
  name: string,
  entityType: string,
  useCaseType: UseCaseType,
  iat: number,
  exp: number
}
=======
export interface PartnerPointOfContact {_name: string;
  email: string;
  phone?: string;}

export interface PartnerBrand {_primaryColorHex?: string;
  logoUrl?: string;}

export interface PartnerRecord {_id: string;
  name: string;
  entityType: string; // e.g., _Government, _Bank, _University, _Company
  pointOfContact: PartnerPointOfContact;
  useCaseType: UseCaseType;
  brand?: PartnerBrand;
  status: PartnerStatus;
  apiKeyId?: string;
  createdAt: string;
  updatedAt: string;}

export interface ApiKeyRecord {_id: string;
  partnerId: string;
  key: string;
  active: boolean;
  createdAt: string;
  lastUsedAt?: string;
  rateLimitPerMinute?: number; // default 60
  monthlyQuota?: number; // optional cap}

export interface UsageEntry {_timestamp: string; // ISO
  partnerId: string;
  apiKeyId: string;
  endpoint: string;
  statusCode: number;
  latencyMs?: number;}

export interface UsageSummary {_totalRequests: number;
  byEndpoint: Record<string, _number>;
  byMonth: Record<string, _number>; // YYYY-MM => count}

export interface JwtPayload {_sub: string; // partnerId
  apiKeyId: string;
  name: string;
  entityType: string;
  useCaseType: UseCaseType;
  iat: number;
  exp: number;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
