import { lazy, ComponentType } from 'react'
import LazyWrapper from './LazyWrapper'

// Lazy loading helper function
export const createLazyComponent = <P extends Record<string, unknown>>(importFunc: () => Promise<{ default: ComponentType<P> }>
) => {
  const LazyComponent = lazy(importFunc);
  
  const WrappedComponent = (props: P) => (
    <LazyWrapper>
      <LazyComponent {...props} />
    </LazyWrapper>
  )
  WrappedComponent.displayName = `LazyComponent(${LazyComponent.displayName || 'Unknown'})`
  return WrappedComponent
}

export default createLazyComponent;
