'use client';
import React, { ComponentType, Suspense } from 'react';

// Dynamic import utility for code splitting
export function dynamic<T = {}>(
  importFunc: () => Promise<{ default: ComponentType<T> }>,
  options?: {
    loading?: ComponentType;
    ssr?: boolean;
  }
) {
  const Component = React.lazy(importFunc);
  
  return function DynamicComponent(props: T) {
    return (
      <Suspense fallback={options?.loading ? <options.loading /> : <div>Loading...</div>}>
        <Component {...props} />
      </Suspense>
    );
  };
}

// Utility for conditional rendering
export function ConditionalRender({ 
  condition, 
  children, 
  fallback = null 
}: {
  condition: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  return condition ? <>{children}</> : <>{fallback}</>;
}

// Utility for error boundaries
export function withErrorBoundary<T extends object>(
  Component: ComponentType<T>,
  fallback?: ComponentType<{ error: Error }>
) {
  return function ErrorBoundaryComponent(props: T) {
    return (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

// Simple error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: ComponentType<{ error: Error }> },
  { hasError: boolean; error?: Error }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback;
      return FallbackComponent ? (
        <FallbackComponent error={this.state.error!} />
      ) : (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          Something went wrong.
        </div>
      );
    }

    return this.props.children;
  }
}