# Zion Tech Group Website

A modern, high-performance website built with React, TypeScript, and Vite for Zion Tech Group - a leading provider of AI-powered enterprise solutions.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Performance Optimized**: Lazy loading, code splitting, optimized bundles
- **SEO Ready**: Meta tags, structured data, sitemap, robots.txt
- **Accessibility**: WCAG compliant, keyboard navigation, screen reader support
- **PWA Support**: Service worker, manifest, offline capabilities
- **Error Handling**: Global error boundaries, graceful fallbacks
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- pnpm 8+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests
- `npm run format` - Format code with Prettier

## 📁 Project Structure

```
├── app/
│   ├── components/          # React components
│   ├── pages/              # Page components
│   ├── utils/              # Utility functions
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript type definitions
│   └── layout.tsx          # Root layout component
├── public/                 # Static assets
├── dist/                   # Build output
└── package.json
```

## 🎨 Components

### Core Components

- **Navigation**: Responsive navigation with dropdown menus
- **Footer**: Comprehensive footer with links and contact info
- **ErrorBoundary**: Global error handling
- **LoadingSpinner**: Loading states for better UX
- **PerformanceMonitor**: Core Web Vitals monitoring

### Content Components

- **ContentPromotionBanner**: Rotating promotional banners
- **ContentCarousel**: Featured content showcase
- **DynamicContentShowcase**: Dynamic content display
- **ContentStatistics**: Performance metrics display
- **ContentNewsletterSignup**: Newsletter subscription

## 🔧 Configuration

### Vite Configuration

The project uses Vite with optimized settings for production:

- Terser minification
- Code splitting
- Asset optimization
- Source map generation (disabled in production)

### TypeScript Configuration

- Strict type checking enabled
- Path mapping for clean imports
- React JSX support

### Tailwind CSS

- Custom design system
- Responsive utilities
- Dark mode support
- Performance optimized

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder to your web server
3. Configure your server to serve the `index.html` for all routes

## 📊 Performance

The website is optimized for performance with:

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized LCP, FID, and CLS
- **Bundle Size**: < 200KB gzipped
- **Loading Time**: < 2 seconds on 3G

## 🔍 SEO

- Meta tags and Open Graph
- Structured data (JSON-LD)
- XML sitemap
- Robots.txt
- Canonical URLs
- Social media optimization

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation
- Screen reader support
- High contrast support
- Focus management

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Support

For support and questions:

- Email: contact@ziontechgroup.com
- Phone: +1 (302) 464-0950
- Website: https://ziontechgroup.com

---

Built with ❤️ by Zion Tech Group