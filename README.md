# Zion Tech Group - Advanced AI and IT Solutions Website

## 🚨 CRITICAL: Netlify Deployment Issue

> **ACTION REQUIRED**: If Netlify builds are failing, see **[NETLIFY_BUILD_FIX.md](./NETLIFY_BUILD_FIX.md)**

**Issue**: The `@netlify/plugin-nextjs` plugin is installed but this is a **Vite project**, not Next.js.

**Quick Fix**: Remove `@netlify/plugin-nextjs` from Netlify UI → Site Settings → Build plugins

---

## Recent Improvements

### Performance Optimizations
- ✅ Bundle size optimization
- ✅ Image optimization
- ✅ CSS optimization
- ✅ Lazy loading implementation

### Accessibility Improvements
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ Color contrast optimization

### SEO Enhancements
- ✅ Meta tags optimization
- ✅ Structured data implementation
- ✅ Sitemap generation
- ✅ Open Graph tags

### Testing & Quality
- ✅ Comprehensive test suite
- ✅ Performance monitoring
- ✅ Error tracking
- ✅ Code quality checks

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development server (Vite)
pnpm dev

# Build for production (Vite)
pnpm build

# Run tests
pnpm test

# Run performance audit
pnpm perf:audit
```

## Available Scripts

- `pnpm dev` - Start development server (Vite)
- `pnpm build` - Build for production (Vite)
- `pnpm test` - Run tests
- `pnpm lint` - Run linting
- `pnpm optimize:all` - Run all optimizations
- `pnpm perf:audit` - Run performance audit

## Project Info

- **Framework**: React 18.3.1 with React Router 7.9.3
- **Build Tool**: Vite 7.1.9 (NOT Next.js)
- **Package Manager**: pnpm 10.17.1
- **Node Version**: 20.x
- **Project Type**: Single Page Application (SPA)
