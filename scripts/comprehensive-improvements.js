// Comprehensive code improvements and optimizations
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting comprehensive code improvements...');

// 1. Performance optimizations
const performanceOptimizations = {
  // Add performance monitoring
  performanceMonitor: `
// Performance monitoring utility
export const performanceMonitor = {
  measureRender: (componentName, renderFn) => {
    const start = performance.now();
    const result = renderFn();
    const end = performance.now();
    console.log(\`\${componentName} render time: \${end - start}ms\`);
    return result;
  },
  
  measureAsync: async (name, asyncFn) => {
    const start = performance.now();
    const result = await asyncFn();
    const end = performance.now();
    console.log(\`\${name} execution time: \${end - start}ms\`);
    return result;
  }
};
`,
  
  // Lazy loading helper
  lazyLoading: `
// Lazy loading utility
export const lazyLoadComponent = (importFn, fallback = null) => {
  return React.lazy(() => importFn().catch(() => ({ 
    default: () => fallback || <div>Loading...</div> 
  })));
};

// Intersection observer for lazy loading
export const useIntersectionObserver = (ref, options = {}) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [ref, options]);
  
  return isIntersecting;
};
`
};

// 2. Security enhancements
const securityEnhancements = {
  // Content Security Policy
  csp: `
// Content Security Policy configuration
export const cspConfig = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", "https://www.googletagmanager.com"],
  'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
  'font-src': ["'self'", "https://fonts.gstatic.com"],
  'img-src': ["'self'", "data:", "https:"],
  'connect-src': ["'self'", "https://api.zion.ai"]
};
`,
  
  // Input sanitization
  inputSanitization: `
// Input sanitization utilities
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .replace(/[<>\"']/g, '') // Remove HTML characters
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .trim();
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
`
};

// 3. SEO improvements
const seoImprovements = {
  // Meta tags generator
  metaTags: `
// SEO meta tags generator
export const generateMetaTags = (pageData) => {
  const {
    title = 'Zion AI - Advanced AI Solutions',
    description = 'Leading provider of AI-powered solutions for enterprises',
    keywords = 'AI, artificial intelligence, machine learning, enterprise solutions',
    image = '/images/og-default.jpg',
    url = window.location.href
  } = pageData;
  
  return {
    title: \`\${title} | Zion AI\`,
    description,
    keywords,
    openGraph: {
      title,
      description,
      image,
      url,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image
    }
  };
};
`,
  
  // Structured data
  structuredData: `
// Structured data for SEO
export const generateStructuredData = (type, data) => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };
  
  return JSON.stringify(baseSchema);
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zion AI',
  url: 'https://zion.ai',
  logo: 'https://zion.ai/images/logo.png',
  description: 'Leading provider of AI-powered solutions',
  sameAs: [
    'https://twitter.com/zionai',
    'https://linkedin.com/company/zionai'
  ]
};
`
};

// 4. Accessibility improvements
const accessibilityImprovements = {
  // ARIA utilities
  ariaUtils: `
// Accessibility utilities
export const accessibilityUtils = {
  // Generate unique IDs for ARIA relationships
  generateId: (prefix = 'element') => {
    return \`\${prefix}-\${Math.random().toString(36).substr(2, 9)}\`;
  },
  
  // Announce changes to screen readers
  announce: (message, priority = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  },
  
  // Keyboard navigation helpers
  handleKeyboardNavigation: (event, elements, currentIndex, onSelect) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % elements.length;
        onSelect(nextIndex);
        break;
      case 'ArrowUp':
        event.preventDefault();
        const prevIndex = currentIndex === 0 ? elements.length - 1 : currentIndex - 1;
        onSelect(prevIndex);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        onSelect(currentIndex);
        break;
    }
  }
};
`,
  
  // Focus management
  focusManagement: `
// Focus management utilities
export const focusManagement = {
  // Trap focus within an element
  trapFocus: (element) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };
    
    element.addEventListener('keydown', handleTabKey);
    firstElement?.focus();
    
    return () => element.removeEventListener('keydown', handleTabKey);
  },
  
  // Restore focus to previous element
  restoreFocus: (previousElement) => {
    if (previousElement && typeof previousElement.focus === 'function') {
      previousElement.focus();
    }
  }
};
`
};

// 5. Error handling improvements
const errorHandling = {
  // Error boundary component
  errorBoundary: `
// Enhanced error boundary
export class EnhancedErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
    
    // Log error to monitoring service
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Send to error tracking service
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: error.toString(),
        fatal: false
      });
    }
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
          <button onClick={() => window.location.reload()}>
            Reload Page
          </button>
        </div>
      );
    }
    
    return this.props.children;
  }
}
`,
  
  // Async error handling
  asyncErrorHandling: `
// Async error handling utilities
export const asyncErrorHandler = (asyncFn) => {
  return async (...args) => {
    try {
      return await asyncFn(...args);
    } catch (error) {
      console.error('Async operation failed:', error);
      
      // Log to error tracking service
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: error.toString(),
          fatal: false
        });
      }
      
      throw error;
    }
  };
};

export const withErrorHandling = (Component) => {
  return (props) => {
    const [error, setError] = React.useState(null);
    
    const handleError = (error) => {
      setError(error);
      console.error('Component error:', error);
    };
    
    if (error) {
      return (
        <div className="error-state">
          <p>Something went wrong: {error.message}</p>
          <button onClick={() => setError(null)}>Try Again</button>
        </div>
      );
    }
    
    return <Component {...props} onError={handleError} />;
  };
};
`
};

// Write improvements to files
const improvements = {
  ...performanceOptimizations,
  ...securityEnhancements,
  ...seoImprovements,
  ...accessibilityImprovements,
  ...errorHandling
};

// Create directories if they don't exist
const utilsDir = path.join(__dirname, '..', 'src', 'utils');
const componentsDir = path.join(__dirname, '..', 'src', 'components');

[utilsDir, componentsDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Write utility files
Object.entries(improvements).forEach(([name, content]) => {
  const fileName = `${name}.ts`;
  const filePath = path.join(utilsDir, fileName);
  
  try {
    fs.writeFileSync(filePath, content.trim());
    console.log(`✅ Created ${fileName}`);
  } catch (error) {
    console.error(`❌ Failed to create ${fileName}:`, error.message);
  }
});

// Create improvement report
const improvementReport = {
  timestamp: new Date().toISOString(),
  improvements: Object.keys(improvements),
  summary: {
    performance: Object.keys(performanceOptimizations).length,
    security: Object.keys(securityEnhancements).length,
    seo: Object.keys(seoImprovements).length,
    accessibility: Object.keys(accessibilityImprovements).length,
    errorHandling: Object.keys(errorHandling).length
  }
};

fs.writeFileSync(
  path.join(__dirname, '..', 'improvements-report.json'),
  JSON.stringify(improvementReport, null, 2)
);

console.log('🎉 Comprehensive improvements completed!');
console.log('📊 Summary:', improvementReport.summary);
console.log('📝 Report saved to improvements-report.json');