# Security Configuration for Zion Tech Group

## Content Security Policy (CSP)
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.ziontechgroup.com https://www.google-analytics.com; frame-src 'self' https://www.youtube.com;

## Security Headers
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()

## Rate Limiting
- API requests: 100 requests per minute per IP
- Authentication: 5 attempts per 15 minutes
- Contact forms: 3 submissions per hour per IP

## Data Protection
- All user data encrypted at rest
- HTTPS enforced for all connections
- Regular security audits and penetration testing
- GDPR and CCPA compliance implemented

## Monitoring
- Real-time security monitoring
- Automated threat detection
- Incident response procedures
- Regular vulnerability scanning
