# Development Guide - Zion Tech Group Website

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/Zion-Holdings/zion.app.git
cd zion.app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
zion.app/
├── app/                          # Main application directory
│   ├── components/              # Reusable React components
│   │   ├── __tests__/          # Component tests
│   │   ├── AdvancedPerformanceMonitor.tsx
│   │   ├── AdvancedSEOOptimizer.tsx
│   │   ├── EnhancedAccessibilityManager.tsx
│   │   ├── EnhancedErrorBoundary.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── Sidebar.tsx
│   ├── pages/                   # Page components
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── ServicesPage.tsx
│   │   └── ...
│   ├── partnerships/            # Partnership pages
│   ├── chat/                   # Live chat pages
│   ├── report/                 # Issue reporting pages
│   └── ...                     # Other page directories
├── public/                     # Static assets
├── scripts/                    # Build and utility scripts
├── __tests__/                  # Global tests
├── App.tsx                     # Main application component
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.ts             # Vite configuration
└── tailwind.config.js         # Tailwind CSS configuration
```

## 🧩 Component Architecture

### Core Components

#### 1. AdvancedPerformanceMonitor
Real-time performance monitoring with Core Web Vitals tracking.

```tsx
import AdvancedPerformanceMonitor from './components/AdvancedPerformanceMonitor';

<AdvancedPerformanceMonitor
  onMetricsUpdate={(metrics) => console.log(metrics)}
  enableRealTimeMonitoring={true}
  logToConsole={false}
/>
```

**Features:**
- FCP, LCP, FID, CLS tracking
- Memory usage monitoring
- Performance scoring
- Real-time updates

#### 2. AdvancedSEOOptimizer
Comprehensive SEO optimization with structured data.

```tsx
import AdvancedSEOOptimizer from './components/AdvancedSEOOptimizer';

const seoData = {
  title: "Page Title",
  description: "Page description",
  keywords: ["keyword1", "keyword2"],
  canonicalUrl: "https://ziontechgroup.com/page",
  structuredData: {
    "@type": "WebPage",
    // ... structured data
  }
};

<AdvancedSEOOptimizer
  seoData={seoData}
  enableStructuredData={true}
  enableSocialMeta={true}
/>
```

**Features:**
- Meta tags optimization
- Open Graph and Twitter Cards
- Structured data (JSON-LD)
- Breadcrumb navigation
- FAQ schema
- Organization schema

#### 3. EnhancedAccessibilityManager
Comprehensive accessibility features and user preferences.

```tsx
import EnhancedAccessibilityManager from './components/EnhancedAccessibilityManager';

<EnhancedAccessibilityManager
  options={{
    enableHighContrast: false,
    enableLargeText: false,
    enableReducedMotion: false
  }}
  enableAutoDetection={true}
  enableUserPreferences={true}
/>
```

**Features:**
- High contrast mode
- Large text support
- Reduced motion
- Focus indicators
- Screen reader optimization
- Keyboard navigation
- Voice control support

#### 4. EnhancedErrorBoundary
Advanced error handling with reporting and recovery.

```tsx
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';

<EnhancedErrorBoundary
  onError={(error, errorInfo, errorId) => {
    // Handle error
  }}
  onRetry={() => {
    // Retry logic
  }}
  maxRetries={3}
  enableErrorReporting={true}
  enableErrorDetails={true}
>
  <YourComponent />
</EnhancedErrorBoundary>
```

**Features:**
- Error reporting to external services
- Retry mechanism with limits
- User-friendly error UI
- Error details for debugging
- Issue reporting integration

## 🎨 Styling Guidelines

### Tailwind CSS
The project uses Tailwind CSS for styling. Follow these guidelines:

```tsx
// Use semantic class names
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Content
</div>

// Use responsive design
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  Items
</div>

// Use consistent spacing
<div className="space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Custom CSS
For complex styles, use CSS modules or styled-jsx:

```tsx
// Using styled-jsx
<style jsx>{`
  .custom-component {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 12px;
    padding: 20px;
  }
`}</style>
```

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test EnhancedErrorBoundary.test.tsx
```

### Writing Tests
Follow these patterns for testing:

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import YourComponent from './YourComponent';

describe('YourComponent', () => {
  it('renders correctly', () => {
    render(<YourComponent />);
    expect(screen.getByText('Expected text')).toBeInTheDocument();
  });

  it('handles user interaction', () => {
    render(<YourComponent />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Updated text')).toBeInTheDocument();
  });
});
```

## 🚀 Performance Optimization

### Code Splitting
Use dynamic imports for large components:

```tsx
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### Image Optimization
Use optimized images with lazy loading:

```tsx
import { LazyImage } from './components/LazyImage';

<LazyImage
  src="/images/hero.jpg"
  alt="Hero image"
  width={800}
  height={600}
  placeholder="/images/placeholder.jpg"
/>
```

### Bundle Analysis
Analyze bundle size:

```bash
npm run build
npm run analyze
```

## 🔧 Development Tools

### VS Code Extensions
Recommended extensions for development:

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Auto Rename Tag
- Bracket Pair Colorizer
- GitLens

### Debugging
Use React Developer Tools and browser dev tools:

```tsx
// Add debug logging
console.log('Debug info:', { data, props });

// Use React DevTools Profiler
// Enable in browser dev tools
```

## 📱 Responsive Design

### Breakpoints
Use Tailwind's responsive breakpoints:

```tsx
// Mobile first approach
<div className="
  w-full           // Mobile: full width
  md:w-1/2         // Tablet: half width
  lg:w-1/3         // Desktop: third width
">
  Content
</div>
```

### Testing Responsive Design
Test on different screen sizes:

```bash
# Use browser dev tools
# Test on actual devices
# Use responsive design testing tools
```

## ♿ Accessibility

### WCAG Guidelines
Follow WCAG 2.1 AA guidelines:

```tsx
// Use semantic HTML
<button aria-label="Close dialog">
  <CloseIcon />
</button>

// Provide alt text for images
<img src="image.jpg" alt="Descriptive text" />

// Use proper heading hierarchy
<h1>Main heading</h1>
<h2>Section heading</h2>
<h3>Subsection heading</h3>
```

### Testing Accessibility
Use accessibility testing tools:

```bash
# Install axe-core
npm install --save-dev @axe-core/react

# Use in tests
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);
```

## 🔒 Security

### Best Practices
Follow security best practices:

```tsx
// Sanitize user input
import DOMPurify from 'dompurify';

const sanitizedHTML = DOMPurify.sanitize(userInput);

// Use HTTPS in production
// Validate all inputs
// Use Content Security Policy
```

### Environment Variables
Store sensitive data in environment variables:

```bash
# .env.local
VITE_API_URL=https://api.ziontechgroup.com
VITE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

## 📊 Analytics and Monitoring

### Google Analytics
Track user interactions:

```tsx
import { trackEvent } from './utils/analytics';

// Track page views
useEffect(() => {
  trackEvent('page_view', {
    page_title: document.title,
    page_location: window.location.href
  });
}, []);

// Track user interactions
const handleClick = () => {
  trackEvent('button_click', {
    button_name: 'cta_button',
    page_location: window.location.href
  });
};
```

### Error Monitoring
Monitor errors in production:

```tsx
import { reportError } from './utils/errorReporting';

try {
  // Risky operation
} catch (error) {
  reportError(error, {
    context: 'user_action',
    userId: getCurrentUserId()
  });
}
```

## 🚀 Deployment

### Build Process
The build process includes:

1. TypeScript compilation
2. React compilation
3. CSS processing
4. Asset optimization
5. Bundle splitting
6. Service worker generation

### Environment Configuration
Configure for different environments:

```typescript
// vite.config.ts
export default defineConfig({
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    __VERSION__: JSON.stringify(process.env.npm_package_version)
  }
});
```

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Testing Library](https://testing-library.com/docs/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📞 Support

For questions or support:
- Email: support@ziontechgroup.com
- Phone: +1 (302) 464-0950
- Documentation: https://docs.ziontechgroup.com