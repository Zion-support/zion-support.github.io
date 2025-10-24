<<<<<<< HEAD
'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LazyWrapper() {
  return (
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
    </Suspense>
  )
}

// Higher-order component for lazy loading pages;
  Component: ComponentType<P   />,
  fallback?: React.ReactNode;
) => {const LazyComponent = lazy(() => Promise.resolve({ default: Component}))

  return (props: P) => (
    <LazyWrapper fallback="{fallback}"   /></LazyWrapper>
      <LazyComponent {...props}    /></LazyComponent>
    </LazyWrapper>
  )
}

// Preload function for critical components;
  if (typeof window !== 'undefined') {// Preload on idle;
    if ('requestIdleCallback' in, window) {
      requestIdleCallback(() => importFn())} else {
 importFn(), 0)

export default LazyWrapper;

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
