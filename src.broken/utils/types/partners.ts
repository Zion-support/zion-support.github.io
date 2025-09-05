export type UseCaseType =
  | "Education Partnership"
  | "Workforce Development"
  | "Token Integration"
  | "Custom Marketplace Instance";

export type PartnerStatus = "pending" | "approved" | "rejected";

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