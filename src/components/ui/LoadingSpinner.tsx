import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'custom';
  customColor?: string;
  text?: string;
  showText?: boolean;
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars' | 'ripple';
  className?: string;
  ariaLabel?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  customColor,
  text = 'Loading...',
  showText = true,
  variant = 'spinner',
  className = '',
  ariaLabel
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'text-cyan-500',
    secondary: 'text-purple-500',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    error: 'text-red-500',
    custom: customColor ? `text-[${customColor}]` : 'text-cyan-500'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'spinner':
        return (
          <motion.div
            className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-current border-t-transparent rounded-full`}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            role="status"
            aria-label={ariaLabel || "Loading spinner"}
          />
        );

      case 'dots':
        return (
          <div className="flex space-x-1" role="status" aria-label={ariaLabel || "Loading dots"}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`${sizeClasses[size]} ${colorClasses[color]} bg-current rounded-full`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        );

      case 'pulse':
        return (
          <motion.div
            className={`${sizeClasses[size]} ${colorClasses[color]} bg-current rounded-full`}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            role="status"
            aria-label={ariaLabel || "Loading pulse"}
          />
        );

      case 'bars':
        return (
          <div className="flex space-x-1" role="status" aria-label={ariaLabel || "Loading bars"}>
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className={`w-1 ${colorClasses[color]} bg-current rounded-full`}
                style={{ height: size === 'sm' ? '12px' : size === 'md' ? '16px' : size === 'lg' ? '20px' : '24px' }}
                animate={{
                  scaleY: [1, 2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        );

      case 'ripple':
        return (
          <div className="relative" role="status" aria-label={ariaLabel || "Loading ripple"}>
            <motion.div
              className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-current rounded-full absolute inset-0`}
              animate={{
                scale: [0, 1],
                opacity: [1, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            <motion.div
              className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-current rounded-full absolute inset-0`}
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
            />
          </div>
        );

      default:
        return renderSpinner();
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-3 ${className}`}>
      {renderSpinner()}
      {showText && text && (
        <motion.p
          className={`${textSizeClasses[size]} text-slate-400 font-medium text-center`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

// Specialized loading components for common use cases
export const PageLoadingSpinner: React.FC<{ message?: string }> = ({ message = 'Loading page...' }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <LoadingSpinner
      size="xl"
      variant="spinner"
      text={message}
      showText={true}
      className="text-center"
    />
  </div>
);

export const SectionLoadingSpinner: React.FC<{ message?: string }> = ({ message = 'Loading...' }) => (
  <div className="py-20 bg-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <LoadingSpinner
        size="lg"
        variant="dots"
        text={message}
        showText={true}
        className="text-center"
      />
    </div>
  </div>
);

export const InlineLoadingSpinner: React.FC<{ message?: string }> = ({ message }) => (
  <LoadingSpinner
    size="sm"
    variant="spinner"
    text={message}
    showText={!!message}
    className="inline-flex"
  />
);

export const ButtonLoadingSpinner: React.FC<{ size?: 'sm' | 'md' }> = ({ size = 'sm' }) => (
  <LoadingSpinner
    size={size}
    variant="spinner"
    showText={false}
    className="inline-flex"
  />
);