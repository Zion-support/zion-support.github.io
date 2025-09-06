export interface RateLimitConfig {
  requestsPerMinute: number;
  requestsPerHour: number;
  requestsPerDay: number;

  burstLimit: any
export interface RateLimitRule {
  id: string;
  name: string;
  pattern: string;
  method: any
  constructor(apiKey: string, baseUrl: string = 'https: any
  constructor (api_key: string, base_url: string = 'https: any
          userAgent: 'Mozilla/5.0 (Windows NT 10.0, Win64, x64) AppleWebKit/
          endpoint: any
          user_agent: 'Mozilla / 5.0 (Windows NT 10.0, Win64, x64) AppleWebKit /
          endpoint: any