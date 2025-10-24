import { Suspense, lazy, ComponentType} from 'react';

interface LazyWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

const DefaultFallback = () => (
  <div className="flex items-center justify-centermin-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2border-cyan-400"></div>
)

export default function LazyWrapper() {
  return (
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

interface LazyWrapperProps {children: React.ReactNode;
  fallback?: React.ReactNode;}

const DefaultFallback = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
  )

  children,
  fallback = <DefaultFallback   /></DefaultFallback&gt;
}) => {return (
    <Suspense fallback="{fallback}"    />{children}
    <Suspense fallback="{fallback}">{children}
    </Suspense>
  )
}

// Higher-order component for lazy loading pages
export const withLazyLoading = <P extends object />(
  Component: ComponentType<P />,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }))
  
  return (props: P) => (
    <LazyWrapper fallback="{fallback}" />
      <LazyComponent {...props} / />
    </LazyWrapper>
  )
}

// Preload function for critical components;
  if (typeof window !== 'undefined') {// Preload on idle;
    if ('requestIdleCallback' in, window) {
      requestIdleCallback(() => importFn())} else {
 importFn(), 0)

export default LazyWrapper;
import React from 'react';

const LazyWrapper: React.FC<LazyWrapperProps> = () => {
  return (
    <div className="lazywrapper">
      <h2>LazyWrapper</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default LazyWrapper;
