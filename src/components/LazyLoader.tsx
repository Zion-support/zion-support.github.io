import React, { Suspense, lazy } from 'react'
import { LoadingSpinner } from "./ui/LoadingSpinner"

interface LazyLoaderProps {
  component: React.ComponentType<any>
  fallback?: React.ReactNode
  props?: any
}

export const LazyPricing = lazy(() => import('../pages/Pricing'));