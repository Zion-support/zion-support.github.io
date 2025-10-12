export const LazyWrapper: React.FC<LazyWrapperProps /> = ({ 
export const withLazyLoading = <P extends object />(
export const preloadComponent = (importFn: () => Promise<any />) => {
export default LazyWrapper;
interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const DefaultFallback = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
)

  children, 
  fallback = <DefaultFallback /&gt;</DefaultFallback&gt;
}) => {
  return (
    <>
      <Helmet>
        <title>Components - Zion Tech Group</title>
        <meta name="description" content="Professional Components services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Components
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Professional Components services coming soon.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// Higher-order component for lazy loading pages;
  Component: ComponentType<P />,
  fallback?: React.ReactNode;
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }))
  
  return (props: P) => (
    <LazyWrapper fallback="{fallback}" /></LazyWrapper>
      <LazyComponent {...props}  /></LazyComponent>
    </LazyWrapper>
  )
}

// Preload function for critical components;
  if (typeof window !== 'undefined') {
    // Preload on idle;
    if ('requestIdleCallback' in, window) {
      requestIdleCallback(() => importFn())
    } else {
      setTimeout(() => importFn(), 0)
    }
  }
}
