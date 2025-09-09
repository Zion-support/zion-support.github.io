import React, { lazy, ComponentType } from 'react';
import OptimizedSuspense from './OptimizedSuspense';
import { usePerformanceMonitoring } from '../hooks/usePerformanceMonitoring';

interface OptimizedRouteProps {
  path: string;
  component: () => Promise<{ default: ComponentType<any> }>;
  preload?: boolean;
}

const OptimizedRoute: React.FC<OptimizedRouteProps> = ({
  path,
  component,
  preload = false,
}) => {
  const { trackBundleLoad } = usePerformanceMonitoring();
  
  // Preload component if specified
  React.useEffect(() => {
    if (preload) {
      const startTime = performance.now();
      component().then(() => {
        const loadTime = performance.now() - startTime;
        trackBundleLoad(path, loadTime);
      });
    }
  }, [component, path, preload, trackBundleLoad]);

  const LazyComponent = lazy(component);

  return (
    <OptimizedSuspense>
      <LazyComponent />
    </OptimizedSuspense>
  );
};

// Higher-order component for route optimization
export const withRouteOptimization = <P extends object>(
  Component: ComponentType<P>,
  routeName: string
) => {
  return React.memo((props: P) => {
    const { trackBundleLoad } = usePerformanceMonitoring();
    
    React.useEffect(() => {
      const startTime = performance.now();
      const loadTime = performance.now() - startTime;
      trackBundleLoad(routeName, loadTime);
    }, [trackBundleLoad]);

    return <Component {...props} />;
  });
};

export default OptimizedRoute;