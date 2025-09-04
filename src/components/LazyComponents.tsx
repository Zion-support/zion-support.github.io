import { lazy, Suspense } from 'react';
import Loading from './Loading';

// Lazy load components
export const LazyHome = lazy(() => import('../pages/Home'));
export const LazyAbout = lazy(() => import('../pages/About'));
export const LazyServices = lazy(() => import('../pages/Services'));
export const LazyContact = lazy(() => import('../pages/Contact'));

// Higher-order component for lazy loading
export const withLazyLoading = (Component) => {
  return (props) => (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};