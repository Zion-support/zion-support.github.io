export interface RateLimitConfig {
  requestsPerMinute: number;
  requestsPerHour: number;
  requestsPerDay: number;
  burstLimit: number;
  windowSize: number
}

export interface RateLimitRule {
  id: string;
  name: string;
  pattern: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'ALL';
  config: RateLimitConfig;
  enabled: boolean;
  createdAt: Date;
  updatedAt: Date
}

export interface RateLimitStats {
  endpoint: string;
  method: string;
  totalRequests: number;
  blockedRequests: number;
  averageResponseTime: number;
  lastRequest: Date;
  currentUsage: {
    minute: number;
    hour: number;
    day: number
  }
}

export interface APIKey {
  id: string;
  name: string;
  key: string;
  permissions: string[];
  rateLimit: RateLimitConfig;
  createdAt: Date;
  lastUsed: Date;
  isActive: boolean
}

export interface RateLimitViolation {
  id: string;
  apiKey: string;
  endpoint: string;
  method: string;
  timestamp: Date;
  reason: 'rate_limit_exceeded' | 'burst_limit_exceeded' | 'quota_exceeded';
  ipAddress: string;
  userAgent: string
}

export class APIRateLimiterService {
  private apiKey: string;
  private baseUrl: string;
  constructor(apiKey: string, baseUrl: string;