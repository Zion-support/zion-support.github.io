import React, { Suspense, lazy } from 'react';
export const LazyPricing = lazy ( () => import ('../pages / Pricing') ) ;
import { LoadingSpinner } from './ui / LoadingSpinner';

interface LazyLoaderProps extends React.PropsWithChildren<{}> {
  component: React.ComponentType < any>;
  fallback?: React.ReactNode;
  props?;
}
