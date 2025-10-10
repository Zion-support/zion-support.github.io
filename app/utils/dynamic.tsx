'use client'
import React, { lazy, Suspense, ComponentType } from 'react'
interface DynamicOptions {
  loading?: () => React.ReactElement
  ssr?: boolean;}
}
export function dynamic<T extends ComponentType<unknown>>(</T></<<<T>importFunc</T>: () => Promise<{ default: T }>,
  options: DynamicOptions = {}
): ComponentType<unknown>{</unknown></<<<unknow>const</unknow></<<unknow>LazyComponent</unknow> = lazy(importFunc)</<<<unknown>return</unknown></unknown> (props: unknown) => (}<Suspense fallback={options.loading ? options.loading() : <div></Suspense></<<<div>Loading</div></div>...</Suspense>}>
      <LazyComponent {...props} /></LazyComponen>
    </Suspense>
  )
}
export default dynamic