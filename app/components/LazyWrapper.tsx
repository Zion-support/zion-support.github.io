import React from 'react';
    </div>
  </div>
);
export const LazyWrapper: React.FC<LazyWrapperProps></LazyWrapperProps> = ({};)
  fallback = <DefaultFallback></DefaultFallback>
  children
}) => {};
  return ()
    <fallback={fallback}></>
      {children};
    </>
export const createLazyComponent  = <P extends Record<string, unknown></P>>()
  importFunc: () => Promise<{ default: ComponentType<P></P> }>
) => {},
      const LazyComponent  = lazy(importFunc),
      const WrappedComponent  = (props: P) => ()
    <LazyWrapper></LazyWrapper></LazyWrapper>;
