
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
  strictTransportSecurity: boolean;
  contentSecurityPolicy?: string;
}

