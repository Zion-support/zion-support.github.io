import { lazy, Suspense } from 'react';
import Loading from '../../components/Loading';

// Lazy load components (guarded for non-Next environments)
export const LazyHome = lazy(() => import('../../pages/index').then(m => ({ default: m.default || (() => null) })));

// Higher-order component for lazy loading
export const withLazyLoading = <P extends object>(Component: React.ComponentType<P>) => {
  const LazyComponent = (props: P) => (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
  LazyComponent.displayName = `withLazyLoading(${(Component as any).displayName || (Component as any).name || 'Component'})`;
  return LazyComponent;
};