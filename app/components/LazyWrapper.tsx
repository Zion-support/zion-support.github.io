interface LazyWrapperProps { children: React.ReactNode
  fallback?: React.ReactNode }
import React, { Suspense, lazy, ComponentType } from 'react';'
import LoadingSpinner from "'./LoadingSpinner'"
interface LazyWrapperProps { children: React.ReactNode
  fallback?: React.ReactNode}
}
const LazyWrapper: React.FC<LazyWrapperProps> = ({ children, 
  fallback = <LoadingSpinner size=lg text=Loading component..." /> })
}) => { return ( }
    <Suspense fallback={fallback}>
      { children }
    </Suspense>
)}
export default LazyWrapper