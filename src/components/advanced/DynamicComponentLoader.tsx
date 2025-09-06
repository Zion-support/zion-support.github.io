<<<<<<< HEAD

            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary"
              style={{
                background: `conic-gradient(from 0deg, var(--primary) 0%, var(--primary) ${progress}%, transparent ${progress}%, transparent 100%)`

            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary"
              style={{

              }}
=======
'use client'
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
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary"
              style={{

                background: `conic-gradient(from 0deg, var(--primary) 0%, var(--primary) ${progress}%, transparent ${progress}%, transparent 100%)`
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary"
              style={{
                background: `conic-gradient(from 0deg, var(--primary) 0%, var(--primary) ${progress}%, transparent ${progress}%, transparent 100%)`,
>>>>>>>               }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
>>>>>>> // Enhanced Error Component
ursor/fix-website-loading-errors-and-merge-6662
              }}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}





>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
// Enhanced Error Component
onst EnhancedError: React.FC<{
  error: Error
  retry: () => void
  isOnline: boolean
  retryCount: number
  maxRetries: number
}> = ({ error, retry, isOnline, retryCount, maxRetries }) => (
<<<<<<< HEAD

          ) : (
=======
  <Card className='w-full max-w-md mx-auto border-red-200 bg-red-50 dark:bg-red-900/10'>
    <CardContent className='p-6'>
      <div className='flex flex-col items-center space-y-4'>
        <div className='p-3 rounded-full bg-red-100 dark:bg-red-900/20'>          {isOnline ? (
            <AlertTriangle className='h-6 w-6 text-red-600' />
>>>>>>>           ) : (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <WifiOff className="h-6 w-6 text-red-600" />
          )}
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-red-900 dark:text-red-100">
            {isOnline ? 'Loading Failed' : 'Offline'}
          </h3>
<<<<<<< HEAD

=======
          <p className='text-sm text-red-700 dark:text-red-200 mt-1'>
            {isOnline
              ? error.message |'Failed to load component'
              : 'Please check your internet connection'}
          </p>
          {retryCount > 0 && (
            <p className='text-xs text-red-600 dark:text-red-300 mt-2'>
            <p className="text-xs text-red-600 dark:text-red-300 mt-2">
            <p className='text-xs text-red-600 dark:text-red-300 mt-2'>
>>>>>>>               Retry {retryCount}/{maxRetries}
            </p>
ursor/fix-website-loading-errors-and-merge-6662
          ) : (
            <WifiOff className='h-6 w-6 text-red-600' />
        </div>;
      </div>;
    </CardContent>;
  </Card>;
);

// Enhanced Error Component;
const EnhancedError: React.FC<{;
  error: Error;
  retry: () => void;
  isOnline: boolean;
  retryCount: number;
  maxRetries: number;
}> = ({ error, retry, isOnline, retryCount, maxRetries }) => (;
  <Card className='w-full max-w-md mx-auto border-red-200 bg-red-50 dark:bg-red-900/10'>;
    <CardContent className='p-6'>;
      <div className='flex flex-col items-center space-y-4'>;
        <div className='p-3 rounded-full bg-red-100 dark:bg-red-900/20'>          {isOnline ? (;
            <AlertTriangle className='h-6 w-6 text-red-600' />;
          ) : (;
            <WifiOff className='h-6 w-6 text-red-600' />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          )}
        </div>;
        <div className='text-center'>;
          <h3 className='font-semibold text-red-900 dark:text-red-100'>;
            {isOnline ? 'Loading Failed' : 'Offline'}

          </h3>;
          <p className='text-sm text-red-700 dark:text-red-200 mt-1'>;
            {isOnline;
              ? error && error.message || 'Failed to load component';

              : 'Please check your internet connection'}
          </p>;
          {retryCount > 0 && (;
            <p className='text-xs text-red-600 dark:text-red-300 mt-2'>;
          </h3>

          <p className="text-sm text-red-700 dark:text-red-200 mt-1">
            {isOnline 
              ? error.message || 'Failed to load component'
              : 'Please check your internet connection'
            }
          </p>
          {retryCount > 0 && (

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              Retry {retryCount}/{maxRetries}
            </p>;
>>>>>>>           )}

        </div>
        {retryCount < maxRetries && (
<<<<<<< HEAD

            Try Again
=======
          <Button
            onClick={retry}
            variant='outline'
            size='sm'
            className='border-red-300 text-red-700 hover:bg-red-100'          >
            <RefreshCw className='h-4 w-4 mr-2' />
>>>>>>>             Try Again
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          </Button>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
        )}
      </div>
    </CardContent>
  </Card>
<<<<<<< HEAD

=======
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
);

// Network Status Hook;
const useNetworkStatus = () => {;
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {;
    const updateOnlineStatus = () => setIsOnline(navigator && navigator.onLine);
    window && window.addEventListener('online', updateOnlineStatus);
    window && window.addEventListener('offline', updateOnlineStatus);

    return () => {;
      window && window.removeEventListener('online', updateOnlineStatus);
      window && window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return isOnline;
};

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
},) => {;
  const [loadingState, setLoadingState] = useState<LoadingState>({;
    isLoading: true,;
    error: null,;
    retryCount: 0,;
    isOnline: true,;
  });
  const [progress, setProgress] = useState(0);
  const [DynamicComponent, setDynamicComponent] =;
    useState<ComponentType<any> | null>(null);
  const isOnline = useNetworkStatus();

  // Simulate loading progress for better UX;
  useEffect((,) => {;
    if (loadingState && loadingState.isLoading && !loadingState && loadingState.error) {;
      const interval = setInterval((,) => {;
        setProgress(prev => {;
          if (prev >= 90) return prev;
          return prev + Math && Math.random() * 10;
        });
      }, 100);

      return () => clearInterval(interval);
    }

    return () => {}; // Return empty cleanup function for other paths;
  }, [loadingState && loadingState.isLoading, loadingState && loadingState.error]);

  // Load component;
  const loadComponent = async () => {;
    try {;
      setLoadingState(prev => ({;
        ...prev,;
        isLoading: true,;
        error: null,;
        isOnline,;
      }));
      setProgress(0);

      const component = await importFn();
      setDynamicComponent(() => component && component.default);
      setProgress(100);

      setTimeout(() => {;
        setLoadingState(prev => ({ ...prev, isLoading: false }));
      }, 300); // Small delay for smoother transition    } catch (error) {;
      logErrorToProduction('Dynamic component loading failed:', {;
        data: error,;
      });
      setLoadingState(prev => ({;
        ...prev,;
        isLoading: false,;
        error: error as Error,;
        retryCount: prev && prev.retryCount + 1,;
        isOnline,;
      }));
    }
  };

  // Retry functionality;
  const retry = () => {;
    if (loadingState && loadingState.retryCount < maxRetries) {;
      loadComponent();
    }
  };

  // Prefetch on hover/focus;
  useEffect((,) => {;
    if (prefetch) {;
      const prefetchTimer = setTimeout(() => {;
        loadComponent();
      }, 100);
      return () => clearTimeout(prefetchTimer);
    } else {;
      loadComponent();
      return () => {}; // Return empty cleanup function;
    }
  }, []);

  // Update online status;
  useEffect(() => {;
    setLoadingState(prev => ({ ...prev, isOnline }));
  }, [isOnline]);
  // Loading state;
  if (loadingState && loadingState.isLoading) {;
    if (loadingComponent) {;
      return React && React.createElement(loadingComponent);
    }


      >;
        <EnhancedLoading
          progress={progress}
          message='Loading component...'
          showProgress={true}        />;
      </motion && motion.div>;
    );
  }

  // Error state;
  if (loadingState && loadingState.error) {;
    if (errorFallback) {;
      return React && React.createElement(errorFallback, {;
        error: loadingState && loadingState.error,;
        retry,;
      });
    }

          >;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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

=======
>>>>>>>   }
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
>>>>>>>   // Success state
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

// Predefined dynamic loaders for common heavy components
// Note: These are examples - uncomment and install types as needed
// export const DynamicChartComponent = createDynamicComponent(

//   {
=======
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
>>>>>>> // Predefined dynamic loaders for common heavy components
// Note: These are examples - uncomment and install types as needed
// export const DynamicChartComponent = createDynamicComponent(
//   (,) => import('recharts').then(module => ({ default: module.LineChart }))
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> //   {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======
//   (,) => import('three').then(module => ({ default: module.WebGLRenderer }))
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

//   {
//     loadingComponent: () => (
//       <div className="w-full h-96 bg-muted animate-pulse rounded-lg flex items-center justify-center">
//         <span className="text-muted-foreground">Loading 3D renderer...</span>
//       </div>
//     )
//   }
<<<<<<< HEAD

// );

=======
// )
export default DynamicComponentLoader; export default DynamicComponentLoader
// );
;
export default DynamicComponentLoader; export default DynamicComponentLoader ;
;
}
}
>>>>>>> 
// );

export default DynamicComponentLoader;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
