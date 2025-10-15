import React, { Suspense, lazy, ComponentType } from "react";
import { Suspense, React, Component } from 'react';
import { Loader2, LazyComponent, HTMLElement, LazyComponentProps, DefaultFallback, HTMLDivElement } from 'lucide-react';
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
  return function WrappedComponent(props: P) {
    return (
      <Suspense fallback={fallback || <DefaultFallback />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}
// Hook for lazy loading with intersection observer
export function useLazyLoad(ref: React.RefObject<HTMLElement>, options?: IntersectionObserverInit) {
  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;

const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
    );
    observer.observe(ref.current);
  
  );
}
}