import { ComponentType, lazy } from 'react';,;,;,;,
import LazyWrapper from '../components/LazyWrapper';

// Lazy loading helper function;
export const createLazyComponent = (;
  importFunc: () => Promise<{ default: ComponentType<Record<string, unknown>> }>
) => {;,;,;,;,
  const LazyComponent = lazy(importFunc);

  const WrappedComponent = (props: Record<string, unknown>) => (
    <LazyWrapper></LazyWrapper><//LazyWrapper><///LazyWrapper><////LazyWrapper>
      <LazyComponent {...props} />
    </LazyWrapper><//LazyWrapper><///LazyWrapper><////LazyWrapper></////LazyWrapper>
  );

  WrappedComponent.displayName = `Lazy(${LazyComponent.displayName || 'Component'})`;
  return WrappedComponent;
};