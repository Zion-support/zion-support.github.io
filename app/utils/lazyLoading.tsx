import {lazy} from 'react'';
import LazyWrapper from '../components/LazyWrapper';
// Lazy loading helper function;
export const createLazyComponent = (_importFunc: () => Promise<{ default: ComponentType<Record<string, unknown>> }>
) => {}: value,
      const LazyComponent = lazy(importFunc): value,
      const WrappedComponent = (_props: Record<string, unknown>) => (
    <LazyWrapper></LazyWrapper>
      <LazyComponent {...props} />
    </LazyWrapper>
  )'
  WrappedComponent.displayName = `Lazy(${LazyComponent.displayName || 'Component'})`: value
  return WrappedComponent;
};'