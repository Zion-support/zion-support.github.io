import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'dots' | 'pulse' | 'spinner' | 'bars' | 'ripple';
  color?: 'primary' | 'secondary' | 'white' | 'custom';
  customColor?: string;
  text?: string;
  showText?: boolean;
  className?: string;
}

export function LoadingSpinner({
  size = 'md',
  variant = 'default',
  color = 'primary',
  customColor,
  text = 'Loading...',
  showText = false,
  className = ''
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'text-blue-500',
    secondary: 'text-purple-500',
    white: 'text-white',
    custom: customColor ? '' : 'text-blue-500'
  };

  const getSpinnerContent = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 rounded-full ${colorClasses[color]}`}
                style={color === 'custom' ? { backgroundColor: customColor } : {}}
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

      case 'pulse':
        return (
          <motion.div
            className={`w-full h-full rounded-full ${colorClasses[color]}`}
            style={color === 'custom' ? { backgroundColor: customColor } : {}}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );

      case 'spinner':
        return (
          <motion.div
            className={`w-full h-full border-2 border-current border-t-transparent rounded-full ${colorClasses[color]}`}
            style={color === 'custom' ? { borderColor: customColor, borderTopColor: 'transparent' } : {}}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );

      case 'bars':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className={`w-1 h-full ${colorClasses[color]}`}
                style={color === 'custom' ? { backgroundColor: customColor } : {}}
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

      case 'ripple':
        return (
          <div className="relative w-full h-full">
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                className={`absolute inset-0 border-2 border-current rounded-full ${colorClasses[color]}`}
                style={color === 'custom' ? { borderColor: customColor } : {}}
                animate={{
                  scale: [0, 1],
                  opacity: [1, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.75
                }}
              />
            ))}
          </div>
        );

      default:
        return (
          <motion.div
            className={`w-full h-full border-2 border-current border-t-transparent rounded-full ${colorClasses[color]}`}
            style={color === 'custom' ? { borderColor: customColor, borderTopColor: 'transparent' } : {}}
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
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={sizeClasses[size]}>
        {getSpinnerContent()}
      </div>
      
      {showText && text && (
        <motion.p
          className={`mt-3 text-sm font-medium ${colorClasses[color]}`}
          style={color === 'custom' ? { color: customColor } : {}}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

// Full screen loading overlay
export function LoadingOverlay({
  text = 'Loading...',
  variant = 'default',
  color = 'white',
  customColor,
  className = ''
}: Omit<LoadingSpinnerProps, 'size' | 'showText'>) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm ${className}`}
    >
      <div className="text-center">
        <LoadingSpinner
          size="xl"
          variant={variant}
          color={color}
          customColor={customColor}
          text={text}
          showText={true}
        />
      </div>
    </motion.div>
  );
}

// Inline loading indicator
export function InlineLoader({
  text = 'Loading...',
  variant = 'dots',
  color = 'primary',
  customColor,
  className = ''
}: Omit<LoadingSpinnerProps, 'size' | 'showText'>) {
  return (
    <div className={`inline-flex items-center space-x-2 ${className}`}>
      <LoadingSpinner
        size="sm"
        variant={variant}
        color={color}
        customColor={customColor}
      />
      <span className="text-sm text-slate-600">{text}</span>
    </div>
  );
}

// Skeleton loading component
export function Skeleton({
  className = '',
  lines = 1,
  height = 'h-4'
}: {
  className?: string;
  lines?: number;
  height?: string;
}) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          className={`${height} bg-slate-200 rounded animate-pulse`}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.1
          }}
        />
      ))}
    </div>
  );
}

// Page loading component
export function PageLoader({
  text = 'Loading page...',
  variant = 'spinner',
  className = ''
}: {
  text?: string;
  variant?: LoadingSpinnerProps['variant'];
  className?: string;
}) {
  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ${className}`}>
      <div className="text-center">
        <LoadingSpinner
          size="xl"
          variant={variant}
          color="white"
          text={text}
          showText={true}
        />
        <motion.div
          className="mt-8 text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm">Please wait while we prepare your experience...</p>
        </motion.div>
      </div>
    </div>
  );
}
