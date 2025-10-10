// Dynamic component utility

import React, { ComponentType, Suspense, lazy } from 'react';

export interface DynamicComponentProps {
  fallback?: React.ReactNode;
  errorBoundary?: boolean;
  [key: string]: any;
}

/**
 * Create a dynamic component with lazy loading
 */
export function createDynamicComponent<T = any>(
  importFunc: () => Promise<{ default: ComponentType<T> }>,
  options: DynamicComponentProps = {}
): ComponentType<T> {
  const LazyComponent = lazy(importFunc);

  return function DynamicComponent(props: T) {
    const { fallback = <div>Loading...</div>, errorBoundary = true, ...restProps } = options;

    if (errorBoundary) {
      return (
        <ErrorBoundary>
          <Suspense fallback={fallback}>
            <LazyComponent {...(restProps as T)} {...props} />
          </Suspense>
        </ErrorBoundary>
      );
    }

    return (
      <Suspense fallback={fallback}>
        <LazyComponent {...(restProps as T)} {...props} />
      </Suspense>
    );
  };
}

/**
 * Error boundary component
 */
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Dynamic component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Preload a component
 */
export function preloadComponent(importFunc: () => Promise<{ default: ComponentType<any> }>): void {
  importFunc().catch(error => {
    console.error('Failed to preload component:', error);
  });
}

/**
 * Create a dynamic component with preloading
 */
export function createPreloadableComponent<T = any>(
  importFunc: () => Promise<{ default: ComponentType<T> }>,
  options: DynamicComponentProps = {}
): ComponentType<T> & { preload: () => void } {
  const DynamicComponent = createDynamicComponent(importFunc, options);
  
  const PreloadableComponent = DynamicComponent as ComponentType<T> & { preload: () => void };
  PreloadableComponent.preload = () => preloadComponent(importFunc);
  
  return PreloadableComponent;
}

export default createDynamicComponent;