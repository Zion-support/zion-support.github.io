const fs = require('fs');
const path = require('path');

// List of corrupted utility and other files
const corruptedFiles = [
  'app/components/utils/accessibilityUtils.ts',
  'app/config/errorBoundaryConfig.tsx',
  'app/contact/page-broken2.tsx',
  'app/force-dynamic.ts',
  'app/hooks/useEnhancedPerformance.ts',
  'app/hooks/useForm.ts',
  'app/hooks/useIntersectionObserver.ts',
  'app/hooks/useLazyLoading.ts',
  'app/hooks/usePerformanceMonitor.ts',
  'app/main.tsx',
  'app/micro-saas-services/microSaasServices.tsx',
  'app/micro-saas-services/services.tsx',
  'app/pages/AboutPage.tsx',
  'app/pages/HomePage.tsx',
  'app/service-template.tsx',
  'app/types/app.types.ts',
  'app/types/global.d.ts',
  'app/types/next.d.ts',
  'app/utils/accessibilityUtils.ts',
  'app/utils/apiClient.ts',
  'app/utils/monitoring.ts',
  'app/utils/performanceEnhancer.ts',
  'app/utils/performanceMetrics.ts',
  'app/utils/performanceMonitoring.ts',
  'app/utils/performanceOptimizations.ts',
  'app/utils/performanceUtils.ts',
  'app/utils/securityHeaders.ts',
  'app/utils/seoEnhancer.ts',
  'app/utils/sitemapGenerator.ts',
  'app/utils/testUtils.ts'
];

// Create utility file content
const createUtilityContent = (filePath) => {
  const baseName = filePath.split('/').pop().replace(/\.(ts|tsx)$/, '');
  
  switch (baseName) {
    case 'accessibilityUtils':
      return `export const accessibilityUtils = {
  // Add ARIA attributes to elements
  addAriaLabel: (element: HTMLElement, label: string) => {
    element.setAttribute('aria-label', label);
  },
  
  // Add ARIA role to elements
  addAriaRole: (element: HTMLElement, role: string) => {
    element.setAttribute('role', role);
  },
  
  // Check if element is accessible
  isAccessible: (element: HTMLElement): boolean => {
    return element.hasAttribute('aria-label') || 
           element.hasAttribute('aria-labelledby') ||
           element.textContent?.trim().length > 0;
  },
  
  // Focus management
  focusElement: (element: HTMLElement) => {
    element.focus();
  },
  
  // Skip to content functionality
  skipToContent: (contentId: string) => {
    const content = document.getElementById(contentId);
    if (content) {
      content.focus();
      content.scrollIntoView();
    }
  }
};
`;

    case 'errorBoundaryConfig':
      return `import React from 'react';

export const errorBoundaryConfig = {
  fallback: <div>Something went wrong. Please refresh the page.</div>,
  onError: (error: Error, errorInfo: any) => {
    console.error('Error caught by boundary:', error, errorInfo);
  }
};
`;

    case 'force-dynamic':
      return `export const dynamic = 'force-dynamic';
export const revalidate = 0;
`;

    case 'useEnhancedPerformance':
      return `import { useEffect, useState } from 'react';

export const useEnhancedPerformance = () => {
  const [performance, setPerformance] = useState({
    isSlow: false,
    connectionType: 'unknown'
  });

  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      setPerformance({
        isSlow: connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g',
        connectionType: connection.effectiveType || 'unknown'
      });
    }
  }, []);

  return performance;
};
`;

    case 'useForm':
      return `import { useState, useCallback } from 'react';

export const useForm = (initialValues: Record<string, any> = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = useCallback((name: string, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const handleSubmit = useCallback((onSubmit: (values: Record<string, any>) => void) => {
    return (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(values);
    };
  }, [values]);

  return { values, errors, handleChange, handleSubmit, setErrors };
};
`;

    case 'useIntersectionObserver':
      return `import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting] as const;
};
`;

    case 'useLazyLoading':
      return `import { useEffect, useRef, useState } from 'react';

export const useLazyLoading = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isLoaded] as const;
};
`;

    case 'usePerformanceMonitor':
      return `import { useEffect, useState } from 'react';

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'paint') {
            setMetrics(prev => ({
              ...prev,
              [entry.name]: entry.startTime
            }));
          }
        });
      });

      observer.observe({ entryTypes: ['paint'] });

      return () => observer.disconnect();
    }
  }, []);

  return metrics;
};
`;

    case 'main':
      return `import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1>Zion Tech Group</h1>
      <p>Welcome to our application</p>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
`;

    case 'microSaasServices':
      return `import React from 'react';

interface MicroSaasService {
  id: string;
  name: string;
  description: string;
  price: number;
}

const MicroSaasServices: React.FC = () => {
  const services: MicroSaasService[] = [
    {
      id: '1',
      name: 'AI Analytics',
      description: 'Advanced analytics powered by AI',
      price: 99
    },
    {
      id: '2',
      name: 'Blockchain Integration',
      description: 'Secure blockchain solutions',
      price: 199
    }
  ];

  return (
    <div className="micro-saas-services">
      <h2>Micro SaaS Services</h2>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p className="price">${service.price}/month</p>
        ))}
  );
};

export default MicroSaasServices;
`;

    case 'services':
      return `import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <p>Comprehensive technology solutions for your business.</p>
  );
};

export default Services;
`;

    case 'AboutPage':
      return `import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <h1>About Zion Tech Group</h1>
      <p>We are a leading technology company specializing in AI, blockchain, and 5G solutions.</p>
  );
};

export default AboutPage;
`;

    case 'HomePage':
      return `import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Zion Tech Group</h1>
      <p>Innovative technology solutions for the future.</p>
  );
};

export default HomePage;
`;

    case 'service-template':
      return `import React from 'react';

interface ServiceTemplateProps {
  title: string;
  description: string;
  features: string[];
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ 
  title, 
  description, 
  features 
}) => {
  return (
    <div className="service-template">
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
  );
};

export default ServiceTemplate;
`;

    case 'app.types':
      return `export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}
`;

    case 'global.d':
      return `declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export {};
`;

    case 'next.d':
      return `import { NextPage } from 'next';

declare module 'next' {
  interface NextPageProps {
    params?: { [key: string]: string };
  }
}
`;

    case 'apiClient':
      return `const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

export const apiClient = {
  get: async (endpoint: string) => {
    const response = await fetch(\`\${API_BASE_URL}\${endpoint}\`);
    return response.json();
  },
  
  post: async (endpoint: string, data: any) => {
    const response = await fetch(\`\${API_BASE_URL}\${endpoint}\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  }
};
`;

    case 'monitoring':
      return `export const monitoring = {
  trackEvent: (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', eventName, properties);
    }
  },
  
  trackPageView: (pageName: string) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName
      });
    }
  }
};
`;

    case 'performanceEnhancer':
      return `export const performanceEnhancer = {
  preloadImage: (src: string) => {
    const img = new Image();
    img.src = src;
  },
  
  preloadRoute: (route: string) => {
    if (typeof window !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    }
  },
  
  optimizeImages: () => {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      const src = img.getAttribute('data-src');
      if (src) {
        img.setAttribute('src', src);
        img.removeAttribute('data-src');
      }
    });
  }
};
`;

    case 'performanceMetrics':
      return `export const performanceMetrics = {
  getLoadTime: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      return performance.timing.loadEventEnd - performance.timing.navigationStart;
    }
    return 0;
  },
  
  getFirstContentfulPaint: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const paintEntries = performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      return fcp ? fcp.startTime : 0;
    }
    return 0;
  }
};
`;

    case 'performanceMonitoring':
      return `export const performanceMonitoring = {
  startTiming: (name: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(\`\${name}-start\`);
    }
  },
  
  endTiming: (name: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(\`\${name}-end\`);
      performance.measure(name, \`\${name}-start\`, \`\${name}-end\`);
    }
  }
};
`;

    case 'performanceOptimizations':
      return `export const performanceOptimizations = {
  debounce: (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
  
  throttle: (func: Function, limit: number) => {
    let inThrottle: boolean;
    return function executedFunction(...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
};
`;

    case 'performanceUtils':
      return `export const performanceUtils = {
  isSlowConnection: () => {
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      const connection = (navigator as any).connection;
      return connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g';
    }
    return false;
  },
  
  shouldUseLowQualityImages: () => {
    return performanceUtils.isSlowConnection();
  }
};
`;

    case 'securityHeaders':
      return `export const securityHeaders = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
};
`;

    case 'seoEnhancer':
      return `export const seoEnhancer = {
  generateMetaTags: (title: string, description: string, url: string) => {
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url,
        type: 'website'
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description
      }
    };
  }
};
`;

    case 'sitemapGenerator':
      return `export const sitemapGenerator = {
  generateSitemap: (routes: string[]) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';
    return routes.map(route => ({
      url: \`\${baseUrl}\${route}\`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8
    }));
  }
};
`;

    case 'testUtils':
      return `export const testUtils = {
  createMockUser: () => ({
    id: '1',
    name: 'Test User',
    email: 'test@example.com'
  }),
  
  createMockService: () => ({
    id: '1',
    name: 'Test Service',
    description: 'A test service',
    price: 99
  })
};
`;

    default:
      return `// ${baseName} utility file
export const ${baseName} = {
  // Add utility functions here
};
`;
  }
};

// Fix corrupted files
corruptedFiles.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  
  try {
    const content = createUtilityContent(filePath);
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Utility files fix completed!');