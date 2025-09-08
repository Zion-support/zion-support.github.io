<<<<<<< HEAD
import React, { memo, Suspense, lazy, ComponentType, ReactNode, useState, useEffect, useRef } from 'react';
=======
<<<<<<< HEAD
import React, { memo, Suspense, lazy, ComponentType, ReactNode } from 'react';
import { useLazyComponent } from '../hooks/useLazyLoad';
=======
import React, { memo, Suspense, ReactNode } from 'react';
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204

interface PerformanceWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  enableLazyLoading?: boolean;
<<<<<<< HEAD
  lazyImport?: () => Promise<{ default: ComponentType<unknown> }>;
=======
<<<<<<< HEAD
  lazyImport?: () => Promise<{ default: ComponentType<any> }>;
=======
  lazyImport?: () => Promise<{ default: React.ComponentType<any> }>;
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
  memoize?: boolean;
  className?: string;
}

// Simple lazy loading hook
const useLazyComponent = (importFn: () => Promise<{ default: ComponentType<unknown> }>) => {
  const [Component, setComponent] = useState<ComponentType<unknown> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    importFn()
      .then((module) => {
        setComponent(() => module.default);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [importFn]);

  return { ref, Component, isLoading, isError };
};

/**
<<<<<<< HEAD
 * Performance wrapper component that provides lazy loading and memoization
=======
<<<<<<< HEAD
 * Performance wrapper component that provides lazy loading and memoization
=======
 * Performance wrapper component that provides basic performance optimizations
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
 */
const PerformanceWrapper: React.FC<PerformanceWrapperProps> = ({
  children,
  fallback = <div>Loading...</div>,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
  enableLazyLoading = false,
  lazyImport,
  memoize = true,
  className,
}) => {
  // Always call hooks at the top level
  const lazyResult = enableLazyLoading && lazyImport ? useLazyComponent(lazyImport) : null;
  
  // If lazy loading is enabled and import function is provided
  if (enableLazyLoading && lazyImport && lazyResult) {
    const { ref, Component, isLoading, isError } = lazyResult;

    if (isError) {
      return <div className={className}>Error loading component</div>;
    }

    if (isLoading) {
      return <div className={className}>{fallback}</div>;
    }

    return (
      <div ref={ref} className={className}>
        {Component && <Component />}
      </div>
    );
  }

  // Regular rendering with optional memoization
  const content = (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );

  return <div className={className}>{content}</div>;
};

// Memoize the component for better performance
export default memo(PerformanceWrapper);

/**
 * Higher-order component for lazy loading
 */
export const withLazyLoading = <P extends object>(
  Component: ComponentType<P>,
  importFn: () => Promise<{ default: ComponentType<P> }>,
  fallback?: ReactNode
) => {
  const LazyComponent = lazy(importFn);

  return memo((props: P) => (
    <Suspense fallback={fallback || <div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  ));
};

/**
 * Higher-order component for memoization
 */
export const withMemoization = <P extends object>(
  Component: ComponentType<P>,
  areEqual?: (prevProps: P, nextProps: P) => boolean
) => {
  return memo(Component, areEqual);
};

/**
 * Hook for creating memoized callbacks
 */
export const useMemoizedCallback = <T extends (...args: unknown[]) => any>(
  callback: T,
  deps: React.DependencyList
): T => {
  return React.useCallback(callback, deps);
};

/**
 * Hook for creating memoized values
 */
export const useMemoizedValue = <T,>(
  factory: () => T,
  deps: React.DependencyList
): T => {
  return React.useMemo(factory, deps);
<<<<<<< HEAD
};
=======
};
=======
  className,
}) => {
  return (
    <div className={className}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </div>
  );
};

export default memo(PerformanceWrapper);
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
