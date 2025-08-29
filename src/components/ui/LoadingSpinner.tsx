import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'futuristic' | 'minimal' | 'pulse';
  text?: string;
  showText?: boolean;
  className?: string;
  ariaLabel?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'futuristic',
  text = 'Loading...',
  showText = true,
  className = '',
  ariaLabel = 'Loading content'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'futuristic':
        return (
          <div className={`relative ${sizeClasses[size]}`}>
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 border-2 border-transparent border-t-cyan-400 border-r-purple-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            {/* Middle ring */}
            <motion.div
              className="absolute inset-1 border-2 border-transparent border-t-purple-500 border-r-pink-500 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner ring */}
            <motion.div
              className="absolute inset-2 border-2 border-transparent border-t-pink-500 border-r-cyan-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            {/* Center dot */}
            <motion.div
              className="absolute inset-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        );

      case 'minimal':
        return (
          <motion.div
            className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-500 rounded-full`}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        );

      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} flex space-x-1`}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-blue-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        );

      default:
        return (
          <div className={`relative ${sizeClasses[size]}`}>
            {/* Main spinner */}
            <motion.div
              className="absolute inset-0 border-4 border-gray-200 border-t-blue-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full"
              animate={{ 
                rotate: 360,
                boxShadow: [
                  "0 0 0 rgba(59, 130, 246, 0.4)",
                  "0 0 20px rgba(59, 130, 246, 0.8)",
                  "0 0 0 rgba(59, 130, 246, 0.4)"
                ]
              }}
              transition={{ 
                rotate: { duration: 1, repeat: Infinity, ease: "linear" },
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </div>
        );
    }
  };

  return (
    <div 
      className={`flex flex-col items-center justify-center space-y-3 ${className}`}
      role="status"
      aria-label={ariaLabel}
      aria-live="polite"
    >
      {/* Spinner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {renderSpinner()}
      </motion.div>

      {/* Loading text */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          className={`text-gray-600 dark:text-gray-400 font-medium ${textSizeClasses[size]}`}
        >
          {text}
        </motion.div>
      )}

      {/* Accessibility: Screen reader only text */}
      <span className="sr-only">{ariaLabel}</span>
    </div>
  );
};

// Enhanced loading states for different contexts
export const PageLoadingSpinner: React.FC<{ message?: string }> = ({ 
  message = "Loading page content..." 
}) => (
  <div className="min-h-screen flex items-center justify-center bg-futuristic">
    <LoadingSpinner 
      size="xl" 
      variant="futuristic" 
      text={message}
      ariaLabel="Loading page content"
    />
  </div>
);

export const ContentLoadingSpinner: React.FC<{ message?: string }> = ({ 
  message = "Loading content..." 
}) => (
  <div className="flex items-center justify-center py-8">
    <LoadingSpinner 
      size="lg" 
      variant="default" 
      text={message}
      ariaLabel="Loading content"
    />
  </div>
);

export const InlineLoadingSpinner: React.FC<{ message?: string }> = ({ 
  message = "Loading..." 
}) => (
  <div className="flex items-center justify-center py-4">
    <LoadingSpinner 
      size="md" 
      variant="minimal" 
      text={message}
      ariaLabel="Loading inline content"
    />
  </div>
);

export const ButtonLoadingSpinner: React.FC<{ size?: 'sm' | 'md' }> = ({ 
  size = 'md' 
}) => (
  <LoadingSpinner 
    size={size} 
    variant="pulse" 
    showText={false}
    ariaLabel="Loading button action"
  />
);

// Skeleton loading components
export const SkeletonLoader: React.FC<{ 
  className?: string;
  lines?: number;
  variant?: 'text' | 'card' | 'avatar';
}> = ({ 
  className = '', 
  lines = 3, 
  variant = 'text' 
}) => {
  if (variant === 'card') {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 space-y-3">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  if (variant === 'avatar') {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="bg-gray-200 dark:bg-gray-700 rounded-full w-12 h-12"></div>
      </div>
    );
  }

  return (
    <div className={`animate-pulse space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-gray-200 dark:bg-gray-700 rounded ${
            i === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        ></div>
      ))}
    </div>
  );
};

// Progress bar loader
export const ProgressLoader: React.FC<{ 
  progress: number;
  total: number;
  className?: string;
  showPercentage?: boolean;
}> = ({ 
  progress, 
  total, 
  className = '', 
  showPercentage = true 
}) => {
  const percentage = Math.min((progress / total) * 100, 100);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Loading...
        </span>
        {showPercentage && (
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {Math.round(percentage)}%
          </span>
        )}
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};
