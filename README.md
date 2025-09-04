# Zion Tech Group Website

<<<<<<< HEAD
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

=======
A modern, responsive website for Zion Tech Group, a leading technology solutions provider. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with responsive layout
- **Comprehensive Pages**: Home, About, Services, Products, Blog, Careers, and Contact
- **SEO Optimized**: Meta tags, sitemap, robots.txt, and structured data
- **Performance**: Optimized for fast loading and excellent user experience
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Mobile First**: Fully responsive design that works on all devices

## 📋 Pages

### Main Pages
- **Home** (`/`) - Landing page with hero section, services overview, and call-to-action
- **About** (`/about`) - Company information, team, values, and mission
- **Services** (`/services`) - Comprehensive service offerings with detailed descriptions
- **Products** (`/products`) - Technology platforms and solutions
- **Blog** (`/blog`) - Technology insights and industry articles
- **Careers** (`/careers`) - Job openings and company culture
- **Contact** (`/contact`) - Contact form and office locations

### Service Pages
- **AI Development** (`/services/ai-development`) - Artificial intelligence solutions
- **Cloud Solutions** (`/services/cloud-solutions`) - Cloud infrastructure and migration
- **Web Development** (`/services/web-development`) - Modern web applications
- **Mobile Development** (`/services/mobile-development`) - iOS and Android apps
- **Blockchain Solutions** (`/services/blockchain`) - Decentralized applications
- **IoT Platforms** (`/services/iot-platforms`) - Internet of Things solutions
- **Data Analytics** (`/services/data-analytics`) - Business intelligence
- **Cybersecurity** (`/services/cybersecurity`) - Security solutions

## 🛠️ Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zion-tech-group
   ```

2. **Install dependencies**
>>>>>>> origin/merge-pr-10614
   ```bash
   npm install
   ```

<<<<<<< HEAD
3. **Start development server**

=======
3. **Run the development server**
>>>>>>> origin/merge-pr-10614
   ```bash
   npm run dev
   ```

<<<<<<< HEAD
4. **Build for production**
   ```bash
   npm run build
   ```

5. **Start production server**
   ```bash
   npm start
   ```

### Security
```bash
npm run security:audit # Security audit
npm run security:fix   # Fix security issues
```

## 🔁 Automations

You can run consolidated automations and improvements locally:

```bash
# Run health, security, performance, build, PM2 bootstrap, and reports
bash scripts/run-all-improvements.sh

# Or quick CI locally (type-check, lint, tests)
npm run ci:quick
```

Generated reports are written under `automation/reports/` and project root (final report JSON).

## 🏗️ Project Structure

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
=======
4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build and Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Linting
```bash
npm run lint
```

### Type Checking
```bash
npm run type-check
```

## 📁 Project Structure

```
zion-tech-group/
├── components/          # React components
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   └── ui/            # UI components
├── pages/              # Next.js pages
│   ├── services/       # Service pages
│   ├── blog/          # Blog pages
│   └── api/           # API routes
├── public/             # Static assets
│   ├── sitemap.xml    # SEO sitemap
│   └── robots.txt     # Search engine directives
├── styles/             # Global styles
├── utils/              # Utility functions
└── types/              # TypeScript type definitions
```

## 🎨 Customization

### Colors
The website uses a blue and purple color scheme. You can customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        900: '#1e3a8a',
      }
    }
  }
}
```

### Content
Update content by editing the respective page components in the `pages/` directory.

### Styling
Modify styles using Tailwind CSS classes or add custom CSS in `styles/globals.css`.
>>>>>>> origin/merge-pr-10614

## 🔧 Configuration

### Environment Variables
<<<<<<< HEAD

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
=======
Create a `.env.local` file for environment-specific configuration:

```env
NEXT_PUBLIC_SITE_URL=https://ziontechgroup.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### SEO Configuration
Update SEO settings in `components/layout/MainLayout.tsx` and individual pages.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js Image component for optimal loading
- **Code Splitting**: Automatic code splitting for faster page loads

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tags for all pages
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD markup for search engines
- **Sitemap**: XML sitemap for search engine indexing
- **Robots.txt**: Search engine crawling directives
- **Canonical URLs**: Proper canonical URL implementation

## 🛡️ Security

- **Content Security Policy**: Implemented security headers
- **HTTPS**: Secure connections enforced
- **Input Validation**: Form validation and sanitization
- **XSS Protection**: Cross-site scripting protection

## 📊 Analytics

The website is prepared for Google Analytics integration. Add your tracking ID to the environment variables.
>>>>>>> origin/merge-pr-10614

## 🤝 Contributing

1. Fork the repository
<<<<<<< HEAD
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 📞 Contact

For support and questions:
- Email: kleber@ziontechgroup.com
- Phone: +1 302 464 0950
- Website: https://ziontechgroup.com

---

**Zion Tech Group** - Innovative Micro SaaS, AI Services & IT Solutions





---
Automation summary: README refreshed 2025-09-04T22:05:10.580Z
