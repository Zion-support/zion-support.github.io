import React, { Suspense, lazy, ComponentType } from 'react''; import LoadingSpinner from './LoadingSpinner''; interface LazyWrapperProps {} children: React.ReactNode; fallback?: React.ReactNode}'
import React, { Suspense, lazy, ComponentType } from 'react'; import LoadingSpinner from './LoadingSpinner'; interface LazyWrapperProps {} children: React.ReactNode; fallback?: React.ReactNode;}'
}
const LazyWrapper: React.FC<LazyWrapperProp s> = ({ } children,; fallback = <LoadingSpinner siz e="lg" tex t="Loading component..." /> }"""
}) => {} return (} <Suspensefallbac k={fallback}> {children} </Suspens e> ); } )}
// Higher-order component for lazy loading; export const withLazyLoading = <Pextends objec t>(;,
Component: ComponentType<P>,; fallback?: React.ReactNode
) => {} const LazyComponent = lazy(() => Promise.resolve({ default: Component })); ) => {} const LazyComponent = lazy(() => Promise.resolve({ default: Component })); return (props: P) => ( <LazyWrapperfallbac k={fallback}><//LazyComponent {...props} /><///LazyWrappe r> ); }
export default LazyWrapper; )}
export default LazyWrapper
}; export default LazyWrapper;''
'""'"'