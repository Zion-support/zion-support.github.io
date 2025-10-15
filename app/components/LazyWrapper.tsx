
    </div>
  </div>
)
export const LazyWrapper: React.FC<LazyWrapperProps> = ({};)
  fallback = <DefaultFallback>
  children
}) => {}
  return ()
    <fallback={fallback}></>
      {children}
    </>
export const createLazyComponent  = <P extends Record<string, unknown>>()
  importFunc: () => Promise<{ default: ComponentType<P> }>
) => {},
      const LazyComponent  = lazy(importFunc),
      const WrappedComponent  = (props: P) => ()
    <LazyWrapper></LazyWrapper>

