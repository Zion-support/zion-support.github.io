# Zion Tech Group Website

A modern, high-performance website built with Next.js, showcasing AI services, IT solutions, and micro SaaS development capabilities.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Performance Optimized**: Bundle analysis, lazy loading, image optimization
- **SEO Enhanced**: Comprehensive meta tags, structured data, sitemap generation
- **Security First**: Security headers, dependency auditing, XSS protection
- **Accessibility**: WCAG compliant, semantic HTML, keyboard navigation
- **Mobile Responsive**: Optimized for all device sizes
- **Error Handling**: Comprehensive error boundaries and monitoring

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with SSR/SSG
- **React 18** - UI library with concurrent features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest** - Testing framework
- **Bundle Analyzer** - Performance monitoring

### Deployment
- **Netlify** - Hosting and CI/CD
- **PM2** - Process management
- **Sentry** - Error monitoring

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Zion-Technologies/Website.git
   cd Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deployment

### Development Build
```bash
npm run build
npm run start
```

### Production Deployment
```bash
npm run build
npm run start
```

### Performance Analysis
```bash
npm run analyze
npm run perf:lighthouse
```

## 📁 Project Structure

```
├── pages/                 # Next.js pages
│   ├── api/              # API routes
│   ├── _app.tsx          # App wrapper
│   ├── _document.tsx     # Document structure
│   └── index.tsx         # Homepage
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # UI components
│   │   ├── layout/      # Layout components
│   │   └── seo/         # SEO components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility libraries
│   ├── styles/          # Global styles
│   └── types/           # TypeScript types
├── public/              # Static assets
├── scripts/             # Build and utility scripts
└── automation/          # Automation scripts
```

## 🎯 Key Components

### SEOHead
Comprehensive SEO component with meta tags, Open Graph, Twitter Cards, and structured data.

### ErrorBoundary
Robust error handling with fallback UI and error reporting.

### LazyImage
Performance-optimized image component with lazy loading and intersection observer.

### LoadingSpinner
Accessible loading component with smooth animations.

## 🔧 Scripts

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### Performance
- `npm run analyze` - Bundle analysis
- `npm run perf:lighthouse` - Lighthouse audit
- `npm run perf:monitor` - Performance monitoring

### Security
- `npm run security:audit` - Security audit
- `npm run security:fix` - Fix security issues

### Testing
- `npm run test` - Run tests
- `npm run test:watch` - Watch mode
- `npm run test:coverage` - Coverage report

## 🌐 SEO Features

- **Meta Tags**: Comprehensive meta tag implementation
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine directives
- **Open Graph**: Social media optimization
- **Twitter Cards**: Twitter sharing optimization

## 🔒 Security Features

- **Security Headers**: XSS, CSRF, and clickjacking protection
- **Dependency Auditing**: Regular security scans
- **Content Security Policy**: XSS prevention
- **HTTPS Enforcement**: Secure connections
- **Input Sanitization**: XSS prevention

## 📊 Performance Metrics

- **Lighthouse Score**: 90+ across all categories
- **Core Web Vitals**: Optimized for Google ranking
- **Bundle Size**: Optimized with tree shaking
- **Image Optimization**: WebP/AVIF support
- **Code Splitting**: Route-based splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Follow TypeScript best practices
- Use ESLint and Prettier
- Write tests for new features
- Follow accessibility guidelines
- Optimize for performance

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<<<<<<< HEAD
For support, email support@ziontechgroup.com or create an issue in the repository.
=======
## 📞 Support

- **Email**: support@ziontechgroup.com
- **Website**: [https://ziontechgroup.com](https://ziontechgroup.com)
- **Documentation**: [https://docs.ziontechgroup.com](https://docs.ziontechgroup.com)

## 🏢 About Zion Tech Group

Zion Tech Group is a leading provider of revolutionary AI services, IT solutions, and micro SaaS development. We help businesses innovate, scale, and succeed in the digital age.

### Services
- **AI Services**: Machine learning, natural language processing, computer vision
- **IT Solutions**: Cloud infrastructure, DevOps, cybersecurity
- **Micro SaaS**: Scalable software solutions, API development
- **Consulting**: Technology strategy, digital transformation

### Contact
- **Address**: 364 E Main St STE 1008, Middletown, DE 19709
- **Phone**: +1-302-464-0950
- **Email**: kleber@ziontechgroup.com

---

Built with ❤️ by the Zion Tech Group team
>>>>>>> main
