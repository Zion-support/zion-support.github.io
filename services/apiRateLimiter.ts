
}
export interface RateLimitRule {


burst_limit: number,
  window_size: number;}

}
export interface RateLimitRule {
export interface RateLimitConfig {
  requestsPerMinute: number;
  requestsPerHour: number;
  requestsPerDay: number;
  burst_limit: number,
  window_size: number;
}
export interface RateLimitRule {

export interface RateLimitConfig {
export interface RateLimitRule {export interface RateLimitConfig {
export interface RateLimitConfig {;
  requestsPerMinute: number;
  requestsPerHour: number;
  requestsPerDay: number;
export interface RateLimitRule {}
}
export interface RateLimitRule  {id: string;
  name: string;
  pattern: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'ALL';
  config: RateLimitConfig;}
  enabled: boolean;}
}
}}
export interface RateLimitStats  {endpoint: string;
export interface RateLimitRule {
  // TODO: Implement
}
export interface RateLimitConfig {
  // TODO: Implement
}
export interface RateLimitConfig {;
  requestsPerMinute: number;,
  requestsPerHour: number;

  requestsPerDay: number;,

  burst_limit: number,
  window_size: number;
export interface RateLimitConfig {
  requestsPerMinute: number;
  requestsPerHour: number;
  requestsPerDay: number;

  id: string;
  name: string;
  pattern: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'ALL';
  config: RateLimitConfig;
  enabled: boolean;


}}

export interface RateLimitStats {
  endpoint: string;
  method: string;
  total_requests: number;
  blocked_requests: number;
  averageResponseTime: number;


  private apiKey: string;

