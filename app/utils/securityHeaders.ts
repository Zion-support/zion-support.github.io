
interface SecurityConfig {
  strictTransportSecurity: boolean;
  contentSecurityPolicy: string;
  xFrameOptions: string;
  xContentTypeOptions: boolean;
  referrerPolicy: string;
}

export function getNextSecurityHeaders(customConfig?: Partial<SecurityConfig>): Array<{ key: string; value: string }> {
  const headers = getSecurityHeaders(customConfig);
  return Object.entries(headers).map(([key, value]) => ({ key, value }));
}

function getSecurityHeaders(config?: Partial<SecurityConfig>) {
  const defaultConfig: SecurityConfig = {
    strictTransportSecurity: true,
    contentSecurityPolicy: "default-src 'self'",
    xFrameOptions: 'DENY',
    xContentTypeOptions: true,
    referrerPolicy: 'strict-origin-when-cross-origin'
  };

  const mergedConfig = { ...defaultConfig, ...config };

  return {
    'Strict-Transport-Security': mergedConfig.strictTransportSecurity 
      ? 'max-age=31536000; includeSubDomains' 
      : '',
    'Content-Security-Policy': mergedConfig.contentSecurityPolicy,
    'X-Frame-Options': mergedConfig.xFrameOptions,
    'X-Content-Type-Options': mergedConfig.xContentTypeOptions ? 'nosniff' : '',
    'Referrer-Policy': mergedConfig.referrerPolicy
  };
}

