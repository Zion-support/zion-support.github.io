import React, { Suspense, lazy, ComponentType } from "react";
import { Loader2 } from "lucide-react";

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
  
  return function LazyWrapper(props: P) {
    return (
      <Suspense fallback={fallback || <DefaultFallback />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}

// Generic lazy component wrapper
interface LazyComponentProps {
  fallback?: React.ReactNode;
  delay?: number;
}

export function LazyComponent({ 
  children, 
  fallback = <DefaultFallback />,
  delay = 0 
}: LazyComponentProps & { children: React.ReactNode }) {
  const [show, setShow] = React.useState(delay === 0);

  React.useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => setShow(true), delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  if (!show) {
    return <>{fallback}</>;
  }

  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
}

export default LazyComponent;