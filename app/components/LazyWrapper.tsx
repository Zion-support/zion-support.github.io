import React, {} from 'react'
import LoadingSpinner from './LoadingSpinner'
interface LazyWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode}

const LazyWrapper: React.FC<LazyWrapperProps> = ({}) => {}>
      {}
    </Suspense>;
  );
}
// Higher-order component for lazy loading
export const withLazyLoading = <P extends object>(
  Component: ComponentType<P>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }))
  return (props: P) => (
    <LazyWrapper fallback={}>
      <LazyComponent {} />
    </LazyWrapper>
  );
}
export default LazyWrapper;
'