// Security utilities
export interface SecurityConfig {
  enabled: boolean;
  options?: Record<string, any>;
}

export const defaultSecurityConfig: SecurityConfig = {
  enabled: true,
  options: {}
};
