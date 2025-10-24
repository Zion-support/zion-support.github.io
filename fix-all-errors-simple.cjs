#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to write a clean file
function writeCleanFile(filePath, content) {
  const fullPath = path.join(process.cwd(), filePath);
  const dir = path.dirname(fullPath);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Write the clean file
  fs.writeFileSync(fullPath, content);
  console.log(`✓ Fixed: ${filePath}`);
}

// Fix EnhancedLoadingSkeleton.tsx
writeCleanFile('app/components/EnhancedLoadingSkeleton.tsx', `import React from 'react';

interface EnhancedLoadingSkeletonProps {
  lines?: number;
  showAvatar?: boolean;
  showImage?: boolean;
  height?: string;
  className?: string;
}

const EnhancedLoadingSkeleton: React.FC<EnhancedLoadingSkeletonProps> = ({
  lines = 3,
  showAvatar = false,
  showImage = false,
  height = 'auto',
  className = '',
}) => {
  return (
    <div className={\`animate-pulse \${className}\`} style={{ height }}>
      <div className="space-y-4">
        {showAvatar && (
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div className="space-y-2 flex-1">
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        )}
        
        {showImage && (
          <div className="w-full h-48 bg-gray-300 rounded-lg"></div>
        )}
        
        <div className="space-y-2">
          {Array.from({ length: lines }).map((_, index) => (
            <div
              key={index}
              className={\`h-4 bg-gray-300 rounded \${
                index === lines - 1 ? 'w-3/4' : 'w-full'
              }\`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedLoadingSkeleton;`);

// Fix Footer_broken.tsx
writeCleanFile('app/components/Footer_broken.tsx', `import React from 'react';

interface Footer_brokenProps {
  // Add props here
}

const Footer_broken: React.FC<Footer_brokenProps> = (_props) => {
  return (
    <div>
      {/* Component content */}
    </div>
  );
};

export default Footer_broken;`);

// Fix FuturisticHero.tsx
writeCleanFile('app/components/FuturisticHero.tsx', `'use client'
import React from 'react'
import { ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react'

interface FuturisticHeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const FuturisticHero: React.FC<FuturisticHeroProps> = ({
  title = "Transform Your Business with AI",
  subtitle = "Cutting-edge artificial intelligence solutions that revolutionize how you work, think, and grow.",
  ctaText = "Get Started",
  ctaLink = "/contact"
}) => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process data at unprecedented speeds"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability"
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Advanced machine learning algorithms"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy anywhere in the world"
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href={ctaLink}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              {ctaText}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FuturisticHero`);

// Fix LazyImage.tsx
writeCleanFile('app/components/LazyImage.tsx', `import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PC9zdmc+',
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    onError?.();
  };

  return (
    <div ref={imgRef} className={\`relative overflow-hidden \${className}\`}>
      {!isLoaded && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={\`w-full h-full object-cover transition-opacity duration-300 \${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }\`}
        />
      )}
    </div>
  );
};

export default LazyImage;`);

// Fix LoadingSkeleton.tsx
writeCleanFile('app/components/LoadingSkeleton.tsx', `import React from 'react';

interface LoadingSkeletonProps {
  lines?: number;
  className?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  lines = 3,
  className = ''
}) => {
  return (
    <div className={\`animate-pulse \${className}\`}>
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={\`h-4 bg-gray-300 rounded \${
              index === lines - 1 ? 'w-3/4' : 'w-full'
            }\`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;`);

// Fix Navigation-backup.tsx
writeCleanFile('app/components/Navigation-backup.tsx', `import React from 'react';

interface NavigationProps {
  // Add props here
}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">Logo</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;`);

// Fix OptimizedImage.tsx
writeCleanFile('app/components/OptimizedImage.tsx', `import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    />
  );
};

export default OptimizedImage;`);

// Fix OptimizedLoadingSpinner.tsx
writeCleanFile('app/components/OptimizedLoadingSpinner.tsx', `import React from 'react';

interface OptimizedLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = ({
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={\`flex justify-center items-center \${className}\`}>
      <div
        className={\`\${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin\`}
      ></div>
    </div>
  );
};

export default OptimizedLoadingSpinner;`);

// Fix SEOEnhancer.tsx
writeCleanFile('app/components/SEOEnhancer.tsx', `import React from 'react';
import Head from 'next/head';

interface SEOEnhancerProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = 'Default Title',
  description = 'Default Description',
  keywords = '',
  canonical = '',
  ogImage = ''
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Head>
  );
};

export default SEOEnhancer;`);

// Fix ServiceCardSkeleton.tsx
writeCleanFile('app/components/ServiceCardSkeleton.tsx', `import React from 'react';

interface ServiceCardSkeletonProps {
  count?: number;
  className?: string;
}

const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({
  count = 3,
  className = ''
}) => {
  return (
    <div className={\`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 \${className}\`}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
          <div className="w-12 h-12 bg-gray-300 rounded-lg mb-4"></div>
          <div className="h-6 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCardSkeleton;`);

// Fix UserExperienceEnhancer.tsx
writeCleanFile('app/components/UserExperienceEnhancer.tsx', `import React, { useState, useEffect } from 'react';

interface UserExperienceEnhancerProps {
  children: React.ReactNode;
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return <>{children}</>;
};

export default UserExperienceEnhancer;`);

// Fix performanceUtils.ts
writeCleanFile('app/components/performanceUtils.ts', `export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(\`\${name} took \${end - start} milliseconds\`);
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};`);

// Fix app.types.ts
writeCleanFile('app/types/app.types.ts', `export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price?: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
}`);

// Fix enhanced.types.ts
writeCleanFile('app/types/enhanced.types.ts', `export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

export interface AnalyticsEvent {
  name: string;
  properties: Record<string, any>;
  timestamp: number;
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  language: string;
  notifications: boolean;
}`);

// Fix analytics.ts
writeCleanFile('app/utils/analytics.ts', `export const trackEvent = (eventName: string, properties: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && (window as Window & { gtag: Function }).gtag) {
    (window as Window & { gtag: Function }).gtag('event', eventName, properties);
  }
};

export const trackPageView = (pagePath: string) => {
  if (typeof window !== 'undefined' && (window as Window & { gtag: Function }).gtag) {
    (window as Window & { gtag: Function }).gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
    });
  }
};`);

// Fix apiClient.ts
writeCleanFile('app/utils/apiClient.ts', `interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string = '/api') {
    this.baseURL = baseURL;
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(\`\${this.baseURL}\${endpoint}\`);
      const data = await response.json();
      return { data, success: true };
    } catch (error) {
      return { data: null as T, success: false, message: 'Request failed' };
    }
  }

  async post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(\`\${this.baseURL}\${endpoint}\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return { data: result, success: true };
    } catch (error) {
      return { data: null as T, success: false, message: 'Request failed' };
    }
  }
}

export const apiClient = new ApiClient();`);

// Fix seoData.ts
writeCleanFile('app/utils/seoData.ts', `export const seoData = {
  home: {
    title: 'AI Solutions - Transform Your Business',
    description: 'Cutting-edge AI solutions for modern businesses',
    keywords: ['AI', 'artificial intelligence', 'business solutions']
  },
  about: {
    title: 'About Us - AI Solutions',
    description: 'Learn about our AI expertise and mission',
    keywords: ['about', 'AI company', 'team']
  },
  contact: {
    title: 'Contact Us - AI Solutions',
    description: 'Get in touch with our AI experts',
    keywords: ['contact', 'support', 'AI consultation']
  }
};`);

// Fix testRunner.ts
writeCleanFile('app/utils/testRunner.ts', `export const createMock = <T,>(defaultValue: T): T => {
  return defaultValue;
};

export const runTests = async (tests: Array<() => Promise<boolean>>): Promise<boolean[]> => {
  const results: boolean[] = [];
  
  for (const test of tests) {
    try {
      const result = await test();
      results.push(result);
    } catch (error) {
      console.error('Test failed:', error);
      results.push(false);
    }
  }
  
  return results;
};`);

// Fix NewsletterSignup.tsx
writeCleanFile('app/components/NewsletterSignup.tsx', `'use client';

import React, { useState } from 'react';
import { AlertCircle, Mail, Send, CheckCircle } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'inline' | 'modal';
  onClose?: () => void;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ variant = 'inline', onClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
      
      if (onClose) {
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (_error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  if (variant === 'modal') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Subscribe to Newsletter</h3>
            {onClose && (
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            )}
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {status === 'loading' ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Subscribe
                </>
              )}
            </button>
            {message && (
              <div className={\`flex items-center text-sm \${
                status === 'success' ? 'text-green-600' : 'text-red-600'
              }\`}>
                {status === 'success' ? (
                  <CheckCircle className="w-4 h-4 mr-2" />
                ) : (
                  <AlertCircle className="w-4 h-4 mr-2" />
                )}
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <Mail className="w-6 h-6 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold">Stay Updated</h3>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {status === 'loading' ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Subscribe
            </>
          )}
        </button>
        {message && (
          <div className={\`flex items-center text-sm \${
            status === 'success' ? 'text-green-600' : 'text-red-600'
          }\`}>
            {status === 'success' ? (
              <CheckCircle className="w-4 h-4 mr-2" />
            ) : (
              <AlertCircle className="w-4 h-4 mr-2" />
            )}
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default NewsletterSignup;`);

// Fix AboutPage.tsx
writeCleanFile('app/pages/AboutPage.tsx', `import React from 'react';
import Link from 'next/link';
import { 
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  HeartIcon,
  ArrowRightIcon,
  Target,
  Users,
  Award,
  Lightbulb,
  Shield,
  Zap,
} from '@heroicons/react/24/outline';

const AboutPage = () => {
  const features = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to delivering exceptional AI solutions that drive real business value.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our team consists of world-class AI researchers, engineers, and business strategists.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'We have helped hundreds of companies transform their operations with AI technology.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\\'s possible with artificial intelligence.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Your data and privacy are our top priorities in everything we build.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'We deliver results quickly without compromising on quality or security.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Our AI Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              We are pioneers in artificial intelligence, dedicated to transforming businesses through innovative AI technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with deep industry expertise to deliver solutions that truly make a difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ShieldCheckIcon className="w-10 h-10 text-white" />
            Start Your AI Journey
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;`);

// Fix Analytics.tsx
writeCleanFile('app/components/Analytics.tsx', `import React, { useEffect } from 'react';

interface AnalyticsProps {
  measurementId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ measurementId = 'GA_MEASUREMENT_ID' }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.async = true;
      script.src = \`https://www.googletagmanager.com/gtag/js?id=\${measurementId}\`;
      document.head.appendChild(script);

      (window as Window & { gtag: Function }).gtag = (window as Window & { gtag: Function }).gtag || function() {
        ((window as Window & { gtag: Function }).gtag.q = (window as Window & { gtag: Function }).gtag.q || []).push(arguments);
      };

      (window as Window & { gtag: Function }).gtag('js', new Date());
      (window as Window & { gtag: Function }).gtag('config', measurementId);
    }
  }, [measurementId]);

  return null;
};

export default Analytics;`);

// Fix AdvancedPerformanceMonitor.tsx
writeCleanFile('app/components/AdvancedPerformanceMonitor.tsx', `import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
  });

  useEffect(() => {
    const observers: PerformanceObserver[] = [];

    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, firstContentfulPaint: entry.startTime }));
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      observers.push(fcpObserver);
    } catch (error) {
      console.warn('FCP measurement failed:', error);
    }

    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: PerformanceEntry) => {
          if ('processingStart' in entry && entry.startTime) {
            setMetrics(prev => ({ ...prev, fid: (entry as PerformanceEntry & { processingStart: number }).processingStart - entry.startTime }));
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      observers.push(fidObserver);
    } catch (error) {
      console.warn('FID measurement failed:', error);
    }

    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, largestContentfulPaint: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      observers.push(lcpObserver);
    } catch (error) {
      console.warn('LCP measurement failed:', error);
    }

    try {
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cumulativeLayoutShift: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      observers.push(clsObserver);
    } catch (error) {
      console.warn('CLS measurement failed:', error);
    }

    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <span className="text-sm text-gray-600">Load Time:</span>
          <span className="ml-2 font-mono">{metrics.loadTime.toFixed(2)}ms</span>
        </div>
        <div>
          <span className="text-sm text-gray-600">FCP:</span>
          <span className="ml-2 font-mono">{metrics.firstContentfulPaint.toFixed(2)}ms</span>
        </div>
        <div>
          <span className="text-sm text-gray-600">LCP:</span>
          <span className="ml-2 font-mono">{metrics.largestContentfulPaint.toFixed(2)}ms</span>
        </div>
        <div>
          <span className="text-sm text-gray-600">FID:</span>
          <span className="ml-2 font-mono">{metrics.firstInputDelay.toFixed(2)}ms</span>
        </div>
        <div>
          <span className="text-sm text-gray-600">CLS:</span>
          <span className="ml-2 font-mono">{metrics.cumulativeLayoutShift.toFixed(4)}</span>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;`);

console.log('\\nAll files have been fixed with clean versions!');