import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'dots' | 'bars' | 'ripple' | 'spinner';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'custom';
  customColor?: string;
  text?: string;
  showProgress?: boolean;
  progress?: number;
  indeterminate?: boolean;
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
  ariaLabel?: string;
  showPercentage?: boolean;
  animatedText?: boolean;
  loadingDots?: boolean;
}

export const EnhancedLoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  color = 'primary',
  customColor,
  text,
  showProgress = false,
  progress = 0,
  indeterminate = false,
  speed = 'normal',
  className = '',
  ariaLabel = 'Loading...',
  showPercentage = false,
  animatedText = false,
  loadingDots = false,
}) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [loadingText, setLoadingText] = useState(text || 'Loading');

  // Size configurations
  const sizeConfig = {
    sm: { width: 'w-4', height: 'h-4', text: 'text-xs' },
    md: { width: 'w-8', height: 'h-8', text: 'text-sm' },
    lg: { width: 'w-12', height: 'h-12', text: 'text-base' },
    xl: { width: 'w-16', height: 'h-16', text: 'text-lg' },
  };

  // Color configurations
  const colorConfig = {
    primary: 'text-blue-500',
    secondary: 'text-gray-500',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    error: 'text-red-500',
    custom: customColor ? `text-[${customColor}]` : 'text-blue-500',
  };

  // Speed configurations
  const speedConfig = {
    slow: { duration: 2, repeatDelay: 0.5 },
    normal: { duration: 1, repeatDelay: 0.3 },
    fast: { duration: 0.5, repeatDelay: 0.1 },
  };

  // Progress animation
  useEffect(() => {
    if (showProgress && !indeterminate) {
      const timer = setTimeout(() => {
        setCurrentProgress(progress);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [progress, showProgress, indeterminate]);

  // Animated text effect
  useEffect(() => {
    if (animatedText && text) {
      const interval = setInterval(() => {
        setLoadingText(prev => {
          if (prev.endsWith('...')) {
            return text;
          }
          return prev + '.';
        });
      }, 500);

      return () => clearInterval(interval);
    }
  }, [animatedText, text]);

  // Loading dots animation
  const LoadingDots = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`w-2 h-2 rounded-full ${colorConfig[color]}`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: speedConfig[speed].duration,
            repeat: Infinity,
            delay: index * 0.2,
            repeatDelay: speedConfig[speed].repeatDelay,
          }}
        />
      ))}
    </div>
  );

  // Progress bar
  const ProgressBar = () => (
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <motion.div
        className={`h-full rounded-full ${colorConfig[color].replace('text-', 'bg-')}`}
        initial={{ width: 0 }}
        animate={{ width: `${currentProgress}%` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    </div>
  );

  // Spinner variants
  const renderSpinner = () => {
    const baseClasses = `${sizeConfig[size].width} ${sizeConfig[size].height} ${colorConfig[color]}`;

    switch (variant) {
      case 'pulse':
        return (
          <motion.div
            className={`${baseClasses} rounded-full bg-current`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: speedConfig[speed].duration,
              repeat: Infinity,
              repeatDelay: speedConfig[speed].repeatDelay,
            }}
          />
        );

      case 'dots':
        return (
          <div className="flex space-x-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full ${colorConfig[color]}`}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: speedConfig[speed].duration,
                  repeat: Infinity,
                  delay: index * 0.2,
                  repeatDelay: speedConfig[speed].repeatDelay,
                }}
              />
            ))}
          </div>
        );

      case 'bars':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                className={`w-1 ${colorConfig[color]}`}
                animate={{
                  height: [20, 40, 20],
                }}
                transition={{
                  duration: speedConfig[speed].duration,
                  repeat: Infinity,
                  delay: index * 0.1,
                  repeatDelay: speedConfig[speed].repeatDelay,
                }}
              />
            ))}
          </div>
        );

      case 'ripple':
        return (
          <div className="relative">
            <motion.div
              className={`${baseClasses} rounded-full border-2 border-current`}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: speedConfig[speed].duration,
                repeat: Infinity,
                repeatDelay: speedConfig[speed].repeatDelay,
              }}
            />
            <motion.div
              className={`${baseClasses} rounded-full border-2 border-current absolute inset-0`}
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: speedConfig[speed].duration,
                repeat: Infinity,
                delay: speedConfig[speed].duration * 0.5,
                repeatDelay: speedConfig[speed].repeatDelay,
              }}
            />
          </div>
        );

      case 'spinner':
        return (
          <motion.div
            className={`${baseClasses} rounded-full border-2 border-gray-200 border-t-current`}
            animate={{ rotate: 360 }}
            transition={{
              duration: speedConfig[speed].duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        );

      default:
        return (
          <motion.div
            className={`${baseClasses} rounded-full border-2 border-gray-200 border-t-current`}
            animate={{ rotate: 360 }}
            transition={{
              duration: speedConfig[speed].duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        );
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center space-y-4 ${className}`}
      role="status"
      aria-label={ariaLabel}
      aria-live="polite"
    >
      {/* Spinner */}
      <div className="flex items-center justify-center">
        {renderSpinner()}
      </div>

      {/* Text */}
      {text && (
        <div className="text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={loadingText}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`${sizeConfig[size].text} text-gray-600 font-medium`}
            >
              {loadingText}
              {loadingDots && <LoadingDots />}
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* Progress */}
      {showProgress && (
        <div className="w-full max-w-xs space-y-2">
          <ProgressBar />
          {showPercentage && (
            <div className="text-center">
              <span className={`${sizeConfig[size].text} text-gray-500`}>
                {indeterminate ? 'Processing...' : `${Math.round(currentProgress)}%`}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Accessibility */}
      <div className="sr-only" aria-live="polite">
        {showProgress && !indeterminate
          ? `Loading: ${Math.round(currentProgress)}% complete`
          : 'Loading in progress'}
      </div>
    </div>
  );
};

// Export default component
export default EnhancedLoadingSpinner;
