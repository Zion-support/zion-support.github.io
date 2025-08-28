import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'dots' | 'bars' | 'ripple' | 'orbit';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'white';
  text?: string;
  showText?: boolean;
  className?: string;
  ariaLabel?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  color = 'primary',
  text = 'Loading...',
  showText = false,
  className = '',
  ariaLabel,
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const colorClasses = {
    primary: 'text-cyan-500',
    secondary: 'text-slate-500',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    error: 'text-red-500',
    white: 'text-white',
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'pulse':
        return (
          <motion.div
            className={`${sizeClasses[size]} ${colorClasses[color]} animate-pulse`}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-full h-full bg-current rounded-full" />
          </motion.div>
        );

      case 'dots':
        return (
          <div className={`flex space-x-1 ${sizeClasses[size]}`}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 ${colorClasses[color]} bg-current rounded-full`}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        );

      case 'bars':
        return (
          <div className={`flex space-x-1 ${sizeClasses[size]}`}>
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className={`w-1 ${colorClasses[color]} bg-current rounded-full`}
                animate={{
                  height: ['40%', '100%', '40%'],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        );

      case 'ripple':
        return (
          <div className={`relative ${sizeClasses[size]}`}>
            <motion.div
              className={`absolute inset-0 ${colorClasses[color]} bg-current rounded-full`}
              animate={{
                scale: [0, 1],
                opacity: [1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <motion.div
              className={`absolute inset-0 ${colorClasses[color]} bg-current rounded-full`}
              animate={{
                scale: [0, 1],
                opacity: [1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.5,
                ease: "easeOut",
              }}
            />
          </div>
        );

      case 'orbit':
        return (
          <div className={`relative ${sizeClasses[size]}`}>
            <motion.div
              className={`absolute inset-0 ${colorClasses[color]} border-2 border-current border-t-transparent rounded-full`}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className={`absolute inset-2 ${colorClasses[color]} border-2 border-current border-b-transparent rounded-full`}
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
        );

      default:
        return (
          <motion.div
            className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-current border-t-transparent rounded-full`}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        );
    }
  };

  return (
    <div 
      className={`flex flex-col items-center justify-center ${className}`}
      role="status"
      aria-label={ariaLabel || text}
      aria-live="polite"
    >
      {renderSpinner()}
      {showText && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`mt-3 text-sm font-medium ${colorClasses[color]} text-center`}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

// Specialized loading components for common use cases
export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner 
        size="xl" 
        variant="orbit" 
        color="primary" 
        showText 
        text="Loading amazing content..."
      />
    </div>
  </div>
);

export const ButtonLoader: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'sm' }) => (
  <LoadingSpinner 
    size={size} 
    variant="dots" 
    color="white" 
    className="inline-flex"
  />
);

export const CardLoader: React.FC = () => (
  <div className="animate-pulse">
    <div className="h-48 bg-slate-700 rounded-lg mb-4"></div>
    <div className="h-4 bg-slate-700 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-slate-700 rounded w-1/2"></div>
  </div>
);

export const TableLoader: React.FC = () => (
  <div className="animate-pulse space-y-3">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="flex space-x-4">
        <div className="h-4 bg-slate-700 rounded w-1/4"></div>
        <div className="h-4 bg-slate-700 rounded w-1/4"></div>
        <div className="h-4 bg-slate-700 rounded w-1/4"></div>
        <div className="h-4 bg-slate-700 rounded w-1/4"></div>
      </div>
    ))}
  </div>
);

export const SkeletonLoader: React.FC<{ 
  className?: string;
  lines?: number;
  height?: string;
}> = ({ className = '', lines = 3, height = 'h-4' }) => (
  <div className={`animate-pulse space-y-2 ${className}`}>
    {[...Array(lines)].map((_, i) => (
      <div
        key={i}
        className={`bg-slate-700 rounded ${height} ${
          i === lines - 1 ? 'w-3/4' : 'w-full'
        }`}
      />
    ))}
  </div>
);
