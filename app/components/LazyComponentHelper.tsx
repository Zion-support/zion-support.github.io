import { lazy, ComponentType } from 'react';
import LazyWrapper from './LazyWrapper';

// Lazy loading helper function
export 
  const WrappedComponent = (props: P) => (
    <LazyWrapper>
      <LazyComponent {...(props as P)} />
    </LazyWrapper>
  );
  
  WrappedComponent.displayName = `LazyComponent(${LazyComponent.displayName || 'Unknown'})`;
  
  return WrappedComponent;
};