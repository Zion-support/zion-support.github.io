import { lazy, ComponentType } from 'react'
import LazyWrapper from './LazyWrapper'
// Lazy loading helper function
export const createLazyComponent = <P extends Record<string, unknown>>() => Promise<{ default: ComponentType<P> }>
) => {
  const LazyComponent = lazy(importFunc);
  
  const WrappedComponent = () => (
    <LazyWrapper>
      <LazyComponent {...(props as P)} />
    </LazyWrapper>
  )
  WrappedComponent.displayName = `LazyComponent(${LazyComponent.displayName || 'Unknown'})`
  return WrappedComponent
}