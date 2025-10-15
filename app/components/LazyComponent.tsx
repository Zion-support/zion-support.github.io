import React, { Suspense, lazy, ComponentType } from "react";
import { Loader2 } from "lucide-react";

interface LazyComponentProps {
  fallback?: React.ReactNode;
  delay?: number;
}

const DefaultFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center">
      <Loader2 className="w-8 h-8 animate-spin text-cyan-400 mx-auto mb-4" />
      <div className="text-white text-lg">Loading...</div>
    </div>
  </div>
);

// Higher-order component for lazy loading with custom fallback
export function withLazyLoading<P extends object>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  fallback?: React.ReactNode
) {
  const LazyComponent = lazy(importFunc);

  return function LazyWrapper(props: P & LazyComponentProps) {
    const { fallback: propFallback, delay, ...componentProps } = props;
    
    const FallbackComponent = propFallback || fallback || DefaultFallback;

    return (
      <Suspense fallback={<FallbackComponent />}>
        <LazyComponent {...(componentProps as P)} />
      </Suspense>
    );
  };
}

// Hook for lazy loading with delay
export function useLazyLoading(delay: number = 0) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoading;
}

// Lazy component wrapper
export function LazyComponentWrapper({ 
  children, 
  fallback = <DefaultFallback />,
  delay = 0 
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  delay?: number;
}) {
  const isLoading = useLazyLoading(delay);

  if (isLoading) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

export default LazyComponentWrapper;