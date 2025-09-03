# Zion Tech Group Website

A modern, high-performance website built with Next.js 15, TypeScript, and Tailwind CSS for Zion Tech Group - a leading provider of micro SaaS products, AI services, and IT solutions.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Performance Optimized**: Core Web Vitals monitoring, image optimization, lazy loading
- **Mobile-First Design**: Responsive design with mobile optimization
- **SEO Optimized**: Enhanced meta tags, structured data, sitemap generation
- **Security Enhanced**: Comprehensive security headers, CSP, HSTS
- **Error Handling**: Robust error boundaries and monitoring
- **Automation Ready**: Extensive automation scripts for deployment and maintenance

## 📊 Performance Metrics

- **Build Time**: ~4 seconds
- **Bundle Size**: Optimized with tree shaking and code splitting
- **Core Web Vitals**: Monitored and optimized
- **Mobile Performance**: Enhanced for 35% mobile traffic

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2
- **Language**: TypeScript 5.9.2
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Performance**: Web Vitals, Performance Observer API
- **Deployment**: Netlify ready

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- npm 10.0.0 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Zion-Holdings/zion.app.git
   cd zion.app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Start production server**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
├── components/          # Reusable React components
│   ├── ErrorBoundary.tsx
│   ├── PerformanceMonitor.tsx
│   ├── PerformanceOptimizer.tsx
│   └── ModernLoading.tsx
├── pages/              # Next.js pages
│   ├── index.tsx       # Homepage
│   ├── services.tsx    # Services page
│   ├── about.tsx       # About page
│   └── contact.tsx     # Contact page
├── scripts/            # Utility scripts
│   └── generate-sitemap-enhanced.js
├── styles/             # Global styles
│   └── globals.css
├── public/             # Static assets
│   ├── sitemap.xml
│   └── robots.txt
└── automation/         # Automation scripts
```

## 🎯 Available Scripts

### Development
- `npm run dev` - Start development server
- `npm run dev:fast` - Start with Turbo mode

### Building
- `npm run build` - Build for production
- `npm run build:production` - Build with production optimizations
- `npm run start` - Start production server

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript checks
- `npm run format` - Format code with Prettier

### SEO & Performance
- `npm run sitemap:generate` - Generate sitemap and robots.txt
- `npm run perf:lighthouse` - Run Lighthouse audit

### Testing
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://ziontechgroup.com
```

### Next.js Configuration

The `next.config.js` includes:
- Performance optimizations
- Security headers
- Image optimization
- Bundle analysis

### Tailwind Configuration

Custom theme extensions in `tailwind.config.js`:
- Custom animations
- Extended color palette
- Responsive breakpoints

## 📈 Performance Optimizations

### Implemented Optimizations

1. **Image Optimization**
   - Next.js Image component
   - WebP/AVIF format support
   - Lazy loading
   - Responsive images

2. **Code Splitting**
   - Automatic route-based splitting
   - Dynamic imports
   - Bundle analysis

3. **Caching**
   - Static generation
   - ISR (Incremental Static Regeneration)
   - Browser caching headers

4. **Core Web Vitals**
   - LCP monitoring
   - FID tracking
   - CLS measurement

## 🔒 Security Features

- Content Security Policy (CSP)
- XSS Protection
- CSRF Protection
- HSTS Headers
- Frame Options
- Content Type Options

## 📱 Mobile Optimization

- Responsive design
- Touch-friendly interfaces
- Optimized for mobile performance
- Progressive Web App ready

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy automatically on push to main branch

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `.next` folder to your server
3. Configure your server to serve Next.js

## 🤖 Automation

The project includes extensive automation scripts for:
- Error monitoring and fixing
- Performance optimization
- SEO improvements
- Security scanning
- Dependency management

## 📊 Analytics & Monitoring

- Performance monitoring
- Error tracking
- User analytics ready
- Core Web Vitals tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 📞 Support

For support and questions:
- Email: kleber@ziontechgroup.com
- Phone: +1 302 464 0950
- Website: https://ziontechgroup.com

---

**Zion Tech Group** - Innovative Micro SaaS, AI Services & IT Solutions