import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'dots' | 'bars' | 'ripple' | 'orbit';
  color?: 'primary' | 'secondary' | 'white' | 'custom';
  customColor?: string;
  text?: string;
  showText?: boolean;
  className?: string;
  ariaLabel?: string;
}

export function LoadingSpinner({
  size = 'md',
  variant = 'default',
  color = 'primary',
  customColor,
  text = 'Loading...',
  showText = false,
  className = '',
  ariaLabel
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'text-zion-blue',
    secondary: 'text-zion-cyan',
    white: 'text-white',
    custom: customColor ? '' : 'text-zion-blue'
  };

  const getSpinnerContent = () => {
    switch (variant) {
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} ${colorClasses[color]}`}>
            <motion.div
              className="w-full h-full rounded-full bg-current"
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
          <div className={`flex space-x-1 ${sizeClasses[size]}`}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 rounded-full ${colorClasses[color]} bg-current`}
                animate={{
                  scale: [1, 1.5, 1],
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

      case 'bars':
        return (
          <div className={`flex space-x-1 ${sizeClasses[size]}`}>
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className={`w-1 rounded-full ${colorClasses[color]} bg-current`}
                animate={{
                  height: ['40%', '100%', '40%']
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        );

      case 'ripple':
        return (
          <div className={`relative ${sizeClasses[size]}`}>
            <motion.div
              className={`absolute inset-0 rounded-full border-2 border-current ${colorClasses[color]}`}
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
              className={`absolute inset-0 rounded-full border-2 border-current ${colorClasses[color]}`}
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

      case 'orbit':
        return (
          <div className={`relative ${sizeClasses[size]}`}>
            <motion.div
              className={`absolute inset-0 rounded-full border-2 border-transparent border-t-current ${colorClasses[color]}`}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className={`absolute inset-2 rounded-full border-2 border-transparent border-b-current ${colorClasses[color]}`}
              animate={{ rotate: -360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        );

      default:
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
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <motion.path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </svg>
          </motion.div>
        );
    }
  };

  const finalColor = customColor && color === 'custom' ? { color: customColor } : {};
  const ariaLabelText = ariaLabel || text;

  return (
    <div
      className={`flex flex-col items-center justify-center ${className}`}
      role="status"
      aria-label={ariaLabelText}
    >
      {getSpinnerContent()}
      
      {showText && (
        <motion.p
          className={`mt-3 text-sm font-medium ${colorClasses[color]}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={finalColor}
        >
          {text}
        </motion.p>
      )}
      
      {/* Screen reader only text */}
      <span className="sr-only">{ariaLabelText}</span>
    </div>
  );
}

// Full screen loading overlay
export function LoadingOverlay({
  text = 'Loading...',
  variant = 'default',
  size = 'lg',
  color = 'white',
  customColor,
  className = ''
}: Omit<LoadingSpinnerProps, 'showText'> & { className?: string }) {
  return (
    <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 ${className}`}>
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-2xl">
        <LoadingSpinner
          size={size}
          variant={variant}
          color={color}
          customColor={customColor}
          text={text}
          showText={true}
        />
      </div>
    </div>
  );
}

// Inline loading spinner
export function InlineSpinner({
  size = 'sm',
  variant = 'default',
  color = 'primary',
  customColor,
  className = ''
}: Omit<LoadingSpinnerProps, 'showText' | 'text'> & { className?: string }) {
  return (
    <LoadingSpinner
      size={size}
      variant={variant}
      color={color}
      customColor={customColor}
      className={`inline-block ${className}`}
    />
  );
}

// Page loading spinner
export function PageSpinner({
  text = 'Loading page...',
  variant = 'orbit',
  size = 'xl',
  color = 'primary',
  customColor,
  className = ''
}: Omit<LoadingSpinnerProps, 'showText'> & { className?: string }) {
  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ${className}`}>
      <div className="text-center">
        <LoadingSpinner
          size={size}
          variant={variant}
          color={color}
          customColor={customColor}
          text={text}
          showText={true}
        />
        <motion.p
          className="mt-6 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Please wait while we prepare your experience...
        </motion.p>
      </div>
    </div>
  );
}

// Skeleton loading component
export function Skeleton({
  className = '',
  width = 'w-full',
  height = 'h-4',
  rounded = 'rounded'
}: {
  className?: string;
  width?: string;
  height?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`${width} ${height} ${rounded} bg-gray-200 dark:bg-gray-700 animate-pulse ${className}`}
    />
  );
}

// Skeleton text lines
export function SkeletonText({
  lines = 3,
  className = ''
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          height="h-4"
          width={i === lines - 1 ? 'w-3/4' : 'w-full'}
        />
      ))}
    </div>
  );
}

// Skeleton card
export function SkeletonCard({
  className = ''
}: {
  className?: string;
}) {
  return (
    <div className={`bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm ${className}`}>
      <div className="flex items-center space-x-4 mb-4">
        <Skeleton width="w-12" height="h-12" rounded="rounded-full" />
        <div className="flex-1">
          <Skeleton height="h-4" width="w-3/4" />
          <Skeleton height="h-3" width="w-1/2" className="mt-2" />
        </div>
      </div>
      <SkeletonText lines={3} />
    </div>
  );
}