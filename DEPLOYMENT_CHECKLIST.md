# Deployment Checklist

## Pre-Deployment Checks

### Code Quality

- [ ] All tests pass (`npm run test`)
- [ ] Type-checking passes (`npm run type-check`)
- [ ] Linting passes (`npm run lint`)
- [ ] No console errors or warnings
- [ ] Code review completed and approved

### Performance

- [ ] Bundle size is optimized (<244KB per chunk)
- [ ] Images are optimized and use WebP/AVIF formats
- [ ] Critical CSS is inlined
- [ ] Lazy loading is implemented for non-critical components
- [ ] Core Web Vitals meet thresholds:
  - [ ] LCP < 2.5s
  - [ ] FID < 100ms
  - [ ] CLS < 0.1

### Security

- [ ] Environment variables are properly configured
- [ ] Security headers are in place
- [ ] CSP policy is configured correctly
- [ ] HTTPS is enforced
- [ ] Dependencies are up to date and have no known vulnerabilities (`npm audit`)
- [ ] Sensitive data is not exposed in client-side code
- [ ] API endpoints have proper authentication and authorization

### Accessibility

- [ ] WCAG 2.1 Level AA compliance verified
- [ ] Keyboard navigation works correctly
- [ ] Screen reader compatibility tested
- [ ] Color contrast ratios meet requirements
- [ ] ARIA labels are properly implemented
- [ ] Focus indicators are visible

### SEO

- [ ] Meta tags are properly configured
- [ ] Open Graph tags are present
- [ ] Twitter Card tags are present
- [ ] Sitemap is generated and accessible
- [ ] robots.txt is configured correctly
- [ ] Structured data (JSON-LD) is implemented
- [ ] Canonical URLs are set correctly

### Browser Testing

- [ ] Chrome (latest 2 versions)
- [ ] Firefox (latest 2 versions)
- [ ] Safari (latest 2 versions)
- [ ] Edge (latest 2 versions)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Monitoring & Analytics

- [ ] Error tracking is configured (e.g., Sentry)
- [ ] Analytics are configured (e.g., Google Analytics)
- [ ] Performance monitoring is enabled
- [ ] Logging is configured correctly
- [ ] Alerts are set up for critical errors

### Documentation

- [ ] README is up to date
- [ ] API documentation is current
- [ ] Deployment instructions are documented
- [ ] Environment variables are documented
- [ ] Known issues are documented

## Deployment Steps

### 1. Pre-Deployment

```bash
# Update dependencies
pnpm install

# Run all checks
npm run health-check

# Build for production
npm run build

# Test the production build locally
npm run preview
```

### 2. Environment Configuration

- [ ] Verify all environment variables are set in deployment platform
- [ ] Check API endpoints are correct for production
- [ ] Verify database connections (if applicable)
- [ ] Confirm third-party service integrations

### 3. Deployment

- [ ] Deploy to staging environment first
- [ ] Run smoke tests on staging
- [ ] Get stakeholder approval
- [ ] Deploy to production
- [ ] Verify deployment success

### 4. Post-Deployment

- [ ] Verify site is accessible
- [ ] Check critical user flows work correctly
- [ ] Monitor error rates
- [ ] Monitor performance metrics
- [ ] Check analytics are tracking correctly
- [ ] Verify all API integrations are working

### 5. Rollback Plan

- [ ] Document rollback procedure
- [ ] Keep previous deployment available for quick rollback
- [ ] Monitor for 30 minutes after deployment
- [ ] Have team available for immediate fixes if needed

## Production Monitoring

### First Hour

- [ ] Monitor error rates (should be < 1%)
- [ ] Check Core Web Vitals
- [ ] Verify user traffic patterns are normal
- [ ] Check API response times

### First Day

- [ ] Review error logs
- [ ] Check user feedback channels
- [ ] Monitor conversion rates
- [ ] Verify analytics data

### First Week

- [ ] Comprehensive performance review
- [ ] User behavior analysis
- [ ] A/B test results (if applicable)
- [ ] Plan for next iteration

## Emergency Contacts

- **Technical Lead**: [Contact Info]
- **DevOps**: [Contact Info]
- **Product Owner**: [Contact Info]
- **On-Call Engineer**: [Contact Info]

## Useful Commands

```bash
# Health check
npm run health-check

# Build production
npm run build

# Run tests
npm run test

# Type checking
npm run type-check

# Linting
npm run lint

# Security audit
npm run security:audit

# Performance audit
npm run perf:audit

# View bundle size
npm run analyze
```

## Common Issues and Solutions

### Build Failures

1. Clear cache: `rm -rf .next node_modules/.cache`
2. Reinstall dependencies: `rm -rf node_modules pnpm-lock.yaml && pnpm install`
3. Check Node version matches requirements (>=18.0.0)

### Performance Issues

1. Check bundle size: `npm run analyze`
2. Review Core Web Vitals
3. Check for memory leaks
4. Verify CDN is working correctly

### Security Issues

1. Run security audit: `npm run security:audit`
2. Check headers are properly set
3. Verify CSP is not blocking resources
4. Review authentication flows

## Notes

- Always deploy during low-traffic periods
- Have a team member available during deployment
- Document any issues encountered for future reference
- Update this checklist based on lessons learned
