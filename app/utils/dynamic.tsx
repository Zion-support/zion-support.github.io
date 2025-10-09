'use client';
import React, { lazy, Suspense, ComponentType } from 'react';
interface DynamicOptions {
  loading?: () => React.ReactElement;
  ssr?: boolean;
}

// Focus management utility
const focusElement = (element: HTMLElement | null) => {
  if (element) {
    element.focus();
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

// Skip to main content functionality
const skipToMain = () => {
  const main = document.querySelector('main');
  if (main) {
    focusElement(main);
  }
};


export function dynamic<T extends ComponentType<unknown>>(
  importFunc: () => Promise<{ default: T }>,
  options: DynamicOptions = {}
): ComponentType<unknown> {
  const LazyComponent = lazy(importFunc);
  return (props: unknown) => (
    <Suspense fallback={options.loading ? options.loading() : <div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
}
export default dynamic;