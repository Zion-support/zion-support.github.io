export const LazyWrapper: React.FC<LazyWrapperProps /> = ({ 
export const withLazyLoading = <P extends object />(
export const preloadComponent = (importFn: () => Promise<any />) => {;
export default LazyWrapper;
interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}
const DefaultFallback = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
)
  children, ;
  fallback = <DefaultFallback /&gt;</DefaultFallback&gt;}) => {
  return (
    <div>Content</div>
  );
    <Suspense fallback = "{fallback}"  />{children}
    </Suspense>
  )
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
};
// Preload function for critical components;
  if (typeof window !== 'undefined') {
    // Preload on idle;
    if ('requestIdleCallback' in, window) {
      requestIdleCallback(() => importFn())
    } else {
export default function LazyWrapper() {
  return (
    <div>Content</div>
  );
    <div>Component content</div>
  );
}
  return (
    <div>Content</div>
  );
    <>
      <Helmet >
        <title>Lazy Wrapper - Zion Tech Group</title>
        <meta name = "description" content="Professional lazy wrapper by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Lazy Wrapper</h1>
          <p className="text-lg text-gray-300 mb-8">Professional lazy wrapper coming soon.</p>
          <Link >
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>;
  );
}
      setTimeout(() => importFn(), 0)
    }
  }
}