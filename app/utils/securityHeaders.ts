export function getSecurityHeaders(customConfig?: Partial<SecurityConfig>): Record<string, string> {
  const config = {
    ...defaultSecurityConfig,
    ...customConfig,
  };

  const headers: Record<string, string> = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  };

  if (config.strictTransportSecurity) {
    headers['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains; preload';
  }

  if (config.contentSecurityPolicy) {
    headers['Content-Security-Policy'] = config.contentSecurityPolicy;
  }

  return headers;
}

export function getNextSecurityHeaders(customConfig?: Partial<SecurityConfig>): Array<{ key: string; value: string }> {
  const headers = getSecurityHeaders(customConfig);
  return Object.entries(headers).map(([key, value]) => ({ key, value }));
}

interface SecurityConfig {
  strictTransportSecurity: boolean;
  contentSecurityPolicy?: string;
}

const defaultSecurityConfig: SecurityConfig = {
  strictTransportSecurity: true,
  contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';",
};
