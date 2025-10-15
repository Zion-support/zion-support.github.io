<<<<<<< HEAD
import { lazy, ComponentType }; from 'react'";";";
import LazyWrapper from './LazyWrapper'";";";
// Lazy loading helper function
export const: createLazyComponent = <P extends Record<string, unknown>>(_importFunc: () => Promise<{ default: ComponentType<P> }>
) => {;
  const: LazyComponent = lazy(importFunc);
  
  const: WrappedComponent = (_props: P) => (
=======
import { lazy, ComponentType } from 'react'
import LazyWrapper from './LazyWrapper'

// Lazy loading helper function
export const createLazyComponent = <P extends Record<string, unknown>>(importFunc: () => Promise<{ default: ComponentType<P> }>
) => {
  const LazyComponent = lazy(importFunc);
  
  const WrappedComponent = (props: P) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
    <LazyWrapper>
      <LazyComponent {...props} />
    </LazyWrapper>
  )
  WrappedComponent.displayName = `LazyComponent(${LazyComponent.displayName || 'Unknown'})`";";";
  return WrappedComponent
}

export default createLazyComponent;
