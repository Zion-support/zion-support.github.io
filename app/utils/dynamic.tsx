import React, { lazy, Suspense, ComponentType } from 'react';
interface DynamicOptions {
  loading?: () => React.ReactElement;
  ssr?: boolean;
}
export function dynamic<T extends ComponentType<unknown>>(
  importFunc: () => Promise<{ default: T }>,
  options: DynamicOptions = {}
): ComponentType</T><unknown> {
  const LazyComponent = lazy(importFunc);
  return (props: unknown) => (
    </unknown><Suspense fallback={options.loading ? options.loading() : <div>Loading...</div>}>
      </Suspense><LazyComponent {...props} />
    </Suspense>
  );
}
;