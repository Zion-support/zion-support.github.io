# Zion Tech Group - Deployment Guide

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- pnpm 8.0.0 or higher (recommended) or npm
- Git

### Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📦 Production Build

### Build Process

```bash
# Clean and build
pnpm run build:production

# Build with analysis
pnpm run build:analyze

# Run all optimizations
pnpm run optimize:all
```

### Build Output

- **Dist Directory**: `dist/`
- **Entry Point**: `dist/index.html`
- **Assets**: `dist/assets/`
- **Service Worker**: `dist/sw.js`
- **Manifest**: `dist/manifest.json`

## 🌐 Deployment Platforms

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables:
   - `NODE_ENV=production`
   - `NEXT_PUBLIC_SITE_URL=https://ziontechgroup.com`
3. Deploy automatically on push to main branch

### Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `pnpm run build`
3. Publish directory: `dist`
4. Configure redirects in `_redirects` file

### AWS S3 + CloudFront

1. Build the project: `pnpm run build`
2. Upload `dist/` contents to S3 bucket
3. Configure CloudFront distribution
4. Set up custom domain and SSL

### Docker

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## ⚡ Performance Optimizations

### Implemented Optimizations

- ✅ Code splitting with dynamic imports
- ✅ Tree shaking for unused code removal
- ✅ Image optimization and lazy loading
- ✅ Critical CSS inlining
- ✅ Service Worker for caching
- ✅ PWA manifest for app-like experience
- ✅ Gzip compression
- ✅ Bundle analysis and optimization

### Performance Monitoring

- Core Web Vitals tracking
- Real-time performance metrics
- Error boundary with reporting
- Service Worker for offline support

## 🔧 Environment Variables

Create a `.env.local` file:

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://ziontechgroup.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_GTM_ID=your-google-tag-manager-id
```

## 📊 SEO & Analytics

### SEO Features

- ✅ Meta tags and Open Graph
- ✅ Structured data (JSON-LD)
- ✅ XML sitemap generation
- ✅ Robots.txt configuration
- ✅ Canonical URLs
- ✅ Social media optimization

### Analytics Integration

- Google Analytics 4
- Google Tag Manager
- Core Web Vitals monitoring
- Custom event tracking

## 🛡️ Security

### Security Headers

- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

### Best Practices

- Input sanitization
- XSS protection
- CSRF protection
- Secure cookie settings
- HTTPS enforcement

## 📱 PWA Features

### Progressive Web App

- ✅ Service Worker for offline support
- ✅ Web App Manifest
- ✅ Installable on mobile devices
- ✅ Push notifications support
- ✅ Background sync

### Offline Support

- Cached static assets
- Offline page fallback
- Background sync for forms
- Cache-first strategy

## 🔍 Monitoring & Debugging

### Error Tracking

- Production error boundary
- Error reporting service integration
- User feedback collection
- Performance monitoring

### Debugging Tools

- React Developer Tools
- Performance profiling
- Network monitoring
- Console error tracking

## 📈 Performance Metrics

### Target Metrics

- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **FCP**: < 1.8s
- **TTFB**: < 600ms

### Monitoring Tools

- Lighthouse CI
- WebPageTest
- Google PageSpeed Insights
- Core Web Vitals dashboard

## 🚀 Deployment Checklist

### Pre-deployment

- [ ] Run `pnpm run build` successfully
- [ ] Test all routes and functionality
- [ ] Verify responsive design
- [ ] Check accessibility compliance
- [ ] Validate SEO meta tags
- [ ] Test PWA functionality

### Post-deployment

- [ ] Verify site loads correctly
- [ ] Check all external links
- [ ] Test contact forms
- [ ] Verify analytics tracking
- [ ] Monitor performance metrics
- [ ] Check error logs

## 🔄 CI/CD Pipeline

### GitHub Actions Example

```yaml
name: Deploy to Production
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
      - run: pnpm install
      - run: pnpm run build
      - run: pnpm run test
      - uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

## 📞 Support

For deployment issues or questions:

- **Email**: support@ziontechgroup.com
- **Phone**: +1 (302) 464-0950
- **Documentation**: [docs.ziontechgroup.com](https://docs.ziontechgroup.com)

---

Built with ❤️ by the Zion Tech Group team
