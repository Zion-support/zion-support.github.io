'use client'
import React, {
  Suspense,
  lazy,
  useState,
  useEffect,
  ComponentType,
} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, AlertTriangle, Wifi, WifiOff, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { logErrorToProduction } from '@/utils/productionLogger';

interface LoadingState {
  isLoading: boolean;
  error: Error | null;
  retryCount: number;
  isOnline: boolean;
}

interface DynamicLoaderProps {
  importFn: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  errorFallback?: React.ComponentType<{ error: Error; retry: () => void }>;
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
  progress?: number;
  message?: string;
  showProgress?: boolean;
}> = ({ progress = 0, message = "Loading...", showProgress = false }) => (
  <Card className="w-full">
    <CardContent className="flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center space-y-4"
      >
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <div className="text-center">
          <p className="text-sm font-medium text-muted-foreground">{message}</p>
          {showProgress && (
            <div className="mt-2 w-48 bg-muted rounded-full h-2">
              <motion.div
                className="bg-primary h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}
        </div>
      </motion.div>
    </CardContent>
  </Card>
);

// Error Fallback Component
const ErrorFallback: React.FC<{ error: Error; retry: () => void }> = ({ error, retry }) => (
  <Card className="w-full border-destructive">
    <CardContent className="flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center space-y-4"
      >
        <AlertTriangle className="h-8 w-8 text-destructive" />
        <div className="text-center">
          <h3 className="text-lg font-semibold text-destructive">Failed to Load Component</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {error.message || 'An unexpected error occurred'}
          </p>
        </div>
        <Button onClick={retry} variant="outline" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          Try Again
        </Button>
      </motion.div>
    </CardContent>
  </Card>
);

// Network Status Component
const NetworkStatus: React.FC<{ isOnline: boolean }> = ({ isOnline }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className={cn(
      "fixed top-4 right-4 z-50 flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium",
      isOnline ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
    )}
  >
    {isOnline ? <Wifi className="h-4 w-4" /> : <WifiOff className="h-4 w-4" />}
    <span>{isOnline ? "Online" : "Offline"}</span>
  </motion.div>
);

const DynamicComponentLoader: React.FC<DynamicLoaderProps> = ({
  importFn,
  fallback,
  errorFallback: ErrorFallbackComponent = ErrorFallback,
  loadingComponent: LoadingComponent = EnhancedLoading,
  enableRetry = true,
  maxRetries = 3,
  prefetch = false,
  className,
  children,
  ...props
}) => {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: true,
    error: null,
    retryCount: 0,
    isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true,
  });

  const [Component, setComponent] = useState<ComponentType<any> | null>(null);

  const loadComponent = async () => {
    if (loadingState.retryCount >= maxRetries) {
      setLoadingState(prev => ({ ...prev, isLoading: false }));
      return;
    }

    setLoadingState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const module = await importFn();
      setComponent(() => module.default);
      setLoadingState(prev => ({ ...prev, isLoading: false, retryCount: 0 }));
    } catch (error) {
      const errorObj = error instanceof Error ? error : new Error('Failed to load component');
      logErrorToProduction('Dynamic component load failed:', { error: errorObj, retryCount: loadingState.retryCount });
      
      setLoadingState(prev => ({
        ...prev,
        isLoading: false,
        error: errorObj,
        retryCount: prev.retryCount + 1,
      }));
    }
  };

  const retry = () => {
    setLoadingState(prev => ({ ...prev, retryCount: 0 }));
    loadComponent();
  };

  useEffect(() => {
    loadComponent();
  }, []);

  useEffect(() => {
    const handleOnline = () => setLoadingState(prev => ({ ...prev, isOnline: true }));
    const handleOffline = () => setLoadingState(prev => ({ ...prev, isOnline: false }));

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (loadingState.error && enableRetry) {
    return (
      <div className={cn("w-full", className)}>
        <ErrorFallbackComponent error={loadingState.error} retry={retry} />
        <AnimatePresence>
          <NetworkStatus isOnline={loadingState.isOnline} />
        </AnimatePresence>
      </div>
    );
  }

  if (loadingState.isLoading) {
    return (
      <div className={cn("w-full", className)}>
        <LoadingComponent />
        <AnimatePresence>
          <NetworkStatus isOnline={loadingState.isOnline} />
        </AnimatePresence>
      </div>
    );
  }

  if (!Component) {
    return fallback || <LoadingComponent />;
  }

  return (
    <div className={cn("w-full", className)}>
      <Suspense fallback={<LoadingComponent />}>
        <Component {...props}>
          {children}
        </Component>
      </Suspense>
      <AnimatePresence>
        <NetworkStatus isOnline={loadingState.isOnline} />
      </AnimatePresence>
    </div>
  );
};

export default DynamicComponentLoader;