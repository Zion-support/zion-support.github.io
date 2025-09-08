

  burst_limit: number,
  window_size: number;


export interface RateLimitConfig {
  requestsPerMinute: number;
  requestsPerHour: number;
  requestsPerDay: number;
  burst_limit: number,
  window_size: number;
}
export interface RateLimitRule {
export interface RateLimitConfig {
  requestsPerMinute: number,
  requestsPerHour: number,
  requestsPerDay: number,
  burstLimit: number,
  windowSize: number}

export interface RateLimitConfig {
  requestsPerMinute: number;
  requestsPerHour: number;
  requestsPerDay: number;

  windowSize: number
}
export interface RateLimitRule {
  id: string,
  name: string,
  pattern: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'ALL',
  config: RateLimitConfig,
  enabled: boolean,
  createdAt: Date,
  updatedAt: Date}

export interface RateLimitStats {
  endpoint: string,
  method: string,
  totalRequests: number,
  blockedRequests: number,
  averageResponseTime: number,
  lastRequest: Date,
  currentUsage: {
    minute: number,
    hour: number,
    day: number}
}

    hour: number,
    day: number;

  }
}
export interface APIKey {
  id: string,
  name: string,
  key: string,
  permissions: string[],
  rateLimit: RateLimitConfig,
  createdAt: Date,
  lastUsed: Date,
  isActive: boolean}

  rate_limit: RateLimitConfig;
  created_at: Date;
  last_used: Date,
  is_active: boolean;

}
export interface RateLimitViolation {
  id: string,
  apiKey: string,
  endpoint: string,
  method: string,
  timestamp: Date,
  reason: 'rate_limit_exceeded' | 'burst_limit_exceeded' | 'quota_exceeded',
  ipAddress: string,
  userAgent: string}

export class APIRateLimiterService {
  private apiKey: string,
  private baseUrl: string,

  constructor(apiKey: string, baseUrl: string = $2;
    this.baseUrl = baseUrl
  }

  async createRateLimitRule(rule: Omit<RateLimitRule, 'id' | 'createdAt' | 'updatedAt'>): Promise<RateLimitRule> {
    try {
      const response = await fetch(`${this.baseUrl}/rate-limiter/rules`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'},
        body: JSON.stringify(rule)}),

      if (!response.ok) {
        throw new Error(`Failed to create rate limit rule: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      // Mock response for demo
      return {
        ...rule,
        id: `rule_${Date.now()}`,
        createdAt: new Date($2);
        updatedAt: new Date()
      }
    }
  }

  async getRateLimitRules(): Promise<RateLimitRule[]> {
    try {
      const response = await fetch($2);
      if (!response.ok) {
        throw new Error(`Failed to fetch rate limit rules: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      // Mock rules for demo
      return [
        {
          id: 'rule_1',
          name: 'API Endpoints',
          pattern: '/api/**',
          method: 'ALL',
          config: {
            requestsPerMinute: 100,
            requestsPerHour: 1000,
            requestsPerDay: 10000,
            burstLimit: 50,
            windowSize: 60},
          enabled: true,
          createdAt: new Date($2);
          updatedAt: new Date()
        },
        {
          id: 'rule_2',
          name: 'Authentication',
          pattern: '/auth/**',
          method: 'POST',
          config: {
            requestsPerMinute: 10,
            requestsPerHour: 100,
            requestsPerDay: 1000,
            burstLimit: 5,
            windowSize: 60},
          enabled: true,
          createdAt: new Date($2);
          updatedAt: new Date()
        }
      ]
    }
  }

  async updateRateLimitRule(id: string, updates: Partial<RateLimitRule>): Promise<RateLimitRule> {
    try {
      const response = await fetch(`${this.baseUrl}/rate-limiter/rules/${id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'},
        body: JSON.stringify(updates)}),

      if (!response.ok) {
        throw new Error(`Failed to update rate limit rule: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      // Mock update for demo
      const existingRule = (await this.getRateLimitRules()).find($2);
      if (!existingRule) {
        throw new Error('Rule not found')
      }
      
      return {
        ...existingRule,
        ...updates,
        updatedAt: new Date()
      }
    }
  }

  async deleteRateLimitRule(id: string): Promise<void> {
    try {
      const response = await fetch($2);
      if (!response.ok) {
        throw new Error(`Failed to delete rate limit rule: ${response.statusText}`)
      }
    } catch (error) {
      console.error($2);
      throw error
    }
  }

  async getRateLimitStats(endpoint?: string): Promise<RateLimitStats[]> {
    try {
      const params = $2;
      const response = await fetch($2);
      if (!response.ok) {
        throw new Error(`Failed to fetch rate limit stats: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      // Mock stats for demo
      return [
        {
          endpoint: '/api/users',
          method: 'GET',
          totalRequests: 15420,
          blockedRequests: 234,
          averageResponseTime: 45,
          lastRequest: new Date($2);
          currentUsage: {
            minute: 15,
            hour: 180,
            day: 1200}
        },
        {
          endpoint: '/api/auth/login',
          method: 'POST',
          totalRequests: 8920,
          blockedRequests: 156,
          averageResponseTime: 120,
          lastRequest: new Date($2);
          currentUsage: {
            minute: 8,
            hour: 95,
            day: 650}
        }
      ]
    }
  }

          }
        }
      ]
    }
  }
  async createAPIKey(name: string, permissions: string[], rateLimit: RateLimitConfig): Promise<APIKey> {
    try {
      const response = await fetch(`${this.baseUrl}/rate-limiter/api-keys`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'},
        body: JSON.stringify({ name, permissions, rateLimit })}),

      if (!response.ok) {
        throw new Error(`Failed to create API key: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      // Mock API key creation for demo
      return {
        id: `key_${Date.now()}`,
        name,
        key: `zion_${Math.random().toString(36).substr(2, 9)}`,
        permissions,
        rateLimit,
        createdAt: new Date($2);
        lastUsed: new Date($2);
        isActive: true}
    }
  }

  async getAPIKeys(): Promise<APIKey[]> {
    try {
      const response = await fetch($2);
      if (!response.ok) {
        throw new Error(`Failed to fetch API keys: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      // Mock API keys for demo
      return [
        {
          id: 'key_1',
          name: 'Web Application',
          key: 'zion_web123',
          permissions: ['readwrite'],
          rateLimit: {
            requestsPerMinute: 100,
            requestsPerHour: 1000,
            requestsPerDay: 10000,
            burstLimit: 50,
            windowSize: 60},
          createdAt: new Date($2);
          lastUsed: new Date($2);
          isActive: true},
        {
          id: 'key_2',
          name: 'Mobile App',
          key: 'zion_mobile456',
          permissions: ['read'],
          rateLimit: {
            requestsPerMinute: 50,
            requestsPerHour: 500,
            requestsPerDay: 5000,
            burstLimit: 25,
            windowSize: 60},
          createdAt: new Date($2);
          lastUsed: new Date($2);
          isActive: true}
      ]
    }
  }
  async getViolations(limit: number = 100): Promise<RateLimitViolation[]> {
    try {
      const response = await fetch($2);
      if (!response.ok) {
        throw new Error(`Failed to fetch violations: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      // Mock violations for demo;
      return [;
        {

          id: 'violation_1';

'

          method: 'GET',
          timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
          reason: 'rate_limit_exceeded',
          ipAddress: '192.168.1.100',
          userAgent: 'Mozilla/5.0 (Windows NT 10.0, Win64, x64) AppleWebKit/537.36'
        },
        {
          id: 'violation_2',
          apiKey: 'zion_mobile456',
          endpoint: '/api/auth/login',
          method: 'POST',
          timestamp: new Date (Date.now () - 1000 * 60 * 15), // 15 minutes ago;'
          reason: 'burst_limit_exceeded';'
          ip_address: '10.0.0.50','
          user_agent: 'ZionMobileApp / 1.0';

        }
      ]
    }
  }

  async generateReport(): Promise<{
    overview: {
      totalRequests: number,
      blockedRequests: number,
      activeRules: number,
      activeAPIKeys: number},
    topEndpoints: {
      endpoint: string,
      requests: number,
      blocked: number,
      averageResponseTime: number}[],
    violations: {
      total: number,
      byReason: Record<string, number>,
      recent: RateLimitViolation[]
    }
  }> {
    const stats = await this.getRateLimitStats($2);
    const rules = await this.getRateLimitRules($2);
    const apiKeys = await this.getAPIKeys($2);
    const violations = await this.getViolations($2);
    const totalRequests = stats.reduce((sum, stat) => sum + stat.totalRequests, 0),
    const blockedRequests = stats.reduce((sum, stat) => sum + stat.blockedRequests, 0),

    const violationsByReason = violations.reduce((acc, violation) => {
      acc[violation.reason] = (acc[violation.reason] || 0) + 1,
      return acc
    }, {} as Record<string, number>),

    return {
      overview: {
        totalRequests,
        blockedRequests,
        activeRules: rules.filter(r = $2;
        activeAPIKeys: apiKeys.filter(k = $2;
      topEndpoints: stats
        .sort((a, b) => b.totalRequests - a.totalRequests)
        .slice(0, 5)
        .map(stat = $2;
          requests: stat.totalRequests,
          blocked: stat.blockedRequests,
          averageResponseTime: stat.averageResponseTime
        })),
      violations: {
        total: violations.length,
        byReason: violationsByReason,
        recent: violations.slice(0, 10)
      }
    }
  }
}

// Pricing tiers for the API Rate Limiter service
export const API_RATE_LIMITER_PRICING = $2;
    price: 25,
    period: '/month',
    features: [
      'Up to 10 rate limit rulesBasic rate limitingAPI key managementEmail notifications7-day data retentionBasic analytics'
    ]
  },
  professional: {

    name: 'Professional';
    price: 79;'
    period: '/month';

    features: [;
      'Up to 50 rate limit rules_advanced rate limiting_unlimited API keys_real - time monitoring_slack and webhook notifications30 - day data retention_advanced analytics_custom dashboards',
      'API access';
    ];

  }
  enterprise: {'
    name: 'Enterprise';
    price: 199;'
    period: '/month';

    features: [
      'Up to 50 rate limit rulesAdvanced rate limitingUnlimited API keysReal-time monitoringSlack and webhook notifications30-day data retentionAdvanced analyticsCustom dashboardsAPI access'
    ]

;
// Pricing tiers for the API Rate Limiter service;
export const API_RATE_LIMITER_PRICING = {;
  starter: {;'
    name: 'Starter',;
    price: 25,;'
    period: '/month',;

    features: [;'
      'Unlimited rate limit rules_enterprise - grade rate limiting_advanced security features_multiple notification channels1 - year data retention_custom integrations_white - label options_priority support','
      'SLA guarantee';
    ];

  }

    hour: number,
    day: number;

  }
}
export interface APIKey {

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








      }
      return {
        ...existing_rule;
        ...updates;
        updated_at: new Date ();


      }
    }
  }


      const response = await fetch(`${this && this.baseUrl}/rate-limiter/rules/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`}});

      if (!response && response.ok) {
        throw new Error(`Failed to delete rate limit rule: ${response && response.statusText}`)

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

          'Authorization': `Bearer ${this && this.apiKey}`}});

      if (!response && response.ok) {
        throw new Error(`Failed to fetch rate limit stats: ${response && response.statusText}`)
      }

      return await response && response.json()


          }



















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
          rateLimit: {
            requestsPerMinute: 50;
            requestsPerHour: 500;
            requestsPerDay: 5000;
            burstLimit: 25
            windowSize: 60
          }
          createdAt: new Date();
          lastUsed: new Date()
          isActive: true
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


            burst_limit: 25,
            window_size: 60;
          }
          created_at: new Date ();
          last_used: new Date (),
          is_active: true;











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


          method: 'POST'
          timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
          reason: 'burst_limit_exceeded';
          ipAddress: '10.0.0.50'
          userAgent: 'ZionMobileApp/1.0'
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






        }
      ]
    }
  }




    const totalRequests = stats && stats.reduce((sum, stat) => sum + stat && stat.totalRequests, 0);
    const blockedRequests = stats && stats.reduce((sum, stat) => sum + stat && stat.blockedRequests, 0);
    const violationsByReason = violations && violations.reduce((acc, violation) => {
      acc[violation && violation.reason] = (acc[violation && violation.reason] || 0) + 1;
    const stats = await this.getRateLimitStats();
    const rules = await this.getRateLimitRules();
    const apiKeys = await this.getAPIKeys();
    const violations = await this.getViolations(50);
    const totalRequests = stats.reduce((sum, stat) => sum + stat.totalRequests, 0);
    const blockedRequests = stats.reduce((sum, stat) => sum + stat.blockedRequests, 0);
    const violationsByReason = violations.reduce((acc, violation) => {
      acc[violation.reason] = (acc[violation.reason] |0) + 1;
        activeRules: rules && rules.filter(r => r && r.enabled).length,
        activeAPIKeys: apiKeys && apiKeys.filter(k => k && k.isActive).length
      };















// Pricing tiers for the API Rate Limiter service
export const API_RATE_LIMITER_PRICING = {
  starter: {;
    name: 'Starter';
    price: 25;
    period: '/month'
    features: [
      'Up to 10 rate limit rulesBasic rate limitingAPI key managementEmail notifications7-day data retentionBasic analytics'
    ]




    features: [
      'Up to 50 rate limit rulesAdvanced rate limitingUnlimited API keysReal-time monitoringSlack and webhook notifications30-day data retentionAdvanced analyticsCustom dashboards'
      'API access'
    ]




