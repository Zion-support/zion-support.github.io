<<<<<<< HEAD
export function EnhancedLoadingSpinner({ size = "md", text = "Loading...", showProgress = false, progress = 0, variant = "futuristic"}: EnhancedLoadingSpinnerProps) { " if (variant === "minimal") { 
=======
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle, AlertCircle, Clock } from 'lucide-react';

interface LoadingState {

  status: 'loading' | 'success' | 'error' | 'idle';
  progress?: number;
  message?: string;
  duration?: number;
}

interface EnhancedLoadingSpinnerProps {

  state?: LoadingState;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'dots' | 'bars' | 'spinner';
  showProgress?: boolean;
  showMessage?: boolean;
  autoComplete?: boolean;
  className?: string;
}

export const EnhancedLoadingSpinner: React.FC<EnhancedLoadingSpinnerProps> = ({

  state = { status: 'loading' },
  size = 'md',
  variant = 'default',
  showProgress = true,
  showMessage = true,
  autoComplete = false,
  className = ''
}) => {

  const [localState, setLocalState] = useState<LoadingState>(state);
  const [progress, setProgress] = useState(0);

  useEffect(() => {

    setLocalState(state);
  }, [state]);

  useEffect(() => {

    if (autoComplete && localState.status === 'loading') {

      const interval = setInterval(() => {

        setProgress(prev => {

          if (prev >= 100) {

            setLocalState(prev => ({ ...prev, status: 'success' }));
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [autoComplete, localState.status]);

  const sizeClasses = {

    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const getSpinnerContent = () => {

    switch (variant) {

      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <motion.div
              className="absolute inset-0 bg-current rounded-full"
              animate={{

                scale: [1, 1.2, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{

                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        );

      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-current rounded-full"
                animate={{

                  y: [0, -10, 0]
                }}
                transition={{

                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        );

      case 'bars':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-1 bg-current rounded-full"
                animate={{

                  height: [10, 20, 10]
                }}
                transition={{

                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        );

      case 'spinner':
        return (
          <motion.div
            className={`${sizeClasses[size]} border-2 border-current border-t-transparent rounded-full`}
            animate={{ rotate: 360 }}
            transition={{

              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );

      default:
        return <Loader2 className={`${sizeClasses[size]} animate-spin`} />;
    }
  };

  const getStatusIcon = () => {

    switch (localState.status) {

      case 'success':
        return <CheckCircle className={`${sizeClasses[size]} text-green-500`} />;
      case 'error':
        return <AlertCircle className={`${sizeClasses[size]} text-red-500`} />;
      case 'idle':
        return <Clock className={`${sizeClasses[size]} text-gray-400`} />;
      default:
        return getSpinnerContent();
    }
  };

  const getStatusColor = () => {

    switch (localState.status) {

      case 'success':
        return 'text-green-600';
      case 'error':
        return 'text-red-600';
      case 'idle':
        return 'text-gray-500';
      default:
        return 'text-blue-600';
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={localState.status}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {getStatusIcon()}
        </motion.div>
      </AnimatePresence>

      {showProgress && localState.status === 'loading' && (
        <div className="mt-4 w-full max-w-xs">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Loading...</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-blue-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </div>
      )}

      {showMessage && localState.message && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-3 text-sm font-medium text-center ${getStatusColor()}`}
        >
          {localState.message}
        </motion.p>
      )}

      {localState.status === 'success' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-sm text-green-600"
        >
          Completed successfully!
        </motion.p>
      )}

      {localState.status === 'error' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-sm text-red-600"
        >
          Something went wrong. Please try again.
        </motion.p>
      )}
    </div>
  );
};

// Page-level loading component
export const PageSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`animate-pulse ${className}`}>
    <div className="h-8 bg-gray-200 rounded mb-6 max-w-2xl"></div>
    <div className="h-4 bg-gray-200 rounded mb-4 max-w-4xl"></div>
    <div className="h-4 bg-gray-200 rounded mb-4 max-w-3xl"></div>
    <div className="h-4 bg-gray-200 rounded mb-8 max-w-2xl"></div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="bg-gray-200 rounded-lg p-6">
          <div className="h-4 bg-gray-300 rounded mb-3"></div>
          <div className="h-3 bg-gray-300 rounded mb-2"></div>
          <div className="h-3 bg-gray-300 rounded mb-4"></div>
          <div className="h-8 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  </div>
);

// Card-level loading component
export const CardSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`animate-pulse bg-white rounded-lg border border-gray-200 p-6 ${className}`}>
    <div className="h-4 bg-gray-200 rounded mb-3"></div>
    <div className="h-3 bg-gray-200 rounded mb-2"></div>
    <div className="h-3 bg-gray-200 rounded mb-4"></div>
    <div className="h-8 bg-gray-200 rounded"></div>
  </div>
);

// Table loading component
export const TableSkeleton: React.FC<{ rows?: number; columns?: number; className?: string }> = ({

  rows = 5, 
  columns = 4, 
  className = '' 
}) => (
  <div className={`animate-pulse ${className}`}>
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
        <div className="flex space-x-4">
          {Array.from({ length: columns }).map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded flex-1"></div>
          ))}
        </div>
      </div>
      
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="px-6 py-4 border-b border-gray-200 last:border-b-0">
          <div className="flex space-x-4">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div key={colIndex} className="h-4 bg-gray-200 rounded flex-1"></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
