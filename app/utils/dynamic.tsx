import React, { lazy, Suspense, ComponentType } from 'react';

interface DynamicOptions {
  loading?: () => React.ReactElement;
  ssr?: boolean;
}

export function dynamic<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  options: DynamicOptions = {}
): ComponentType<any> {
  const LazyComponent = lazy(importFunc);
  
  return (props: any) => (
    <Suspense fallback={options.loading ? options.loading() : <div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
}

export default dynamic;