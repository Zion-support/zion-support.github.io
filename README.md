## Development Scripts

- **dev**: Start Next.js dev server.
- **build**: Build the app.
- **start**: Start the production server.
- **lint**: Run ESLint.
- **lint:fix**: Auto-fix lint issues.
- **test**: Run Jest tests.
- **check**: Lint and run tests (fast sanity check).

### Testing

Jest is configured via `jest.config.cjs` and uses `jsdom`. A basic smoke test in `__tests__/smoke.test.ts` verifies the setup.

Note: legacy tests under `tests/` are currently excluded pending cleanup.

# Zion Tech Group Website

A modern, high-performance website built with Next.js, featuring AI services, micro SaaS products, and enterprise IT solutions.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Performance Optimized**: Web Vitals monitoring, bundle optimization, image optimization
- **SEO Ready**: Comprehensive meta tags, structured data, sitemap generation
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **PWA Support**: Service worker, manifest, offline functionality
- **Security**: Content Security Policy, security headers, dependency auditing

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Analytics**: Web Vitals
- **Deployment**: Netlify

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Zion-Holdings/zion.app.git
cd zion.app

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run dev:fast     # Start with Turbo mode
```

### Building
```bash
npm run build        # Build for production
npm run build:prod   # Build with production environment
npm run analyze:bundle # Analyze bundle size
```

### Testing & Quality
```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # TypeScript type checking
npm run test         # Run tests
npm run lighthouse   # Run Lighthouse audit
```

### Security
```bash
npm run security:audit # Security audit
npm run security:fix   # Fix security issues
```

## 🏗️ Project Structure

```
├── components/          # Reusable React components
├── pages/              # Next.js pages
├── public/             # Static assets
├── styles/             # Global styles
├── automation/         # Automation scripts
└── scripts/            # Build and utility scripts
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://ziontechgroup.com
```

### Next.js Configuration
The `next.config.js` includes:
- Security headers
- Image optimization
- Bundle optimization
- Console log removal in production

## 📊 Performance

The website is optimized for:
- **Core Web Vitals**: LCP, FID, CLS monitoring
- **Bundle Size**: Tree shaking, code splitting
- **Images**: WebP/AVIF formats, responsive images
- **Caching**: Service worker, static generation

## 🔒 Security

- Content Security Policy (CSP)
- Security headers (HSTS, X-Frame-Options, etc.)
- Dependency auditing
- Input sanitization

## 📱 PWA Features

- Service worker for offline functionality
- Web app manifest
- Installable on mobile devices
- App shortcuts

## 🚀 Deployment

The site is deployed on Netlify with:
- Automatic builds on git push
- Preview deployments for PRs
- Edge functions for dynamic content

## 📈 Analytics

- Web Vitals monitoring
- Google Analytics integration
- Performance metrics tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 📞 Contact

- **Phone**: +1 302 464 0950
- **Email**: kleber@ziontechgroup.com
- **Address**: 364 E Main St STE 1008, Middletown DE 19709
- **Website**: https://ziontechgroup.com