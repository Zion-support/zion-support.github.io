export interface RateLimitConfig {;
  requestsPerMinute:number,;
  requestsPerHour:number,;
  requestsPerDay:number,;
  burstLimit:number,;
  windowSize:number;

export interface RateLimitRule {;
  id:string,;
  name:string,;
  pattern:string,;
  method: any
  constructor(apiKey:string, baseUrl:string = 'https: any
          userAgent:'Mozilla/5.0 (Windows NT 10.0, Win64, x64) AppleWebKit/
          endpoint: any
  id: 'rule 1', name: 'API Endpoints', pattern: any
  id: 'rule 2', name: 'Authentication', pattern: any