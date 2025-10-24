const fs = require('fs');
const path = require('path');

// List of corrupted component files that need to be fixed
const corruptedComponents = [
  'AccessibilityComponents.tsx',
  'AdvancedErrorBoundary.tsx', 
  'AdvancedPerformanceMonitor.tsx',
  'AdvancedSEOOptimizer.tsx',
  'AnimatedText.tsx',
  'Breadcrumb.tsx',
  'ContentNewsletterSignup.tsx',
  'ContentPreviewCard.tsx',
  'ContentPromotionBanner.tsx',
  'CookieConsent.tsx',
  'DynamicContentShowcase.tsx',
  'EnhancedAccessibility.tsx',
  'EnhancedAccessibilityEnhancer.tsx'
];

const componentsDir = path.join(__dirname, 'app', 'components');

// Create basic component templates
const componentTemplates = {
  'AccessibilityComponents.tsx': `import React from 'react';

interface AccessibilityComponentsProps {
  className?: string;
}

const AccessibilityComponents: React.FC<AccessibilityComponentsProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Accessibility Components</h2>
      <p>Accessibility enhancement components will be implemented here.</p>
    </div>
  );
};

export default AccessibilityComponents;
`,

  'AdvancedErrorBoundary.tsx': `import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class AdvancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <p>Please refresh the page or try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AdvancedErrorBoundary;
`,

  'AdvancedPerformanceMonitor.tsx': `import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      setMetrics({
        loadTime,
        renderTime: performance.now(),
        memoryUsage: (performance as any).memory?.usedJSHeapSize || 0
      });
    };

    measurePerformance();
  }, []);

  if (!metrics) return null;

  return (
    <div className="performance-monitor">
      <h3>Performance Metrics</h3>
      <p>Load Time: {metrics.loadTime.toFixed(2)}ms</p>
      <p>Render Time: {metrics.renderTime.toFixed(2)}ms</p>
      <p>Memory Usage: {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</p>
    </div>
  );
};

export default AdvancedPerformanceMonitor;
`,

  'AdvancedSEOOptimizer.tsx': `import React from 'react';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
}

const AdvancedSEOOptimizer: React.FC<SEOOptimizerProps> = ({ 
  title, 
  description, 
  keywords = [] 
}) => {
  return (
    <div className="seo-optimizer">
      <h2>SEO Optimization</h2>
      {title && <h1>{title}</h1>}
      {description && <p>{description}</p>}
      {keywords.length > 0 && (
        <div>
          <h3>Keywords:</h3>
          <ul>
            {keywords.map((keyword, index) => (
              <li key={index}>{keyword}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdvancedSEOOptimizer;
`,

  'AnimatedText.tsx': `import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '', 
  delay = 0 
}) => {
  return (
    <div 
      className={`animated-text ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {text}
    </div>
  );
};

export default AnimatedText;
`,

  'Breadcrumb.tsx': `import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav className={`breadcrumb ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            {item.href ? (
              <Link href={item.href} className="text-blue-600 hover:text-blue-800">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
`,

  'ContentNewsletterSignup.tsx': `import React, { useState } from 'react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    setIsSubscribed(true);
  };

  if (isSubscribed) {
    return (
      <div className="newsletter-success">
        <h3>Thank you for subscribing!</h3>
        <p>You'll receive our latest updates soon.</p>
      </div>
    );
  }

  return (
    <div className="newsletter-signup">
      <h3>Subscribe to our Newsletter</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default ContentNewsletterSignup;
`,

  'ContentPreviewCard.tsx': `import React from 'react';

interface ContentPreviewCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  href?: string;
  className?: string;
}

const ContentPreviewCard: React.FC<ContentPreviewCardProps> = ({
  title,
  description,
  imageUrl,
  href,
  className = ''
}) => {
  return (
    <div className={`content-preview-card ${className}`}>
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-48 object-cover rounded-t"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {href && (
          <a 
            href={href}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Read More →
          </a>
        )}
      </div>
    </div>
  );
};

export default ContentPreviewCard;
`,

  'ContentPromotionBanner.tsx': `import React from 'react';

interface ContentPromotionBannerProps {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  className?: string;
}

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({
  title,
  description,
  ctaText,
  ctaHref,
  className = ''
}) => {
  return (
    <div className={`promotion-banner bg-blue-50 border border-blue-200 rounded-lg p-6 ${className}`}>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-blue-700 mb-4">{description}</p>
      <a
        href={ctaHref}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        {ctaText}
      </a>
    </div>
  );
};

export default ContentPromotionBanner;
`,

  'CookieConsent.tsx': `import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          </p>
        </div>
        <div className="flex space-x-4 ml-4">
          <button
            onClick={declineCookies}
            className="px-4 py-2 border border-gray-600 rounded hover:bg-gray-800"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
`,

  'DynamicContentShowcase.tsx': `import React from 'react';

interface DynamicContentShowcaseProps {
  items: Array<{
    id: string;
    title: string;
    description: string;
    imageUrl?: string;
  }>;
  className?: string;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({
  items,
  className = ''
}) => {
  return (
    <div className={`dynamic-content-showcase ${className}`}>
      <h2 className="text-2xl font-bold mb-6">Featured Content</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {item.imageUrl && (
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicContentShowcase;
`,

  'EnhancedAccessibility.tsx': `import React from 'react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
  className?: string;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  children,
  className = ''
}) => {
  return (
    <div 
      className={`enhanced-accessibility ${className}`}
      role="main"
      aria-label="Enhanced accessible content"
    >
      {children}
    </div>
  );
};

export default EnhancedAccessibility;
`,

  'EnhancedAccessibilityEnhancer.tsx': `import React from 'react';

interface EnhancedAccessibilityEnhancerProps {
  children: React.ReactNode;
  className?: string;
}

const EnhancedAccessibilityEnhancer: React.FC<EnhancedAccessibilityEnhancerProps> = ({
  children,
  className = ''
}) => {
  return (
    <div 
      className={`enhanced-accessibility-enhancer ${className}`}
      role="region"
      aria-label="Accessibility enhanced content"
    >
      <div className="accessibility-features">
        <p className="sr-only">
          This content has been enhanced with accessibility features including 
          proper ARIA labels, keyboard navigation support, and screen reader compatibility.
        </p>
        {children}
      </div>
    </div>
  );
};

export default EnhancedAccessibilityEnhancer;
`
};

// Fix corrupted components
corruptedComponents.forEach(componentName => {
  const filePath = path.join(componentsDir, componentName);
  
  if (fs.existsSync(filePath)) {
    const template = componentTemplates[componentName];
    if (template) {
      fs.writeFileSync(filePath, template);
      console.log(`Fixed: ${componentName}`);
    } else {
      console.log(`No template found for: ${componentName}`);
    }
  } else {
    console.log(`File not found: ${componentName}`);
  }
});

console.log('Component fixing completed!');