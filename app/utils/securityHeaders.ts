// Security headers utilities
export const getSecurityHeaders = (): Record<string, string> => {
  return {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'",
  };
};

export const applySecurityHeaders = (): void => {
  if (typeof window === 'undefined') return;
  
  const headers = getSecurityHeaders();
  Object.entries(headers).forEach(([key, value]) => {
    document.head.setAttribute(key, value);
  });
};
