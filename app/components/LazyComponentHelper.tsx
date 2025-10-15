import React from 'react';
import { lazy, ComponentType } from 'react'
import LazyWrapper from './LazyWrapper'
// Lazy loading helper function
export const createLazyComponent = <P extends Record<string, unknown>>(_importFunc: () => Promise<{ default: ComponentType<P> }>
) => {
  const LazyComponent = lazy(importFunc);
  
  const WrappedComponent = (_props: P) => (
    <LazyWrapper >
        Content
      </LazyWrapper>
        Content
      </LazyWrapper>
      <LazyComponent {...(props as P)} />
        Content
      </LazyComponent>
        Content
      </LazyComponent>
    </LazyWrapper>
  )
  WrappedComponent.displayName = `LazyComponent(${LazyComponent.displayName || 'Unknown'})`
  return WrappedComponent
}

export default ComponentName;