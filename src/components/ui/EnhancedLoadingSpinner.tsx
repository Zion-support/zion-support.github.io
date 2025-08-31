import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle, AlertCircle, Clock, Zap } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  showProgress?: boolean;
  progress?: number;
  message?: string;
  animated?: boolean;
  className?: string;
}

export const EnhancedLoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  showProgress = false,
  progress = 0,
  message,
  animated = true,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const variantConfig = {
    default: {
      color: 'text-zion-cyan',
      bgColor: 'bg-zion-cyan/20',
      icon: Loader2
    },
    success: {
      color: 'text-green-500',
      bgColor: 'bg-green-500/20',
      icon: CheckCircle
    },
    error: {
      color: 'text-red-500',
      bgColor: 'bg-red-500/20',
      icon: AlertCircle
    },
    warning: {
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/20',
      icon: Clock
    },
    info: {
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/20',
      icon: Zap
    }
  };

  const config = variantConfig[variant];
  const IconComponent = config.icon;

  const spinnerVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    },
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    bounce: {
      y: [0, -10, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const progressVariants = {
    initial: { width: 0 },
    animate: { width: `${progress}%` }
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Background circle */}
        <div className={`absolute inset-0 rounded-full ${config.bgColor}`} />
        
        {/* Animated spinner */}
        <AnimatePresence mode="wait">
          {animated && variant === 'default' ? (
            <motion.div
              key="spinner"
              className={`absolute inset-0 rounded-full border-2 border-transparent border-t-current ${config.color}`}
              variants={spinnerVariants}
              animate="rotate"
            />
          ) : (
            <motion.div
              key="icon"
              className={`absolute inset-0 flex items-center justify-center ${config.color}`}
              variants={spinnerVariants}
              animate="pulse"
            >
              <IconComponent className="w-full h-full" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      {showProgress && (
        <div className="mt-4 w-32 bg-zion-slate-darker rounded-full h-2 overflow-hidden">
          <motion.div
            className={`h-full ${config.color.replace('text-', 'bg-')}`}
            variants={progressVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      )}

      {/* Progress percentage */}
      {showProgress && (
        <motion.div
          className="mt-2 text-sm text-zion-slate-light font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {Math.round(progress)}%
        </motion.div>
      )}

      {/* Message */}
      {message && (
        <motion.div
          className="mt-3 text-center text-zion-slate-light text-sm max-w-xs"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {message}
        </motion.div>
      )}
    </div>
  );
};

// Skeleton loading components
export const Skeleton: React.FC<{
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  lines?: number;
}> = ({
  className = '',
  variant = 'rectangular',
  width,
  height,
  lines = 1
}) => {
  const baseClasses = 'animate-pulse bg-zion-slate-darker rounded';
  
  if (variant === 'text') {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} h-4 ${className}`}
            style={{
              width: width || (index === lines - 1 ? '80%' : '100%')
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'circular') {
    return (
      <div
        className={`${baseClasses} ${className}`}
        style={{
          width: width || height || '40px',
          height: height || width || '40px',
          borderRadius: '50%'
        }}
      />
    );
  }

  return (
    <div
      className={`${baseClasses} ${className}`}
      style={{
        width: width || '100%',
        height: height || '20px'
      }}
    />
  );
};

// Card skeleton
export const CardSkeleton: React.FC<{
  className?: string;
  showImage?: boolean;
  showActions?: boolean;
}> = ({ className = '', showImage = true, showActions = true }) => (
  <div className={`bg-zion-slate-dark border border-zion-purple/20 rounded-lg p-4 ${className}`}>
    {showImage && (
      <Skeleton className="w-full h-32 mb-4" />
    )}
    
    <div className="space-y-3">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      
      {showActions && (
        <div className="flex space-x-2 pt-2">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      )}
    </div>
  </div>
);

// Table skeleton
export const TableSkeleton: React.FC<{
  rows?: number;
  columns?: number;
  className?: string;
}> = ({ rows = 5, columns = 4, className = '' }) => (
  <div className={`bg-zion-slate-dark border border-zion-purple/20 rounded-lg overflow-hidden ${className}`}>
    {/* Header */}
    <div className="bg-zion-slate-darker px-4 py-3 border-b border-zion-purple/20">
      <div className="flex space-x-4">
        {Array.from({ length: columns }).map((_, index) => (
          <Skeleton key={index} className="h-4 flex-1" />
        ))}
      </div>
    </div>
    
    {/* Rows */}
    <div className="divide-y divide-zion-purple/20">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="px-4 py-3">
          <div className="flex space-x-4">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <Skeleton key={colIndex} className="h-4 flex-1" />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Page skeleton
export const PageSkeleton: React.FC<{
  className?: string;
  showHeader?: boolean;
  showSidebar?: boolean;
}> = ({ className = '', showHeader = true, showSidebar = true }) => (
  <div className={`min-h-screen bg-zion-slate-dark ${className}`}>
    {showHeader && (
      <div className="bg-zion-slate-darker border-b border-zion-purple/20 p-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-48" />
          <div className="flex space-x-4">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-20" />
          </div>
        </div>
      </div>
    )}
    
    <div className="flex">
      {showSidebar && (
        <div className="w-64 bg-zion-slate-darker border-r border-zion-purple/20 p-4">
          <div className="space-y-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="h-6 w-full" />
            ))}
          </div>
        </div>
      )}
      
      <div className="flex-1 p-6">
        <div className="space-y-6">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
