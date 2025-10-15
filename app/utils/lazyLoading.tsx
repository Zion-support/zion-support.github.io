import { ComponentType, lazy } from 'react';
import LazyWrapper from '../components/LazyWrapper';

// Lazy loading helper function
export 
  const WrappedComponent = (props: Record<string, unknown>) => (
    <LazyWrapper>
      <LazyComponent {...props} />
    </LazyWrapper>
  );

  WrappedComponent.displayName = `Lazy(${LazyComponent.displayName || 'Component'})`;
  return WrappedComponent;
};