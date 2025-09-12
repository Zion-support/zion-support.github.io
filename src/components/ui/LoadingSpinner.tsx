import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'custom';
  customColor?: string;
  text?: string;
  showText?: boolean;
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars' | 'ripple' | 'skeleton';
  className?: string;
  ariaLabel?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  customColor,
  text = 'Loading...',
  showText = false,
  variant = 'spinner',
  className = '',
  ariaLabel
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  // Color classes
  const colorClasses = {
    primary: 'text-zion-cyan',
    secondary: 'text-zion-purple',
    white: 'text-white',
    custom: ''
  };

  // Get the actual color value
  const getColorValue = () => {
    if (color === 'custom' && customColor) {
      return customColor;
    }
    return '';
  };

  // Spinner variants
  const renderSpinner = () => {
    const baseClasses = `${sizeClasses[size]} ${color === 'custom' ? '' : colorClasses[color]} animate-spin`;
    const customStyle = color === 'custom' ? { color: customColor } : {};

    switch (variant) {
      case 'dots':
        return (
          <div className={`${sizeClasses[size]} flex space-x-1 justify-center items-center`} style={customStyle}>
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-current rounded-full"
                animate={{
                  y: [0, -8, 0],
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
            ))}
          </div>
        );

      case 'pulse':
        return (
          <motion.div
            className={`${sizeClasses[size]} bg-current rounded-full`}
            style={customStyle}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );

      case 'bars':
        return (
          <div className={`${sizeClasses[size]} flex space-x-1 justify-center items-center`} style={customStyle}>
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className="w-1 bg-current rounded-full"
                style={{
                  height: size === 'sm' ? '12px' : size === 'md' ? '16px' : size === 'lg' ? '20px' : '24px'
                }}
                animate={{
                  scaleY: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: index * 0.15
                }}
              />
            ))}
          </div>
        );

      case 'ripple':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="absolute inset-0 border-2 border-current rounded-full"
                animate={{
                  scale: [0, 1],
                  opacity: [1, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
            ))}
          </div>
        );

      case 'spinner':
      default:
        return (
          <svg 
            className={baseClasses} 
            style={customStyle}
            viewBox="0 0 24 24" 
            fill="none"
            aria-hidden="true"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        );
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-2 ${className}`}>
      {renderSpinner()}
      {showText && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`text-sm ${
            color === 'custom' ? '' : colorClasses[color]
          }`}
          style={color === 'custom' ? { color: customColor } : {}}
          aria-label={ariaLabel || text}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

// Skeleton Components
export const Skeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`animate-pulse bg-zion-slate-light/20 rounded ${className}`} />
);

export const CardSkeleton: React.FC = () => (
  <div className="bg-white dark:bg-zion-slate-dark rounded-lg p-6 shadow-sm border border-zion-slate-light/20">
    <div className="flex items-center space-x-4 mb-4">
      <Skeleton className="w-12 h-12 rounded-full" />
      <div className="flex-1">
        <Skeleton className="h-4 w-3/4 mb-2" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-5/6 mb-2" />
    <Skeleton className="h-4 w-4/6" />
  </div>
);

export const ListSkeleton: React.FC<{ items?: number }> = ({ items = 3 }) => (
  <div className="space-y-3">
    {Array.from({ length: items }).map((_, index) => (
      <div key={index} className="flex items-center space-x-3">
        <Skeleton className="w-8 h-8 rounded-full" />
        <div className="flex-1">
          <Skeleton className="h-4 w-3/4 mb-1" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
    ))}
  </div>
);

export const TableSkeleton: React.FC<{ rows?: number; columns?: number }> = ({ 
  rows = 5, 
  columns = 4 
}) => (
  <div className="overflow-hidden rounded-lg border border-zion-slate-light/20">
    {/* Header */}
    <div className="bg-zion-slate-light/10 px-6 py-3 border-b border-zion-slate-light/20">
      <div className="flex space-x-4">
        {Array.from({ length: columns }).map((_, index) => (
          <Skeleton key={index} className="h-4 w-20" />
        ))}
      </div>
    </div>
    
    {/* Rows */}
    <div className="divide-y divide-zion-slate-light/20">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="px-6 py-4">
          <div className="flex space-x-4">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <Skeleton key={colIndex} className="h-4 w-24" />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const HeroSkeleton: React.FC = () => (
  <div className="bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light rounded-2xl p-8 text-center">
    <Skeleton className="w-32 h-32 mx-auto mb-6 rounded-full" />
    <Skeleton className="h-8 w-3/4 mx-auto mb-4" />
    <Skeleton className="h-6 w-1/2 mx-auto mb-6" />
    <div className="flex justify-center space-x-4">
      <Skeleton className="h-12 w-32 rounded-lg" />
      <Skeleton className="h-12 w-32 rounded-lg" />
    </div>
  </div>
);

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white dark:bg-zion-slate-dark rounded-xl p-6 shadow-lg border border-zion-slate-light/20">
    <div className="flex items-center space-x-4 mb-4">
      <Skeleton className="w-16 h-16 rounded-lg" />
      <div className="flex-1">
        <Skeleton className="h-5 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-5/6 mb-2" />
    <Skeleton className="h-4 w-4/6 mb-4" />
    <div className="flex justify-between items-center">
      <Skeleton className="h-8 w-24 rounded-lg" />
      <Skeleton className="h-8 w-32 rounded-lg" />
    </div>
  </div>
);

// Loading States
export const PageLoading: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner size="lg" variant="dots" showText text="Loading page..." />
  </div>
);

export const ContentLoading: React.FC = () => (
  <div className="flex items-center justify-center py-12">
    <LoadingSpinner size="md" variant="pulse" showText text="Loading content..." />
  </div>
);

export const ButtonLoading: React.FC = () => (
  <LoadingSpinner size="sm" variant="spinner" color="white" />
);

// Loading Overlay
export const LoadingOverlay: React.FC<{ 
  isVisible: boolean; 
  text?: string;
  backdrop?: boolean;
}> = ({ isVisible, text = 'Loading...', backdrop = true }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        backdrop ? 'bg-black/50 backdrop-blur-sm' : ''
      }`}
    >
      <div className="bg-white dark:bg-zion-slate-dark rounded-2xl p-8 shadow-2xl border border-zion-slate-light/20">
        <LoadingSpinner size="lg" variant="dots" showText text={text} />
      </div>
    </motion.div>
  );
};
