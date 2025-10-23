'use client'
import React, { lazy, Suspense, ComponentType } from 'react'
interface DynamicOptions {
loading?: () => React.ReactElement;}
interface DynamicOptions {}
loading?: () => React.ReactElement
ssr?: boolean;}
}
export function dynamic<T>>(</T></<<<T>importFunc</T>: () => Promise<{ default: T }>,
options: DynamicOptions = {}
): ComponentType<unknown>{
const LazyComponent = lazy(importFunc)</unknown>;}
return (props: unknown) => (}<Suspense>Loading...</Suspense>}>
): ComponentType<unknown> {}
const LazyComponent = lazy(importFunc)
return (props: unknown) => (}
<Suspense>Loading...</Suspense>div>}>
<LazyComponent {...props} />
'use client'
import React, { lazy, Suspense, ComponentType } from 'react'
interface DynamicOptions {/* TODO: Fix JSX expression */}
}
export function dynamic<T extends ComponentType<unknown>>(importFun)
c: () => Promise<{/* TODO: Fix JSX expression */}
t: T }>,
option,
s: DynamicOptions = {}
): ComponentType<unknown> {/* TODO: Fix JSX expression */}
<Suspense>Loading...</Suspense>div>}>
<LazyComponent {...props} /></LazyComponent>
</Suspense>
)
}
export default dynamic
