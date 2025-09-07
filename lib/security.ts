export const securityHeaders: Array<{ key: string; value: string }> = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
];

export const contentSecurityPolicy = {
  directives: {
    "default-src": ["'self'"],
    "script-src": ["'self'", "'unsafe-inline'"],
    "style-src": ["'self'", "'unsafe-inline'"],
    "img-src": ["'self'", 'data:', 'https:'],
    "font-src": ["'self'", 'https:', 'data:'],
    "connect-src": ["'self'"],
    "frame-ancestors": ["'none'"],
  } as Record<string, string[]>,
};