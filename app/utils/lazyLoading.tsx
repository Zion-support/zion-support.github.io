import React from 'react';
import { ComponentType, lazy } from 'react'
import LazyWrapper from '../components/LazyWrapper'
// Lazy loading helper function
export const createLazyComponent = (_importFunc: () => Promise<{ default: ComponentType<Record<string, unknown>> }>
) => {
  const LazyComponent = lazy(importFunc);
  
  const WrappedComponent = (_props: Record<string, unknown>) => (
    <LazyWrapper >
        Content
      </LazyWrapper>
        Content
      </LazyWrapper>
      <LazyComponent {...props} />
        Content
      </LazyComponent>
        Content
      </LazyComponent>
    </LazyWrapper>
  )
  WrappedComponent.displayName = `Lazy(${LazyComponent.displayName || 'Component'})`
  return WrappedComponent
}

export default ComponentName;