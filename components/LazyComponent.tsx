

import React, { Suspense, lazy } from 'react',
interface LazyComponentProps {
  component: () => Promise<{ default: React.ComponentType<any> }>,
  fallback?: React.ReactNode,
  [key: string]: any

return (<Suspense fallback= {
  fallback 
}> <LazyLoadedComponent {
  ...props 
}/> </Suspense>) 

}
export default LazyComponent


