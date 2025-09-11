<<<<<<< HEAD
<<<<<<< HEAD
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
'use client';
import React, { Suspense, lazy, useState, useEffect, ComponentType } from 'react';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
'use client';

import React, {;
  Suspense,;
  lazy,;
  useState,;
  useEffect,;
  ComponentType,;
} from 'react';
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, AlertTriangle, Wifi, WifiOff, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
<<<<<<< HEAD
<<<<<<< HEAD
import {logErrorToProduction} from '@/utils/productionLogger',;
=======
import { logErrorToProduction } from '@/utils/productionLogger';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import { logErrorToProduction } from '@/utils/productionLogger';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface LoadingState {;
  isLoading: boolean;
  error: Error | null;
  retryCount: number;
  isOnline: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
}
;
interface DynamicLoaderProps {;
  importFn: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  errorFallback?: React.ComponentType<{ error: Error, retry: () => void }>;
  loadingComponent?: React.ComponentType;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

interface DynamicLoaderProps {;
  importFn: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React && React.ReactNode;
  errorFallback?: React && React.ComponentType<{ error: Error; retry: () => void }>;
  loadingComponent?: React && React.ComponentType;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  enableRetry?: boolean;
  maxRetries?: number;
  prefetch?: boolean;
  className?: string;
<<<<<<< HEAD
<<<<<<< HEAD
  children?: React.ReactNode;
  [key: string]: any;
}
=======
  children?: React && React.ReactNode;
  [key: string]: any;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  children?: React && React.ReactNode;
  [key: string]: any;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
  message = 'Loading component...', 
  showProgress = true 
}) => (
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  message = 'Loading component...',
  show_progress = true,
}) => (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  <Card className="w-full max-w-md mx-auto">
    <CardContent className="p-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          {showProgress && (
<<<<<<< HEAD
<<<<<<< HEAD
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary"
              style={{
                background: `conic-gradient(from 0deg, var(--primary) 0%, var(--primary) ${progress}%, transparent ${progress}%, transparent 100%)`
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary"
              style={{
                background: `conic-gradient(from 0deg, var(--primary) 0%, var(--primary) ${progress}%, transparent ${progress}%, transparent 100%)`,
                background: `conic-gradient(from 0deg, var(--primary) 0%, var(--primary) ${progress}%, transparent ${progress}%, transparent 100%)`
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary"
              style={{

                background: `conic-gradient(from 0deg, var(--primary) 0%, var(--primary) ${progress}%, transparent ${progress}%, transparent 100%)`


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              }}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
ursor/fix-website-loading-errors-and-merge-6662

              }}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





// Enhanced Error Component
const EnhancedError: React.FC<{
  error: Error
  retry: () => void
  isOnline: boolean
  retryCount: number
  maxRetries: number
}> = ({ error, retry, isOnline, retryCount, maxRetries }) => (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  <Card className='w-full max-w-md mx-auto border-red-200 bg-red-50 dark:bg-red-900/10'>
    <CardContent className='p-6'>
      <div className='flex flex-col items-center space-y-4'>
        <div className='p-3 rounded-full bg-red-100 dark:bg-red-900/20'>          {isOnline ? (
            <AlertTriangle className='h-6 w-6 text-red-600' />
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  <Card className="w-full max-w-md mx-auto border-red-200 bg-red-50 dark:bg-red-900/10">
    <CardContent className="p-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="p-3 rounded-full bg-red-100 dark:bg-red-900/20">
          {isOnline ? (
            <AlertTriangle className="h-6 w-6 text-red-600" />
<<<<<<< HEAD
<<<<<<< HEAD
          ) : (
            <WifiOff className="h-6 w-6 text-red-600" />
          )}
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-red-900 dark:text-red-100">
            {isOnline ? 'Loading Failed' : 'Offline'}
          </h3>
          <p className='text-sm text-red-700 dark:text-red-200 mt-1'>
            {isOnline
              ? error.message |'Failed to load component'
              : 'Please check your internet connection'}
          </p>
          {retryCount > 0 && (
            <p className='text-xs text-red-600 dark:text-red-300 mt-2'>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
          )}
<<<<<<< HEAD
        </div>;
        <div className='text-center'>;
          <h3 className='font-semibold text-red-900 dark:text-red-100'>;
=======
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-red-900 dark:text-red-100">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD

=======
          <p className='text-sm text-red-700 dark:text-red-200 mt-1'>
            {isOnline
              ? error.message |'Failed to load component'
              : 'Please check your internet connection'}
          </p>
          {retryCount > 0 && (
            <p className='text-xs text-red-600 dark:text-red-300 mt-2'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <p className="text-sm text-red-700 dark:text-red-200 mt-1">
            {isOnline 
              ? error.message || 'Failed to load component'
              : 'Please check your internet connection'
            }
          </p>
          {retryCount > 0 && (
<<<<<<< HEAD
<<<<<<< HEAD
              Retry {retryCount}/{maxRetries}
            </p>;

        </div>
        {retryCount < maxRetries && (
            <p className="text-xs text-red-600 dark:text-red-300 mt-2">
            <p className='text-xs text-red-600 dark:text-red-300 mt-2'>
            <p className="text-xs text-red-600 dark:text-red-300 mt-2">
              Retry {retryCount}/{maxRetries}
            </p>
          )}
=======

              Retry {retryCount}/{maxRetries}
            </p>;
          )}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>
        {retryCount < maxRetries && (
          <Button
            onClick={retry}
            variant='outline'
            size='sm'
            className='border-red-300 text-red-700 hover:bg-red-100'          >
            <RefreshCw className='h-4 w-4 mr-2' />
<<<<<<< HEAD
=======

              Retry {retryCount}/{maxRetries}
            </p>;
          )}

        </div>
        {retryCount < maxRetries && (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Button 
            onClick={retry} 
            variant="outline" 
            size="sm"
            className="border-red-300 text-red-700 hover:bg-red-100"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Try Again
          </Button>
        )}
      </div>
    </CardContent>
  </Card>
<<<<<<< HEAD
    }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
)
// Network Status Hook
const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(true)
  useEffect(() => {
    const updateOnlineStatus = () => setIsOnline(navigator.onLine)
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)
    return () => {
<<<<<<< HEAD
      window.removeEventListener('online', updateOnlineStatus)
      window.removeEventListener('offline', updateOnlineStatus)
    }
  }, [])
  return isOnline
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
=======


            Try Again
          </Button>
        )}

            />)}
        </div>;
        <div className='text - center'>;
          <p className='text - sm font - medium'>{message}</p>;
          {show_progress && (
            <p className='text - xs text - muted - foreground mt - 1'>;
              {Math.round (progress)}% loaded;
            </p>)}
        </div>;
      </div>;
    </CardContent>;
  </Card>);
// Enhanced Error Component;
const EnhancedError: React.FC<{
  error: Error;
  retry: () => void;
  is_online: boolean;
  retry_count: number;
  max_retries: number;
}> = ({ error, retry, is_online, retry_count, max_retries }) => (
  <Card className='w - full max - w-md mx - auto border - red - 200 bg - red - 50 dark:bg - red - 900 / 10'>;
    <CardContent className='p - 6'>;
      <div className='flex flex - col items - center space - y-4'>;
        <div className='p - 3 rounded - full bg - red - 100 dark:bg - red - 900 / 20'>          {is_online ? (
            <AlertTriangle className='h - 6 w - 6 text - red - 600' />) : (
            <WifiOff className='h - 6 w - 6 text - red - 600' />)}
        </div>;
        <div className='text - center'>;
          <h3 className='font - semibold text - red - 900 dark:text - red - 100'>;
            {is_online ? 'Loading Failed' : 'Offline'}
          </h3>;
          <p className='text - sm text - red - 700 dark:text - red - 200 mt - 1'>;
            {is_online;
              ? error.message || 'Failed to load component';
              : 'Please check your internet connection'}
          </p>;
          {retry_count > 0 && (
            <p className='text - xs text - red - 600 dark:text - red - 300 mt - 2'>;
              Retry {retry_count}/{max_retries}
            </p>)}
        </div>;
        {retry_count < max_retries && (
          <Button;
            on_click={retry}
            variant='outline';
            size='sm';
            className='border - red - 300 text - red - 700 hover:bg - red - 100'          >;
            <RefreshCw className='h - 4 w - 4 mr - 2' />;
            Try Again;
          </Button>)}
      </div>;
    </CardContent>;
  </Card>);
// Network Status Hook;
const useNetworkStatus = () =>: any {
  const [is_online, setIsOnline] = useState (true);
  useEffect (() => {
    const updateOnlineStatus = () =>: any setIsOnline (navigator.on_line);
    window.addEventListener ('online', updateOnlineStatus);
    window.addEventListener ('offline', updateOnlineStatus);

    return () => {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      window.removeEventListener ('online', updateOnlineStatus);
      window.removeEventListener ('offline', updateOnlineStatus);
    }
  }, []);
  return is_online;
}


    };
;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      </div>;
    </CardContent>;
  </Card>;
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

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
}) => {;
=======
},) => {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
},) => {;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [loadingState, setLoadingState] = useState<LoadingState>({;
    isLoading: true,;
    error: null,;
    retryCount: 0,;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      setLoadingState(prev => ({;
        ...prev,;
        isLoading: false,;
        error: error as Error,;
<<<<<<< HEAD
<<<<<<< HEAD
        retryCount: prev.retryCount + 1,;
        isOnline;
=======
        retryCount: prev && prev.retryCount + 1,;
        isOnline,;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        retryCount: prev && prev.retryCount + 1,;
        isOnline,;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }));
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD
  // Retry functionality
  const retry = () => {
    if (loadingState.retryCount < maxRetries) {
      loadComponent();
    }
  }
;
  // Prefetch on hover/focus;
  useEffect(() => {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Retry functionality;
  const retry = () => {;
    if (loadingState && loadingState.retryCount < maxRetries) {;
      loadComponent();
    }
  };

  // Prefetch on hover/focus;
  useEffect((,) => {;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (prefetch) {;
      const prefetchTimer = setTimeout(() => {;
        loadComponent();
      }, 100);
      return () => clearTimeout(prefetchTimer);
<<<<<<< HEAD
<<<<<<< HEAD
    } else {
      loadComponent();
      return () => {}; // Return empty cleanup function
    }
  }, []);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } else {;
      loadComponent();
      return () => {}; // Return empty cleanup function;
    }
  }, []);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Update online status;
  useEffect(() => {;
    setLoadingState(prev => ({ ...prev, isOnline }));
  }, [isOnline]);
  // Loading state;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
        <EnhancedError

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          error={loadingState.error}
          retry={retry}
          isOnline={loadingState.isOnline}
          retryCount={loadingState.retryCount}
          maxRetries={maxRetries}
        />;
      </motion.div>;
    );
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
  }


=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className = {className,}
          >
            <DynamicComponent {...props}>{children}</DynamicComponent>
          </motion.div>
        </AnimatePresence>
      </Suspense>
    )
  }
<<<<<<< HEAD
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
=======

        />;
      </motion && motion.div>;
    );
  }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Success state;
  if (DynamicComponent) {;
    return (
      <Suspense fallback={fallback || <EnhancedLoading />}>;
        <AnimatePresence>;
          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0 && 0.3 }}
            className = {className,}>;
            <DynamicComponent {...props}>{children}</DynamicComponent>;
          </motion && motion.div>;

            className={className}
          >;
            <DynamicComponent {...props}>;
              {children}
            </DynamicComponent>;
          </motion.div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </AnimatePresence>;
      </Suspense>;
    );
  }

  return null;
<<<<<<< HEAD
<<<<<<< HEAD
}
;
// HOC for creating dynamic components easily;
export const createDynamicComponent = <T extends ComponentType<any>>(;
  importFn: () => Promise<{ default: T }>,;
  options?: Omit<DynamicLoaderProps 'importFn' | 'children'>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};

// HOC for creating dynamic components easily;
export const createDynamicComponent = <T extends ComponentType<any>>(;
  importFn: (,) => Promise<{ default: T }>,;
  options?: Omit<DynamicLoaderProps, 'importFn' | 'children'>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
) => {;
  return (props: React && React.ComponentProps<T> & { children?: React && React.ReactNode },) => (;
    <DynamicComponentLoader
      importFn = {importFn,}
      {...(options |{})}
      {...(props as any)}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    />
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Predefined dynamic loaders for common heavy components
// Note: These are examples - uncomment and install types as needed
// export const DynamicChartComponent = createDynamicComponent(
//   (,) => import('recharts').then(module => ({ default: module.LineChart }))
<<<<<<< HEAD
=======


// Predefined dynamic loaders for common heavy components
// Note: These are examples - uncomment and install types as needed
// export const DynamicChartComponent = createDynamicComponent(

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
//   () => import('recharts').then(module => ({ default: module.LineChart })),

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
<<<<<<< HEAD
//   (,) => import('three').then(module => ({ default: module.WebGLRenderer }))

//   (,) => import('three').then(module => ({ default: module.WebGLRenderer }))
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

// Advanced Dynamic Component Loader;
export const DynamicComponentLoader: React.FC < DynamicLoaderProps> = ({
  import_fn,
  fallback,
  error_fallback,
  loading_component,
  enable_retry = true,
  max_retries = 3,
  prefetch = false,
  class_name,
  children,
  ...props;
}, ) => {
  const [loading_state, setLoadingState] = useState < LoadingState>({
    is_loading: true,
    error: null,
    retry_count: 0,
    is_online: true,
  });
  const [progress, set_progress] = useState (0);
  const [DynamicComponent, setDynamicComponent] =;
    useState < ComponentType < any> | null>(null);
  const is_online = useNetworkStatus ();
  // Simulate loading progress for better UX;
  useEffect ((, ) => {
    // Check condition
if ( {) {
  $2
}
      const interval = set_interval ((, ) => {
        set_progress (prev => {
          // Check condition
if (return prev) {
  $2
}
          return prev + Math.random () * 10;
        });
      }, 100);
      return () => clear_interval (interval);
    }
    return () => {} // Return empty cleanup function for other paths;
  }, [loading_state.is_loading, loading_state.error]);
  // Load component;
  const load_component = async () => {
    try {
      setLoadingState (prev => ({
        ...prev,
        is_loading: true,
        error: null,
        is_online,
      }));
      set_progress (0);
      const component = await import_fn ();
      setDynamicComponent (() => component.default);
      set_progress (100);
      set_timeout (() => {
        setLoadingState (prev => ({ ...prev, is_loading: false }));
      }, 300); // Small delay for smoother transition    } catch (error) {
      logErrorToProduction ('Dynamic component loading failed:', {
        data: error,
      });
      setLoadingState (prev => ({
        ...prev,
        is_loading: false,
        error: error as Error,
        retry_count: prev.retry_count + 1,
        is_online,
      }));
    }
  }
  // Retry functionality;
  const retry = () =>: any {
    // Check condition
if ( {) {
  $2
}
      load_component ();
    }
  }
  // Prefetch on hover / focus;
  useEffect ((, ) => {
    // Check condition
if ( {) {
  $2
}
      const prefetch_timer = set_timeout (() => {
        load_component ();
      }, 100);
      return () => clear_timeout (prefetch_timer);
    } else {
      load_component ();
      return () => {} // Return empty cleanup function;
    }
  }, []);
  // Update online status;
  useEffect (() => {
    setLoadingState (prev => ({ ...prev, is_online }));
  }, [is_online]);
  // Loading state;
  // Check condition
if ( {) {
  $2
}
    // Check condition
if ( {) {
  $2
}
      return React.create_element (loading_component);
    }
      >;
        <EnhancedLoading;
          progress={progress}
          message='Loading component...';
          show_progress={true}        />;
      </motion.div>);
  }
  // Error state;
  // Check condition
if ( {) {
  $2
}
    // Check condition
if ( {) {
  $2
}
      return React.create_element (error_fallback, {
        error: loading_state.error,
        retry,
      });
    }
          >;
        <EnhancedError;
          error = {loading_state.error, }
          retry = {retry, }
          is_online = {loading_state.is_online, }
          retry_count = {loading_state.retry_count, }
          max_retries = {max_retries, }
        />;
      </motion.div>);
  }
  // Success state;
  // Check condition
if ( {) {
  $2
}
    return (
      <Suspense fallback={fallback || <EnhancedLoading />}>;
        <AnimatePresence>;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            exit={{ opacity: 0, coordinate_y: -20 }}
            transition={{ duration: 0.3 }}
            class_name = {class_name, }
          >;
            <DynamicComponent {...props}>{children}</DynamicComponent>;
          </motion.div>;
        </AnimatePresence>;
      </Suspense>);
  }
  return null;
}
// HOC for creating dynamic components easily;
export const createDynamicComponent = <T extends ComponentType < any>>(
  import_fn: (, ) => Promise<{ default: T }>,
  options?: Omit < DynamicLoaderProps, 'import_fn' | 'children'>) => {
  return (props: React.ComponentProps < T> & { children?: React.ReactNode }, ) => (
    <DynamicComponentLoader;
      import_fn = {import_fn, }
      {...(options || {})}
      {...(props as any)}
    />);
}
// Predefined dynamic loaders for common heavy components;
// Note: These are examples - uncomment and install types as needed;
// export const DynamicChartComponent = createDynamicComponent (
//   (, ) => import ('recharts').then (module => ({ default: module.LineChart })),

//   () => import('three').then(module => ({ default: module.WebGLRenderer })),
//   {
//     loadingComponent: () => (
//       <div className="w-full h-96 bg-muted animate-pulse rounded-lg flex items-center justify-center">
//         <span className="text-muted-foreground">Loading 3D renderer...</span>
//       </div>
//     )
//   }
// )
export default DynamicComponentLoader; export default DynamicComponentLoader
// );
<<<<<<< HEAD
// )
export default DynamicComponentLoader; export default DynamicComponentLoader
// );
;
export default DynamicComponentLoader; export default DynamicComponentLoader ;
;
}
}
export default DynamicComponentLoader;
export default DynamicComponentLoader;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// export const DynamicThreeComponent = createDynamicComponent (
//   (, ) => import ('three').then (module => ({ default: module.WebGLRenderer })),
//   {
//     loading_component: () => (
//       <div className="w - full h - 96 bg - muted animate - pulse rounded - lg flex items - center justify - center">;
//         <span className="text - muted - foreground">Loading 3D renderer...</span>;
//       </div>;
//     );
//   }

    />;
  );
};

// Predefined dynamic loaders for common heavy components;
// Note: These are examples - uncomment and install types as needed;

// export const DynamicChartComponent = createDynamicComponent(;
//   (,) => import('recharts').then(module => ({ default: module && module.LineChart })),;
//   {;
//     loadingComponent: () => (;
//       <div className="w-full h-64 bg-muted animate-pulse rounded-lg flex items-center justify-center">;
//         <span className="text-muted-foreground">Loading chart...</span>;
//       </div>;
//     ),;
//     prefetch: true;
//   }
// );

// export const DynamicThreeComponent = createDynamicComponent(;
//   (,) => import('three').then(module => ({ default: module && module.WebGLRenderer })),;
//   {;
//     loadingComponent: () => (;
//       <div className="w-full h-96 bg-muted animate-pulse rounded-lg flex items-center justify-center">;
//         <span className="text-muted-foreground">Loading 3D renderer...</span>;
//       </div>;
//     );
//   }
// );

export default DynamicComponentLoader;export default DynamicComponentLoader ;

// );
export default DynamicComponentLoader; export default DynamicComponentLoader;


// );

<<<<<<< HEAD
<<<<<<< HEAD
export default DynamicComponentLoader;
=======
export default DynamicComponentLoader;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export default DynamicComponentLoader;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
