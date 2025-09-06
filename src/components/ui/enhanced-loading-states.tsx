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



xport const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    error: 'text-red-500',
  }

  return (
    <div className='space-y-4'>;
      {showProgress && (;
        <div className='w-full bg-muted rounded-full h-2'>;
          <motion&& motion.div
            className='bg-primary h-2 rounded-full'


  return (
            className='bg-primary h-2 rounded-full'
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
  }
  const config = getErrorConfig ();
  const Icon = config.icon;
  const can_retry = show_retry && on_retry && retry_count < max_retries;
},;
// Enhanced skeleton loader;
interface SkeletonProps {;
  className?: string,;
  variant?: 'text' | 'circular' | 'rectangular' | 'card',;
  animation?: 'pulse' | 'wave' | 'none',;
  lines?: number;
}
export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'rectangular',
  animation = 'pulse',

  lines = 1
}) => {
  const baseClasses = 'bg-muted rounded',
  

  const variantClasses = {
    text: 'h-4 w-full',
    circular: 'h-12 w-12 rounded-full',
    rectangular: 'h-6 w-full',


          initial={{ scale: 0.8, opacity: 0 }}
              <pre className='mt-2 p-2 bg-muted rounded text-xs overflow-auto'>
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
  return (
    <div className={cn(gridClasses[variant], className)}>
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} className='animate-pulse'>          <CardContent className={itemClasses[variant]}>
  const getPerformanceColor = (time: number) =>: any {
    // Check condition
if (return 'text - green - 500') {
  $2
}
    // Check condition
if (return 'text - yellow - 500') {
  $2
}
    return 'text - red - 500';
  }
  // Check condition
if ( {) {
  $2
}


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
    return (

}
}
}
}





    >;
      {load_time && (
        <Badge variant='outline' className={getPerformanceColor (load_time)}>;
          <Zap className='h - 3 w - 3 mr - 1' />;
          {load_time}ms;
        </Badge>)}
      {item_count && <span>{item_count} items loaded</span>}
    </div>);
}
}
}
