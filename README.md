# Zion Tech Group Website

## Build Status
✅ Netlify build configuration verified and working correctly

A modern, high-performance React application built with TypeScript, Vite, and Tailwind CSS. This website showcases Zion Tech Group's AI and IT solutions with a focus on accessibility, performance, and user experience.

## 🚀 Recent Improvements

### ✅ Merge Conflict Resolution & Branch Integration
- Successfully resolved all merge conflicts from multiple branches
- Merged key branches: test-merge-netlify, fix-netlify-build-and-merge-to-main-*
- Integrated comprehensive build optimizations and performance enhancements
- Added new utility scripts and improved build configuration
- Clean, error-free codebase with enhanced functionality

### ✅ Performance Optimizations
- Advanced performance monitoring system
- Real-time metrics dashboard (Ctrl+Shift+D)
- Performance optimizer tool (Ctrl+Shift+P)
- Bundle optimization and code splitting
- Service worker for offline functionality

### ✅ Enhanced Security
- Content Security Policy (CSP) implementation
- XSS and CSRF protection
- Input sanitization
- Security event monitoring

### ✅ Accessibility Features
- Screen reader support
- Keyboard navigation
- High contrast mode
- Focus indicators and ARIA labels

### ✅ SEO Optimization
- Dynamic meta tags
- Structured data
- Performance SEO
- Analytics integration

## 🚀 Features

### Core Features
- **Modern React Architecture**: Built with React 18, TypeScript, and modern hooks
- **Performance Optimized**: Lazy loading, code splitting, and optimized bundle sizes
- **SEO Enhanced**: Comprehensive meta tags, structured data, and search engine optimization
- **Accessibility First**: WCAG 2.1 compliant with screen reader support and keyboard navigation
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Progressive Web App**: Service worker, offline support, and installable

### Technical Features
- **Error Boundaries**: Graceful error handling and recovery
- **Performance Monitoring**: Core Web Vitals tracking and performance metrics
- **Testing Suite**: Comprehensive unit and integration tests
- **Type Safety**: Full TypeScript coverage with strict mode
- **Modern Build Tools**: Vite for fast development and optimized builds

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion
- **Routing**: React Router DOM
- **Testing**: Jest, React Testing Library
- **Linting**: ESLint, Prettier
- **Performance**: Service Worker, Performance API
- **SEO**: React Helmet Async

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zion-holdings/zion.app.git
   cd zion.app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 Available Scripts

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run serve` - Serve built application

### Testing
- `npm run test` - Run tests in watch mode
- `npm run test:ci` - Run tests for CI/CD
- `npm run test:coverage` - Run tests with coverage report

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Build Analysis
- `npm run build:analyze` - Build with bundle analysis
- `npm run analyze` - View bundle analysis report
- `npm run clean` - Clean build artifacts

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── SkipLink.tsx    # Accessibility skip link
│   └── ErrorFallback.tsx # Error boundary fallback
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # About page
│   ├── Services.tsx    # Services page
│   ├── Portfolio.tsx   # Portfolio page
│   ├── Blog.tsx        # Blog page
│   ├── Contact.tsx     # Contact page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
│   └── useAccessibility.ts # Accessibility utilities
├── utils/              # Utility functions
│   └── performance.ts  # Performance monitoring
├── __tests__/          # Test files
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradients (#667eea to #764ba2)
- **Secondary**: Purple accents (#8b5cf6)
- **Neutral**: Gray scale for text and backgrounds
- **Status**: Green (success), Red (error), Yellow (warning)

### Typography
- **Headings**: Bold, large sizes with proper hierarchy
- **Body**: Readable font sizes with good line height
- **Accessibility**: High contrast ratios and readable fonts

### Components
- **Cards**: Consistent spacing and shadows
- **Buttons**: Clear states and hover effects
- **Forms**: Accessible inputs with proper labeling
- **Navigation**: Clear hierarchy and mobile-friendly

## 🚀 Performance Optimizations

### Build Optimizations
- **Code Splitting**: Automatic chunk splitting for optimal loading
- **Tree Shaking**: Removes unused code from bundles
- **Minification**: Terser for JavaScript, CSS optimization
- **Asset Optimization**: Image compression and format optimization

### Runtime Optimizations
- **Lazy Loading**: Components loaded on demand
- **Memoization**: React.memo and useMemo for expensive operations
- **Virtual Scrolling**: For large lists (when needed)
- **Service Worker**: Caching and offline support

### Core Web Vitals
- **LCP**: Largest Contentful Paint < 2.5s
- **FID**: First Input Delay < 100ms
- **CLS**: Cumulative Layout Shift < 0.1

## ♿ Accessibility Features

### WCAG 2.1 Compliance
- **Level AA**: Meets WCAG 2.1 AA standards
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader**: Proper ARIA labels and roles
- **Color Contrast**: Minimum 4.5:1 ratio for normal text

### Accessibility Tools
- **Skip Links**: Jump to main content
- **Focus Management**: Visible focus indicators
- **ARIA Labels**: Descriptive labels for interactive elements
- **Reduced Motion**: Respects user motion preferences

## 🧪 Testing Strategy

### Test Types
- **Unit Tests**: Individual component testing
- **Integration Tests**: Component interaction testing
- **Accessibility Tests**: Screen reader and keyboard testing
- **Performance Tests**: Core Web Vitals monitoring

### Testing Tools
- **Jest**: Test runner and assertion library
- **React Testing Library**: Component testing utilities
- **Accessibility Testing**: Automated a11y checks
- **Performance Testing**: Lighthouse CI integration

## 📱 Progressive Web App

### PWA Features
- **Service Worker**: Offline functionality and caching
- **Web App Manifest**: Installable on mobile devices
- **Offline Page**: Custom offline experience
- **Background Sync**: Form submissions when online

### Installation
Users can install the app on their devices:
- **Mobile**: Add to home screen
- **Desktop**: Install as desktop app
- **Offline**: Full functionality when offline

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_URL=https://api.ziontechgroup.com
VITE_ANALYTICS_ID=GA_MEASUREMENT_ID
VITE_SENTRY_DSN=your_sentry_dsn
```

### Build Configuration
- **Vite**: Modern build tool with HMR
- **TypeScript**: Strict type checking
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Deployment Options
- **Netlify**: Automatic deployments from Git
- **Vercel**: Optimized for React applications
- **AWS S3**: Static site hosting
- **Docker**: Containerized deployment

### Performance Monitoring
- **Google Analytics**: User behavior tracking
- **Sentry**: Error monitoring and reporting
- **Lighthouse CI**: Automated performance testing

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

### Code Standards
- **TypeScript**: Strict mode enabled
- **ESLint**: Airbnb configuration
- **Prettier**: Consistent formatting
- **Testing**: Minimum 80% coverage

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- **Email**: info@ziontechgroup.com
- **Website**: https://ziontechgroup.com
- **Documentation**: [Wiki](https://github.com/zion-holdings/zion.app/wiki)

## 🏆 Acknowledgments

- **React Team**: For the amazing framework
- **Vite Team**: For the fast build tool
- **Tailwind CSS**: For the utility-first CSS framework
- **Community**: For the open-source packages and contributions

---

Built with ❤️ by the Zion Tech Group team