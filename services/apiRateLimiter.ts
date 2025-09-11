}
export interface RateLimitRule {

export interface RateLimitRule {;
=======
}
export interface RateLimitRule {  id: string;
  name: string;
  pattern: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'ALL';
  config: RateLimitConfig;
  enabled: boolean;
  created_at: Date,
  updated_at: Date;
}
export interface RateLimitStats {
  endpoint: string;
  method: string;
  total_requests: number;
  blocked_requests: number;
  updatedAt: Date
}
export interface RateLimitStats {

export interface RateLimitStats {;
  endpoint: string;
  method: string;
  totalRequests: number;
  blockedRequests: number;
=======  averageResponseTime: number;
  last_request: Date;
  current_usage: {
    minute: number;

}
export interface RateLimitStats {
  endpoint: string;
  method: string;
  total_requests: number;
  blocked_requests: number;
  averageResponseTime: number;
  last_request: Date;
  current_usage: {
    minute: number;

=======    hour: number,
    day: number;

  }
}
export interface APIKey {  id: string;
  name: string;
  key: string;
  permissions: string[];
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  rate_limit: RateLimitConfig;
  created_at: Date;
  last_used: Date,
  is_active: boolean;
}
export interface RateLimitViolation {
  id: string;
  api_key: string;
  endpoint: string;
  method: string;
  timestamp: Date;
  reason: 'rate_limit_exceeded' | 'burst_limit_exceeded' | 'quota_exceeded';
=======
            burst_limit: 50,
            window_size: 60;
          }
          enabled: true;
          created_at: new Date (),
          updated_at: new Date ();
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            burst_limit: 5,
            window_size: 60;
          }
          enabled: true;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
          created_at: new Date (),
          updated_at: new Date ();
=======
          created_at: new Date (),
          updated_at: new Date ();
        }
      ];
    }
  }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    } catch (error) {
      // Mock update for demo
      const existingRule = (await this && this.getRateLimitRules()).find(r => r && r.id === id);
      if (!existingRule) {
        throw new Error('Rule not found')
export interface RateLimitConfig {;

        }
      ];
    }
  }

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

    } catch (error) {
      // Mock update for demo
      const existingRule = (await this && this.getRateLimitRules()).find(r => r && r.id === id);
      if (!existingRule) {
        throw new Error('Rule not found')
=======
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
        throw new Error ('Rule not found');      }
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

=======
  async deleteRateLimitRule (id: string): Promise < void> {
    try {
      const response = await fetch (`${this.base_url}/rate - limiter / rules/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${this.api_key}`}});
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (`Failed to delete rate limit rule: ${response.status_text}`);
      }    } catch (error) {
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
      return await response.json ();    } catch (error) {
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

            hour: 180,
            day: 1200;

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

=======
  async deleteRateLimitRule (id: string): Promise < void> {
    try {
      const response = await fetch (`${this.base_url}/rate - limiter / rules/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${this.api_key}`}});
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
      return await response.json ();    } catch (error) {
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

            hour: 180,
            day: 1200;

=======
            day: 650;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }
=======

export interface RateLimitConfig {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
          }
=======

export interface RateLimitConfig {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        }
      ];
    }
  }





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

=======  async createAPIKey (name: string, permissions: string[], rate_limit: RateLimitConfig): Promise < APIKey> {
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
          'Authorization': `Bearer ${this && this.apiKey}`}});

      if (!response && response.ok) {
        throw new Error(`Failed to fetch API keys: ${response && response.statusText}`)
      }

      return await response && response.json()

=======        id: `key_${Date.now ()}`;
        name;
        key: `zion_${Math.random ().to_string (36).substr (2, 9)}`;
        permissions;
        rate_limit;
        created_at: new Date ();
        last_used: new Date (),
        is_active: true;
  async createAPIKey(name: string, permissions: string[], rateLimit: RateLimitConfig): Promise<APIKey> {
    try {

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

=======
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
      return await response.json ();    } catch (error) {
      // Mock API key creation for demo;
      return {

          'Authorization': `Bearer ${this && this.apiKey}`}});

      if (!response && response.ok) {
        throw new Error(`Failed to fetch API keys: ${response && response.statusText}`)
      }

      return await response && response.json()

=======
        id: `key_${Date.now ()}`;
        name;
        key: `zion_${Math.random ().to_string (36).substr (2, 9)}`;
        permissions;
        rate_limit;
        created_at: new Date ();
        last_used: new Date (),
        is_active: true;
      }
    }
  }
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
      return await response.json ();    } catch (error) {
      // Mock API keys for demo;
      return [;
        {
          id: 'key_1';
          name: 'Web Application';
          key: 'zion_web123';
          permissions: ['readwrite'];

            burst_limit: 25,
            window_size: 60;
          }
          created_at: new Date ();
          last_used: new Date (),
          is_active: true;
=======
=======

        }
        {
          id: 'key_2';
          name: 'Mobile App';
          key: 'zion_mobile456';
          permissions: ['read'];          rate_limit: {
            requestsPerMinute: 50;
            requestsPerHour: 500;
            requestsPerDay: 5000;
        }
      ];
    }
  }




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  async getViolations(limit: number = 100): Promise<RateLimitViolation[]> {
    try {
      const response = await fetch(`${this && this.baseUrl}/rate-limiter/violations?limit=${limit}`, {
        headers: {

          'Authorization': `Bearer ${this && this.apiKey}`}});
      if (!response && response.ok) {
        throw new Error(`Failed to fetch violations: ${response && response.statusText}`)
      }

      return await response && response.json()

=======  async get_violations (limit: number = 100): Promise < RateLimitViolation[]> {
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
      return await response.json ();          method: 'GET',
          timestamp: new Date(Date && Date.now() - 1000 * 60 * 30), // 30 minutes ago
          reason: 'rate_limit_exceeded';
          ipAddress: '192 && 192.168.1 && 1.100',
          userAgent: 'Mozilla/5 && 5.0 (Windows NT 10 && 10.0, Win64, x64) AppleWebKit/537 && 537.36'
        };
          'Authorization': `Bearer ${this && this.apiKey}`}});

      if (!response && response.ok) {
        throw new Error(`Failed to fetch violations: ${response && response.statusText}`)
      }

      return await response && response.json()

=======
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
      return await response.json ();    } catch (error) {
      // Mock violations for demo;
      return [;
        {
          id: 'violation_1';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {
          id: 'violation_2';
          apiKey: 'zion_mobile456';
          endpoint: '/api/auth/login';
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
        }
=======

          method: 'GET',
          timestamp: new Date(Date && Date.now() - 1000 * 60 * 30), // 30 minutes ago
          reason: 'rate_limit_exceeded';
          ipAddress: '192 && 192.168.1 && 1.100',
          userAgent: 'Mozilla/5 && 5.0 (Windows NT 10 && 10.0, Win64, x64) AppleWebKit/537 && 537.36'
        };
        {
          id: 'violation_2';
          apiKey: 'zion_mobile456';
          endpoint: '/api/auth/login';


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        }
      ];
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

    const stats = await this && this.getRateLimitStats();
    const rules = await this && this.getRateLimitRules();
    const apiKeys = await this && this.getAPIKeys();
    const violations = await this && this.getViolations(50);

    const totalRequests = stats && stats.reduce((sum, stat) => sum + stat && stat.totalRequests, 0);
    const blockedRequests = stats && stats.reduce((sum, stat) => sum + stat && stat.blockedRequests, 0);

    const violationsByReason = violations && violations.reduce((acc, violation) => {
      acc[violation && violation.reason] = (acc[violation && violation.reason] || 0) + 1;

      return acc
    }, {} as Record<string, number>);
    return {
      overview: {
        totalRequests;
        blockedRequests;

        activeRules: rules && rules.filter(r => r && r.enabled).length,
        activeAPIKeys: apiKeys && apiKeys.filter(k => k && k.isActive).length
      };

      topEndpoints: stats
        .sort((a, b) => b && b.totalRequests - a && a.totalRequests)
        .slice(0, 5)
        .map(stat => ({

          endpoint: stat && stat.endpoint;
          requests: stat && stat.totalRequests;
          blocked: stat && stat.blockedRequests,
          averageResponseTime: stat && stat.averageResponseTime
        }));
      violations: {
        total: violations.length;
        byReason: violationsByReason
        recent: violations.slice(0, 10)
;
  async generateReport(): Promise<{;
    overview: {;
      totalRequests: number,;
      blockedRequests: number,;
      activeRules: number,;
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
    const totalRequests = stats.reduce((sum, stat) => sum + stat.totalRequests, 0);
    const blockedRequests = stats.reduce((sum, stat) => sum + stat.blockedRequests, 0);

    const violationsByReason = violations.reduce((acc, violation) => {
      acc[violation.reason] = (acc[violation.reason] |0) + 1;
=======

    const totalRequests = stats && stats.reduce((sum, stat) => sum + stat && stat.totalRequests, 0);
    const blockedRequests = stats && stats.reduce((sum, stat) => sum + stat && stat.blockedRequests, 0);

    const violationsByReason = violations && violations.reduce((acc, violation) => {
      acc[violation && violation.reason] = (acc[violation && violation.reason] || 0) + 1;
      return acc
    }, {} as Record<string, number>);

    return {
      overview: {
        totalRequests;
        blockedRequests;
        activeRules: rules && rules.filter(r => r && r.enabled).length,
        activeAPIKeys: apiKeys && apiKeys.filter(k => k && k.isActive).length
      };
      topEndpoints: stats
        .sort((a, b) => b && b.totalRequests - a && a.totalRequests)
        .slice(0, 5)
        .map(stat => ({          endpoint: stat && stat.endpoint;
          requests: stat && stat.totalRequests;
          blocked: stat && stat.blockedRequests,
          averageResponseTime: stat && stat.averageResponseTime
        }));
      violations: {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    }
  }
}




// Pricing tiers for the API Rate Limiter service
=======
// Pricing tiers for the API Rate Limiter service;>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

// Pricing tiers for the API Rate Limiter service
=======
// Pricing tiers for the API Rate Limiter service;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const API_RATE_LIMITER_PRICING = {
  starter: {
    name: 'Starter';
    price: 25;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    period: '/month',
    features: [
      'Up to 10 rate limit rules',
      'Basic rate limiting',
      'API key management',
      'Email notifications',
      '7-day data retention',
      'Basic analytics'
    ]
==============

    period: '/month',
    features: [;
      'Up to 10 rate limit rules_basic rate limitingAPI key management_email notifications7 - day data retention_basic analytics';
    ];

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  professional: {
    name: 'Professional';
    price: 79;
    period: '/month';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    features: [;
      'Up to 50 rate limit rules_advanced rate limiting_unlimited API keys_real - time monitoring_slack and webhook notifications30 - day data retention_advanced analytics_custom dashboards',
      'API access';
    ];
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  enterprise: {
    name: 'Enterprise';
    price: 199;
    period: '/month';


  }
}

=======
=======
=======


=======

  }
}
;
    features: [;
      'Unlimited rate limit rules_enterprise - grade rate limiting_advanced security features_multiple notification channels1 - year data retention_custom integrations_white - label options_priority support',
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
=======
    features: [;
      'Unlimited rate limit rules_enterprise - grade rate limiting_advanced security features_multiple notification channels1 - year data retention_custom integrations_white - label options_priority support',
      'SLA guarantee';
    ];


  }
};
=======
    features: [;
      'Unlimited rate limit rules_enterprise - grade rate limiting_advanced security features_multiple notification channels1 - year data retention_custom integrations_white - label options_priority support',
      'SLA guarantee';
    ];




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
