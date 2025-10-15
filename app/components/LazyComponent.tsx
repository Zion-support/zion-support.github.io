import React, { Suspense, lazy, ComponentType } from "react";
import { Loader2 } from "lucide-react";

interface LazyComponentProps {
  fallback?: React.ReactNode;
  delay?: number;
}

const DefaultFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center">
      <Loader2 className="w-8 h-8 animate-spin text-cyan-400 mx-auto mb-4" />
      <div className="text-white text-lg">Loading...</div>
    </div>
  </div>
);

// Higher-order component for lazy loading with custom fallback
function withLazyLoading<P extends object>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  fallback?: React.ReactNode
) {
  const LazyComponent = lazy(importFunc);

  return function LazyWrapper(props: P & LazyComponentProps) {
    const { fallback: customFallback, delay, ...componentProps } = props;
    
    return (
      <Suspense fallback={customFallback || fallback || <DefaultFallback />}>
        <LazyComponent {...(componentProps as P)} />
      </Suspense>
    );
  };
}

// Utility function to create lazy components with error boundaries
export function createLazyComponent<P extends object>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  fallback?: React.ReactNode
) {
  return withLazyLoading(importFunc, fallback);
}

// Pre-configured lazy components
export const LazyHomePage = createLazyComponent(() => import("../pages/HomePage"));
export const LazyAboutPage = createLazyComponent(() => import("../pages/AboutPage"));
export const LazyContactPage = createLazyComponent(() => import("../pages/ContactPage"));
export const LazyServicesPage = createLazyComponent(() => import("../pages/ServicesPage"));

export default withLazyLoading;