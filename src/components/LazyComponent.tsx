import React, { Suspense, lazy, ComponentType, ReactNode } from 'react';
import { ModernLoadingSpinner } from './ModernLoadingSpinner';

interface LazyComponentProps {
  fallback?: ReactNode | (() => ReactNode);
  delay?: number;
  [key: string]: unknown;
}

/**
 * Enhanced Lazy Component with better error handling and performance
 */
export const createLazyComponent = <P extends object>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  fallback?: ReactNode
) => {
  const LazyComponent = lazy(importFunc);

  const LazyComponentWrapper = React.forwardRef<unknown, P & LazyComponentProps>((props, ref) => {
    const { fallback: customFallback, delay = 0, ...restProps } = props;
    
    const [show, setShow] = React.useState(delay === 0);
    
    React.useEffect(() => {
      if (typeof delay === 'number' && delay > 0) {
        const timer = setTimeout(() => setShow(true), delay);
        return () => clearTimeout(timer);
      }
    }, [delay]);

    if (!show) {
      return <div style={{ minHeight: '200px' }} />;
    }

    return (
      <Suspense fallback={<ModernLoadingSpinner />}>
        <LazyComponent {...(restProps as P)} ref={ref as React.Ref<P>} />
      </Suspense>
    );
  });

  LazyComponentWrapper.displayName = 'LazyComponentWrapper';
  return LazyComponentWrapper;
};

/**
 * Lazy wrapper for any component
 */
export const LazyWrapper: React.FC<{
  children: ReactNode;
  fallback?: ReactNode;
  delay?: number;
  minHeight?: string;
}> = ({ children, fallback, delay = 0, minHeight = '200px' }) => {
  const [show, setShow] = React.useState(delay === 0);
  
  React.useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => setShow(true), delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  if (!show) {
    return <div style={{ minHeight }} />;
  }

  return (
    <Suspense fallback={fallback || <ModernLoadingSpinner />}>
      {children}
    </Suspense>
  );
};

/**
 * Intersection Observer based lazy loading
 */
export const LazyIntersection: React.FC<{
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
  minHeight?: string;
}> = ({ 
  children, 
  fallback, 
  rootMargin = '50px 0px', 
  threshold = 0.1,
  minHeight = '200px'
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [hasLoaded, setHasLoaded] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold, hasLoaded]);

  return (
    <div ref={ref} style={{ minHeight }}>
      {isVisible ? (
        <Suspense fallback={fallback || <ModernLoadingSpinner />}>
          {children}
        </Suspense>
      ) : (
        fallback || <div style={{ minHeight, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ModernLoadingSpinner />
        </div>
      )}
    </div>
  );
};

/**
 * Preload component for critical resources
 */
export const PreloadComponent: React.FC<{
  href: string;
  as: 'script' | 'style' | 'image' | 'font' | 'fetch';
  crossOrigin?: 'anonymous' | 'use-credentials';
}> = ({ href, as, crossOrigin }) => {
  React.useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (crossOrigin) {
      link.crossOrigin = crossOrigin;
    }
    document.head.appendChild(link);

    return () => {
      const existingLink = document.querySelector(`link[href="${href}"]`);
      if (existingLink) {
        existingLink.remove();
      }
    };
  }, [href, as, crossOrigin]);

  return null;
};

/**
 * Error boundary for lazy components
 */
export class LazyErrorBoundary extends React.Component<
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: ReactNode; fallback?: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Lazy component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 text-center text-red-600">
          <p>Failed to load component</p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            className="mt-2 px-4 py-2 bg-red-100 hover:bg-red-200 rounded"
          >
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}