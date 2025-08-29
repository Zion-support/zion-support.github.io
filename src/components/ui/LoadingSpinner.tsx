import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'dots' | 'bars' | 'ripple';
  color?: 'primary' | 'secondary' | 'accent' | 'white';
  text?: string;
  className?: string;
  showText?: boolean;
}

export const LoadingSpinner = memo<LoadingSpinnerProps>(({
  size = 'md',
  variant = 'default',
  color = 'primary',
  text = 'Loading...',
  className = '',
  showText = false
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-zion-cyan',
    secondary: 'text-zion-blue',
    accent: 'text-zion-purple',
    white: 'text-white'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'pulse':
        return (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className={`${sizeClasses[size]} ${colorClasses[color]} animate-pulse`}
          >
            <Loader2 className="w-full h-full" />
          </motion.div>
        );

      case 'dots':
        return (
          <div className="flex items-center gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ 
                  duration: 1.2, 
                  repeat: Infinity, 
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
                className={`w-2 h-2 rounded-full ${colorClasses[color]}`}
              />
            ))}
          </div>
        );

      case 'bars':
        return (
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  height: [10, 20, 10],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity, 
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
                className={`w-1 ${colorClasses[color]} rounded-full`}
                style={{ height: '20px' }}
              />
            ))}
          </div>
        );

      case 'ripple':
        return (
          <div className="relative">
            <motion.div
              animate={{ 
                scale: [0, 1],
                opacity: [1, 0]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeOut"
              }}
              className={`absolute inset-0 rounded-full border-2 border-current ${colorClasses[color]}`}
            />
            <motion.div
              animate={{ 
                scale: [0, 1],
                opacity: [1, 0]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                delay: 0.5,
                ease: "easeOut"
              }}
              className={`absolute inset-0 rounded-full border-2 border-current ${colorClasses[color]}`}
            />
            <div className={`${sizeClasses[size]} ${colorClasses[color]} relative z-10`}>
              <Loader2 className="w-full h-full" />
            </div>
          </div>
        );

      default:
        return (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 1, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className={`${sizeClasses[size]} ${colorClasses[color]}`}
          >
            <Loader2 className="w-full h-full" />
          </motion.div>
        );
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      {renderSpinner()}
      
      {showText && text && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm text-zion-text-secondary font-medium"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

// Specialized loading components for common use cases
export const PageLoader = memo(() => (
  <div className="min-h-screen flex items-center justify-center bg-zion-slate">
    <LoadingSpinner 
      size="xl" 
      variant="ripple" 
      color="primary" 
      text="Loading page..." 
      showText={true}
    />
  </div>
));

PageLoader.displayName = 'PageLoader';

export const ContentLoader = memo(() => (
  <div className="flex items-center justify-center py-12">
    <LoadingSpinner 
      size="lg" 
      variant="pulse" 
      color="secondary" 
      text="Loading content..." 
      showText={true}
    />
  </div>
));

ContentLoader.displayName = 'ContentLoader';

export const ButtonLoader = memo(() => (
  <LoadingSpinner 
    size="sm" 
    variant="default" 
    color="white" 
    showText={false}
  />
));

ButtonLoader.displayName = 'ButtonLoader';

export const InlineLoader = memo(() => (
  <LoadingSpinner 
    size="sm" 
    variant="dots" 
    color="primary" 
    showText={false}
  />
));

InlineLoader.displayName = 'InlineLoader';