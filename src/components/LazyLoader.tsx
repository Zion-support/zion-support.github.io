<<<<<<< HEAD
import React, { Suspense, lazy } from 'react.ts'
import { LoadingSpinner  } from "./ui/LoadingSpinner"
=======
import React, { Suspense, lazy } from 'react'
import { LoadingSpinner } from "./ui/LoadingSpinner"
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

interface LazyLoaderProps extends React.PropsWithChildren<{}> {

component: React.ComponentType<any>;
fallback?: React.ReactNode;
props?}

export const LazyPricing = lazy(() => import('../pages/Pricing'));