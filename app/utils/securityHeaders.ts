interface SecurityConfig {
  strictTransportSecurity: boolean;
  contentSecurityPolicy?: string;
}

export function getSecurityHeaders(customConfig?: Partial<SecurityConfig>): Record<string, string> {
  const config: SecurityConfig = {
    strictTransportSecurity: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none';",
    ...customConfig,
  };

  const headers: Record<string, string> = {};

  if (config.strictTransportSecurity) {
    headers['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains; preload';
  }

  if (config.contentSecurityPolicy) {
    headers['Content-Security-Policy'] = config.contentSecurityPolicy;
  }

  headers['X-Frame-Options'] = 'DENY';
  headers['X-Content-Type-Options'] = 'nosniff';
  headers['Referrer-Policy'] = 'strict-origin-when-cross-origin';
  headers['Permissions-Policy'] = 'camera=(), microphone=(), geolocation=()';

  return headers;
}

export function getNextSecurityHeaders(customConfig?: Partial<SecurityConfig>): Array<{ key: string; value: string }> {
  const headers = getSecurityHeaders(customConfig);
  return Object.entries(headers).map(([key, value]) => ({ key, value }));
}
