'use client'
import React, { lazy, Suspense, ComponentType } from 'react'
interface DynamicOptions {
  loading?: () => React.ReactElement
  ssr?: boolean;}
}
export function dynamic<T extends ComponentType<unknown>>(</T>
  importFunc: () => Promise<{ default: T }>,
  options: DynamicOptions = {}
): ComponentType<unknown>{
  const LazyComponent = lazy(importFunc)</unknown>
  return (props: unknown) => (}<Suspense fallback={options.loading ? options.loading() : <div>Loading...</Suspense>}>
      <LazyComponent {...props} />
    </Suspense>
  )
}
export default dynamic