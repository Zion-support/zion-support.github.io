import { ComponentType, lazy }; from 'react'";";";
import LazyWrapper from '../components/LazyWrapper'";";";
// Lazy loading helper function
<<<<<<< HEAD
export const: createLazyComponent = (_importFunc: () => Promise<{ default: ComponentType<Record<string, unknown>> }>
) => {;
  const: LazyComponent = lazy(importFunc);
  
  const: WrappedComponent = (_props: Record<string, unknown>) => (
=======
export const createLazyComponent = (importFunc: () => Promise<{ default: ComponentType<Record<string, unknown>> }>
) => {
  const LazyComponent = lazy(importFunc);
  
  const WrappedComponent = (props: Record<string, unknown>) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
    <LazyWrapper>
      <LazyComponent {...props} />
    </LazyWrapper>
  )
  WrappedComponent.displayName = `Lazy(${LazyComponent.displayName || 'Component'})`";";";
  return WrappedComponent
}

export default createLazyComponent;
