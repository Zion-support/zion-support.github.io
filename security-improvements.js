#!/usr/bin/env node,
import fs from 'fs',
import path from 'path',
import { fileURLToPath } from 'url',
,
const __filename = fileURLToPath(import.meta.url),
const __dirname = path.dirname(__filename),
,
console.log('🔒 Starting Security Improvements...\n'),
,
async function runSecurityImprovements() {,
  try {,
    // 1. Add security headers,
    console.log('🛡️ Adding security headers...'),
    await addSecurityHeaders(),
,
    // 2. Input validation utilities,
    console.log('✅ Adding input validation...'),
    await addInputValidation(),
,
    // 3. Rate limiting,
    console.log('⏱️ Adding rate limiting...'),
    await addRateLimiting(),
,
    // 4. CSRF protection,
    console.log('🛡️ Adding CSRF protection...'),
    await addCSRFProtection(),
,
    // 5. Content Security Policy,
    console.log('📋 Adding Content Security Policy...'),
    await addCSP(),
,
    console.log('\n✅ Security improvements completed successfully!'),
,
  } catch (error) {,
    console.error('❌ Error during security improvements:', error.message),
    process.exit(1),
  }
}
,
async function addSecurityHeaders() {,
  const securityHeaders = `,
// Security headers configuration,
export const securityHeaders = {,
  'X-Frame-Options': 'DENY',;
  'X-Content-Type-Options': 'nosniff',;
  'X-XSS-Protection': '1, mode=block',;
  'Referrer-Policy': 'strict-origin-when-cross-origin',;
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',;
  'Strict-Transport-Security': 'max-age=31536000, includeSubDomains',;
};
,
export const getSecurityHeaders = () => {,
  return securityHeaders,
};
`,
,
  const utilsDir = path.join(__dirname, 'utils'),
  if (!fs.existsSync(utilsDir)) {,
    fs.mkdirSync(utilsDir, { recursive: true ,}),
  }
  fs.writeFileSync(path.join(utilsDir, 'security-headers.ts'), securityHeaders),
  console.log('  ✓ Added security headers configuration'),
}
,
async function addInputValidation() {,
  const inputValidator = `,
// Input validation utilities,
export class InputValidator {,
  static sanitizeString(input: string): string {,
    return input,
      .replace(/[<>]/g, '') // Remove potential HTML tags,
      .replace(/javascript:/gi, '') // Remove javascript: protocol,
      .replace(/on\\w+=/gi, '') // Remove event handlers,
      .trim(),
  }
,
  static validateEmail(email: string): boolean {,
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
    return emailRegex.test(email),
  ,}
,
  static validateURL(url: string): boolean {,
    try {,
      const parsedUrl = new URL(url),
      return ['http:', 'https: '].includes(parsedUrl.protocol),
    ,} catch {,
      return false,
    }
  }
,
  static sanitizeHTML(input: string): string {,
    const allowedTags = ['p', 'br', 'strong', 'em', 'ul', 'ol', 'li'],
    const allowedAttributes = ['href'],
,
    // Basic HTML sanitization (in production, use a library like DOMPurify),
    return input,
      .replace(/<script\\b[^<]*(?:(?!<\\/script>)<[^<]*)*<\\/script>/gi, ''),
      .replace(/<iframe\\b[^<]*(?:(?!<\\/iframe>)<[^<]*)*<\\/iframe>/gi, ''),
      .replace(/on\\w+\\s*=\\s*["'][^"']*["']/gi, ''),
  }
,
  static validateCSV(input: string): boolean {,
    // Check for potential CSV injection,
    const dangerousChars = ['=', '+', '-', '@', '\\t', '\\r'],
    return !dangerousChars.some(char => input.startsWith(char)),
  }
}
`,
,
  const utilsDir = path.join(__dirname, 'utils'),
  fs.writeFileSync(path.join(utilsDir, 'input-validator.ts'), inputValidator),
  console.log('  ✓ Added input validation utilities'),
}
,
async function addRateLimiting() {,
  const rateLimiter = `,
// Rate limiting utilities,
interface RateLimitEntry {,
  count: number,
  resetTime: number,
,}
,
export class RateLimiter {,
  private requests: Map<string, RateLimitEntry> = new Map(),
,
  constructor(,
    private maxRequests: number = 100,;
    private windowMs: number = 15 * 60 * 1000 // 15 minutes,
  ) {,}
,
  isAllowed(identifier: string): boolean {,
    const now = Date.now(),
    const entry = this.requests.get(identifier),
,
    if (!entry || now > entry.resetTime) {,
      // Reset or create new entry,
      this.requests.set(identifier, {,
        count: 1,;
        resetTime: now + this.windowMs,;
      }),
      return true,
    }
,
    if (entry.count >= this.maxRequests) {,
      return false,
    }
,
    entry.count++,
    return true,
  }
,
  getRemainingRequests(identifier: string): number {,
    const entry = this.requests.get(identifier),
    if (!entry || Date.now() > entry.resetTime) {,
      return this.maxRequests,
    ,}
    return Math.max(0, this.maxRequests - entry.count),
  }
,
  getResetTime(identifier: string): number {,
    const entry = this.requests.get(identifier),
    return entry?.resetTime || Date.now() + this.windowMs,
  ,}
}
,
export const rateLimiter = new RateLimiter(),
`,
,
  const utilsDir = path.join(__dirname, 'utils'),
  fs.writeFileSync(path.join(utilsDir, 'rate-limiter.ts'), rateLimiter),
  console.log('  ✓ Added rate limiting utilities'),
}
,
async function addCSRFProtection() {,
  const csrfProtection = `,
// CSRF protection utilities,
import { randomBytes } from 'crypto',
,
export class CSRFProtection {,
  private tokens: Map<string, { token: string, expires: number ,}> = new Map(),
,
  generateToken(sessionId: string): string {,
    const token = randomBytes(32).toString('hex'),
    const expires = Date.now() + (60 * 60 * 1000), // 1 hour,
    this.tokens.set(sessionId, { token, expires }),
    return token,
  }
,
  validateToken(sessionId: string, providedToken: string): boolean {,
    const entry = this.tokens.get(sessionId),
,
    if (!entry || Date.now() > entry.expires) {,
      this.tokens.delete(sessionId),
      return false,
    ,}
,
    return entry.token === providedToken,
  }
,
  invalidateToken(sessionId: string): void {,
    this.tokens.delete(sessionId),
  ,}
,
  cleanup(): void {,
    const now = Date.now(),
    for (const [sessionId, entry] of this.tokens.entries()) {,
      if (now > entry.expires) {,
        this.tokens.delete(sessionId),
      }
    }
  }
}
,
export const csrfProtection = new CSRFProtection(),
,
// Cleanup expired tokens every hour,
setInterval(() => {,
  csrfProtection.cleanup(),
}, 60 * 60 * 1000),
`,
,
  const utilsDir = path.join(__dirname, 'utils'),
  fs.writeFileSync(path.join(utilsDir, 'csrf-protection.ts'), csrfProtection),
  console.log('  ✓ Added CSRF protection utilities'),
}
,
async function addCSP() {,
  const cspConfig = `,
// Content Security Policy configuration,
export const cspDirectives = {,
  'default-src': ["'self'"],;
  'script-src': [,
    "'self'",;
    "'unsafe-inline'", // Required for Next.js,
    'https://vercel.live',;
    'https://va.vercel-scripts.com',;
  ],;
  'style-src': [,
    "'self'",;
    "'unsafe-inline'", // Required for styled-jsx,
    'https://fonts.googleapis.com',;
  ],;
  'font-src': [,
    "'self'",;
    'https://fonts.gstatic.com',;
  ],;
  'img-src': [,
    "'self'",;
    'data:',;
    'https:',;
    'blob:',;
  ],;
  'connect-src': [,
    "'self'",;
    'https://api.vercel.com',;
    'https://vitals.vercel-insights.com',;
  ],;
  'frame-src': [,
    "'none'",;
  ],;
  'object-src': [,
    "'none'",;
  ],;
  'base-uri': [,
    "'self'",;
  ],;
  'form-action': [,
    "'self'",;
  ],;
  'frame-ancestors': [,
    "'none'",;
  ],;
  'upgrade-insecure-requests': [],;
};
,
export const generateCSP = (): string => {,
  return Object.entries(cspDirectives),
    .map(([directive, sources]) => {,
      if (sources.length === 0) {,
        return directive,
      }
      return \`\${directive} \${sources.join(' ')}\`,
    }),
    .join(', '),
};
,
export const cspHeader = \`Content-Security-Policy: \${generateCSP(),}\`,
`,
,
  const utilsDir = path.join(__dirname, 'utils'),
  fs.writeFileSync(path.join(utilsDir, 'csp-config.ts'), cspConfig),
  console.log('  ✓ Added Content Security Policy configuration'),
}
,
// Run security improvements,
runSecurityImprovements(),