import React, { Suspense, lazy } from 'react.ts'
import { LoadingSpinner               } from './ui/LoadingSpinner'
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
interface LazyLoaderProps extends React.PropsWithChildren<{}> {
component: React.ComponentType<any>;
fallback?: React.ReactNode;
props?}
export const LazyPricing = lazy(() => import('../pages/Pricing'));
