
}

export function getNextSecurityHeaders(customConfig?: Partial<SecurityConfig>): Array<{ key: string; value: string }> {
  const headers = getSecurityHeaders(customConfig);
  return Object.entries(headers).map(([key, value]) => ({ key, value }));
}

interface SecurityConfig {
  strictTransportSecurity: boolean;
  contentSecurityPolicy?: string;
}

