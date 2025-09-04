import { lazy, Suspense } from 'react';
import Loading from './Loading';

// Lazy load components
export const LazyHome = lazy(() => import('../pages/Home'));
export const LazyAbout = lazy(() => import('../pages/About'));
export const LazyServices = lazy(() => import('../pages/Services'));
export const LazyContact = lazy(() => import('../pages/Contact'));

// Higher-order component for lazy loading
export const withLazyLoading = (Component) => {
  const LazyComponent = (props) => (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
  LazyComponent.displayName = `withLazyLoading(${Component.displayName || Component.name || 'Component'})`;
  return LazyComponent;
};