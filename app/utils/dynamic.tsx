'use client'
import React, { lazy, Suspense, ComponentType } from 'react'
<<<<<<< HEAD
interface DynamicOptions {
  loading?: () => React.ReactElement;
=======
interface DynamicOptions {}
  loading?: () => React.ReactElement
>>>>>>> origin/merge-error-fixes
  ssr?: boolean;}
}
export function dynamic<T extends ComponentType<unknown>>(</T>
  importFunc: () => Promise<{ default: T }>,
  options: DynamicOptions = {}
<<<<<<< HEAD
): ComponentType<unknown>{
  const LazyComponent = lazy(importFunc)</unknown>
  return (props: unknown) => (}<Suspense fallback={options.loading ? options.loading() : <div>Loading...</Suspense>}>
=======
): ComponentType<unknown> {}
  const LazyComponent = lazy(importFunc)
  return (props: unknown) => (}
    <Suspense fallback={options.loading ? options.loading() : <div>Loading...</div>}>
>>>>>>> origin/merge-error-fixes
      <LazyComponent {...props} />
    </Suspense>
  )
}
export default dynamic;