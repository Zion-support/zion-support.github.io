<<<<<<< HEAD
export interface RateLimitConfig {
  requestsPerMinute: number,
  requestsPerHour: number,
  requestsPerDay: number,
  burstLimit: number,
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
  updatedAt: Date
}

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
    day: number
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
  isActive: boolean
}

export interface RateLimitViolation {
  id: string,
  apiKey: string,
  endpoint: string,
  method: string,
  timestamp: Date,
  reason: 'rate_limit_exceeded' | 'burst_limit_exceeded' | 'quota_exceeded',
  ipAddress: string,
  userAgent: string
}

export class APIRateLimiterService {
  private apiKey: string,
  private baseUrl: string,

  constructor(apiKey: string, baseUrl: string = 'https://api.ziontech.ai') {
    this.apiKey = apiKey,
    this.baseUrl = baseUrl
  }

  async createRateLimitRule(rule: Omit<RateLimitRule 'id' | 'createdAt' | 'updatedAt'>): Promise<RateLimitRule> {
    try {
      const response = await fetch(`${this.baseUrl}/rate-limiter/rules`, {
        method: 'POST',
        headers: {
=======
export interface RateLimitConfig {_requestsPerMinute: number;
  requestsPerHour: number;
  requestsPerDay: number;
  burstLimit: number;
  windowSize: number;}

export interface RateLimitRule {_id: string;
  name: string;
  pattern: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'ALL';
  config: RateLimitConfig;
  enabled: boolean;
  createdAt: Date;
  updatedAt: Date;}

export interface RateLimitStats {_endpoint: string;
  method: string;
  totalRequests: number;
  blockedRequests: number;
  averageResponseTime: number;
  lastRequest: Date;
  currentUsage: {
    minute: number;
    hour: number;
    day: number;};
}

export interface APIKey {_id: string;
  name: string;
  key: string;
  permissions: string[];
  rateLimit: RateLimitConfig;
  createdAt: Date;
  lastUsed: Date;
  isActive: boolean;}

export interface RateLimitViolation {_id: string;
  apiKey: string;
  endpoint: string;
  method: string;
  timestamp: Date;
  reason: 'rate_limit_exceeded' | 'burst_limit_exceeded' | 'quota_exceeded';
  ipAddress: string;
  userAgent: string;}

export class APIRateLimiterService {_private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, _baseUrl: string = 'https://api.ziontech.ai') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;}

  async createRateLimitRule(rule: Omit<RateLimitRule, 'id' | 'createdAt' | 'updatedAt'>): Promise<RateLimitRule> {_try {
      const _response = await fetch(`${this.baseUrl}/rate-limiter/rules`, {_method: 'POST', _headers: {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'},
        body: JSON.stringify(rule)}),

<<<<<<< HEAD
      if (!response.ok) {
        throw new Error(`Failed to create rate limit rule: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      // Mock response for demo
=======
      if (!response.ok) {_throw new Error(`Failed to create rate limit rule: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {_// Mock response for demo
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return {
        ...rule, _id: `rule_${Date.now()}`,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }
  }

<<<<<<< HEAD
  async getRateLimitRules(): Promise<RateLimitRule[]> {
    try {
      const response = await fetch(`${this.baseUrl}/rate-limiter/rules`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}}),

      if (!response.ok) {
        throw new Error(`Failed to fetch rate limit rules: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      // Mock rules for demo
=======
  async getRateLimitRules(): Promise<RateLimitRule[]> {_try {
      const _response = await fetch(`${this.baseUrl}/rate-limiter/rules`, {_headers: {
          'Authorization': `Bearer ${this.apiKey}`}});

      if (!response.ok) {_throw new Error(`Failed to fetch rate limit rules: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {_// Mock rules for demo
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return [
        {
          id: 'rule_1', _name: 'API Endpoints', _pattern: '/api/**', _method: 'ALL', _config: {
            requestsPerMinute: 100, _requestsPerHour: 1000, _requestsPerDay: 10000, _burstLimit: 50, _windowSize: 60},
          enabled: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {_id: 'rule_2', _name: 'Authentication', _pattern: '/auth/**', _method: 'POST', _config: {
            requestsPerMinute: 10, _requestsPerHour: 100, _requestsPerDay: 1000, _burstLimit: 5, _windowSize: 60},
          enabled: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    }
  }

  async updateRateLimitRule(id: string, updates: Partial<RateLimitRule>): Promise<RateLimitRule> {_try {
      const _response = await fetch(`${this.baseUrl}/rate-limiter/rules/${_id}`, {_method: 'PATCH', _headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'},
        body: JSON.stringify(updates)}),

<<<<<<< HEAD
      if (!response.ok) {
        throw new Error(`Failed to update rate limit rule: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      // Mock update for demo
      const existingRule = (await this.getRateLimitRules()).find(r => r.id === id),
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
      const response = await fetch(`${this.baseUrl}/rate-limiter/rules/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}}),

      if (!response.ok) {
        throw new Error(`Failed to delete rate limit rule: ${response.statusText}`)
      }
    } catch (error) {
      console.error('Failed to delete rate limit rule:', error),
      throw error
    }
  }

  async getRateLimitStats(endpoint?: string): Promise<RateLimitStats[]> {
    try {
      const params = endpoint ? `?endpoint=${encodeURIComponent(endpoint)}` : '',
      const response = await fetch(`${this.baseUrl}/rate-limiter/stats${params}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}}),

      if (!response.ok) {
        throw new Error(`Failed to fetch rate limit stats: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      // Mock stats for demo
=======
      if (!response.ok) {_throw new Error(`Failed to update rate limit rule: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {_// Mock update for demo
      const _existingRule = (await this.getRateLimitRules()).find(r => r.id === id);
      if (!existingRule) {
        throw new Error('Rule not found');}
      
      return {_...existingRule, _...updates, _updatedAt: new Date()};
    }
  }

  async deleteRateLimitRule(id: string): Promise<void> {_try {
      const _response = await fetch(`${this.baseUrl}/rate-limiter/rules/${_id}`, {_method: 'DELETE', _headers: {
          'Authorization': `Bearer ${this.apiKey}`}});

      if (!response.ok) {_throw new Error(`Failed to delete rate limit rule: ${response.statusText}`);
      }
    } catch (error) {_throw error;}
  }

  async getRateLimitStats(endpoint?: string): Promise<RateLimitStats[]> {_try {
      const _params = endpoint ? `?endpoint=${encodeURIComponent(endpoint)}` : '';
      const _response = await fetch(`${_this.baseUrl}/rate-limiter/stats${_params}`, {_headers: {
          'Authorization': `Bearer ${this.apiKey}`}});

      if (!response.ok) {_throw new Error(`Failed to fetch rate limit stats: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {_// Mock stats for demo
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return [
        {
          endpoint: '/api/users', _method: 'GET', _totalRequests: 15420, _blockedRequests: 234, _averageResponseTime: 45, _lastRequest: new Date(), _currentUsage: {
            minute: 15, _hour: 180, _day: 1200}
        },
        {_endpoint: '/api/auth/login', _method: 'POST', _totalRequests: 8920, _blockedRequests: 156, _averageResponseTime: 120, _lastRequest: new Date(), _currentUsage: {
            minute: 8, _hour: 95, _day: 650}
        }
      ]
    }
  }

  async createAPIKey(name: string, permissions: string[], rateLimit: RateLimitConfig): Promise<APIKey> {_try {
      const _response = await fetch(`${this.baseUrl}/rate-limiter/api-keys`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'},
<<<<<<< HEAD
        body: JSON.stringify({ name, permissions, rateLimit })}),

      if (!response.ok) {
        throw new Error(`Failed to create API key: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      // Mock API key creation for demo
=======
        body: JSON.stringify({_name, _permissions, _rateLimit})});

      if (!response.ok) {_throw new Error(`Failed to create API key: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {_// Mock API key creation for demo
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return {
        id: `key_${Date.now()}`,
        name,
        key: `zion_${_Math.random().toString(36).substr(2, _9)}`,
        permissions,
        rateLimit,
        createdAt: new Date(),
        lastUsed: new Date(),
        isActive: true
      }
    }
  }

<<<<<<< HEAD
  async getAPIKeys(): Promise<APIKey[]> {
    try {
      const response = await fetch(`${this.baseUrl}/rate-limiter/api-keys`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}}),

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
            windowSize: 60
          },
=======
  async getAPIKeys(): Promise<APIKey[]> {_try {
      const _response = await fetch(`${this.baseUrl}/rate-limiter/api-keys`, {_headers: {
          'Authorization': `Bearer ${this.apiKey}`}});

      if (!response.ok) {_throw new Error(`Failed to fetch API keys: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {_// Mock API keys for demo
      return [
        {
          id: 'key_1', _name: 'Web Application', _key: 'zion_web123', _permissions: ['read', _'write'], _rateLimit: {
            requestsPerMinute: 100, _requestsPerHour: 1000, _requestsPerDay: 10000, _burstLimit: 50, _windowSize: 60},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          createdAt: new Date(),
          lastUsed: new Date(),
          isActive: true
        },
        {_id: 'key_2', _name: 'Mobile App', _key: 'zion_mobile456', _permissions: ['read'], _rateLimit: {
            requestsPerMinute: 50, _requestsPerHour: 500, _requestsPerDay: 5000, _burstLimit: 25, _windowSize: 60},
          createdAt: new Date(),
          lastUsed: new Date(),
          isActive: true
        }
      ]
    }
  }

<<<<<<< HEAD
  async getViolations(limit: number = 100): Promise<RateLimitViolation[]> {
    try {
      const response = await fetch(`${this.baseUrl}/rate-limiter/violations?limit=${limit}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}}),

      if (!response.ok) {
        throw new Error(`Failed to fetch violations: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      // Mock violations for demo
      return [
        {
          id: 'violation_1',
          apiKey: 'zion_web123',
          endpoint: '/api/users',
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
          timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
          reason: 'burst_limit_exceeded',
          ipAddress: '10.0.0.50',
          userAgent: 'ZionMobileApp/1.0'
        }
      ]
    }
  }

  async generateReport(): Promise<{
    overview: {
      totalRequests: number,
      blockedRequests: number,
      activeRules: number,
      activeAPIKeys: number
    },
    topEndpoints: {
      endpoint: string,
      requests: number,
      blocked: number,
      averageResponseTime: number
    }[],
    violations: {
      total: number,
      byReason: Record<string number>,
      recent: RateLimitViolation[]
    }
  }> {
    const stats = await this.getRateLimitStats(),
    const rules = await this.getRateLimitRules(),
    const apiKeys = await this.getAPIKeys(),
    const violations = await this.getViolations(50),

    const totalRequests = stats.reduce((sum, stat) => sum + stat.totalRequests, 0),
    const blockedRequests = stats.reduce((sum, stat) => sum + stat.blockedRequests, 0),

    const violationsByReason = violations.reduce((acc, violation) => {
      acc[violation.reason] = (acc[violation.reason] || 0) + 1,
      return acc
    }, {} as Record<string number>),
=======
  async getViolations(limit: number = 100): Promise<RateLimitViolation[]> {_try {
      const _response = await fetch(`${this.baseUrl}/rate-limiter/violations?limit=${_limit}`, {_headers: {
          'Authorization': `Bearer ${this.apiKey}`}});

      if (!response.ok) {_throw new Error(`Failed to fetch violations: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {_// Mock violations for demo
      return [
        {
          id: 'violation_1', _apiKey: 'zion_web123', _endpoint: '/api/users', _method: 'GET', _timestamp: new Date(Date.now() - 1000 * 60 * 30), _// 30 minutes ago
          reason: 'rate_limit_exceeded', _ipAddress: '192.168.1.100', _userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'},
        {_id: 'violation_2', _apiKey: 'zion_mobile456', _endpoint: '/api/auth/login', _method: 'POST', _timestamp: new Date(Date.now() - 1000 * 60 * 15), _// 15 minutes ago
          reason: 'burst_limit_exceeded', _ipAddress: '10.0.0.50', _userAgent: 'ZionMobileApp/1.0'}
      ];
    }
  }

  async generateReport(): Promise<{_overview: {
      totalRequests: number;
      blockedRequests: number;
      activeRules: number;
      activeAPIKeys: number;};
    topEndpoints: {_endpoint: string;
      requests: number;
      blocked: number;
      averageResponseTime: number;}[];
    violations: {_total: number;
      byReason: Record<string, _number>;
      recent: RateLimitViolation[];};
  }> {_const _stats = await this.getRateLimitStats();
    const _rules = await this.getRateLimitRules();
    const _apiKeys = await this.getAPIKeys();
    const _violations = await this.getViolations(50);

    const _totalRequests = stats.reduce(_(sum, _stat) => sum + stat.totalRequests, _0);
    const _blockedRequests = stats.reduce(_(sum, _stat) => sum + stat.blockedRequests, _0);

    const _violationsByReason = violations.reduce(_(acc, _violation) => {
      acc[violation.reason] = (acc[violation.reason] || 0) + 1;
      return acc;}, {} as Record<string, number>);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    return {_overview: {
        totalRequests, _blockedRequests, _activeRules: rules.filter(r => r.enabled).length, _activeAPIKeys: apiKeys.filter(k => k.isActive).length},
      topEndpoints: stats
        .sort(_(a, _b) => b.totalRequests - a.totalRequests)
        .slice(0, 5)
<<<<<<< HEAD
        .map(stat => ({
          endpoint: stat.endpoint,
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
=======
        .map(stat => ({_endpoint: stat.endpoint, _requests: stat.totalRequests, _blocked: stat.blockedRequests, _averageResponseTime: stat.averageResponseTime})),
      violations: {_total: violations.length, _byReason: violationsByReason, _recent: violations.slice(0, _10)}
    };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}

// Pricing tiers for the API Rate Limiter service
<<<<<<< HEAD
export const API_RATE_LIMITER_PRICING = {
  starter: {
    name: 'Starter',
    price: 25,
    period: '/month',
    features: [
      'Up to 10 rate limit rulesBasic rate limitingAPI key managementEmail notifications7-day data retentionBasic analytics'
    ]
  },
  professional: {
    name: 'Professional',
    price: 79,
    period: '/month',
    features: [
      'Up to 50 rate limit rulesAdvanced rate limitingUnlimited API keysReal-time monitoringSlack and webhook notifications30-day data retentionAdvanced analyticsCustom dashboards',
      'API access'
    ]
  },
  enterprise: {
    name: 'Enterprise',
    price: 199,
    period: '/month',
    features: [
      'Unlimited rate limit rulesEnterprise-grade rate limitingAdvanced security featuresMultiple notification channels1-year data retentionCustom integrationsWhite-label optionsPriority support',
      'SLA guarantee'
    ]
  }
},
=======
export const _API_RATE_LIMITER_PRICING = {_starter: {
    name: 'Starter', _price: 25, _period: '/month', _features: [
      'Up to 10 rate limit rules', _'Basic rate limiting', _'API key management', _'Email notifications', _'7-day data retention', _'Basic analytics'
    ]},
  professional: {_name: 'Professional', _price: 79, _period: '/month', _features: [
      'Up to 50 rate limit rules', _'Advanced rate limiting', _'Unlimited API keys', _'Real-time monitoring', _'Slack and webhook notifications', _'30-day data retention', _'Advanced analytics', _'Custom dashboards', _'API access'
    ]},
  enterprise: {_name: 'Enterprise', _price: 199, _period: '/month', _features: [
      'Unlimited rate limit rules', _'Enterprise-grade rate limiting', _'Advanced security features', _'Multiple notification channels', _'1-year data retention', _'Custom integrations', _'White-label options', _'Priority support', _'SLA guarantee'
    ]}
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
