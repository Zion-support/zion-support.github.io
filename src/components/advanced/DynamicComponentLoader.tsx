<<<<<<< HEAD
'use client'
=======
'use client';

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
import React, {
  Suspense
  lazy
  useState
  useEffect
  ComponentType
} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, AlertTriangle, Wifi, WifiOff, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {logErrorToProduction} from '@/utils/productionLogger';
interface LoadingState {
  isLoading: boolean
  error: Error | null
  retryCount: number
  isOnline: boolean
interface DynamicLoaderProps {
  importFn: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  errorFallback?: React.ComponentType<{ error: Error; retry: () => void }>
  loadingComponent?: React.ComponentType
  enableRetry?: boolean
  maxRetries?: number
  prefetch?: boolean
  className?: string
  children?: React.ReactNode
  [key: string]: any
// Enhanced Loading Component
const EnhancedLoading: React.FC<{
  progress?: number
  message?: string
  showProgress?: boolean

}> = ({
  progress = 0
  message = 'Loading component...'
  showProgress = true
}) => (
  <Card className='w-full max-w-md mx-auto'>
    <CardContent className='p-6'>
      <div className='flex flex-col items-center space-y-4'>
        <div className='relative'>
          <Loader2 className='h-8 w-8 animate-spin text-primary' />          {showProgress && (
=======
'use client';
import React, { Suspense, lazy, useState, useEffect, ComponentType } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, AlertTriangle, Wifi, WifiOff, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {logErrorToProduction} from '@/utils/productionLogger',;
interface LoadingState {;
  isLoading: boolean;
  error: Error | null;
  retryCount: number;
  isOnline: boolean;
}
;
interface DynamicLoaderProps {;
  importFn: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  errorFallback?: React.ComponentType<{ error: Error, retry: () => void }>;
  loadingComponent?: React.ComponentType;
  enableRetry?: boolean;
  maxRetries?: number;
  prefetch?: boolean;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

// Enhanced Loading Component
const EnhancedLoading: React.FC<{ 
  progress?: number
  message?: string
  showProgress?: boolean
}> = ({ 
  progress = 0,
  message = 'Loading component...', 
  showProgress = true 
}) => (
  <Card className="w-full max-w-md mx-auto">
    <CardContent className="p-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          {showProgress && (
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary"
              style={{
                background: `conic-gradient(from 0deg, var(--primary) 0%, var(--primary) ${progress}%, transparent ${progress}%, transparent 100%)`
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary"
              style={{
<<<<<<< HEAD
                background: `conic-gradient(from 0deg, var(--primary) 0%, var(--primary) ${progress}%, transparent ${progress}%, transparent 100%)`,
=======
                background: `conic-gradient(from 0deg, var(--primary) 0%, var(--primary) ${progress}%, transparent ${progress}%, transparent 100%)`
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              }}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
          )}
        </div>
        <div className="text-center">
          <p className="text-sm font-medium">{message}</p>
          {showProgress && (
            <p className="text-xs text-muted-foreground mt-1">
              {Math.round(progress)}% loaded
            </p>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
)
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// Enhanced Error Component
const EnhancedError: React.FC<{
  error: Error
  retry: () => void
  isOnline: boolean
  retryCount: number
  maxRetries: number
}> = ({ error, retry, isOnline, retryCount, maxRetries }) => (
<<<<<<< HEAD
  <Card className='w-full max-w-md mx-auto border-red-200 bg-red-50 dark:bg-red-900/10'>
    <CardContent className='p-6'>
      <div className='flex flex-col items-center space-y-4'>
        <div className='p-3 rounded-full bg-red-100 dark:bg-red-900/20'>          {isOnline ? (
            <AlertTriangle className='h-6 w-6 text-red-600' />
=======
  <Card className="w-full max-w-md mx-auto border-red-200 bg-red-50 dark:bg-red-900/10">
    <CardContent className="p-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="p-3 rounded-full bg-red-100 dark:bg-red-900/20">
          {isOnline ? (
            <AlertTriangle className="h-6 w-6 text-red-600" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          ) : (
            <WifiOff className="h-6 w-6 text-red-600" />
          )}
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-red-900 dark:text-red-100">
            {isOnline ? 'Loading Failed' : 'Offline'}
          </h3>
<<<<<<< HEAD
          <p className='text-sm text-red-700 dark:text-red-200 mt-1'>
            {isOnline
              ? error.message |'Failed to load component'
              : 'Please check your internet connection'}
          </p>
          {retryCount > 0 && (
            <p className='text-xs text-red-600 dark:text-red-300 mt-2'>
=======
          <p className="text-sm text-red-700 dark:text-red-200 mt-1">
            {isOnline 
              ? error.message || 'Failed to load component'
              : 'Please check your internet connection'
            }
          </p>
          {retryCount > 0 && (
<<<<<<< HEAD
            <p className="text-xs text-red-600 dark:text-red-300 mt-2">
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
            <p className='text-xs text-red-600 dark:text-red-300 mt-2'>
=======
            <p className="text-xs text-red-600 dark:text-red-300 mt-2">
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              Retry {retryCount}/{maxRetries}
            </p>
          )}
        </div>
        {retryCount < maxRetries && (
<<<<<<< HEAD
          <Button
            onClick={retry}
            variant='outline'
            size='sm'
            className='border-red-300 text-red-700 hover:bg-red-100'          >
            <RefreshCw className='h-4 w-4 mr-2' />
=======
          <Button 
            onClick={retry} 
            variant="outline" 
            size="sm"
            className="border-red-300 text-red-700 hover:bg-red-100"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            Try Again
          </Button>
        )}
      </div>
    </CardContent>
  </Card>
<<<<<<< HEAD
)
// Network Status Hook
const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(true)
  useEffect(() => {
    const updateOnlineStatus = () => setIsOnline(navigator.onLine)
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)
    return () => {
      window.removeEventListener('online', updateOnlineStatus)
      window.removeEventListener('offline', updateOnlineStatus)
    }
  }, [])
  return isOnline
}
// Advanced Dynamic Component Loader
}

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
<<<<<<< HEAD
    }
=======
    };
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
          >
=======

      >
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        <EnhancedError
          error = {loadingState.error,}
          retry = {retry,}
          isOnline = {loadingState.isOnline,}
          retryCount = {loadingState.retryCount,}
          maxRetries = {maxRetries,}
        />
      </motion.div>
    )
=======
);
// Network Status Hook;
const useNetworkStatus = () => {;
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {;
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    return () => {;
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);
  return isOnline;
}
;
// Advanced Dynamic Component Loader;
export const DynamicComponentLoader: React.FC<DynamicLoaderProps> = ({;
  importFn,;
  fallback,;
  errorFallback,;
  loadingComponent,;
  enableRetry = true,;
  maxRetries = 3,;
  prefetch = false,;
  className,;
  children,;
  ...props;
}) => {;
  const [loadingState, setLoadingState] = useState<LoadingState>({;
    isLoading: true,;
    error: null,;
    retryCount: 0,;
    isOnline: true;
  });
  const [progress, setProgress] = useState(0);
  const [DynamicComponent, setDynamicComponent] =
    useState<ComponentType<any> | null>(null);
  const isOnline = useNetworkStatus();
  // Simulate loading progress for better UX;
  useEffect(() => {;
    if (loadingState.isLoading && !loadingState.error) {;
      const interval = setInterval(() => {;
        setProgress(prev => {;
          if (prev >= 90) return prev;
          return prev + Math.random() * 10;
        });
      }, 100);
      return () => clearInterval(interval);
    }
;
    return () => {} // Return empty cleanup function for other paths;
  }, [loadingState.isLoading, loadingState.error]);
  // Load component;
  const loadComponent = async () => {;
    try {;
      setLoadingState(prev => ({ ...prev, isLoading: true, error: null, isOnline }));
      setProgress(0);
      const component = await importFn();
      setDynamicComponent(() => component.default);
      setProgress(100);
      setTimeout(() => {;
        setLoadingState(prev => ({ ...prev, isLoading: false }));
      }, 300) // Small delay for smoother transition;
    } catch (error) {;
      logErrorToProduction('Dynamic component loading failed:', { data: error });
      setLoadingState(prev => ({;
        ...prev,;
        isLoading: false,;
        error: error as Error,;
        retryCount: prev.retryCount + 1,;
        isOnline;
      }));
    }
  };

  // Retry functionality
  const retry = () => {
    if (loadingState.retryCount < maxRetries) {
      loadComponent();
    }
  }
;
  // Prefetch on hover/focus;
  useEffect(() => {;
    if (prefetch) {;
      const prefetchTimer = setTimeout(() => {;
        loadComponent();
      }, 100);
      return () => clearTimeout(prefetchTimer);
    } else {
      loadComponent();
      return () => {}; // Return empty cleanup function
    }
  }, []);
  // Update online status;
  useEffect(() => {;
    setLoadingState(prev => ({ ...prev, isOnline }));
  }, [isOnline]);
  // Loading state;
  if (loadingState.isLoading) {;
    if (loadingComponent) {;
      return React.createElement(loadingComponent);
    }
;
    return (;
      <motion.div;
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn("flex items-center justify-center p-8", className)}
      >
        <EnhancedLoading 
          progress={progress} 
          message="Loading component..."
          showProgress={true}
        />;
      </motion.div>;
    );
  }
;
  // Error state;
  if (loadingState.error) {;
    if (errorFallback) {;
      return React.createElement(errorFallback, {;
        error: loadingState.error,;
        retry;
      });
    }
;
    return (;
      <motion.div;
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn("flex items-center justify-center p-8", className)}
      >
        <EnhancedError
          error={loadingState.error}
          retry={retry}
          isOnline={loadingState.isOnline}
          retryCount={loadingState.retryCount}
          maxRetries={maxRetries}
        />;
      </motion.div>;
    );
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
            className = {className,}
          >
            <DynamicComponent {...props}>{children}</DynamicComponent>
          </motion.div>
        </AnimatePresence>
      </Suspense>
    )
  }
  return null
}
// HOC for creating dynamic components easily
}

export const createDynamicComponent = <T extends ComponentType<any>>(
  importFn: (,) => Promise<{ default: T }>
  options?: Omit<DynamicLoaderProps, 'importFn' | 'children'>
) => {
  return (props: React.ComponentProps<T> & { children?: React.ReactNode },) => (
    <DynamicComponentLoader
      importFn = {importFn,}
      {...(options |{})}
      {...(props as any)}
    />
  )
}
=======
            className={className}
          >;
            <DynamicComponent {...props}>;
              {children}
            </DynamicComponent>;
          </motion.div>;
        </AnimatePresence>;
      </Suspense>;
    );
  }

  return null;
}
;
// HOC for creating dynamic components easily;
export const createDynamicComponent = <T extends ComponentType<any>>(;
  importFn: () => Promise<{ default: T }>,;
  options?: Omit<DynamicLoaderProps 'importFn' | 'children'>;
) => {;
  return (props: React.ComponentProps<T> & { children?: React.ReactNode }) => (;
    <DynamicComponentLoader;
      importFn={importFn}
      {...(options || {})}
      {...(props as any)}
    />
  );
}

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// Predefined dynamic loaders for common heavy components
// Note: These are examples - uncomment and install types as needed
<<<<<<< HEAD
// export const DynamicChartComponent = createDynamicComponent(
<<<<<<< HEAD
//   (,) => import('recharts').then(module => ({ default: module.LineChart }))
=======
<<<<<<< HEAD

//
}

export const DynamicChartComponent = createDynamicComponent(
//   () => import('recharts').then(module => ({ default: module.LineChart })),
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
//   () => import('recharts').then(module => ({ default: module.LineChart })),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
//   {
//     loadingComponent: () => (
//       <div className="w-full h-64 bg-muted animate-pulse rounded-lg flex items-center justify-center">
//         <span className="text-muted-foreground">Loading chart...</span>
//       </div>
//     )
//     prefetch: true
//   }
// )
<<<<<<< HEAD
// export const DynamicThreeComponent = createDynamicComponent(
<<<<<<< HEAD
//   (,) => import('three').then(module => ({ default: module.WebGLRenderer }))
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======

//
}

export const DynamicThreeComponent = createDynamicComponent(
//   () => import('three').then(module => ({ default: module.WebGLRenderer })),
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

=======
//   () => import('three').then(module => ({ default: module.WebGLRenderer })),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
//   {
//     loadingComponent: () => (
//       <div className="w-full h-96 bg-muted animate-pulse rounded-lg flex items-center justify-center">
//         <span className="text-muted-foreground">Loading 3D renderer...</span>
//       </div>
//     )
//   }
<<<<<<< HEAD
<<<<<<< HEAD
// )
<<<<<<< HEAD
<<<<<<< HEAD
export default DynamicComponentLoader; export default DynamicComponentLoader
=======
}

export default DynamicComponentLoader;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
export default DynamicComponentLoader; export default DynamicComponentLoader
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// );
<<<<<<< HEAD
;
export default DynamicComponentLoader; export default DynamicComponentLoader ;
;
}
}
=======
export default DynamicComponentLoader;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
