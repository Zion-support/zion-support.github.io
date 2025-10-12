import { Suspense, lazy, ComponentTy p e} from 'react';

interface LazyWrapperPro p s {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const DefaultFallback= () => ()
  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
)

export const LazyWrapp e r: React.FC<LazyWrapperPro p s /> = ({)
  children, 
  fallback = <DefaultFallba c k />
}) => {
return (
    <Suspensefallback="{fallback}"  />{children}
    </Suspense>
  )
}

// Higher-ordercomponentfor lazy loading pages;
export const withLazyLoading= <P extends object />()
  Component: ComponentTy p e<P />,
  fallback?: React.ReactNode;
) => {
  const LazyComponent= lazy(() => Promise.resolve({ default: Component ,}))
  
  return (props: P) => ()
    <LazyWrapp erfallback="{fallback}" />
      <LazyCompone n t {...props}  />
    </LazyWrapp e r>
  )
}

// Preload function for critical components;
export const preloadComponent= (importFn: () => Promise<any />) => {
  if (typeof window !== 'undefined') {
    // Preload on idle;
    if ('requestIdleCallba c k' in, window) {
      requestIdleCallba c k(() => importFn())
    }, else {
      setTimeout(() => importFn(), 0)
    }
  }
}

export default LazyWrapp e r;