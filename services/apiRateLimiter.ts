
export interface RateLimitConfig {;

        }
      ];
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
        {
          id: 'key_1';
          name: 'Web Application';
          key: 'zion_web123';
          permissions: ['readwrite'];
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
        }
        {
          id: 'key_2';
          name: 'Mobile App';
          key: 'zion_mobile456';
          permissions: ['read'];
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
=======
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
        {
          id: 'violation_2';
          apiKey: 'zion_mobile456';
          endpoint: '/api/auth/login';
          method: 'POST'
          timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
          reason: 'burst_limit_exceeded';
          ipAddress: '10.0.0.50'
          userAgent: 'ZionMobileApp/1.0'
=======
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        }
      ]
    }
  }



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
    const stats = await this.getRateLimitStats();
    const rules = await this.getRateLimitRules();
    const apiKeys = await this.getAPIKeys();
    const violations = await this.getViolations(50);
    const totalRequests = stats.reduce((sum, stat) => sum + stat.totalRequests, 0);
    const blockedRequests = stats.reduce((sum, stat) => sum + stat.blockedRequests, 0);
    const violationsByReason = violations.reduce((acc, violation) => {
      acc[violation.reason] = (acc[violation.reason] |0) + 1;
      return acc
    }, {} as Record<string, number>);
    return {
      overview: {
        totalRequests;
        blockedRequests;
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
=======
;
  async generateReport(): Promise<{;
    overview: {;
      totalRequests: number,;
      blockedRequests: number,;
      activeRules: number,;
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
        })),;
      violations: {;
        total: violations.length,;
        byReason: violationsByReason,;
        recent: violations.slice(0, 10);


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
    }
  }
}



// Pricing tiers for the API Rate Limiter service
export const API_RATE_LIMITER_PRICING = {
  starter: {;
    name: 'Starter';
    price: 25;
    period: '/month'
    features: [
      'Up to 10 rate limit rulesBasic rate limitingAPI key managementEmail notifications7-day data retentionBasic analytics'
    ]
  }
  professional: {
    name: 'Professional';
    price: 79;
    period: '/month';
    features: [
      'Up to 50 rate limit rulesAdvanced rate limitingUnlimited API keysReal-time monitoringSlack and webhook notifications30-day data retentionAdvanced analyticsCustom dashboards'
      'API access'
    ]
  }
  enterprise: {
    name: 'Enterprise';
    price: 199;
    period: '/month';
    features: [
      'Unlimited rate limit rulesEnterprise-grade rate limitingAdvanced security featuresMultiple notification channels1-year data retentionCustom integrationsWhite-label optionsPriority support'
      'SLA guarantee'
    ]


=======
;
// Pricing tiers for the API Rate Limiter service;
export const API_RATE_LIMITER_PRICING = {;
  starter: {;
    name: 'Starter',;
    price: 25,;
    period: '/month',;
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
