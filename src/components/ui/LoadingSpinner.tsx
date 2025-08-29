import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'dots' | 'bars' | 'spinner';
  color?: 'primary' | 'secondary' | 'white' | 'custom';
  customColor?: string;
  text?: string;
  className?: string;
  ariaLabel?: string;
}

export function LoadingSpinner({
  size = 'md',
  variant = 'default',
  color = 'primary',
  customColor,
  text,
  className = '',
  ariaLabel = 'Loading...'
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    white: 'text-white',
    custom: customColor ? `text-[${customColor}]` : 'text-blue-600'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} ${colorClasses[color]} animate-pulse`}>
            <div className="w-full h-full bg-current rounded-full" />
          </div>
        );

      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`${sizeClasses.sm} ${colorClasses[color]} bg-current rounded-full`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: i * 0.2
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
                className={`w-1 ${colorClasses[color]} bg-current`}
                style={{ height: size === 'sm' ? '16px' : size === 'md' ? '24px' : size === 'lg' ? '32px' : '40px' }}
                animate={{
                  scaleY: [1, 2, 1]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        );

      case 'spinner':
        return (
          <motion.div
            className={`${sizeClasses[size]} ${colorClasses[color]}`}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="31.416"
                strokeDashoffset="31.416"
                className="animate-spin"
                style={{
                  animation: 'spin 1s linear infinite'
                }}
              />
            </svg>
          </motion.div>
        );

      default:
        return (
          <motion.div
            className={`${sizeClasses[size]} ${colorClasses[color]} border-2 border-current border-t-transparent rounded-full`}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center ${className}`}
      role="status"
      aria-label={ariaLabel}
    >
      {renderSpinner()}
      {text && (
        <motion.p
          className={`mt-2 text-sm ${colorClasses[color]} text-center`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}
      
      {/* Screen reader only text */}
      <span className="sr-only">{ariaLabel}</span>
    </div>
  );
}

// Specialized loading components for common use cases
export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <LoadingSpinner
        size="xl"
        variant="spinner"
        color="white"
        text="Loading page..."
        ariaLabel="Page is loading, please wait"
      />
    </div>
  );
}

export function SectionLoader() {
  return (
    <div className="py-20 flex items-center justify-center">
      <LoadingSpinner
        size="lg"
        variant="default"
        color="primary"
        text="Loading content..."
        ariaLabel="Content is loading, please wait"
      />
    </div>
  );
}

export function InlineLoader() {
  return (
    <LoadingSpinner
      size="sm"
      variant="dots"
      color="primary"
      ariaLabel="Loading in progress"
    />
  );
}

export function ButtonLoader() {
  return (
    <LoadingSpinner
      size="sm"
      variant="spinner"
      color="white"
      ariaLabel="Processing request"
    />
  );
}