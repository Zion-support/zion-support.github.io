# Zion Tech Group - Advanced AI and IT Solutions Website

A modern, high-performance React application showcasing Zion Tech Group's comprehensive suite of AI-powered solutions, IT services, micro SAAS products, and 5G technology solutions.

## 🚀 Features

### Core Technologies
- **React 18** with TypeScript for type safety
- **Vite** for lightning-fast development and optimized builds
- **Tailwind CSS** for responsive, utility-first styling
- **React Router** for client-side routing
- **Framer Motion** for smooth animations

### Key Features
- **AI Services**: 24+ AI-powered solutions including analytics, content generation, cybersecurity
- **Micro SAAS**: 50+ ready-to-use business tools and applications
- **5G Solutions**: Next-generation connectivity and infrastructure services
- **IT Services**: Comprehensive technology consulting and implementation
- **Performance Optimized**: Advanced performance monitoring and optimization
- **Accessibility**: WCAG 2.1 AA compliant with enhanced accessibility features
- **SEO Optimized**: Comprehensive SEO with structured data and meta optimization

### Performance Features
- **Code Splitting**: Automatic chunking for optimal loading
- **Lazy Loading**: Images and components loaded on demand
- **Performance Monitoring**: Real-time performance metrics
- **Error Boundaries**: Comprehensive error handling and recovery
- **Accessibility Tools**: Built-in accessibility enhancement panel

## 📦 Installation

### Prerequisites
- Node.js 18.0.0 or higher
- pnpm 8.0.0 or higher (recommended) or npm

### Setup
```bash
# Clone the repository
git clone https://github.com/ziontechgroup/zion-website.git
cd zion-website

# Install dependencies
pnpm install
# or
npm install

# Start development server
pnpm dev
# or
npm run dev
```

## 🛠️ Development

### Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm preview          # Preview production build

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues
pnpm type-check       # Run TypeScript checks
pnpm format           # Format code with Prettier

# Testing
pnpm test             # Run tests
pnpm test:watch       # Run tests in watch mode
pnpm test:coverage    # Run tests with coverage

# Performance
pnpm analyze          # Analyze bundle size
pnpm performance:audit # Run Lighthouse audit
pnpm optimize         # Run performance optimizations
```

### Project Structure

```
├── app/                    # Main application pages
│   ├── components/         # Reusable components
│   ├── ai-*/              # AI service pages
│   ├── zion-*/            # Micro SAAS pages
│   ├── 5g-*/              # 5G solution pages
│   └── page.tsx           # Home page
├── components/             # Shared components
├── utils/                  # Utility functions
├── types/                  # TypeScript type definitions
├── scripts/                # Build and optimization scripts
├── public/                 # Static assets
└── dist/                   # Production build output
```

## 🚀 Deployment

### Production Build
```bash
# Clean and build
pnpm clean
pnpm build

# The build output will be in the `dist/` directory
```

### Deployment Options

#### Netlify
1. Connect your repository to Netlify
2. Set build command: `pnpm build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

#### Vercel
1. Connect your repository to Vercel
2. Set framework preset to Vite
3. Deploy automatically on push to main branch

#### Manual Deployment
1. Run `pnpm build`
2. Upload the `dist/` folder to your web server
3. Configure your server to serve the SPA correctly

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_APP_TITLE=Zion Tech Group
VITE_APP_DESCRIPTION=Advanced AI and IT Solutions
VITE_APP_URL=https://ziontechgroup.com
VITE_ANALYTICS_ID=your-analytics-id
```

## 📊 Performance

### Build Optimization
- **Bundle Size**: Optimized with code splitting and tree shaking
- **Chunking Strategy**: Intelligent chunking by feature and vendor
- **Compression**: Gzip compression enabled
- **Caching**: Optimized caching headers for static assets

### Performance Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Monitoring
- Real-time performance monitoring in development
- Web Vitals tracking
- Error boundary with detailed error reporting
- Accessibility monitoring

## ♿ Accessibility

### Features
- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Optimized for screen readers
- **High Contrast Mode**: Toggle high contrast theme
- **Text Scaling**: Support for large text
- **Reduced Motion**: Respects user motion preferences

### Testing
```bash
# Run accessibility audit
pnpm accessibility:audit

# Run comprehensive audit
pnpm comprehensive:audit
```

## 🔍 SEO

### Features
- **Structured Data**: JSON-LD structured data for all pages
- **Meta Tags**: Comprehensive meta tag optimization
- **Sitemap**: Auto-generated XML sitemap
- **Open Graph**: Social media optimization
- **Twitter Cards**: Twitter-specific meta tags

### SEO Tools
```bash
# Generate sitemap
pnpm generate:sitemap

# Run SEO audit
pnpm seo:audit
```

## 🧪 Testing

### Test Coverage
- Unit tests for components
- Integration tests for pages
- Accessibility tests
- Performance tests

### Running Tests
```bash
# Run all tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run specific test file
pnpm test -- --testPathPattern=ComponentName
```

## 📱 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

### Code Style
- Use TypeScript for all new code
- Follow ESLint configuration
- Use Prettier for code formatting
- Write tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- **Email**: kleber@ziontechgroup.com
- **Phone**: +1 302 464 0950
- **Website**: https://ziontechgroup.com

## 🏢 About Zion Tech Group

Zion Tech Group is a leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. We specialize in:

- **AI Solutions**: Machine learning, natural language processing, computer vision
- **IT Services**: Cloud migration, cybersecurity, system integration
- **Micro SAAS**: Ready-to-use business applications and tools
- **5G Solutions**: Next-generation connectivity and infrastructure

---

**Built with ❤️ by the Zion Tech Group Team**