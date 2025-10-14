# Zion Tech Group Website

A modern, high-performance website built with React, TypeScript, and Vite, featuring AI services, micro-SaaS solutions, and 5G technology offerings.

## 🚀 Features

### Core Technologies

- **React 18** with TypeScript for type safety
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **React Router** for client-side routing

### Performance Optimizations

- **Lazy Loading** for images and components
- **Code Splitting** for optimal bundle sizes
- **WebP Image Support** with fallbacks
- **Core Web Vitals** monitoring
- **Performance Budget** enforcement

### Accessibility Features

- **WCAG 2.1 AA** compliance
- **Keyboard Navigation** support
- **Screen Reader** optimization
- **High Contrast** mode support
- **Reduced Motion** preferences

### SEO Optimizations

- **Enhanced Meta Tags** with Open Graph and Twitter Cards
- **Structured Data** for rich snippets
- **XML Sitemap** with 60+ pages
- **Robots.txt** configuration
- **Canonical URLs** and proper linking

### Error Handling

- **Enhanced Error Boundaries** with recovery options
- **User-Friendly Error Pages** with actionable buttons
- **Error Reporting** and logging
- **Graceful Degradation** for failed components

## 📁 Project Structure

```
├── app/                          # Main application code
│   ├── components/               # Reusable UI components
│   │   ├── OptimizedImage.tsx   # Image optimization component
│   │   ├── AccessibilityEnhancer.tsx
│   │   ├── EnhancedErrorBoundary.tsx
│   │   ├── PerformanceMonitor.tsx
│   │   └── EnhancedSEO.tsx
│   ├── pages/                   # Page components
│   │   ├── ai-services/         # AI service pages
│   │   ├── micro-saas/          # Micro SaaS pages
│   │   ├── 5g-solutions/        # 5G solution pages
│   │   └── ...
│   └── styles/                  # Global styles
├── __tests__/                   # Test files
├── scripts/                     # Build and optimization scripts
├── public/                      # Static assets
│   ├── sitemap.xml             # Generated sitemap
│   └── robots.txt              # SEO configuration
└── dist/                        # Build output
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

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

### Testing

```bash
# Run tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run tests in watch mode
pnpm test:watch
```

### Code Quality

```bash
# Lint code
pnpm lint

# Fix linting issues
pnpm lint:fix

# Type checking
pnpm type-check

# Format code
pnpm format
```

## 🚀 Performance

### Bundle Analysis

- **Total Bundle Size**: ~820KB (gzipped: ~200KB)
- **Largest Chunk**: React vendor bundle (~142KB)
- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Unused code elimination

### Core Web Vitals

- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1

### Optimization Features

- **Image Optimization**: WebP support, lazy loading, responsive images
- **Font Optimization**: Preloaded critical fonts
- **CSS Optimization**: Purged unused styles
- **JavaScript Optimization**: Minified and compressed bundles

## 🎨 Design System

### Color Palette

- **Primary**: Slate-900 to Purple-900 gradient
- **Accent**: Cyan-500 to Purple-600
- **Text**: White, Gray-300, Gray-400
- **Background**: Dark gradients with glassmorphism

### Typography

- **Headings**: Bold, large sizes with proper hierarchy
- **Body**: Clean, readable font stack
- **Code**: Monospace for technical content

### Components

- **Futuristic Design**: Glassmorphism and neon effects
- **Responsive**: Mobile-first approach
- **Accessible**: WCAG 2.1 AA compliant
- **Interactive**: Smooth animations and transitions

## 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1440px+

## 🔧 Configuration

### Environment Variables

```env
NODE_ENV=production
VITE_APP_TITLE=Zion Tech Group
VITE_APP_URL=https://ziontechgroup.com
```

### Build Configuration

- **Target**: Modern browsers (ES2020+)
- **Minification**: Terser for optimal compression
- **Source Maps**: Generated for debugging
- **Asset Optimization**: Automatic image and font optimization

## 📊 Analytics & Monitoring

### Performance Monitoring

- **Core Web Vitals** tracking
- **Resource Loading** metrics
- **Memory Usage** monitoring
- **Error Tracking** and reporting

### SEO Monitoring

- **Sitemap**: 60+ pages with proper priorities
- **Meta Tags**: Comprehensive SEO optimization
- **Structured Data**: Rich snippets for search engines
- **Social Media**: Open Graph and Twitter Cards

## 🚀 Deployment

### Build Process

1. **Clean**: Remove previous build artifacts
2. **Type Check**: Validate TypeScript
3. **Lint**: Check code quality
4. **Build**: Create optimized production bundle
5. **Sitemap**: Generate XML sitemap
6. **Optimize**: Performance optimizations

### Deployment Checklist

- [ ] All tests passing
- [ ] TypeScript compilation successful
- [ ] Linting errors resolved
- [ ] Build size within budget
- [ ] Performance metrics acceptable
- [ ] Accessibility compliance verified

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 📞 Support

For technical support or questions:

- **Email**: kleber@ziontechgroup.com
- **Phone**: +1-302-464-0950
- **Website**: https://ziontechgroup.com

---

Built with ❤️ by Zion Tech Group
