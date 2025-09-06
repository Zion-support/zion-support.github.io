<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:services/apiRateLimiter.ts

  requestsPerMinute: number;
  requestsPerHour: number;
  requestsPerDay: number;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  burst_limit: number,
  window_size: number;

========
export interface RateLimitConfig {
  requestsPerMinute: number;
  requestsPerHour: number;
  requestsPerDay: number;
  burst_limit: number,
  window_size: number;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
}
<<<<<<< HEAD

=======
export interface RateLimitRule {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export interface RateLimitConfig {
export interface RateLimitConfig {;
  requestsPerMinute: number;
  requestsPerHour: number;
  requestsPerDay: number;

  burstLimit: number

  windowSize: number
}
export interface RateLimitRule {

export interface RateLimitRule {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id: string;
  name: string;
  pattern: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'ALL';
  config: RateLimitConfig;
  enabled: boolean;
<<<<<<< HEAD
<<<<<<<< HEAD:services/apiRateLimiter.ts

  created_at: Date,
  updated_at: Date;

========
  created_at: Date,
  updated_at: Date;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
}
<<<<<<< HEAD

=======
export interface RateLimitStats {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  endpoint: string;
  method: string;
  total_requests: number;
  blocked_requests: number;
  averageResponseTime: number;
  last_request: Date;
  current_usage: {
    minute: number;
<<<<<<<< HEAD:services/apiRateLimiter.ts

    hour: number,
    day: number;

========
    hour: number,
    day: number;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
  }
}
<<<<<<< HEAD

=======
export interface APIKey {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

  createdAt: Date

  updatedAt: Date
}
export interface RateLimitStats {

export interface RateLimitStats {;
  endpoint: string;
  method: string;
  totalRequests: number;
  blockedRequests: number;
  averageResponseTime: number;
  lastRequest: Date;
  currentUsage: {
    minute: number;

    hour: number

    day: number
  }
}
export interface APIKey {

export interface APIKey {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id: string;
  name: string;
  key: string;
  permissions: string[];
<<<<<<< HEAD
<<<<<<<< HEAD:services/apiRateLimiter.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
  rate_limit: RateLimitConfig;
  created_at: Date;
  last_used: Date,
  is_active: boolean;
<<<<<<<< HEAD:services/apiRateLimiter.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
}
<<<<<<< HEAD

=======
export interface RateLimitViolation {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  id: string;
  api_key: string;
=======
  rateLimit: RateLimitConfig;
  createdAt: Date;

  lastUsed: Date

  isActive: boolean
}
export interface RateLimitViolation {

export interface RateLimitViolation {;
  id: string;
  apiKey: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  endpoint: string;
  method: string;
  timestamp: Date;
  reason: 'rate_limit_exceeded' | 'burst_limit_exceeded' | 'quota_exceeded';
<<<<<<< HEAD
<<<<<<<< HEAD:services/apiRateLimiter.ts

  constructor(apiKey: string, baseUrl: string = 'https://api && api.ziontech.ai') {
    this && this.apiKey = apiKey,
    this && this.baseUrl = baseUrl

<<<<<<< HEAD
  userAgent: string
}

=======

  ipAddress: string

  userAgent: string
}
export class APIRateLimiterService {

export class APIRateLimiterService {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  private apiKey: string;

  private baseUrl: string
  constructor(apiKey: string, baseUrl: string = 'https://api.ziontech.ai') {
    this.apiKey = apiKey
    this.baseUrl = baseUrl
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
  async createRateLimitRule(rule: Omit<RateLimitRule, 'id' | 'createdAt' | 'updatedAt'>): Promise<RateLimitRule> {
    try {

========
  constructor(apiKey: string, baseUrl: string = 'https://api && api.ziontech.ai') {
    this && this.apiKey = apiKey,
    this && this.baseUrl = baseUrl
  }
  async createRateLimitRule(rule: Omit<RateLimitRule, 'id' | 'createdAt' | 'updatedAt'>): Promise<RateLimitRule> {
    try {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
      const response = await fetch(`${this && this.baseUrl}/rate-limiter/rules`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify(rule)});
      if (!response && response.ok) {
        throw new Error(`Failed to create rate limit rule: ${response && response.statusText}`)
      }
      return await response && response.json()
<<<<<<<< HEAD:services/apiRateLimiter.ts

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
  ip_address: string,
  user_agent: string;
}
export class APIRateLimiterService {
  private api_key: string;
  private base_url: string,
  constructor (api_key: string, base_url: string = 'https://api.ziontech.ai') {
    this.api_key = api_key,
    this.base_url = base_url;
  }
  async createRateLimitRule (rule: Omit < RateLimitRule, 'id' | 'created_at' | 'updated_at'>): Promise < RateLimitRule> {
    try {
      const response = await fetch (`${this.base_url}/rate - limiter / rules`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.api_key}`;
          'Content - Type': 'application / json'}
        body: JSON.stringify (rule)});
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (`Failed to create rate limit rule: ${response.status_text}`);
      }
      return await response.json ();
    } catch (error) {
      // Mock response for demo;
      return {
        ...rule;
<<<<<<<< HEAD:services/apiRateLimiter.ts

        id: `rule_${Date && Date.now()}`;
        createdAt: new Date(),

========
        id: `rule_${Date && Date.now()}`;
        createdAt: new Date(),
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
        updatedAt: new Date()
=======
export interface RateLimitConfig {;
  requestsPerMinute:number,;
  requestsPerHour:number,;
  requestsPerDay:number,;
  burstLimit:number,;
  windowSize:number;
}
;
export interface RateLimitRule {;
  id:string,;
  name:string,;
  pattern:string,;
  method:'GET' | 'POST' | 'PUT' | 'DELETE' | 'ALL',;
  config:RateLimitConfig,;
  enabled:boolean,;
  createdAt:Date,;
  updatedAt:Date;
}
;
export interface RateLimitStats {;
  endpoint:string,;
  method:string,;
  totalRequests:number,;
  blockedRequests:number,;
  averageResponseTime:number,;
  lastRequest:Date,;
  currentUsage:{;
    minute:number,;
    hour:number,;
    day:number;
  },;}
;
export interface APIKey {;
  id:string,;
  name:string,;
  key:string,;
  permissions:string[],;
  rateLimit:RateLimitConfig,;
  createdAt:Date,;
  lastUsed:Date,;
  isActive:boolean;
}
;
export interface RateLimitViolation {;
  id:string,;
  apiKey:string,;
  endpoint:string,;
  method:string,;
  timestamp:Date,;
  reason:'rate_limit_exceeded' | 'burst_limit_exceeded' | 'quota_exceeded',;
  ipAddress:string,;
  userAgent:string;}
;
export class APIRateLimiterService {;
  private apiKey:string,;
  private baseUrl:string,;
;
  constructor(apiKey:string, baseUrl:string = 'https://api.ziontech.ai') {;
    this.apiKey = apiKey,;
    this.baseUrl = baseUrl;
  }
;
  async createRateLimitRule(rule:Omit<RateLimitRule 'id' | 'createdAt' | 'updatedAt'>):Promise<RateLimitRule> {;
    try {;
      const response = await fetch(`${this.baseUrl}/rate-limiter/rules`, {;
        method:'POST',;
        headers:{;
          'Authorization':`Bearer ${this.apiKey}`,;
          'Content-Type':'application/json'},;
        body:JSON.stringify(rule)}),;
;
      if (!response.ok) {;
        throw new Error(`Failed to create rate limit rule:${response.statusText}`),;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      }
;
      return await response.json(),;
    } catch (error) {;
      // Mock response for demo;
      return {;
        ...rule,;
        id:`rule_${Date.now()}`,;
        createdAt:new Date(),;
        updatedAt:new Date();
      },;
    }
  }
<<<<<<< HEAD
  async getRateLimitRules(): Promise<RateLimitRule[]> {
    try {
      const response = await fetch(`${this && this.baseUrl}/rate-limiter/rules`, {
        headers: {
<<<<<<<< HEAD:services/apiRateLimiter.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
          'Authorization': `Bearer ${this && this.apiKey}`}});
      if (!response && response.ok) {
        throw new Error(`Failed to fetch rate limit rules: ${response && response.statusText}`)
      }
      return await response && response.json()
<<<<<<<< HEAD:services/apiRateLimiter.ts

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
        id: `rule_${Date.now ()}`;
        created_at: new Date (),
        updated_at: new Date ();
      }
    }
  }
  async getRateLimitRules (): Promise < RateLimitRule[]> {
    try {
      const response = await fetch (`${this.base_url}/rate - limiter / rules`, {
        headers: {
          'Authorization': `Bearer ${this.api_key}`}});
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (`Failed to fetch rate limit rules: ${response.status_text}`);
      }
      return await response.json ();
    } catch (error) {
      // Mock rules for demo;
      return [;
=======
  }
  async createRateLimitRule(rule: Omit<RateLimitRule, 'id' | 'createdAt' | 'updatedAt'>): Promise<RateLimitRule> {
    try {
      const response = await fetch(`${this.baseUrl}/rate-limiter/rules`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${this.apiKey}`;
          'Content-Type': 'application/json'}
        body: JSON.stringify(rule)});
      if (!response.ok) {
        throw new Error(`Failed to create rate limit rule: ${response.statusText}`)
      }
      return await response.json()
    } catch (error) {
      // Mock response for demo
      return {
        ...rule;
        id: `rule_${Date.now()}`;
        createdAt: new Date()
        updatedAt: new Date()
      }
    }
  }
  async getRateLimitRules(): Promise<RateLimitRule[]> {
    try {
      const response = await fetch(`${this.baseUrl}/rate-limiter/rules`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}});
      if (!response.ok) {
        throw new Error(`Failed to fetch rate limit rules: ${response.statusText}`)
      }
      return await response.json()
    } catch (error) {
      // Mock rules for demo
      return [
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {
          id: 'rule_1';
          name: 'API Endpoints';
          pattern: '/api/**';
          method: 'ALL';
          config: {
            requestsPerMinute: 100;
            requestsPerHour: 1000;
            requestsPerDay: 10000;
<<<<<<< HEAD
<<<<<<<< HEAD:services/apiRateLimiter.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
            burst_limit: 50,
            window_size: 60;
          }
          enabled: true;
          created_at: new Date (),
          updated_at: new Date ();
<<<<<<<< HEAD:services/apiRateLimiter.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
=======
            burstLimit: 50
            windowSize: 60
          }
          enabled: true;
          createdAt: new Date()
          updatedAt: new Date()
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }
        {
          id: 'rule_2';
          name: 'Authentication';
          pattern: '/auth/**';
          method: 'POST';
          config: {
            requestsPerMinute: 10;
            requestsPerHour: 100;
            requestsPerDay: 1000;
<<<<<<< HEAD
<<<<<<<< HEAD:services/apiRateLimiter.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
            burst_limit: 5,
            window_size: 60;
          }
          enabled: true;
<<<<<<< HEAD
          createdAt: new Date()
          updatedAt: new Date()

=======
            burstLimit: 5
            windowSize: 60
          }
          enabled: true;
          createdAt: new Date()
          updatedAt: new Date()
        }
      ]
    }
  }
  async updateRateLimitRule(id: string, updates: Partial<RateLimitRule>): Promise<RateLimitRule> {
    try {
      const response = await fetch(`${this.baseUrl}/rate-limiter/rules/${id}`, {
        method: 'PATCH'
        headers: {
          'Authorization': `Bearer ${this.apiKey}`;
          'Content-Type': 'application/json'}
        body: JSON.stringify(updates)});
      if (!response.ok) {
        throw new Error(`Failed to update rate limit rule: ${response.statusText}`)
      }
      return await response.json()
    } catch (error) {
      // Mock update for demo
      const existingRule = (await this.getRateLimitRules()).find(r => r.id === id);
      if (!existingRule) {
        throw new Error('Rule not found')
      }
      return {
        ...existingRule;
        ...updates;
        updatedAt: new Date()
      }
    }
  }
  async deleteRateLimitRule(id: string): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/rate-limiter/rules/${id}`, {
        method: 'DELETE'
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}});
      if (!response.ok) {
        throw new Error(`Failed to delete rate limit rule: ${response.statusText}`)
      }
    } catch (error) {
      console.error('Failed to delete rate limit rule:', error);
      throw error
    }
  }
  async getRateLimitStats(endpoint?: string): Promise<RateLimitStats[]> {
    try {
      const params = endpoint ? `?endpoint=${encodeURIComponent(endpoint)}` : '';
      const response = await fetch(`${this.baseUrl}/rate-limiter/stats${params}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}});
      if (!response.ok) {
        throw new Error(`Failed to fetch rate limit stats: ${response.statusText}`)
      }
      return await response.json()
    } catch (error) {
      // Mock stats for demo
      return [
        {
          endpoint: '/api/users';
          method: 'GET';
          totalRequests: 15420;
          blockedRequests: 234;
          averageResponseTime: 45;
          lastRequest: new Date();
          currentUsage: {
            minute: 15;
            hour: 180
            day: 1200
          }
        }
        {
          endpoint: '/api/auth/login';
          method: 'POST';
          totalRequests: 8920;
          blockedRequests: 156;
          averageResponseTime: 120;
          lastRequest: new Date();
          currentUsage: {
            minute: 8;
            hour: 95
            day: 650
export interface RateLimitConfig {;
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  requestsPerMinute: number,;
  requestsPerHour: number,;
  requestsPerDay: number,;
  burstLimit: number,;
  windowSize: number;
}
;
export interface RateLimitRule {;
  id: string,;
  name: string,;
  pattern: string,;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'ALL',;
  config: RateLimitConfig,;
  enabled: boolean,;
  createdAt: Date,;
  updatedAt: Date;
}
;
export interface RateLimitStats {;
  endpoint: string,;
  method: string,;
  totalRequests: number,;
  blockedRequests: number,;
  averageResponseTime: number,;
  lastRequest: Date,;
  currentUsage: {;
    minute: number,;
    hour: number,;
    day: number;
  }
}
;
export interface APIKey {;
  id: string,;
  name: string,;
  key: string,;
  permissions: string[],;
  rateLimit: RateLimitConfig,;
  createdAt: Date,;
  lastUsed: Date,;
  isActive: boolean;
}
;
export interface RateLimitViolation {;
  id: string,;
  apiKey: string,;
  endpoint: string,;
  method: string,;
  timestamp: Date,;
  reason: 'rate_limit_exceeded' | 'burst_limit_exceeded' | 'quota_exceeded',;
  ipAddress: string,;
  userAgent: string;
}
;
export class APIRateLimiterService {;
  private apiKey: string,;
  private baseUrl: string,;
  constructor(apiKey: string, baseUrl: string = 'https://api.ziontech.ai') {;
    this.apiKey = apiKey,;
    this.baseUrl = baseUrl;
  }
;
  async createRateLimitRule(rule: Omit<RateLimitRule 'id' | 'createdAt' | 'updatedAt'>): Promise<RateLimitRule> {;
    try {;
      const response = await fetch(`${this.baseUrl}/rate-limiter/rules`, {;
        method: 'POST',;
        headers: {;
          'Authorization': `Bearer ${this.apiKey}`,;
          'Content-Type': 'application/json'},;
        body: JSON.stringify(rule)}),;
      if (!response.ok) {;
        throw new Error(`Failed to create rate limit rule: ${response.statusText}`);
      }
;
      return await response.json();
    } catch (error) {;
      // Mock response for demo;
      return {;
        ...rule,;
        id: `rule_${Date.now()}`,;
        createdAt: new Date(),;
        updatedAt: new Date();
      }
    }
  }
;
  async getRateLimitRules(): Promise<RateLimitRule[]> {;
    try {;
      const response = await fetch(`${this.baseUrl}/rate-limiter/rules`, {;
        headers: {;
          'Authorization': `Bearer ${this.apiKey}`}}),;
      if (!response.ok) {;
        throw new Error(`Failed to fetch rate limit rules: ${response.statusText}`);
      }
;
      return await response.json();
    } catch (error) {;
      // Mock rules for demo;
      return [;
        {;
          id: 'rule_1',;
          name: 'API Endpoints',;
          pattern: '/api/**',;
          method: 'ALL',;
          config: {;
            requestsPerMinute: 100,;
            requestsPerHour: 1000,;
            requestsPerDay: 10000,;
            burstLimit: 50,;
            windowSize: 60;
          },;
          enabled: true,;
          createdAt: new Date(),;
          updatedAt: new Date();
        },;
        {;
          id: 'rule_2',;
          name: 'Authentication',;
          pattern: '/auth/**',;
          method: 'POST',;
          config: {;
            requestsPerMinute: 10,;
            requestsPerHour: 100,;
            requestsPerDay: 1000,;
            burstLimit: 5,;
            windowSize: 60;
          },;
          enabled: true,;
          createdAt: new Date(),;
          updatedAt: new Date();
<<<<<<< HEAD
<<<<<<< HEAD
=======
          created_at: new Date (),
          updated_at: new Date ();
<<<<<<<< HEAD:services/apiRateLimiter.ts
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        }
      ];
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:services/apiRateLimiter.ts

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
      const response = await fetch(`${this && this.baseUrl}/rate-limiter/rules/${id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify(updates)});
      if (!response && response.ok) {
        throw new Error(`Failed to update rate limit rule: ${response && response.statusText}`)
      }
      return await response && response.json()
<<<<<<<< HEAD:services/apiRateLimiter.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
    } catch (error) {
      // Mock update for demo
      const existingRule = (await this && this.getRateLimitRules()).find(r => r && r.id === id);
      if (!existingRule) {
        throw new Error('Rule not found')
  async updateRateLimitRule (id: string, updates: Partial < RateLimitRule>): Promise < RateLimitRule> {
    try {
      const response = await fetch (`${this.base_url}/rate - limiter / rules/${id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${this.api_key}`;
          'Content - Type': 'application / json'}
        body: JSON.stringify (updates)});
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (`Failed to update rate limit rule: ${response.status_text}`);
      }
      return await response.json ();
    } catch (error) {
      // Mock update for demo;
      const existing_rule = (await this.getRateLimitRules ()).find (r => r.id === id);
      // Check condition
if ( {) {
  $2
}
        throw new Error ('Rule not found');
      }
      return {
        ...existing_rule;
        ...updates;
        updated_at: new Date ();
      }
    }
  }
<<<<<<<< HEAD:services/apiRateLimiter.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
      const response = await fetch(`${this && this.baseUrl}/rate-limiter/rules/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`}});
      if (!response && response.ok) {
        throw new Error(`Failed to delete rate limit rule: ${response && response.statusText}`)
<<<<<<<< HEAD:services/apiRateLimiter.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
      }
    } catch (error) {
      console && console.error('Failed to delete rate limit rule:', error);
      throw error
    }
  }
  async getRateLimitStats(endpoint?: string): Promise<RateLimitStats[]> {
    try {
      const params = endpoint ? `?endpoint=${encodeURIComponent(endpoint)}` : '';
      const response = await fetch(`${this && this.baseUrl}/rate-limiter/stats${params}`, {
        headers: {
<<<<<<<< HEAD:services/apiRateLimiter.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
          'Authorization': `Bearer ${this && this.apiKey}`}});
      if (!response && response.ok) {
        throw new Error(`Failed to fetch rate limit stats: ${response && response.statusText}`)
      }
      return await response && response.json()
<<<<<<<< HEAD:services/apiRateLimiter.ts

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
  async deleteRateLimitRule (id: string): Promise < void> {
    try {
      const response = await fetch (`${this.base_url}/rate - limiter / rules/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${this.api_key}`}});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (`Failed to delete rate limit rule: ${response.status_text}`);
      }
    } catch (error) {
      console.error ('Failed to delete rate limit rule:', error);
      throw error;
    }
  }
  async getRateLimitStats (endpoint?: string): Promise < RateLimitStats[]> {
    try {
      const params = endpoint ? `?endpoint=${encodeURIComponent (endpoint)}` : '';
      const response = await fetch (`${this.base_url}/rate - limiter / stats${params}`, {
        headers: {
          'Authorization': `Bearer ${this.api_key}`}});
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (`Failed to fetch rate limit stats: ${response.status_text}`);
      }
      return await response.json ();
    } catch (error) {
      // Mock stats for demo;
      return [;
        {
          endpoint: '/api / users';
          method: 'GET';
          total_requests: 15420;
          blocked_requests: 234;
          averageResponseTime: 45;
          last_request: new Date ();
          current_usage: {
            minute: 15;
<<<<<<<< HEAD:services/apiRateLimiter.ts

            hour: 180,
            day: 1200;

========
            hour: 180,
            day: 1200;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
          }
        }
        {
          endpoint: '/api / auth / login';
          method: 'POST';
          total_requests: 8920;
          blocked_requests: 156;
          averageResponseTime: 120;
          last_request: new Date ();
          current_usage: {
            minute: 8;
            hour: 95,
            day: 650;
<<<<<<< HEAD
=======
          }
=======

export interface RateLimitConfig {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        }
      ];
    }
  }
<<<<<<<< HEAD:services/apiRateLimiter.ts


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  async updateRateLimitRule(id: string, updates: Partial<RateLimitRule>): Promise<RateLimitRule> {
    try {
      const response = await fetch(`${this.baseUrl}/rate-limiter/rules/${id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON.stringify(updates)});

      if (!response.ok) {
        throw new Error(`Failed to update rate limit rule: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      // Mock update for demo
      const existingRule = (await this.getRateLimitRules()).find(r => r.id === id);
      if (!existingRule) {
        throw new Error('Rule not found')
      }
      
      return {
        ...existingRule;
        ...updates;
        updatedAt: new Date()
      }
    }
  }

  async deleteRateLimitRule(id: string): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/rate-limiter/rules/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}});

      if (!response.ok) {
        throw new Error(`Failed to delete rate limit rule: ${response.statusText}`)
      }
    } catch (error) {
      console.error('Failed to delete rate limit rule:', error);
      throw error
    }
  }

  async getRateLimitStats(endpoint?: string): Promise<RateLimitStats[]> {
    try {
      const params = endpoint ? `?endpoint=${encodeURIComponent(endpoint)}` : '';
      const response = await fetch(`${this.baseUrl}/rate-limiter/stats${params}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}});

      if (!response.ok) {
        throw new Error(`Failed to fetch rate limit stats: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      // Mock stats for demo
      return [
        {
          endpoint: '/api/users';
          method: 'GET';
          totalRequests: 15420;
          blockedRequests: 234;
          averageResponseTime: 45;
          lastRequest: new Date();
          currentUsage: {
            minute: 15;
            hour: 180,
            day: 1200
          }
        };
        {
          endpoint: '/api/auth/login';
          method: 'POST';
          totalRequests: 8920;
          blockedRequests: 156;
          averageResponseTime: 120;
          lastRequest: new Date();
          currentUsage: {
            minute: 8;
            hour: 95,
            day: 650
;
  async updateRateLimitRule(id: string, updates: Partial<RateLimitRule>): Promise<RateLimitRule> {;
    try {;
      const response = await fetch(`${this.baseUrl}/rate-limiter/rules/${id}`, {;
        method: 'PATCH',;
        headers: {;
          'Authorization': `Bearer ${this.apiKey}`,;
          'Content-Type': 'application/json'},;
        body: JSON.stringify(updates)}),;
      if (!response.ok) {;
        throw new Error(`Failed to update rate limit rule: ${response.statusText}`);
      }
;
      return await response.json();
    } catch (error) {;
      // Mock update for demo;
      const existingRule = (await this.getRateLimitRules()).find(r => r.id === id),;
      if (!existingRule) {;
        throw new Error('Rule not found');
      }
;
      return {;
        ...existingRule,;
        ...updates,;
        updatedAt: new Date();
      }
    }
  }
;
  async deleteRateLimitRule(id: string): Promise<void> {;
    try {;
      const response = await fetch(`${this.baseUrl}/rate-limiter/rules/${id}`, {;
        method: 'DELETE',;
        headers: {;
          'Authorization': `Bearer ${this.apiKey}`}}),;
      if (!response.ok) {;
        throw new Error(`Failed to delete rate limit rule: ${response.statusText}`);
      }
    } catch (error) {;
      console.error('Failed to delete rate limit rule:', error),;
      throw error;
    }
  }
;
  async getRateLimitStats(endpoint?: string): Promise<RateLimitStats[]> {;
    try {;
      const params = endpoint ? `?endpoint=${encodeURIComponent(endpoint)}` : '',;
      const response = await fetch(`${this.baseUrl}/rate-limiter/stats${params}`, {;
        headers: {;
          'Authorization': `Bearer ${this.apiKey}`}}),;
      if (!response.ok) {;
        throw new Error(`Failed to fetch rate limit stats: ${response.statusText}`);
      }
;
      return await response.json();
    } catch (error) {;
      // Mock stats for demo;
      return [;
        {;
          endpoint: '/api/users',;
          method: 'GET',;
          totalRequests: 15420,;
          blockedRequests: 234,;
          averageResponseTime: 45,;
          lastRequest: new Date(),;
          currentUsage: {;
            minute: 15,;
            hour: 180,;
            day: 1200;
          }
        },;
        {;
          endpoint: '/api/auth/login',;
          method: 'POST',;
          totalRequests: 8920,;
          blockedRequests: 156,;
          averageResponseTime: 120,;
          lastRequest: new Date(),;
          currentUsage: {;
            minute: 8,;
            hour: 95,;
            day: 650;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          }
        }
      ]
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  async createAPIKey(name: string, permissions: string[], rateLimit: RateLimitConfig): Promise<APIKey> {
    try {

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
      const response = await fetch(`${this && this.baseUrl}/rate-limiter/api-keys`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`;
          'Content-Type': 'application/json'};
        body: JSON && JSON.stringify({ name, permissions, rateLimit })});
      if (!response && response.ok) {
        throw new Error(`Failed to create API key: ${response && response.statusText}`)
      }
      return await response && response.json()
<<<<<<<< HEAD:services/apiRateLimiter.ts

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
  async createAPIKey (name: string, permissions: string[], rate_limit: RateLimitConfig): Promise < APIKey> {
    try {
      const response = await fetch (`${this.base_url}/rate - limiter / api - keys`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.api_key}`;
          'Content - Type': 'application / json'}
        body: JSON.stringify ({ name, permissions, rate_limit })});
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (`Failed to create API key: ${response.status_text}`);
      }
      return await response.json ();
    } catch (error) {
      // Mock API key creation for demo;
      return {
<<<<<<<< HEAD:services/apiRateLimiter.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
          'Authorization': `Bearer ${this && this.apiKey}`}});
      if (!response && response.ok) {
        throw new Error(`Failed to fetch API keys: ${response && response.statusText}`)
      }
      return await response && response.json()
<<<<<<<< HEAD:services/apiRateLimiter.ts

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
        id: `key_${Date.now ()}`;
        name;
        key: `zion_${Math.random ().to_string (36).substr (2, 9)}`;
        permissions;
        rate_limit;
        created_at: new Date ();
        last_used: new Date (),
        is_active: true;
=======
;
  async getRateLimitRules():Promise<RateLimitRule[]> {;
    try {;
      const response = await fetch(`${this.baseUrl}/rate-limiter/rules`, {;
        headers:{;
          'Authorization':`Bearer ${this.apiKey}`}}),;
;
      if (!response.ok) {;
        throw new Error(`Failed to fetch rate limit rules:${response.statusText}`),;
      }
;
      return await response.json(),;
    } catch (error) {;
      // Mock rules for demo;
      return [;
        {;
          id:'rule_1',;
          name:'API Endpoints',;
          pattern:'/api/**',;
          method:'ALL',;
          config:{;
            requestsPerMinute:100,;
            requestsPerHour:1000,;
            requestsPerDay:10000,;
            burstLimit:50,;
            windowSize:60;
          },;
          enabled:true,;
          createdAt:new Date(),;
          updatedAt:new Date();
        },;
        {;
          id:'rule_2',;
          name:'Authentication',;
          pattern:'/auth/**',;
          method:'POST',;
          config:{;
            requestsPerMinute:10,;
            requestsPerHour:100,;
            requestsPerDay:1000,;
            burstLimit:5,;
            windowSize:60;
          },;
          enabled:true,;
          createdAt:new Date(),;
          updatedAt:new Date();
        }
      ],;
    }
  }
;
  async updateRateLimitRule(id:string, updates:Partial<RateLimitRule>):Promise<RateLimitRule> {;
    try {;
      const response = await fetch(`${this.baseUrl}/rate-limiter/rules/${id}`, {;
        method:'PATCH',;
        headers:{;
          'Authorization':`Bearer ${this.apiKey}`,;
          'Content-Type':'application/json'},;
        body:JSON.stringify(updates)}),;
;
      if (!response.ok) {;
        throw new Error(`Failed to update rate limit rule:${response.statusText}`),;
      }
;
      return await response.json(),;
    } catch (error) {;
      // Mock update for demo;
      const existingRule = (await this.getRateLimitRules()).find(r => r.id === id),;
      if (!existingRule) {;
        throw new Error('Rule not found'),;
      }
      ;
      return {;
        ...existingRule,;
        ...updates,;
        updatedAt:new Date();
      },;
    }
  }
;
  async deleteRateLimitRule(id:string):Promise<void> {;
    try {;
      const response = await fetch(`${this.baseUrl}/rate-limiter/rules/${id}`, {;
        method:'DELETE',;
        headers:{;
          'Authorization':`Bearer ${this.apiKey}`}}),;
;
      if (!response.ok) {;
        throw new Error(`Failed to delete rate limit rule:${response.statusText}`),;
      }
    } catch (error) {;
      console.error('Failed to delete rate limit rule:', error),;
      throw error,;
    }
  }
;
  async getRateLimitStats(endpoint?:string):Promise<RateLimitStats[]> {;
    try {;
      const params = endpoint ? `?endpoint=${encodeURIComponent(endpoint)}` :'',;
      const response = await fetch(`${this.baseUrl}/rate-limiter/stats${params}`, {;
        headers:{;
          'Authorization':`Bearer ${this.apiKey}`}}),;
;
      if (!response.ok) {;
        throw new Error(`Failed to fetch rate limit stats:${response.statusText}`),;
      }
;
      return await response.json(),;
    } catch (error) {;
      // Mock stats for demo;
      return [;
        {;
          endpoint:'/api/users',;
          method:'GET',;
          totalRequests:15420,;
          blockedRequests:234,;
          averageResponseTime:45,;
          lastRequest:new Date(),;
          currentUsage:{;
            minute:15,;
            hour:180,;
            day:1200;
          }
        },;
        {;
          endpoint:'/api/auth/login',;
          method:'POST',;
          totalRequests:8920,;
          blockedRequests:156,;
          averageResponseTime:120,;
          lastRequest:new Date(),;
          currentUsage:{;
            minute:8,;
            hour:95,;
            day:650;
          }
        }
      ],;
    }
  }
;
  async createAPIKey(name:string, permissions:string[], rateLimit:RateLimitConfig):Promise<APIKey> {;
    try {;
      const response = await fetch(`${this.baseUrl}/rate-limiter/api-keys`, {;
        method:'POST',;
        headers:{;
          'Authorization':`Bearer ${this.apiKey}`,;
          'Content-Type':'application/json'},;
        body:JSON.stringify({ name, permissions, rateLimit })}),;
;
      if (!response.ok) {;
        throw new Error(`Failed to create API key:${response.statusText}`),;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      }
;
      return await response.json(),;
    } catch (error) {;
      // Mock API key creation for demo;
      return {;
        id:`key_${Date.now()}`,;
        name,;
        key:`zion_${Math.random().toString(36).substr(2, 9)}`,;
        permissions,;
        rateLimit,;
        createdAt:new Date(),;
        lastUsed:new Date(),;
        isActive:true;
      },;
    }
  }
<<<<<<< HEAD
  async getAPIKeys (): Promise < APIKey[]> {
    try {
      const response = await fetch (`${this.base_url}/rate - limiter / api - keys`, {
        headers: {
          'Authorization': `Bearer ${this.api_key}`}});
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (`Failed to fetch API keys: ${response.status_text}`);
      }
      return await response.json ();
    } catch (error) {
      // Mock API keys for demo;
      return [;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  async createAPIKey(name: string, permissions: string[], rateLimit: RateLimitConfig): Promise<APIKey> {
    try {
      const response = await fetch(`${this.baseUrl}/rate-limiter/api-keys`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${this.apiKey}`;
          'Content-Type': 'application/json'}
        body: JSON.stringify({ name, permissions, rateLimit })});
      if (!response.ok) {
        throw new Error(`Failed to create API key: ${response.statusText}`)
      }
      return await response.json()
    } catch (error) {
      // Mock API key creation for demo
      return {
        id: `key_${Date.now()}`;
        name;
        key: `zion_${Math.random().toString(36).substr(2, 9)}`;
        permissions;
        rateLimit;
        createdAt: new Date();
        lastUsed: new Date()
        isActive: true
      }
    }
  }
  async getAPIKeys(): Promise<APIKey[]> {
    try {
      const response = await fetch(`${this.baseUrl}/rate-limiter/api-keys`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}});
      if (!response.ok) {
        throw new Error(`Failed to fetch API keys: ${response.statusText}`)
      }
      return await response.json()
    } catch (error) {
      // Mock API keys for demo
      return [
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {
          id: 'key_1';
          name: 'Web Application';
          key: 'zion_web123';
          permissions: ['readwrite'];
<<<<<<< HEAD
          rate_limit: {
            requestsPerMinute: 100;
            requestsPerHour: 1000;
            requestsPerDay: 10000;
<<<<<<<< HEAD:services/apiRateLimiter.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
            burst_limit: 50,
            window_size: 60;
          }
          created_at: new Date ();
          last_used: new Date (),
          is_active: true;
<<<<<<<< HEAD:services/apiRateLimiter.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
=======
          rateLimit: {
            requestsPerMinute: 100;
            requestsPerHour: 1000;
            requestsPerDay: 10000;
            burstLimit: 50
            windowSize: 60
          }
          createdAt: new Date();
          lastUsed: new Date()
          isActive: true
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }
        {
          id: 'key_2';
          name: 'Mobile App';
          key: 'zion_mobile456';
          permissions: ['read'];
<<<<<<< HEAD
          rate_limit: {
            requestsPerMinute: 50;
            requestsPerHour: 500;
            requestsPerDay: 5000;
<<<<<<<< HEAD:services/apiRateLimiter.ts
<<<<<<< HEAD
=======
          rateLimit: {
            requestsPerMinute: 50;
            requestsPerHour: 500;
            requestsPerDay: 5000;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            burstLimit: 25
            windowSize: 60
          }
          createdAt: new Date();
          lastUsed: new Date()
          isActive: true
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
  async createAPIKey(name: string, permissions: string[], rateLimit: RateLimitConfig): Promise<APIKey> {;
    try {;
      const response = await fetch(`${this.baseUrl}/rate-limiter/api-keys`, {;
        method: 'POST',;
        headers: {;
          'Authorization': `Bearer ${this.apiKey}`,;
          'Content-Type': 'application/json'},;
        body: JSON.stringify({ name, permissions, rateLimit })}),;
      if (!response.ok) {;
        throw new Error(`Failed to create API key: ${response.statusText}`);
      }
;
      return await response.json();
    } catch (error) {;
      // Mock API key creation for demo;
      return {;
        id: `key_${Date.now()}`,;
        name,;
        key: `zion_${Math.random().toString(36).substr(2, 9)}`,;
        permissions,;
        rateLimit,;
        createdAt: new Date(),;
        lastUsed: new Date(),;
        isActive: true;
      }
    }
  }
;
  async getAPIKeys(): Promise<APIKey[]> {;
    try {;
      const response = await fetch(`${this.baseUrl}/rate-limiter/api-keys`, {;
        headers: {;
          'Authorization': `Bearer ${this.apiKey}`}}),;
      if (!response.ok) {;
        throw new Error(`Failed to fetch API keys: ${response.statusText}`);
      }
;
      return await response.json();
    } catch (error) {;
      // Mock API keys for demo;
      return [;
        {;
          id: 'key_1',;
          name: 'Web Application',;
          key: 'zion_web123',;
          permissions: ['readwrite'],;
          rateLimit: {;
            requestsPerMinute: 100,;
            requestsPerHour: 1000,;
            requestsPerDay: 10000,;
            burstLimit: 50,;
            windowSize: 60;
          },;
          createdAt: new Date(),;
          lastUsed: new Date(),;
          isActive: true;
        },;
        {;
          id: 'key_2',;
          name: 'Mobile App',;
          key: 'zion_mobile456',;
          permissions: ['read'],;
          rateLimit: {;
            requestsPerMinute: 50,;
            requestsPerHour: 500,;
            requestsPerDay: 5000,;
            burstLimit: 25,;
            windowSize: 60;
          },;
          createdAt: new Date(),;
          lastUsed: new Date(),;
          isActive: true;
<<<<<<< HEAD
<<<<<<< HEAD

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
            burst_limit: 25,
            window_size: 60;
          }
          created_at: new Date ();
          last_used: new Date (),
          is_active: true;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
        }
      ];
    }
  }
<<<<<<<< HEAD:services/apiRateLimiter.ts

<<<<<<< HEAD
=======




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  async getViolations(limit: number = 100): Promise<RateLimitViolation[]> {
    try {
      const response = await fetch(`${this && this.baseUrl}/rate-limiter/violations?limit=${limit}`, {
        headers: {

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
          'Authorization': `Bearer ${this && this.apiKey}`}});
      if (!response && response.ok) {
        throw new Error(`Failed to fetch violations: ${response && response.statusText}`)
      }
      return await response && response.json()
<<<<<<<< HEAD:services/apiRateLimiter.ts

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
  async get_violations (limit: number = 100): Promise < RateLimitViolation[]> {
    try {
      const response = await fetch (`${this.base_url}/rate - limiter / violations?limit=${limit}`, {
        headers: {
          'Authorization': `Bearer ${this.api_key}`}});
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (`Failed to fetch violations: ${response.status_text}`);
      }
      return await response.json ();
    } catch (error) {
      // Mock violations for demo;
      return [;
        {
          id: 'violation_1';
<<<<<<<< HEAD:services/apiRateLimiter.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
          method: 'GET',
          timestamp: new Date(Date && Date.now() - 1000 * 60 * 30), // 30 minutes ago
          reason: 'rate_limit_exceeded';
          ipAddress: '192 && 192.168.1 && 1.100',
          userAgent: 'Mozilla/5 && 5.0 (Windows NT 10 && 10.0, Win64, x64) AppleWebKit/537 && 537.36'
        };
<<<<<<<< HEAD:services/apiRateLimiter.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        }
      ]
    }
  }

  async getViolations(limit: number = 100): Promise<RateLimitViolation[]> {
    try {
      const response = await fetch(`${this.baseUrl}/rate-limiter/violations?limit=${limit}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}});
      if (!response.ok) {
        throw new Error(`Failed to fetch violations: ${response.statusText}`)
      }
      return await response.json()
    } catch (error) {
      // Mock violations for demo
      return [
        {
          id: 'violation_1';
          apiKey: 'zion_web123';
          endpoint: '/api/users';
          method: 'GET'
          timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
          reason: 'rate_limit_exceeded';
          ipAddress: '192.168.1.100'
          userAgent: 'Mozilla/5.0 (Windows NT 10.0, Win64, x64) AppleWebKit/537.36'
        }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {
          id: 'violation_2';
          apiKey: 'zion_mobile456';
          endpoint: '/api/auth/login';
<<<<<<< HEAD
<<<<<<<< HEAD:services/apiRateLimiter.ts
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          method: 'POST'
          timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
          reason: 'burst_limit_exceeded';
          ipAddress: '10.0.0.50'
          userAgent: 'ZionMobileApp/1.0'
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
  async getViolations(limit: number = 100): Promise<RateLimitViolation[]> {;
    try {;
      const response = await fetch(`${this.baseUrl}/rate-limiter/violations?limit=${limit}`, {;
        headers: {;
          'Authorization': `Bearer ${this.apiKey}`}}),;
      if (!response.ok) {;
        throw new Error(`Failed to fetch violations: ${response.statusText}`);
      }
;
      return await response.json();
    } catch (error) {;
      // Mock violations for demo;
      return [;
        {;
          id: 'violation_1',;
          apiKey: 'zion_web123',;
          endpoint: '/api/users',;
          method: 'GET',;
          timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago;
          reason: 'rate_limit_exceeded',;
          ipAddress: '192.168.1.100',;
          userAgent: 'Mozilla/5.0 (Windows NT 10.0, Win64, x64) AppleWebKit/537.36';
        },;
        {;
          id: 'violation_2',;
          apiKey: 'zion_mobile456',;
          endpoint: '/api/auth/login',;
          method: 'POST',;
          timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago;
          reason: 'burst_limit_exceeded',;
          ipAddress: '10.0.0.50',;
          userAgent: 'ZionMobileApp/1.0';
<<<<<<< HEAD
<<<<<<< HEAD

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
          method: 'POST',
          timestamp: new Date(Date && Date.now() - 1000 * 60 * 15), // 15 minutes ago
          reason: 'burst_limit_exceeded';
          ipAddress: '10 && 10.0.0 && 0.50',
          userAgent: 'ZionMobileApp/1 && 1.0'
          api_key: 'zion_web123';
          endpoint: '/api / users';
          method: 'GET',
          timestamp: new Date (Date.now () - 1000 * 60 * 30), // 30 minutes ago;
          reason: 'rate_limit_exceeded';
          ip_address: '192.168.1.100',
          user_agent: 'Mozilla / 5.0 (Windows NT 10.0, Win64, x64) AppleWebKit / 537.36';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
        }
        {
          id: 'violation_2';
          api_key: 'zion_mobile456';
          endpoint: '/api / auth / login';
          method: 'POST',
          timestamp: new Date (Date.now () - 1000 * 60 * 15), // 15 minutes ago;
          reason: 'burst_limit_exceeded';
          ip_address: '10.0.0.50',
          user_agent: 'ZionMobileApp / 1.0';
        }
      ];
    }
  }
<<<<<<<< HEAD:services/apiRateLimiter.ts

<<<<<<< HEAD
=======




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        }
      ]
    }
  }

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  async generateReport(): Promise<{
    overview: {
      totalRequests: number;
      blockedRequests: number;
      activeRules: number
      activeAPIKeys: number
    }
    topEndpoints: {
      endpoint: string;
      requests: number;
      blocked: number
      averageResponseTime: number
    }[];
    violations: {
      total: number
      byReason: Record<string, number>;
      recent: RateLimitViolation[]
    }
  }> {
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
    const stats = await this && this.getRateLimitStats();
    const rules = await this && this.getRateLimitRules();
    const apiKeys = await this && this.getAPIKeys();
    const violations = await this && this.getViolations(50);
    const totalRequests = stats && stats.reduce((sum, stat) => sum + stat && stat.totalRequests, 0);
    const blockedRequests = stats && stats.reduce((sum, stat) => sum + stat && stat.blockedRequests, 0);
    const violationsByReason = violations && violations.reduce((acc, violation) => {
      acc[violation && violation.reason] = (acc[violation && violation.reason] || 0) + 1;
<<<<<<<< HEAD:services/apiRateLimiter.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
=======
    const stats = await this.getRateLimitStats();
    const rules = await this.getRateLimitRules();
    const apiKeys = await this.getAPIKeys();
    const violations = await this.getViolations(50);
    const totalRequests = stats.reduce((sum, stat) => sum + stat.totalRequests, 0);
    const blockedRequests = stats.reduce((sum, stat) => sum + stat.blockedRequests, 0);
    const violationsByReason = violations.reduce((acc, violation) => {
      acc[violation.reason] = (acc[violation.reason] |0) + 1;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      return acc
    }, {} as Record<string, number>);
    return {
      overview: {
        totalRequests;
        blockedRequests;
<<<<<<< HEAD
<<<<<<<< HEAD:services/apiRateLimiter.ts

        activeRules: rules && rules.filter(r => r && r.enabled).length,
        activeAPIKeys: apiKeys && apiKeys.filter(k => k && k.isActive).length
      };

========
        activeRules: rules && rules.filter(r => r && r.enabled).length,
        activeAPIKeys: apiKeys && apiKeys.filter(k => k && k.isActive).length
      };
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
      topEndpoints: stats
        .sort((a, b) => b && b.totalRequests - a && a.totalRequests)
        .slice(0, 5)
        .map(stat => ({
<<<<<<<< HEAD:services/apiRateLimiter.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
          endpoint: stat && stat.endpoint;
          requests: stat && stat.totalRequests;
          blocked: stat && stat.blockedRequests,
          averageResponseTime: stat && stat.averageResponseTime
        }));
      violations: {
<<<<<<< HEAD
        total: violations.length;
        byReason: violationsByReason
        recent: violations.slice(0, 10)

=======
        activeRules: rules.filter(r => r.enabled).length
        activeAPIKeys: apiKeys.filter(k => k.isActive).length
      }
      topEndpoints: stats
        .sort((a, b) => b.totalRequests - a.totalRequests)
        .slice(0, 5)
        .map(stat => ({
          endpoint: stat.endpoint;
          requests: stat.totalRequests;
          blocked: stat.blockedRequests
          averageResponseTime: stat.averageResponseTime
        }));
      violations: {
        total: violations.length;
        byReason: violationsByReason
        recent: violations.slice(0, 10)
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
  async generateReport(): Promise<{;
    overview: {;
      totalRequests: number,;
      blockedRequests: number,;
      activeRules: number,;
<<<<<<< HEAD
=======
        total: violations && violations.length;
        byReason: violationsByReason,
        recent: violations && violations.slice(0, 10)
<<<<<<<< HEAD:services/apiRateLimiter.ts

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
  async generate_report (): Promise<{
    overview: {
      total_requests: number;
      blocked_requests: number;
      active_rules: number,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      activeAPIKeys: number;
    }
    top_endpoints: {
      endpoint: string;
      requests: number;
      blocked: number,
      averageResponseTime: number;
    }[];
    violations: {
      total: number,
      by_reason: Record < string, number>;
      recent: RateLimitViolation[];
    }
  }> {
    const stats = await this.getRateLimitStats ();
    const rules = await this.getRateLimitRules ();
    const api_keys = await this.getAPIKeys ();
    const violations = await this.get_violations (50);
;
    const total_requests = stats.reduce ((sum, stat) => sum + stat.total_requests, 0);
    const blocked_requests = stats.reduce ((sum, stat) => sum + stat.blocked_requests, 0);
;
    const violationsByReason = violations.reduce ((acc, violation) => {
      acc[violation.reason] = (acc[violation.reason] || 0) + 1;
      return acc;
    }, {} as Record < string, number>);
;
    return {
      overview: {
        total_requests;
        blocked_requests;
        active_rules: rules.filter (r => r.enabled).length,
        activeAPIKeys: api_keys.filter (key => k.is_active).length;
      }
      top_endpoints: stats;
        .sort ((a, b) => b.total_requests - a.total_requests);
        .slice (0, 5);
        .map (stat => ({
          endpoint: stat.endpoint;
          requests: stat.total_requests;
          blocked: stat.blocked_requests,
          averageResponseTime: stat.averageResponseTime;
<<<<<<<< HEAD:services/apiRateLimiter.ts

=======
      activeAPIKeys: number;
    },;
    topEndpoints: {;
      endpoint: string,;
      requests: number,;
      blocked: number,;
      averageResponseTime: number;
    }[],;
    violations: {;
      total: number,;
      byReason: Record<string number>,;
      recent: RateLimitViolation[];
    }
  }> {;
    const stats = await this.getRateLimitStats(),;
    const rules = await this.getRateLimitRules(),;
    const apiKeys = await this.getAPIKeys(),;
    const violations = await this.getViolations(50),;
    const totalRequests = stats.reduce((sum, stat) => sum + stat.totalRequests, 0),;
    const blockedRequests = stats.reduce((sum, stat) => sum + stat.blockedRequests, 0),;
    const violationsByReason = violations.reduce((acc, violation) => {;
      acc[violation.reason] = (acc[violation.reason] || 0) + 1,;
      return acc;
    }, {} as Record<string number>),;
    return {;
      overview: {;
        totalRequests,;
        blockedRequests,;
        activeRules: rules.filter(r => r.enabled).length,;
        activeAPIKeys: apiKeys.filter(k => k.isActive).length;
      },;
      topEndpoints: stats;
        .sort((a, b) => b.totalRequests - a.totalRequests);
        .slice(0, 5);
        .map(stat => ({;
          endpoint: stat.endpoint,;
          requests: stat.totalRequests,;
          blocked: stat.blockedRequests,;
          averageResponseTime: stat.averageResponseTime;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        })),;
      violations: {;
        total: violations.length,;
        byReason: violationsByReason,;
        recent: violations.slice(0, 10);
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
        }));
      violations: {
        total: violations.length;
        by_reason: violationsByReason,
        recent: violations.slice (0, 10);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }
    }
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:services/apiRateLimiter.ts

<<<<<<< HEAD
=======




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
// Pricing tiers for the API Rate Limiter service
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
// Pricing tiers for the API Rate Limiter service;
export const API_RATE_LIMITER_PRICING = {
  starter: {
    name: 'Starter';
    price: 25;
<<<<<<<< HEAD:services/apiRateLimiter.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
    period: '/month',
    features: [;
      'Up to 10 rate limit rules_basic rate limitingAPI key management_email notifications7 - day data retention_basic analytics';
    ];
<<<<<<<< HEAD:services/apiRateLimiter.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

// Pricing tiers for the API Rate Limiter service
export const API_RATE_LIMITER_PRICING = {
  starter: {;
    name: 'Starter';
    price: 25;
    period: '/month'
    features: [
      'Up to 10 rate limit rulesBasic rate limitingAPI key managementEmail notifications7-day data retentionBasic analytics'
    ]
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  professional: {
    name: 'Professional';
    price: 79;
    period: '/month';
<<<<<<< HEAD
<<<<<<<< HEAD:services/apiRateLimiter.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
    features: [;
      'Up to 50 rate limit rules_advanced rate limiting_unlimited API keys_real - time monitoring_slack and webhook notifications30 - day data retention_advanced analytics_custom dashboards',
      'API access';
    ];
<<<<<<<< HEAD:services/apiRateLimiter.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
=======
    features: [
      'Up to 50 rate limit rulesAdvanced rate limitingUnlimited API keysReal-time monitoringSlack and webhook notifications30-day data retentionAdvanced analyticsCustom dashboards'
      'API access'
    ]
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  enterprise: {
    name: 'Enterprise';
    price: 199;
    period: '/month';
<<<<<<< HEAD
<<<<<<<< HEAD:services/apiRateLimiter.ts
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    features: [
      'Unlimited rate limit rulesEnterprise-grade rate limitingAdvanced security featuresMultiple notification channels1-year data retentionCustom integrationsWhite-label optionsPriority support'
      'SLA guarantee'
    ]
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  }
}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  }
}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
// Pricing tiers for the API Rate Limiter service;
export const API_RATE_LIMITER_PRICING = {;
  starter: {;
    name: 'Starter',;
    price: 25,;
    period: '/month',;
<<<<<<< HEAD

    features: [;
      'Unlimited rate limit rules_enterprise - grade rate limiting_advanced security features_multiple notification channels1 - year data retention_custom integrations_white - label options_priority support',
      'SLA guarantee';
    ];

<<<<<<< HEAD
  }
};

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    features: [;
      'Unlimited rate limit rules_enterprise - grade rate limiting_advanced security features_multiple notification channels1 - year data retention_custom integrations_white - label options_priority support',
=======
;
  async getAPIKeys():Promise<APIKey[]> {;
    try {;
      const response = await fetch(`${this.baseUrl}/rate-limiter/api-keys`, {;
        headers:{;
          'Authorization':`Bearer ${this.apiKey}`}}),;
;
      if (!response.ok) {;
        throw new Error(`Failed to fetch API keys:${response.statusText}`),;
      }
;
      return await response.json(),;
    } catch (error) {;
      // Mock API keys for demo;
      return [;
        {;
          id:'key_1',;
          name:'Web Application',;
          key:'zion_web123',;
          permissions:['readwrite'],;
          rateLimit:{;
            requestsPerMinute:100,;
            requestsPerHour:1000,;
            requestsPerDay:10000,;
            burstLimit:50,;
            windowSize:60;
          },;
          createdAt:new Date(),;
          lastUsed:new Date(),;
          isActive:true;
        },;
        {;
          id:'key_2',;
          name:'Mobile App',;
          key:'zion_mobile456',;
          permissions:['read'],;
          rateLimit:{;
            requestsPerMinute:50,;
            requestsPerHour:500,;
            requestsPerDay:5000,;
            burstLimit:25,;
            windowSize:60;
          },;
          createdAt:new Date(),;
          lastUsed:new Date(),;
          isActive:true;
        }
      ],;
    }
  }
;
  async getViolations(limit:number = 100):Promise<RateLimitViolation[]> {;
    try {;
      const response = await fetch(`${this.baseUrl}/rate-limiter/violations?limit=${limit}`, {;
        headers:{;
          'Authorization':`Bearer ${this.apiKey}`}}),;
;
      if (!response.ok) {;
        throw new Error(`Failed to fetch violations:${response.statusText}`),;
      }
;
      return await response.json(),;
    } catch (error) {;
      // Mock violations for demo;
      return [;
        {;
          id:'violation_1',;
          apiKey:'zion_web123',;
          endpoint:'/api/users',;
          method:'GET',;
          timestamp:new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago;
          reason:'rate_limit_exceeded',;
          ipAddress:'192.168.1.100',;
          userAgent:'Mozilla/5.0 (Windows NT 10.0, Win64, x64) AppleWebKit/537.36';
        },;
        {;
          id:'violation_2',;
          apiKey:'zion_mobile456',;
          endpoint:'/api/auth/login',;
          method:'POST',;
          timestamp:new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago;
          reason:'burst_limit_exceeded',;
          ipAddress:'10.0.0.50',;
          userAgent:'ZionMobileApp/1.0';
        }
      ],;
    }
  }
;
  async generateReport():Promise<{;
    overview:{;
      totalRequests:number,;
      blockedRequests:number,;
      activeRules:number,;
      activeAPIKeys:number;
    },;
    topEndpoints:{;
      endpoint:string,;
      requests:number,;
      blocked:number,;
      averageResponseTime:number;
    }[],;
    violations:{;
      total:number,;
      byReason:Record<string number>,;
      recent:RateLimitViolation[];
    },;
  }> {;
    const stats = await this.getRateLimitStats(),;
    const rules = await this.getRateLimitRules(),;
    const apiKeys = await this.getAPIKeys(),;
    const violations = await this.getViolations(50),;
;
    const totalRequests = stats.reduce((sum, stat) => sum + stat.totalRequests, 0),;
    const blockedRequests = stats.reduce((sum, stat) => sum + stat.blockedRequests, 0),;
;
    const violationsByReason = violations.reduce((acc, violation) => {;
      acc[violation.reason] = (acc[violation.reason] || 0) + 1,;
      return acc,;
    }, {} as Record<string number>),;
;
    return {;
      overview:{;
        totalRequests,;
        blockedRequests,;
        activeRules:rules.filter(r => r.enabled).length,;
        activeAPIKeys:apiKeys.filter(k => k.isActive).length;
      },;
      topEndpoints:stats;
        .sort((a, b) => b.totalRequests - a.totalRequests);
        .slice(0, 5);
        .map(stat => ({;
          endpoint:stat.endpoint,;
          requests:stat.totalRequests,;
          blocked:stat.blockedRequests,;
          averageResponseTime:stat.averageResponseTime;
        })),;
      violations:{;
        total:violations.length,;
        byReason:violationsByReason,;
        recent:violations.slice(0, 10);
      }
    },;
  }
}
;
// Pricing tiers for the API Rate Limiter service;
export const API_RATE_LIMITER_PRICING = {;
  starter:{;
    name:'Starter',;
    price:25,;
    period:'/month',;
    features:[;
      'Up to 10 rate limit rulesBasic rate limiting',;
      'API key managementEmail notifications',;
      '7-day data retentionBasic analytics';
    ];
  },;
  professional:{;
    name:'Professional',;
    price:79,;
    period:'/month',;
    features:[;
      'Up to 50 rate limit rulesAdvanced rate limiting',;
      'Unlimited API keysReal-time monitoring',;
      'Slack and webhook notifications30-day data retention',;
      'Advanced analyticsCustom dashboards',;
      'API access';
    ];
  },;
  enterprise:{;
    name:'Enterprise',;
    price:199,;
    period:'/month',;
    features:[;
      'Unlimited rate limit rulesEnterprise-grade rate limiting',;
      'Advanced security featuresMultiple notification channels',;
      '1-year data retentionCustom integrations',;
      'White-label optionsPriority support',;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      'SLA guarantee';
    ];
  }
},; 'Authorization': `Bearer $ {
  this.apiKey 
}`;
'Content-Type': 'application/json' 
};
body: JSON.stringify (rule) 
});
return {
  ...rule, id: `rule $ {
  Date.now () 
}`;
createdAt: new Date ();
updatedAt: new Date () 
}
<<<<<<< HEAD
;
=======
}
}return [ {
  id: 'rule 1', name: 'API Endpoints', pattern: '/api/**', method: 'ALL', config: {
  requestsPerMinute: 100, requestsPerHour: 1000, requestsPerDay: 10000, burstLimit: 50, windowSize: 60 
};
enabled: true;
createdAt: new Date ();
updatedAt: new Date () 
};
{
  id: 'rule 2', name: 'Authentication', pattern: '/auth/**', method: 'POST', config: {
  requestsPerMinute: 10, requestsPerHour: 100, requestsPerDay: 1000, burstLimit: 5, windowSize: 60 
};
enabled: true;
createdAt: new Date ();
updatedAt: new Date () 
}] 
}
}async updateRateLimitRule (id: string, updates: Partial<RateLimitRule>) : Promise<RateLimitRule> {
  try {
  const response = await fetch (`$ {
  this.baseUrl 
}/rate-limiter/rules/$ {
  id 
}`, {
  method: 'PATCH', headers: {
  'Authorization': `Bearer $ {
  this.apiKey 
}`;
'Content-Type': 'application/json' 
};
body: JSON.stringify (updates) 
});
return [ {
  endpoint: '/api/users', method: 'GET', totalRequests: 15420, blockedRequests: 234, averageResponseTime: 45, lastRequest: new Date (), currentUsage: {
  minute: 15, hour: 180, day: 1200 
}
};
{
  endpoint: '/api/auth/login', method: 'POST', totalRequests: 8920, blockedRequests: 156, averageResponseTime: 120, lastRequest: new Date (), currentUsage: {
  minute: 8, hour: 95, day: 650 
}
}] 
}
}async createAPIKey (name: string, permissions: string[], rateLimit: RateLimitConfig) : Promise<APIKey> {
  try {
  const response = await fetch (`$ {
  this.baseUrl 
}/rate-limiter/api-keys`, {
  method: 'POST', headers: {
  'Authorization': `Bearer $ {
  this.apiKey 
}`;
'Content-Type': 'application/json' 
};
return {
  id: `key $ {
  Date.now () 
}`;
name;
key: `zion $ {
  Math.random () .toString (36) .substr (2, 9) 
}`;
permissions;
rateLimit;
createdAt: new Date ();
lastUsed: new Date ();
isActive: true 
}
}
}createdAt: new Date ();
lastUsed: new Date ();
isActive: true 
};
{
  id: 'key 2', name: 'Mobile App', key: 'zion mobile456', permissions: ['read'], rateLimit: {
  requestsPerMinute: 50, requestsPerHour: 500, requestsPerDay: 5000, burstLimit: 25, windowSize: 60 
};
createdAt: new Date ();
lastUsed: new Date ();
isActive: true 
}] 
}
}return {
  overview: {
  totalRequests, blockedRequests, activeRules: rules.filter (r => r.enabled) .length, activeAPIKeys: apiKeys.filter (k => k.isActive) .length 
};
topEndpoints: stats .sort ( (a, b) => b.totalRequests - a.totalRequests) .slice (0, 5) 
}
}// Pricing tiers for the API Rate Limiter service 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/apiRateLimiter.ts
=======
    features: [;
      'Up to 10 rate limit rulesBasic rate limitingAPI key managementEmail notifications7-day data retentionBasic analytics';
    ];
  },;
  professional: {;
    name: 'Professional',;
    price: 79,;
    period: '/month',;
    features: [;
      'Up to 50 rate limit rulesAdvanced rate limitingUnlimited API keysReal-time monitoringSlack and webhook notifications30-day data retentionAdvanced analyticsCustom dashboards',;
      'API access';
    ];
  },;
  enterprise: {;
    name: 'Enterprise',;
    price: 199,;
    period: '/month',;
    features: [;
      'Unlimited rate limit rulesEnterprise-grade rate limitingAdvanced security featuresMultiple notification channels1-year data retentionCustom integrationsWhite-label optionsPriority support',;
      'SLA guarantee';
    ];
  }
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
