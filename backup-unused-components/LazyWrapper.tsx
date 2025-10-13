<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
<<<<<<< HEAD
interface LazyWrapperProps;
  children: React.ReactNode;
=======
interface LazyWrapperProps ,
    children: React.ReactNode;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  className?: string;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

interface LazyWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LazyWrapper({ className = '', children }: LazyWrapperProps) {
  return (
<<<<<<< HEAD
    <div className={`${className}`}>
      {children}
    </div>
=======
    <>
      <div className="{`lazy-wrapper" ${className}`}></div>
        {children}
<<<<<<< HEAD
        <Link;
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
=======
        <Link>
  to="/contact">
  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
        >
          Contact Us;
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
  </div>
    </>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  );
}
=======
import React, { Suspense, lazy, ComponentType } from 'react';
import { LoadingPage } from './LoadingStates';

interface LazyWrapperProps {
  fallback?: React.ComponentType;
  errorFallback?: React.ComponentType<{ error: Error; retry: () => void }>;
}

/**
 * Enhanced lazy loading wrapper with error boundaries and loading states
 */
export function createLazyWrapper<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  options: LazyWrapperProps = {}
) {
  const LazyComponent = lazy(importFn);
  
  const WrappedComponent: React.FC<React.ComponentProps<T>> = (props) => {
    const FallbackComponent = options.fallback || LoadingPage;
    
    return (
      <Suspense fallback={<FallbackComponent />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
  
  WrappedComponent.displayName = `LazyWrapper(${LazyComponent.displayName || 'Component'})`;
  
  return WrappedComponent;
}

/**
 * Preload a lazy component for better performance
 */
export function preloadLazyComponent(importFn: () => Promise<any>) {
  return () => {
    importFn().catch(() => {
      // Silently handle preload errors
    });
  };
}

export default createLazyWrapper;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
