=======
'use client';

import React, {;
  Suspense,;
  lazy,;
  useState,;
  useEffect,;
  ComponentType,;
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, AlertTriangle, Wifi, WifiOff, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { logErrorToProduction } from '@/utils/productionLogger';
interface LoadingState {;
  isLoading: boolean;
  error: Error | null;
  retryCount: number;
  isOnline: boolean;

interface DynamicLoaderProps {;
// Enhanced Loading Component;
const EnhancedLoading: React.FC<{;
  progress?: number;
  message?: string;
  showProgress?: boolean;
}> = ({;
  progress = 0,;
  message = 'Loading component...',;
  showProgress = true,;
}) => (;
  <Card className='w-full max-w-md mx-auto'>;
    <CardContent className='p-6'>;
      <div className='flex flex-col items-center space-y-4'>;
        <div className='relative'>;
          <Loader2 className='h-8 w-8 animate-spin text-primary' />          {showProgress && (;
            <motion&& motion.div
              className='absolute inset-0 rounded-full border-2 border-primary'
              style={{
                background: `conic-gradient(from 0deg, var(--primary) 0%, var(--primary) ${progress}%, transparent ${progress}%, transparent 100%)`
  progress?: number;
  message?: string;
  show_progress?: boolean;
}> = ({
  progress = 0,
  message = 'Loading component...',
  show_progress = true,
}) => (

  <Card className="w-full max-w-md mx-auto">
    <CardContent className="p-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          {showProgress && (
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary"
              style={{

                background: `conic-gradient(from 0deg, var(--primary) 0%, var(--primary) ${progress}%, transparent ${progress}%, transparent 100%)`




>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
// Enhanced Error Component
const EnhancedError: React.FC<{
  error: Error
  retry: () => void
  isOnline: boolean
  retryCount: number
  maxRetries: number
}> = ({ error, retry, isOnline, retryCount, maxRetries }) => (
            Try Again
          </Button>
        )}
      </div>
    </CardContent>
  </Card>
=======
)
// Network Status Hook
const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(true)
  useEffect(() => {
    const updateOnlineStatus = () => setIsOnline(navigator.onLine)
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)
    return () => {
      window.removeEventListener ('online', updateOnlineStatus);
      window.removeEventListener ('offline', updateOnlineStatus);
    }
  }, []);
  return is_online;
}
// Advanced Dynamic Component Loader
export const DynamicComponentLoader: React.FC<DynamicLoaderProps> = ({
  importFn
  fallback
  errorFallback
  loadingComponent
  enableRetry = true
  maxRetries = 3
  prefetch = false
  className
  children
  ...props
},) => {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: true
    error: null
    retryCount: 0
    isOnline: true
  })
  const [progress, setProgress] = useState(0)
  const [DynamicComponent, setDynamicComponent] =
    useState<ComponentType<any> | null>(null)
  const isOnline = useNetworkStatus()
  // Simulate loading progress for better UX
  useEffect((,) => {
    if (loadingState.isLoading && !loadingState.error) {
      const interval = setInterval((,) => {
        setProgress(prev => {
          if (prev >= 90) return prev
          return prev + Math.random() * 10
        })
      }, 100)
      return () => clearInterval(interval)
    }
    };
;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    return () => {}; // Return empty cleanup function for other paths
  }, [loadingState.isLoading, loadingState.error])
  // Load component
  const loadComponent = async () => {
    try {
      setLoadingState(prev => ({
        ...prev
        isLoading: true
        error: null
        isOnline
      }))
      setProgress(0)
      const component = await importFn()
      setDynamicComponent(() => component.default)
      setProgress(100)
      setTimeout(() => {
        setLoadingState(prev => ({ ...prev, isLoading: false }))
      }, 300); // Small delay for smoother transition    } catch (error) {
      logErrorToProduction('Dynamic component loading failed:', {
        data: error
      })
      setLoadingState(prev => ({
        ...prev
        isLoading: false
        error: error as Error
        retryCount: prev.retryCount + 1
        isOnline
      }))
    }
  }
  // Retry functionality
  const retry = () => {
    if (loadingState.retryCount < maxRetries) {
      loadComponent()
    }
  }
  // Prefetch on hover/focus
  useEffect((,) => {
    if (prefetch) {
      const prefetchTimer = setTimeout(() => {
        loadComponent()
      }, 100)
      return () => clearTimeout(prefetchTimer)
    } else {
      loadComponent()
      return () => {}; // Return empty cleanup function
    }
  }, [])
  // Update online status
  useEffect(() => {
    setLoadingState(prev => ({ ...prev, isOnline }))
  }, [isOnline])
  // Loading state
  if (loadingState.isLoading) {
    if (loadingComponent) {
      return React.createElement(loadingComponent)
    }
      >
        <EnhancedLoading
          progress={progress}
          message='Loading component...'
          showProgress={true}        />
      </motion.div>
    )
  }
  // Error state
  if (loadingState.error) {
    if (errorFallback) {
      return React.createElement(errorFallback, {
        error: loadingState.error
        retry
      })
    }
          >
        <EnhancedError
          error = {loadingState.error,}
          retry = {retry,}
          isOnline = {loadingState.isOnline,}
          retryCount = {loadingState.retryCount,}
          maxRetries = {maxRetries,}
        />
      </motion.div>
    )


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  }
  // Success state
  if (DynamicComponent) {
    return (
      <Suspense fallback={fallback |<EnhancedLoading />}>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}

// Predefined dynamic loaders for common heavy components
// Note: These are examples - uncomment and install types as needed
// export const DynamicChartComponent = createDynamicComponent(
// Predefined dynamic loaders for common heavy components
// Note: These are examples - uncomment and install types as needed
// export const DynamicChartComponent = createDynamicComponent(
//   (,) => import('recharts').then(module => ({ default: module.LineChart }))
//   () => import('recharts').then(module => ({ default: module.LineChart })),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

//   {
//     loadingComponent: () => (
//       <div className="w-full h-64 bg-muted animate-pulse rounded-lg flex items-center justify-center">
//         <span className="text-muted-foreground">Loading chart...</span>
//       </div>
//     )
//     prefetch: true
//   }
// )
// export const DynamicThreeComponent = createDynamicComponent(

<<<<<<< HEAD
//   {
//     loadingComponent: () => (
//       <div className="w-full h-96 bg-muted animate-pulse rounded-lg flex items-center justify-center">
//         <span className="text-muted-foreground">Loading 3D renderer...</span>
//       </div>
//     )
//   }
<<<<<<< HEAD

// );
