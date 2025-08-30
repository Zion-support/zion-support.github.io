import React, { Suspense, lazy } from 'react.ts'
import { LoadingSpinner  } from './ui/LoadingSpinner'

interface LazyLoaderProps extends React.PropsWithChildren<{}> {

component: React.ComponentType<any>;
fallback?: React.ReactNode;
props?}

export const LazyLoader: React.FC<LazyLoaderProps> = ({ 
  component: Component, 
  fallback = <LoadingSpinner />, 
  props = {} 
}) => {
  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  )
}

// Lazy load commonly used components
export const LazyHome = lazy(() => import('../pages/Home'))
export const LazyServices = lazy(() => import('../pages/Services'))
export const LazyAbout = lazy(() => import('../pages/About'))
export const LazyContact = lazy(() => import('../pages/Contact'))
export const LazyPricing = lazy(() => import('../pages/Pricing'))