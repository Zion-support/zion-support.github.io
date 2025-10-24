<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
=======
import { Suspense, lazy, ComponentType} from 'react';

interface LazyWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

const DefaultFallback = () => (
  <div className="flex items-center justify-centermin-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2border-cyan-400"></div>
)
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796

export default function LazyWrapper() {
  return (
<<<<<<< HEAD
    <>
    
  </>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"></div>
          <h1 className="text-4xl font-bold text-white mb-6"></h1>
            Service</h1>
          </h1>
          <p className="text-lg text-gray-300 mb-8"></p>
            Professional service services coming soon.</p>
          </p>
          <Link 
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hove,
  r:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          ></Link>
            Contact Us</Link>
            <ArrowRight className="w-5 h-5 ml-2" /></ArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
}
=======
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
=======
    <Suspense fallback="{fallback}">{children}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
    </Suspense>
  )
}

<<<<<<< HEAD
// Higher-order component for lazy loading pages;
  Component: ComponentType<P   />,
  fallback?: React.ReactNode;
) => {const LazyComponent = lazy(() => Promise.resolve({ default: Component}))

  return (props: P) => (
    <LazyWrapper fallback="{fallback}"   /></LazyWrapper>
      <LazyComponent {...props}    /></LazyComponent>
=======
// Higher-order component for lazy loading pages
export const withLazyLoading = <P extends object />(
  Component: ComponentType<P />,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }))
  
  return (props: P) => (
    <LazyWrapper fallback="{fallback}" />
      <LazyComponent {...props} / />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
    </LazyWrapper>
  )
}

// Preload function for critical components;
  if (typeof window !== 'undefined') {// Preload on idle;
    if ('requestIdleCallback' in, window) {
      requestIdleCallback(() => importFn())} else {
 importFn(), 0)

export default LazyWrapper;
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
