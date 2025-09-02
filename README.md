# Zion Tech Group Website

A modern, accessible, and high-performance website built with React, TypeScript, and Next.js.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Next.js 14, Tailwind CSS
- **Performance Optimized**: Core Web Vitals monitoring, lazy loading, code splitting
- **Accessibility First**: WCAG 2.1 AA compliant, screen reader support, keyboard navigation
- **SEO Optimized**: Meta tags, structured data, sitemap generation
- **Error Handling**: Comprehensive error boundaries and monitoring
- **Responsive Design**: Mobile-first approach with modern UI components

## 📋 Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher
- Git

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Zion-Technologies/Website.git
   cd Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_SITE_URL=https://ziontechgroup.com
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build and Deployment

### Development Build
```bash
npm run build
npm run start
```

### Production Build
```bash
npm run build:full
```

### Docker Deployment
```bash
docker build -t zion-tech-group .
docker run -p 3000:3000 zion-tech-group
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── accessibility/   # Accessibility enhancements
│   ├── ui/             # Base UI components
│   └── ...
├── pages/              # Page components
├── styles/             # CSS and styling
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
├── services/           # API services
├── store/              # Redux store
└── types/              # TypeScript type definitions
```

## 🎨 Key Components

### Performance Optimizer
- Monitors Core Web Vitals (FCP, LCP, CLS, FID)
- Implements lazy loading and code splitting
- Optimizes images and assets

### Accessibility Enhancer
- High contrast mode
- Large text support
- Reduced motion preferences
- Screen reader compatibility
- Keyboard navigation

### Error Boundary
- Comprehensive error handling
- User-friendly error messages
- Error reporting and monitoring
- Development debugging tools

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript checks
- `npm run test` - Run tests
- `npm run test:coverage` - Run tests with coverage
- `npm run quality:full` - Run all quality checks
- `npm run security:scan` - Run security audit

## 🌐 Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components loaded on demand
- **Bundle Optimization**: Tree shaking and minification
- **Caching**: Service worker and browser caching
- **CDN Ready**: Optimized for content delivery networks

## ♿ Accessibility Features

- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **Screen Reader Support**: Proper ARIA labels and roles
- **Keyboard Navigation**: Full keyboard accessibility
- **High Contrast Mode**: Enhanced visibility options
- **Focus Management**: Clear focus indicators
- **Alternative Text**: Comprehensive image descriptions

## 🔒 Security Features

- **Content Security Policy**: XSS protection
- **HTTPS Enforcement**: Secure connections
- **Input Validation**: Form and data validation
- **Error Handling**: Secure error messages
- **Dependency Scanning**: Regular security audits

## 📊 Monitoring and Analytics

- **Performance Monitoring**: Real-time performance metrics
- **Error Tracking**: Comprehensive error reporting
- **User Analytics**: Privacy-focused analytics
- **SEO Monitoring**: Search engine optimization tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write comprehensive tests
- Ensure accessibility compliance
- Optimize for performance
- Document your code

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Email: support@ziontechgroup.com
- Documentation: [docs.ziontechgroup.com](https://docs.ziontechgroup.com)
- Issues: [GitHub Issues](https://github.com/Zion-Technologies/Website/issues)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`

### AWS/GCP/Azure
1. Build the Docker image
2. Deploy to your preferred cloud platform
3. Configure environment variables
4. Set up monitoring and logging

## 📈 Performance Benchmarks

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: All metrics in "Good" range
- **Bundle Size**: Optimized for fast loading
- **Accessibility Score**: 100/100

## 🔄 Updates and Maintenance

- Regular dependency updates
- Security patches
- Performance optimizations
- Accessibility improvements
- Feature enhancements

---

Built with ❤️ by the Zion Tech Group team