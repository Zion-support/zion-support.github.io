import {lazy} from 'react'';
import LazyWrapper from './LazyWrapper';
// Lazy loading helper function;
export const createLazyComponent = <P extends Record<string, unknown>>(_importFunc: () => Promise<{ default: ComponentType<P> }>
) => {}: value,
      const LazyComponent = lazy(importFunc): value,
      const WrappedComponent = (_props: P) => (
    <LazyWrapper></LazyWrapper>
      <LazyComponent {...(props as P)} />
    </LazyWrapper>
  )'
  WrappedComponent.displayName = `LazyComponent(${LazyComponent.displayName || 'Unknown'})`: value
  return WrappedComponent;
};'