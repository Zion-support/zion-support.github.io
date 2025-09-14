#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🎨 Starting UI Enhancements 2025...');

// Create modern UI components
function createModernComponents() {
  console.log('🧩 Creating modern UI components...');
  
  // Card component
  const cardComponent = `import React from 'react';
import { cn } from '../lib/utils';

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };`;

  fs.writeFileSync('components/ui/Card.jsx', cardComponent);
  console.log('✅ Card component created');

  // Input component
  const inputComponent = `import React from 'react';
import { cn } from '../../lib/utils';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };`;

  fs.writeFileSync('components/ui/Input.jsx', inputComponent);
  console.log('✅ Input component created');

  // Badge component
  const badgeComponent = `import React from 'react';
import { cn } from '../../lib/utils';

function Badge({ className, variant = 'default', ...props }) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        {
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80': variant === 'default',
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80': variant === 'destructive',
          'text-foreground': variant === 'outline',
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };`;

  fs.writeFileSync('components/ui/Badge.jsx', badgeComponent);
  console.log('✅ Badge component created');

  // Alert component
  const alertComponent = `import React from 'react';
import { cn } from '../../lib/utils';

const Alert = React.forwardRef(({ className, variant = 'default', ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(
      'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
      {
        'bg-background text-foreground': variant === 'default',
        'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive': variant === 'destructive',
      },
      className
    )}
    {...props}
  />
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };`;

  fs.writeFileSync('components/ui/Alert.jsx', alertComponent);
  console.log('✅ Alert component created');
}

// Create enhanced navigation
function createEnhancedNavigation() {
  console.log('🧭 Creating enhanced navigation...');
  
  const navigation = `import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';

export default function EnhancedNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'Cloud Services', href: '/cloud-services' },
    { name: 'SaaS Platform', href: '/saas-platform' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Zion Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}`;

  fs.writeFileSync('components/EnhancedNavigation.jsx', navigation);
  console.log('✅ Enhanced navigation created');
}

// Create loading states
function createLoadingStates() {
  console.log('⏳ Creating loading states...');
  
  const loadingStates = `import React from 'react';
import { cn } from '../lib/utils';

// Skeleton loader
export function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-gray-200', className)}
      {...props}
    />
  );
}

// Spinner component
export function Spinner({ className, size = 'md', ...props }) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-gray-300 border-t-blue-600',
        sizes[size],
        className
      )}
      {...props}
    />
  );
}

// Loading overlay
export function LoadingOverlay({ isLoading, children, className }) {
  return (
    <div className="relative">
      {children}
      {isLoading && (
        <div className={cn(
          'absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-10',
          className
        )}>
          <div className="flex flex-col items-center space-y-4">
            <Spinner size="lg" />
            <p className="text-gray-600 font-medium">Loading...</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Page loading
export function PageLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xl">Z</span>
        </div>
        <Spinner size="lg" />
        <p className="text-gray-600 font-medium">Loading Zion Tech...</p>
      </div>
    </div>
  );
}

// Card skeleton
export function CardSkeleton() {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="space-y-4">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-20 w-full" />
        <div className="flex space-x-2">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      </div>
    </div>
  );
}

// List skeleton
export function ListSkeleton({ count = 3 }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}`;

  fs.writeFileSync('components/LoadingStates.jsx', loadingStates);
  console.log('✅ Loading states created');
}

// Create error handling components
function createErrorHandling() {
  console.log('🚨 Creating error handling components...');
  
  const errorHandling = `import React from 'react';
import { Button } from './ui/Button';
import { Alert, AlertDescription, AlertTitle } from './ui/Alert';
import { cn } from '../lib/utils';

// Error boundary component
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Send to error tracking service
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: true
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

// Error fallback component
export function ErrorFallback({ error, resetError }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full">
        <Alert variant="destructive">
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>
            We're sorry, but something unexpected happened. Please try again.
          </AlertDescription>
        </Alert>
        
        <div className="mt-6 space-y-4">
          <Button 
            onClick={() => window.location.reload()}
            className="w-full"
          >
            Reload Page
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="w-full"
          >
            Go Back
          </Button>
        </div>

        {process.env.NODE_ENV === 'development' && error && (
          <details className="mt-4 p-4 bg-gray-100 rounded-md">
            <summary className="font-medium cursor-pointer">Error Details</summary>
            <pre className="mt-2 text-sm text-gray-600 overflow-auto">
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}

// Error page component
export function ErrorPage({ 
  statusCode = 500, 
  title = 'An error occurred',
  message = 'Something went wrong. Please try again later.',
  className 
}) {
  const errorMessages = {
    404: {
      title: 'Page Not Found',
      message: 'The page you are looking for does not exist.',
      icon: '🔍'
    },
    500: {
      title: 'Server Error',
      message: 'Something went wrong on our end. Please try again later.',
      icon: '⚠️'
    },
    503: {
      title: 'Service Unavailable',
      message: 'We are temporarily down for maintenance. Please check back soon.',
      icon: '🔧'
    }
  };

  const errorInfo = errorMessages[statusCode] || { title, message, icon: '❌' };

  return (
    <div className={cn('min-h-screen flex items-center justify-center bg-gray-50 px-4', className)}>
      <div className="max-w-md w-full text-center">
        <div className="text-6xl mb-4">{errorInfo.icon}</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {errorInfo.title}
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          {errorInfo.message}
        </p>
        
        <div className="space-y-4">
          <Button 
            onClick={() => window.location.href = '/'}
            className="w-full"
          >
            Go Home
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="w-full"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}

// Toast notifications
export function Toast({ message, type = 'info', onClose }) {
  const types = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-white',
    info: 'bg-blue-500 text-white'
  };

  return (
    <div className={cn(
      'fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm',
      types[type]
    )}>
      <div className="flex items-center justify-between">
        <p className="font-medium">{message}</p>
        <button
          onClick={onClose}
          className="ml-4 text-white hover:text-gray-200"
        >
          ×
        </button>
      </div>
    </div>
  );
}`;

  fs.writeFileSync('components/ErrorHandling.jsx', errorHandling);
  console.log('✅ Error handling components created');
}

// Create responsive utilities
function createResponsiveUtilities() {
  console.log('📱 Creating responsive utilities...');
  
  const responsiveUtils = `import { useState, useEffect } from 'react';

// Hook for responsive breakpoints
export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState('sm');

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= 1536) setBreakpoint('2xl');
      else if (width >= 1280) setBreakpoint('xl');
      else if (width >= 1024) setBreakpoint('lg');
      else if (width >= 768) setBreakpoint('md');
      else setBreakpoint('sm');
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return breakpoint;
}

// Hook for device detection
export function useDevice() {
  const [device, setDevice] = useState('desktop');

  useEffect(() => {
    const updateDevice = () => {
      const width = window.innerWidth;
      const userAgent = navigator.userAgent;
      
      if (width < 768) {
        setDevice('mobile');
      } else if (width < 1024) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
    };

    updateDevice();
    window.addEventListener('resize', updateDevice);
    return () => window.removeEventListener('resize', updateDevice);
  }, []);

  return device;
}

// Hook for viewport dimensions
export function useViewport() {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  return viewport;
}

// Responsive component wrapper
export function ResponsiveWrapper({ 
  children, 
  mobile, 
  tablet, 
  desktop,
  className 
}) {
  const device = useDevice();
  
  const getComponent = () => {
    switch (device) {
      case 'mobile':
        return mobile || children;
      case 'tablet':
        return tablet || mobile || children;
      case 'desktop':
        return desktop || tablet || mobile || children;
      default:
        return children;
    }
  };

  return (
    <div className={className}>
      {getComponent()}
    </div>
  );
}`;

  fs.writeFileSync('hooks/useResponsive.js', responsiveUtils);
  console.log('✅ Responsive utilities created');
}

// Main execution
async function main() {
  try {
    console.log('🎨 Starting UI enhancements...');
    
    // Create necessary directories
    const dirs = ['components/ui', 'hooks'];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

    // Implement UI enhancements
    createModernComponents();
    createEnhancedNavigation();
    createLoadingStates();
    createErrorHandling();
    createResponsiveUtilities();

    console.log('✅ UI enhancements complete!');
    console.log('🎨 Your app now has modern, responsive UI components!');
    
  } catch (error) {
    console.error('❌ Error during UI enhancements:', error);
    process.exit(1);
  }
}

main();