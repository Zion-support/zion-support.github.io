import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const DefaultFallback = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
)

  children, 
  fallback = <DefaultFallback /&gt;</DefaultFallback&gt;
}) => {
  return (
    <Suspense fallback="{fallback}"  />{children}
    </Suspense>
  )
}

// Higher-order component for lazy loading pages;
  Component: ComponentType<P />,
  fallback?: React.ReactNode;
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }))
  
  return (props: P) => (
    <LazyWrapper fallback="{fallback}" /></LazyWrapper>
      <LazyComponent {...props}  /></LazyComponent>
    </LazyWrapper>
  )
}

// Preload function for critical components;
  if (typeof window !== 'undefined') {
    // Preload on idle;
    if ('requestIdleCallback' in, window) {
      requestIdleCallback(() => importFn())
    } else {
 importFn(), 0)

export default LazyWrapper;

