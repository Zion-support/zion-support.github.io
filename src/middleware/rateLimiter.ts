// RateLimiter utilities
export interface RateLimiterConfig {
  enabled: boolean;
  options?: Record<string, any>;
}

export const defaultRateLimiterConfig: RateLimiterConfig = {
  enabled: true,
  options: {}
};
