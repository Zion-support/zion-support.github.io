
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, AlertTriangle, Wifi, WifiOff, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface LoadingState {;
  isLoading: boolean;
  error: Error | null;
  retryCount: number;
  isOnline: boolean;

  enableRetry?: boolean;
  maxRetries?: number;
  prefetch?: boolean;
  className?: string;

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

            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary"
              style={{

              }}
              initial={{ rotate: 0}}
              animate={{ rotate: 360}}
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

// Enhanced Error Component
const EnhancedError: React.FC<{
  error: Error
  retry: () => void
  isOnline: boolean
  retryCount: number
  maxRetries: number,
}> = ({ error, retry, isOnline, retryCount, maxRetries }) => (

              Retry {retryCount}/{maxRetries}
            </p>
          )}
        </div>
        {retryCount < maxRetries && (

          <Button 
            onClick={retry} 
            variant="outline" 
            size="sm"
            className="border-red-300 text-red-700 hover:bg-red-100"
          >
            <RefreshCw className="h-4 w-4 mr-2" />

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    }
  }, [])

  return isOnline
}

    return () => {}; // Return empty cleanup function for other paths
  }, [loadingState.isLoading, loadingState.error])

  // Load component
  const loadComponent = async () => {
    try {
      setLoadingState(prev => ({ ...prev, isLoading: true, error: null, isOnline }))
      setProgress(0)

      const component = await importFn()
      setDynamicComponent(() => component.default)
      setProgress(100)
      
      setTimeout(() => {
        setLoadingState(prev => ({ ...prev, isLoading: false}))
      }, 300) // Small delay for smoother transition

    } catch (error) {
      logErrorToProduction('Dynamic component loading failed:', { data: error})
      setLoadingState(prev = $2;
        isLoading: false,
        error: error as Error,
        retryCount: prev.retryCount + 1,
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
  useEffect(() => {
    if (prefetch) {
      const prefetchTimer = setTimeout(() => {
        loadComponent()
      }, 100)

      return () => clearTimeout(prefetchTimer)
    } else {
      loadComponent()
      return () => {} // Return empty cleanup function
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

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1}}
        className={cn("flex items-center justify-center p-8", className)}
      >
        <EnhancedLoading 
          progress={progress} 
          message="Loading component..."
          showProgress={true}
        />
      </motion.div>
    )
  }

  // Error state
  if (loadingState.error) {
    if (errorFallback) {
      return React.createElement(errorFallback, { 
        error: loadingState.error, 
        retry 
      })
    }
          >

          error={loadingState.error}
          retry={retry}
          isOnline={loadingState.isOnline}
          retryCount={loadingState.retryCount}
          maxRetries={maxRetries}
        />;
      </motion.div>;
    );

  }

  // Success state
  if (DynamicComponent) {
    return (
      <Suspense fallback={fallback || <EnhancedLoading />}>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20}}
            animate={{ opacity: 1, y: 0}}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}

    <DynamicComponentLoader
      importFn={importFn}
      {...(options || {})}
      {...(props as any)}

// Predefined dynamic loaders for common heavy components
// Note: These are examples - uncomment and install types as needed
// export const DynamicChartComponent = createDynamicComponent(

//   {
//     loadingComponent: () => (
//       <div className="w-full h-64 bg-muted animate-pulse rounded-lg flex items-center justify-center">
//         <span className="text-muted-foreground">Loading chart...</span>
//       </div>,
//     ),
//     prefetch: true,
//   }
// )
// export const DynamicThreeComponent = createDynamicComponent(

