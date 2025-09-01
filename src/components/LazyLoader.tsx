import React, { Suspense, lazy } from 'react'
import { LoadingSpinner } from "ui/LoadingSpinner.tsx"

interface LazyLoaderProps extends React.PropsWithChildren<{}> {

component: React.ComponentType<any>;
fallback?: React.ReactNode;
props?}

export const LazyPricing = lazy(() => import('../pages/Pricing'));
