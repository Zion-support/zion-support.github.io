import { ComponentType, lazy }; from 'react'";";";"
import LazyWrapper from '../components/LazyWrapper'";";";"
// Lazy loading helper function

    <LazyWrapper>
      <LazyComponent {...props} />
    </LazyWrapper>
  )
  WrappedComponent.displayName = `Lazy(${LazyComponent.displayName || 'Component'})`";";";"
  return WrappedComponent
}

export default createLazyComponent;
