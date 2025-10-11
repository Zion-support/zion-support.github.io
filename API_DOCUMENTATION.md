
# Zion Tech Group - API Documentation

## Table of Contents
- [Overview](#overview)
- [Authentication](#authentication)
- [Rate Limiting](#rate-limiting)
- [Error Handling](#error-handling)
- [Utilities](#utilities)
- [Components](#components)
- [Best Practices](#best-practices)

## Overview

This documentation covers the internal APIs, utilities, and components available in the Zion Tech Group application.

### Base Configuration

```typescript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';
const API_VERSION = 'v1';
```

## Authentication

### Security Headers

All API requests include security headers automatically via middleware:

```typescript
{
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
}
```

### CSRF Protection

CSRF tokens are automatically validated for state-changing operations:

```typescript
import { CSRFProtection } from '@/src/utils/security';

const csrf = new CSRFProtection();
const token = csrf.generateToken();
const isValid = csrf.validateToken(token);
```

## Rate Limiting

### Available Rate Limiters

#### Strict Rate Limiter
- **Limit**: 10 requests per minute
- **Use Case**: Sensitive operations (password reset, account changes)

```typescript
import { rateLimiters } from '@/app/middleware/rateLimiter';

const result = rateLimiters.strict.check(clientIp);
if (!result.allowed) {
  // Handle rate limit exceeded
}
```

#### Standard Rate Limiter
- **Limit**: 100 requests per 15 minutes
- **Use Case**: General API endpoints

```typescript
const result = rateLimiters.standard.check(clientIp);
```

#### API Rate Limiter
- **Limit**: 60 requests per minute
- **Use Case**: Public API endpoints

```typescript
const result = rateLimiters.api.check(clientIp);
```

#### Authentication Rate Limiter
- **Limit**: 5 attempts per 15 minutes
- **Use Case**: Login and authentication endpoints

```typescript
const result = rateLimiters.auth.check(clientIp);
```

### Custom Rate Limiter

```typescript
import { RateLimiter } from '@/app/middleware/rateLimiter';

const customLimiter = new RateLimiter({
  windowMs: 60 * 1000, // 1 minute
  max: 30, // 30 requests
  message: 'Custom rate limit exceeded'
});
```

## Error Handling

### Error Boundary Component

Wrap components with `GlobalErrorBoundary` for automatic error handling:

```typescript
import GlobalErrorBoundary from '@/app/components/GlobalErrorBoundary';

<GlobalErrorBoundary>
  <YourComponent />
</GlobalErrorBoundary>
```

### Error Handler Utility

```typescript
import ErrorHandler, { ErrorSeverity, ErrorCategory } from '@/src/utils/errorHandler';

try {
  // Your code
} catch (error) {
  ErrorHandler.handle(error, {
    severity: ErrorSeverity.HIGH,
    category: ErrorCategory.NETWORK,
    context: { userId, action: 'fetchData' },
  });
}
```

### Error Severities

- `LOW`: Minor issues, non-blocking
- `MEDIUM`: Issues that affect UX but not critical
- `HIGH`: Significant issues affecting functionality
- `CRITICAL`: System-breaking issues requiring immediate attention

## Utilities

### Validation Utilities

#### Email Validation

```typescript
import { validateEmail } from '@/src/utils/validation';

const result = validateEmail('user@example.com');
if (result.isValid) {
  // Proceed with valid email
} else {
  console.error(result.error);
}
```

#### Phone Validation

```typescript
import { validatePhone } from '@/src/utils/validation';

const result = validatePhone('+1-234-567-8900');
```

#### URL Validation

```typescript
import { validateURL } from '@/src/utils/validation';

const result = validateURL('https://example.com', true); // requireProtocol
```

#### Password Validation

```typescript
import { validatePassword } from '@/src/utils/validation';

const result = validatePassword('SecureP@ssw0rd');
// Checks for: length, uppercase, lowercase, numbers, special chars
```

#### Input Sanitization

```typescript
import { sanitizeHTML, sanitizeInput } from '@/src/utils/validation';

const safe = sanitizeHTML('<script>alert("xss")</script>');
const cleaned = sanitizeInput(userInput, 1000); // maxLength
```

### Structured Data (SEO)

#### Organization Schema

```typescript
import { generateOrganizationSchema, ZION_ORGANIZATION } from '@/src/utils/structuredData';

const schema = generateOrganizationSchema(ZION_ORGANIZATION);
```

#### Article Schema

```typescript
import { generateArticleSchema } from '@/src/utils/structuredData';

const schema = generateArticleSchema({
  headline: 'Article Title',
  description: 'Article description',
  author: 'Author Name',
  datePublished: '2025-10-08',
  image: 'https://example.com/image.jpg',
});
```

#### Breadcrumb Schema

```typescript
import { generateBreadcrumbSchema } from '@/src/utils/structuredData';

const schema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
  { name: 'Article', url: '/blog/article' },
]);
```

### Sitemap Generation

```typescript
import { generateSitemap, PRIORITY, CHANGEFREQ } from '@/app/utils/sitemapGenerator';

const sitemap = generateSitemap({
  hostname: 'https://zion.app',
  urls: [
    {
      loc: '/',
      changefreq: CHANGEFREQ.DAILY,
      priority: PRIORITY.CRITICAL,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/about',
      changefreq: CHANGEFREQ.MONTHLY,
      priority: PRIORITY.HIGH,
    },
  ],
});
```

### Analytics

#### Track Events

```typescript
import { trackEvent } from '@/app/utils/analyticsTracker';

trackEvent({
  category: 'User',
  action: 'Click',
  label: 'CTA Button',
  value: 1,
});
```

#### Track Page Views

```typescript
import { trackPageView } from '@/app/utils/analyticsTracker';

trackPageView(window.location.pathname);
```

#### Track Performance Metrics

```typescript
import { trackPerformance } from '@/app/utils/analyticsTracker';

trackPerformance('LCP', 2500, 'good');
```

### Caching

#### Cache Manager

```typescript
import { cacheManager } from '@/app/utils/cacheManager';

// Set cache
await cacheManager.set('key', data, 3600); // TTL in seconds

// Get cache
const data = await cacheManager.get('key');

// Delete cache
await cacheManager.delete('key');

// Clear all cache
await cacheManager.clear();
```

## Components

### ServiceCard

Display services with consistent styling:

```typescript
import ServiceCard from '@/app/components/ServiceCard';

<ServiceCard
  title="AI Solutions"
  description="Advanced AI and ML solutions"
  icon={<Icon />}
  link="/services/ai"
  ariaLabel="Learn more about AI Solutions"
/>
```

### GlobalErrorBoundary

Application-wide error handling:

```typescript
import GlobalErrorBoundary from '@/app/components/GlobalErrorBoundary';

<GlobalErrorBoundary
  fallback={<CustomErrorUI />}
  onError={(error, errorInfo) => {
    // Custom error handling
  }}
>
  <App />
</GlobalErrorBoundary>
```

### PerformanceMonitor

Monitor application performance:

```typescript
import PerformanceMonitor from '@/app/components/PerformanceMonitor';

<PerformanceMonitor
  enabled={process.env.NODE_ENV === 'production'}
  reportWebVitals={(metric) => {
    console.log(metric);
  }}
/>
```

## Best Practices

### Security

1. **Always validate user input**
   ```typescript
   import { validateRequired, validateLength } from '@/src/utils/validation';
   ```

2. **Sanitize HTML content**
   ```typescript
   import { sanitizeHTML } from '@/src/utils/validation';
   ```

3. **Use CSRF protection for state-changing operations**
   ```typescript
   import { CSRFProtection } from '@/src/utils/security';
   ```

4. **Implement rate limiting on sensitive endpoints**
   ```typescript
   import { rateLimiters } from '@/app/middleware/rateLimiter';
   ```

### Performance

1. **Use dynamic imports for code splitting**
   ```typescript
   const Component = dynamic(() => import('./Component'), {
     loading: () => <Loading />,
   });
   ```

2. **Implement proper caching strategies**
   ```typescript
   import { cacheManager } from '@/app/utils/cacheManager';
   ```

3. **Monitor Core Web Vitals**
   ```typescript
   import { trackPerformance } from '@/app/utils/analyticsTracker';
   ```

### Error Handling

1. **Always wrap risky operations in try-catch**
   ```typescript
   try {
     await riskyOperation();
   } catch (error) {
     ErrorHandler.handle(error);
   }
   ```

2. **Use Error Boundaries for React components**
   ```typescript
   <GlobalErrorBoundary>
     <Component />
   </GlobalErrorBoundary>
   ```

3. **Provide meaningful error messages**
   ```typescript
   throw new Error('Failed to fetch user data: ' + error.message);
   ```

### SEO

1. **Add structured data to all pages**
   ```typescript
   import { generatePageStructuredData } from '@/src/utils/structuredData';
   ```

2. **Generate and maintain sitemaps**
   ```typescript
   import { generateSitemap } from '@/app/utils/sitemapGenerator';
   ```

3. **Use proper meta tags and Open Graph data**
   ```typescript
   <meta name="description" content="..." />
   <meta property="og:title" content="..." />
   ```

## Environment Variables

Required environment variables:

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://api.zion.app
NEXT_PUBLIC_SITE_URL=https://zion.app

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Security
CSRF_SECRET=your-csrf-secret-key

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## Support

For issues or questions:
- Email: dev@zion.app
- Documentation: https://docs.zion.app
- GitHub: https://github.com/zion-holdings/zion.app

---

**Last Updated**: October 8, 2025
**Version**: 1.0.0