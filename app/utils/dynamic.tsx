'use client'
import React, { lazy, Suspense, ComponentType } from 'react'
interface DynamicOptions {
  loading?: () => React.ReactElement;
interface DynamicOptions {}
  loading?: () => React.ReactElement
  ssr?: boolean;}
}
export function dynamic<T extends ComponentType<unknown>>(</T></<<<T>importFunc</T>: () => Promise<{ default: T }>,
  options: DynamicOptions = {}
): ComponentType<unknown>{
  const LazyComponent = lazy(importFunc)</unknown>
  return (props: unknown) => (}<Suspense fallback={options.loading ? options.loading() : <div>Loading...</Suspense>}>
): ComponentType<unknown> {}
  const LazyComponent = lazy(importFunc)
  return (props: unknown) => (}
    <Suspense fallback={options.loading ? options.loading() : <div>Loading...</div>}>
      <LazyComponent {...props} />
'use client';
import React, { lazy, Suspense, ComponentType } from 'react';
}
export function dynamic<T extends ComponentType<unknown>>(importFun)
  t: T }>,
  option,
  s: DynamicOptions = {}
    <Suspense fallback={options.loading ? options.loading() : <div>Loading...</div>}>
      <LazyComponent {...props} /></LazyComponent>
    </Suspense>
  )
}
export default dynamic;