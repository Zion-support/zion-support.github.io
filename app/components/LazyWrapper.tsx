import { Suspense, lazy, ComponentType} from 'react';

interface LazyWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode

<<<<<<< HEAD
const DefaultFallback = () => (
  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20"></div>
=======
 (

        </div></div>

>>>>>>> cursor/fix-errors-and-merge-to-main-b882
)

export const LazyWrapper: React.FC<LazyWrapperProps /> = ({ 
  children, 
<<<<<<< HEAD
  fallback = <DefaultFallback />
}) => {
  return (
    <Suspense fallback="{fallback}"  />{children}
    </Suspense>
=======
  fallback = <DefaultFallback>
  return (
    
    <Suspense fallback="{fallback}">{children}
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
  )

// Higher-order component for lazy loading pages
<<<<<<< HEAD
=======
    
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
export const withLazyLoading = <P extends object />(
  Component: ComponentType<P />,
  fallback?: React.ReactNode
 Promise.resolve({ default: Component }))
  
<<<<<<< HEAD
  return (props: P) => (
    <LazyWrapper fallback="{fallback}" />
      <LazyComponent {...props}  />
    </LazyWrapper>
=======
 (
    
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
  )

// Preload function for critical components
export const preloadComponent = (importFn: () => Promise<any />) => {
  if (typeof window !== 'undefined') {
    // Preload on idle
    if ('requestIdleCallback' in, window) {
 importFn())
    } else {
 importFn(), 0)

<<<<<<< HEAD
export default LazyWrapper;
=======
export default LazyWrapper;
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
