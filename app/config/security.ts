export const securityConfig = {
  cors: {
    origin: process.env.NEXT_PUBLIC_APP_URL || 'https://ziontechgroup.com',
    credentials: true
  },
  headers: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
  }
};