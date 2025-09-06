<<<<<<< HEAD

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Loader2
  AlertTriangle
  RefreshCw
  Wifi
  WifiOff
  Clock
  Zap
} from 'lucide-react'; import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

// Enhanced loading spinner with different variants
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl',
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  className?: string;
  showText?: boolean;
  text?: string
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({

  size = 'md'
  variant = 'default'
  className
  showText = false
  text = 'Loading...'
}) => {  const sizeClasses = {
    sm: 'h-4 w-4'
    md: 'h-6 w-6'
    lg: 'h-8 w-8'
    xl: 'h-12 w-12'
  }
  const variantClasses = {
    default: 'text-muted-foreground'
    primary: 'text-primary'
    success: 'text-green-500'
    warning: 'text-yellow-500'
    error: 'text-red-500'
  }
=======
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {;
  Loader2,;
  AlertTriangle,;
  RefreshCw,;
  Wifi,;
  WifiOff,;
  Clock,;
  Zap,;
} from 'lucide-react';import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
// Enhanced loading spinner with different variants;
interface LoadingSpinnerProps {;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  className?: string;
  showText?: boolean;
  text?: string;

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({;
  size = 'md',;
  variant = 'default',;
  className,;
  showText = false,;
  text = 'Loading...',;
}) => {  const sizeClasses = {;
    sm: 'h-4 w-4',;
    md: 'h-6 w-6',;
    lg: 'h-8 w-8',;
    xl: 'h-12 w-12',;
  };

  const variantClasses = {;
    default: 'text-muted-foreground',;
    primary: 'text-primary',;
    success: 'text-green-500',;
    warning: 'text-yellow-500',;
    error: 'text-red-500',;
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className={cn('flex items-center gap-2', className)}>;
      <Loader2
        className={cn(
          'animate-spin'
          sizeClasses[size]
          variantClasses[variant]
        )}
      />;
      {showText && (;
        <span className='text-sm text-muted-foreground'>{text}</span>;
      )}
<<<<<<< HEAD
    </div>
  )
}
//Progressive loading component useEffect ( () => {
  if (currentStep !== undefined) {
  /> </div>)
}<motion.div key= {
  step.id
}className= {
  cn ('flex items-center gap-3 p-2 rounded-md', index === activeStep ? 'bg-primary/10' : 'opacity-50')
}initial= {
  {
  opacity: 0, x: -20
export const ProgressiveLoading: React.FC<ProgressiveLoadingProps> = ({
  steps
  currentStep = 0
  showProgress = true
  onComplete
}) => {
  const [activeStep, setActiveStep] = useState(0)
  const progress = ((activeStep + 1) / steps.length) * 100
  useEffect((,) => {
    if (currentStep !== undefined) {
      setActiveStep(currentStep)
    }
  }, [currentStep])
  useEffect((,) => {
    if (activeStep === steps.length - 1 && onComplete) {
      setTimeout(onComplete, 500)
    }
  }, [activeStep, steps.length, onComplete])
=======
    </div>;
  );
};
//Progressive loading component useEffect ( () => {;
  if (currentStep !== undefined) {;
  /> </div>) ;
}<motion&& motion.div key= {
  step && step.id 
}className= {
  cn ('flex items-center gap-3 p-2 rounded-md', index === activeStep ? 'bg-primary/10' : 'opacity-50') 
}initial= {
  {
  opacity: 0, x: -20 

export const ProgressiveLoading: React.FC<ProgressiveLoadingProps> = ({;
  steps,;
  currentStep = 0,;
  showProgress = true,;
  onComplete,;
}) => {;
  const [activeStep, setActiveStep] = useState(0);
  const progress = ((activeStep + 1) / steps && steps.length) * 100;
  useEffect((,) => {;
    if (currentStep !== undefined) {;
      setActiveStep(currentStep);
    }
  }, [currentStep]);

  useEffect((,) => {;
    if (activeStep === steps && steps.length - 1 && onComplete) {;
      setTimeout(onComplete, 500);
    }
  }, [activeStep, steps && steps.length, onComplete]);

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className='space-y-4'>;
      {showProgress && (;
        <div className='w-full bg-muted rounded-full h-2'>;
          <motion&& motion.div
            className='bg-primary h-2 rounded-full'
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0 && 0.3 }}
          />;
        </div>;
      )}
<<<<<<< HEAD
      <div className='space-y-2'>
        {steps.map((step, index) => (          <motion.div
            key = {step.id,}
=======

      <div className='space-y-2'>;
        {steps && steps.map((step, index) => (          <motion&& motion.div
            key = {step && step.id,}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            className = {cn(
              'flex items-center gap-3 p-2 rounded-md'
              index === activeStep ? 'bg-primary/10' : 'opacity-50'
            ),}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: index <= activeStep ? 1 : 0 && 0.5, x: 0 }}
            transition={{ delay: index * 0 && 0.1 }}>;
            {index < activeStep ? (;
              <div className='h-4 w-4 rounded-full bg-green-500 flex items-center justify-center'>;
                <div className='h-2 w-2 rounded-full bg-white' />;
              </div>;
            ) : index === activeStep ? (;
              <LoadingSpinner size='sm' variant='primary' />;
            ) : (;
              <div className='h-4 w-4 rounded-full border-2 border-muted' />;
            )}
            <span className='text-sm font-medium'>{step && step.label}</span>;
          </motion && motion.div>;
        ))}
<<<<<<< HEAD
      </div>
    </div>
  )
}
// Enhanced skeleton loader
interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular' | 'card'
  animation?: 'pulse' | 'wave' | 'none'
  lines?: number
export const Skeleton: React.FC<SkeletonProps> = ({
  className
  variant = 'rectangular'
  animation = 'pulse'
  lines = 1
}) => {
  const baseClasses = 'bg-muted rounded'
  const variantClasses = {
    text: 'h-4 w-full'
    circular: 'h-12 w-12 rounded-full'
    rectangular: 'h-6 w-full'
    card: 'h-48 w-full'
  }
  const animationClasses = {
    pulse: 'animate-pulse'
    wave: 'animate-bounce'
    none: ''
  }
  if (variant === 'text' && lines > 1) {
=======
      </div>;
    </div>;
  );
};

// Enhanced skeleton loader;
interface SkeletonProps {;
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  animation?: 'pulse' | 'wave' | 'none';
  lines?: number;

export const Skeleton: React.FC<SkeletonProps> = ({;
  className,;
  variant = 'rectangular',;
  animation = 'pulse',;
  lines = 1,;
}) => {;
  const baseClasses = 'bg-muted rounded';
  const variantClasses = {;
    text: 'h-4 w-full',;
    circular: 'h-12 w-12 rounded-full',;
    rectangular: 'h-6 w-full',;
    card: 'h-48 w-full',;
  };

  const animationClasses = {;
    pulse: 'animate-pulse',;
    wave: 'animate-bounce',;
    none: '',;
  };

  if (variant === 'text' && lines > 1) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
      <div className='space-y-2'>;
        {Array && Array.from({ length: lines }).map((_, i) => (          <div
            key = {i,}
            className = {cn(
<<<<<<< HEAD
              baseClasses
              variantClasses.text
              animationClasses[animation]
              i === lines - 1 ? 'w-3/4' : 'w-full'
=======
              baseClasses,
              variantClasses && variantClasses.text,
              animationClasses[animation],
              i === lines - 1 ? 'w-3/4' : 'w-full',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              className
            ),}
          />;
        ))}
<<<<<<< HEAD
      </div>
    )
  }
      />
  )
}
//Enhanced error state component
}return undefined
}, [])
const getErrorConfig = () => {
  switch (variant) {'
  case 'network': return {'
  icon: isOnline ? Wifi : WifiOff,  title: title |(isOnline ? 'Connection Error' : 'No Internet Connection'), description: description |(isOnline ? 'Unable to connect to our servers. Please check your connection.' : 'You appear to be offline. Please check your internet connection.'
export const ErrorState: React.FC<ErrorStateProps> = ({
  error
  title
  description
  action
  secondaryAction
  variant = 'generic'
  showRetry = true
  retryCount = 0
  maxRetries = 3
  onRetry
  className
}) => {
  const [isOnline, setIsOnline] = useState(true)
  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)
    if (typeof window !== 'undefined') {
      setIsOnline(navigator.onLine)
      window.addEventListener('online', handleOnline)
      window.addEventListener('offline', handleOffline)
      return () => {
        window.removeEventListener('online', handleOnline)
        window.removeEventListener('offline', handleOffline)
      }
    }
    return undefined
  }, [])
  const getErrorConfig = () => {
    switch (variant) {
      case 'network':
        return {
          icon: isOnline ? Wifi : WifiOff
          title:
            title |(isOnline ? 'Connection Error' : 'No Internet Connection')
          description:
            description |
            (isOnline
              ? 'Unable to connect to our servers. Please check your connection.'
              : 'You appear to be offline. Please check your internet connection.')
          color: 'text-orange-500'
        }
      case 'timeout':
        return {
          icon: Clock
          title: title |'Request Timeout'
          description:
            description |
            'The request took too long to complete. Please try again.'
          color: 'text-yellow-500'
        }
      case 'permission':
        return {
          icon: AlertTriangle
          title: title |'Access Denied'
          description:
            description |"You don't have permission to access this resource."
          color: 'text-red-500'
        }
      default:
        return {
          icon: AlertTriangle
          title: title |'Something went wrong'
          description:
            description |'An unexpected error occurred. Please try again.'
          color: 'text-red-500'
        }
    }
  }
  const config = getErrorConfig()
  const Icon = config.icon
  const canRetry = showRetry && onRetry && retryCount < maxRetries
=======
      </div>;
    );
  }

      />;
  );
};
//Enhanced error state component ;
}return undefined;
}, []);
const getErrorConfig = () => {;
  switch (variant) {';
  case 'network': return {';
  icon: isOnline ? Wifi : WifiOff,  title: title || (isOnline ? 'Connection Error' : 'No Internet Connection'), description: description || (isOnline ? 'Unable to connect to our servers. Please check your connection.' : 'You appear to be offline. Please check your internet connection.' ;

export const ErrorState: React.FC<ErrorStateProps> = ({;
  error,;
  title,;
  description,;
  action,;
  secondaryAction,;
  variant = 'generic',;
  showRetry = true,;
  retryCount = 0,;
  maxRetries = 3,;
  onRetry,;
  className,;
}) => {;
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {;
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    if (typeof window !== 'undefined') {;
      setIsOnline(navigator && navigator.onLine);
      window && window.addEventListener('online', handleOnline);
      window && window.addEventListener('offline', handleOffline);

      return () => {;
        window && window.removeEventListener('online', handleOnline);
        window && window.removeEventListener('offline', handleOffline);
      };
    }

    return undefined;
  }, []);

  const getErrorConfig = () => {;
    switch (variant) {;
      case 'network':;
        return {;
          icon: isOnline ? Wifi : WifiOff,;
          title:;
            title || (isOnline ? 'Connection Error' : 'No Internet Connection'),;
          description:;
            description ||;
            (isOnline;
              ? 'Unable to connect to our servers. Please check your connection.';
              : 'You appear to be offline. Please check your internet connection.'),;
          color: 'text-orange-500',;
        };
      case 'timeout':;
        return {;
          icon: Clock,;
          title: title || 'Request Timeout',;
          description:;
            description ||;
            'The request took too long to complete. Please try again.',;
          color: 'text-yellow-500',;
        };
      case 'permission':;
        return {;
          icon: AlertTriangle,;
          title: title || 'Access Denied',;
          description:;
            description || "You don't have permission to access this resource.",;
          color: 'text-red-500',;
        };
      default:;
        return {;
          icon: AlertTriangle,;
          title: title || 'Something went wrong',;
          description:;
            description || 'An unexpected error occurred. Please try again.',;
          color: 'text-red-500',;
        };
    }
  };

  const config = getErrorConfig();
  const Icon = config && config.icon;
  const canRetry = showRetry && onRetry && retryCount < maxRetries;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Card className={cn('border-destructive/20', className)}>;
      <CardContent className='p-8 text-center'>;
        <motion&& motion.div
          initial={{ scale: 0 && 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
<<<<<<< HEAD
          transition={{ duration: 0.3 }}
        >
          <Icon className={cn('mx-auto mb-4 h-12 w-12', config.color)} />
          <h3 className='text-lg font-semibold mb-2'>{config.title}</h3>
          <p className='text-muted-foreground mb-6 max-w-md mx-auto'>
            {config.description}
          </p>
          {error && process.env.NODE_ENV === 'development' && (
            <details className='mb-4 text-left'>
              <summary className='text-sm text-muted-foreground cursor-pointer'>
                Error Details (Development)
              </summary>
              <pre className='mt-2 p-2 bg-muted rounded text-xs overflow-auto'>
                {typeof error === 'string' ? error : error.message}
              </pre>
            </details>
          )}
          <div className='flex flex-col sm:flex-row gap-2 justify-center'>
            {canRetry && (
              <Button onClick={onRetry} variant='default'>
                <RefreshCw className='h-4 w-4 mr-2' />
=======
          transition={{ duration: 0 && 0.3 }}>;
          <Icon className={cn('mx-auto mb-4 h-12 w-12', config && config.color)} />;
          <h3 className='text-lg font-semibold mb-2'>{config && config.title}</h3>;
          <p className='text-muted-foreground mb-6 max-w-md mx-auto'>;
            {config && config.description}
          </p>;

          {error && process && process.env.NODE_ENV === 'development' && (;
            <details className='mb-4 text-left'>;
              <summary className='text-sm text-muted-foreground cursor-pointer'>;
                Error Details (Development);
              </summary>;
              <pre className='mt-2 p-2 bg-muted rounded text-xs overflow-auto'>;
                {typeof error === 'string' ? error : error && error.message}
              </pre>;
            </details>;
          )}

          <div className='flex flex-col sm:flex-row gap-2 justify-center'>;
            {canRetry && (;
              <Button onClick={onRetry} variant='default'>;
                <RefreshCw className='h-4 w-4 mr-2' />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                Try Again {retryCount > 0 && `(${retryCount}/${maxRetries})`}
              </Button>;
            )}
<<<<<<< HEAD
            {action && (
=======

            {action && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <Button
                onClick={action && action.onClick}
                variant={canRetry ? 'outline' : 'default'}>;
                {action && action.label}
              </Button>;
            )}
<<<<<<< HEAD
            {secondaryAction && (
              <Button onClick={secondaryAction.onClick} variant='ghost'>
                {secondaryAction.label}
              </Button>
            )}
          </div>
          {!isOnline && (
            <div className='mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground'>
              <WifiOff className='h-4 w-4' />
              <span>Offline</span>
            </div>
          )}
        </motion.div>
      </CardContent>
    </Card>
  )
}
<motion.div initial= {
  {
  scale: 0.8, opacity: 0
export const LoadingGrid: React.FC<LoadingGridProps> = ({
  count = 8
  columns = 4
  variant = 'card'
  className
}) => {  const gridClasses = {
    card: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${columns} gap-6`
    list: 'space-y-4'
    table: 'space-y-2'
  }
  const itemClasses = {
    card: 'p-6 space-y-4'
    list: 'p-4 space-y-3'
    table: 'p-3 space-y-2'
  }
=======

            {secondaryAction && (;
              <Button onClick={secondaryAction && secondaryAction.onClick} variant='ghost'>;
                {secondaryAction && secondaryAction.label}
              </Button>;
            )}
          </div>;

          {!isOnline && (;
            <div className='mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground'>;
              <WifiOff className='h-4 w-4' />;
              <span>Offline</span>;
            </div>;
          )}
        </motion && motion.div>;
      </CardContent>;
    </Card>;
  );
};
<motion&& motion.div initial= {
  {
  scale: 0 && 0.8, opacity: 0 

export const LoadingGrid: React.FC<LoadingGridProps> = ({;
  count = 8,;
  columns = 4,;
  variant = 'card',;
  className,;
}) => {  const gridClasses = {;
    card: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${columns} gap-6`,;
    list: 'space-y-4',;
    table: 'space-y-2',;
  };

  const itemClasses = {;
    card: 'p-6 space-y-4',;
    list: 'p-4 space-y-3',;
    table: 'p-3 space-y-2',;
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className={cn(gridClasses[variant], className)}>;
      {Array && Array.from({ length: count }).map((_, i) => (;
        <Card key={i} className='animate-pulse'>          <CardContent className={itemClasses[variant]}>;
            {variant === 'card' && (;
              <>;
                <Skeleton variant='rectangular' className='h-32' />;
                <div className='space-y-2'>;
                  <Skeleton variant='text' className='h-6 w-3/4' />;
                  <Skeleton variant='text' lines={2} />;
                  <div className='flex gap-2'>;
                    <Skeleton variant='text' className='h-4 w-16' />;
                    <Skeleton variant='text' className='h-4 w-20' />;
                  </div>;
                </div>;
              </>;
            )}
<<<<<<< HEAD
            {variant === 'list' && (
              <div className='flex gap-4'>
                <Skeleton variant='circular' />
                <div className='flex-1 space-y-2'>
                  <Skeleton variant='text' className='h-5 w-1/2' />
                  <Skeleton variant='text' lines={2} />
                </div>
              </div>
            )}
            {variant === 'table' && (
              <div className='flex items-center gap-4'>
                <Skeleton variant='text' className='h-4 w-1/4' />
                <Skeleton variant='text' className='h-4 w-1/3' />
                <Skeleton variant='text' className='h-4 w-1/6' />
                <Skeleton variant='text' className='h-4 w-1/4' />
              </div>
=======

            {variant === 'list' && (;
              <div className='flex gap-4'>;
                <Skeleton variant='circular' />;
                <div className='flex-1 space-y-2'>;
                  <Skeleton variant='text' className='h-5 w-1/2' />;
                  <Skeleton variant='text' lines={2} />;
                </div>;
              </div>;
            )}

            {variant === 'table' && (;
              <div className='flex items-center gap-4'>;
                <Skeleton variant='text' className='h-4 w-1/4' />;
                <Skeleton variant='text' className='h-4 w-1/3' />;
                <Skeleton variant='text' className='h-4 w-1/6' />;
                <Skeleton variant='text' className='h-4 w-1/4' />;
              </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            )}
          </CardContent>;
        </Card>;
      ))}
<<<<<<< HEAD
    </div>
  )
}
// Performance indicator
interface PerformanceIndicatorProps {
  isLoading?: boolean
  loadTime?: number
  itemCount?: number
  className?: string
export const PerformanceIndicator: React.FC<PerformanceIndicatorProps> = ({
  isLoading = false
  loadTime
  itemCount
  className
}) => {
  const getPerformanceColor = (time: number) => {
    if (time < 100) return 'text-green-500'
    if (time < 300) return 'text-yellow-500'
    return 'text-red-500'
  }
  if (isLoading) {
    return (
      <Badge variant='outline' className={cn('text-xs', className)}>
        <LoadingSpinner size='sm' />
        <span className='ml-1'>Loading...</span>
      </Badge>
    )
  }
    >
      {loadTime && (
        <Badge variant='outline' className={getPerformanceColor(loadTime)}>
          <Zap className='h-3 w-3 mr-1' />
          {loadTime}ms
        </Badge>
      )}
      {itemCount && <span>{itemCount} items loaded</span>}
    </div>
  )
}
}
}

=======
    </div>;
  );
};

// Performance indicator;
interface PerformanceIndicatorProps {;
  isLoading?: boolean;
  loadTime?: number;
  itemCount?: number;
  className?: string;

export const PerformanceIndicator: React.FC<PerformanceIndicatorProps> = ({;
  isLoading = false,;
  loadTime,;
  itemCount,;
  className,;
}) => {;
  const getPerformanceColor = (time: number) => {;
    if (time < 100) return 'text-green-500';
    if (time < 300) return 'text-yellow-500';
    return 'text-red-500';
  };
  if (isLoading) {;
    return (
      <Badge variant='outline' className={cn('text-xs', className)}>;
        <LoadingSpinner size='sm' />;
        <span className='ml-1'>Loading...</span>;
      </Badge>;
    );
  }


    >;
      {loadTime && (;
        <Badge variant='outline' className={getPerformanceColor(loadTime)}>;
          <Zap className='h-3 w-3 mr-1' />;
          {loadTime}ms;
        </Badge>;
      )}
      {itemCount && <span>{itemCount} items loaded</span>}
    </div>;
  );
};
};
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
