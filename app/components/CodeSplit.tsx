import React, { Suspense, lazy, ComponentType } from 'react';
import { LoadingPage } from './LoadingStates';

interface CodeSplitProps {
  children: React.ReactNode;
  fallback?: React.ComponentType;
}

// Higher-order component for code splitting
export const withCodeSplit = <P extends object>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  fallback?: React.ComponentType
) => {
  const LazyComponent = lazy(importFunc);
  
  return (props: P) => (
    <Suspense fallback={fallback ? <fallback /> : <LoadingPage />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Hook for dynamic imports
export const useCodeSplit = (importFunc: () => Promise<any>) => {
  const [Component, setComponent] = React.useState<ComponentType | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    importFunc()
      .then((module) => {
        setComponent(() => module.default || module);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [importFunc]);

  return { Component, loading, error };
};

// Preload function for critical components
export const preloadComponent = (importFunc: () => Promise<any>) => {
  const link = document.createElement('link');
  link.rel = 'modulepreload';
  link.href = importFunc.toString();
  document.head.appendChild(link);
};

// Code split wrapper component
const CodeSplit: React.FC<CodeSplitProps> = ({ 
  children, 
  fallback = LoadingPage 
}) => {
  return (
    <Suspense fallback={<fallback />}>
      {children}
    </Suspense>
  );
};

export default CodeSplit;