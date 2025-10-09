# Zion Tech Group Website

A modern, high-performance website for Zion Tech Group - Advanced AI and IT Solutions.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Performance Optimized**: Code splitting, lazy loading, service worker caching
- **SEO Optimized**: Meta tags, structured data, Open Graph
- **Accessibility**: WCAG compliant, keyboard navigation, screen reader support
- **Mobile First**: Responsive design with mobile-first approach
- **PWA Ready**: Service worker, web app manifest

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Bundle Analysis

```bash
npm run build:analyze
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
└── App.tsx             # Main application component
```

## 🚀 Deployment

### Build Check

```bash
npm run deploy:check
```

### Clean Build

```bash
npm run clean:build
```

## 🔧 Performance Features

- **Code Splitting**: Automatic code splitting by route and feature
- **Lazy Loading**: Components loaded on demand
- **Service Worker**: Caching for offline functionality
- **Image Optimization**: Optimized images with proper formats
- **Bundle Analysis**: Tools to analyze and optimize bundle size

## 📊 Performance Monitoring

The application includes built-in performance monitoring for:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)
- First Contentful Paint (FCP)
- Time to First Byte (TTFB)

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom Components**: Reusable component library
- **Dark Theme**: Cyberpunk-inspired design
- **Responsive**: Mobile-first responsive design

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tag optimization
- **Structured Data**: JSON-LD structured data
- **Open Graph**: Social media sharing optimization
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine optimization

## 🛡️ Security

- **CSP Headers**: Content Security Policy
- **HTTPS**: Secure connections
- **XSS Protection**: Cross-site scripting protection
- **Clickjacking Protection**: Frame options headers

## 📱 PWA Features

- **Service Worker**: Offline functionality
- **Web App Manifest**: Installable web app
- **Caching Strategy**: Intelligent caching
- **Background Sync**: Background data synchronization

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 📈 Analytics

The application includes Google Analytics integration for:
- Page views
- User interactions
- Performance metrics
- Error tracking

## 🔧 Configuration

### Environment Variables

Create a `.env` file for environment-specific configuration:

```env
VITE_GA_TRACKING_ID=your_ga_tracking_id
VITE_API_URL=your_api_url
```

### Vite Configuration

The `vite.config.ts` file contains:
- Build optimization settings
- Code splitting configuration
- Asset optimization
- Development server settings

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and build
5. Submit a pull request

## 📞 Support

For support and questions:
- Email: kleber@ziontechgroup.com
- Phone: +1 302 464 0950
- Website: https://ziontechgroup.com