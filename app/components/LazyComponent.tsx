import React, { Suspense, lazy, ComponentType } from "react";
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
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );
    observer.observe(ref.current);
  return () => observer.disconnect();
  }, [ref, options]);
  return isVisible;
}
// Component for lazy loading with intersection observer
export const LazyComponent: React.FC<LazyComponentProps & { children: React.ReactNode }> = ({ 
  children,
  fallback = <DefaultFallback />,
  delay = 0 
}) => {
  const [shouldRender, setShouldRender] = React.useState(false);

const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (isVisible) {
      if (delay > 0) {
        const timer = setTimeout(() => setShouldRender(true), delay);
  return () => clearTimeout(timer);
      } else {
        setShouldRender(true);
      }
    }
  }, [isVisible, delay]);
  return (
    <div ref={ref}>
      {shouldRender ? children : fallback}
    </div>
  );
};
export default LazyComponent;