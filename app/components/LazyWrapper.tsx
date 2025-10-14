import React, { Suspense, lazy, ComponentType } from 'react
import LoadingSpinner from './LoadingSpinner
interface LazyWrapperProps {} children: "React.ReactNode" fallback?: React.ReactNode}
const LazyWrapper: "React.FC<LazyWrapperProps> = ({"} children, fallback = <LoadingSpinner size="lg" text="Loading component..." /> }
}) => {} return (} <Suspense fallback="{fallback}">;" {children} </Suspense> )
}
// Higher-order component for lazy loading
export const withLazyLoading = <P extends object>( Component: "ComponentType<P>"," fallback?: React.ReactNode
) => {} const LazyComponent = lazy(() => Promise.resolve({ default: "Component"}))" return (props: "P) => ("}">;" <LazyComponent {...props} /> </LazyWrapper> )
}
export default LazyWrapper
}
export default LazyWrapper
