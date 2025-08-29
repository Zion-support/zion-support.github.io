import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'bars' | 'pulse' | 'skeleton';
  text?: string;
  showProgress?: boolean;
  progress?: number;
  duration?: number;
  className?: string;
  fullScreen?: boolean;
}

export function LoadingSpinner({
  size = 'md',
  variant = 'spinner',
  text = 'Loading...',
  showProgress = false,
  progress = 0,
  duration = 2000,
  className = '',
  fullScreen = false
}: LoadingSpinnerProps) {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Progress animation
  useEffect(() => {
    if (showProgress && progress > 0) {
      const interval = setInterval(() => {
        setCurrentProgress(prev => {
          if (prev >= progress) {
            clearInterval(interval);
            return progress;
          }
          return prev + 1;
        });
      }, duration / progress);

      return () => clearInterval(interval);
    }
  }, [showProgress, progress, duration]);

  // Auto-hide after duration
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizes = {
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
            className={`${sizeClasses[size]} border-2 border-zion-cyan/20 border-t-zion-cyan rounded-full`}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            role="status"
            aria-label="Loading spinner"
          />
        );

      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`${sizeClasses.sm} bg-zion-cyan rounded-full`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </div>
        );

      case 'bars':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className={`w-1 bg-zion-cyan rounded-full`}
                style={{ height: sizeClasses[size] }}
                animate={{
                  scaleY: [1, 2, 1]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </div>
        );

      case 'pulse':
        return (
          <motion.div
            className={`${sizeClasses[size]} bg-zion-cyan rounded-full`}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        );

      case 'skeleton':
        return (
          <div className="space-y-2">
            <div className="flex space-x-2">
              <motion.div
                className="h-4 bg-zion-cyan/20 rounded animate-pulse"
                style={{ width: '60%' }}
              />
              <motion.div
                className="h-4 bg-zion-cyan/20 rounded animate-pulse"
                style={{ width: '40%' }}
              />
            </div>
            <motion.div
              className="h-3 bg-zion-cyan/20 rounded animate-pulse"
              style={{ width: '80%' }}
            />
            <motion.div
              className="h-3 bg-zion-cyan/20 rounded animate-pulse"
              style={{ width: '70%' }}
            />
          </div>
        );

      default:
        return null;
    }
  };

  const containerClasses = fullScreen
    ? 'fixed inset-0 z-50 flex items-center justify-center bg-futuristic/95 backdrop-blur-sm'
    : 'flex items-center justify-center';

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className={`${containerClasses} ${className}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        role="status"
        aria-live="polite"
        aria-label={text}
      >
        <div className="flex flex-col items-center space-y-4 p-6">
          {/* Loading Animation */}
          <div className="flex items-center justify-center">
            {renderSpinner()}
          </div>

          {/* Progress Bar */}
          {showProgress && (
            <div className="w-48 space-y-2">
              <div className="flex justify-between text-sm text-zion-cyan">
                <span>Progress</span>
                <span>{currentProgress}%</span>
              </div>
              <div className="w-full bg-zion-cyan/20 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${currentProgress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </div>
            </div>
          )}

          {/* Loading Text */}
          {text && (
            <motion.p
              className={`${textSizes[size]} text-zion-cyan font-medium text-center`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {text}
            </motion.p>
          )}

          {/* Additional Loading Info */}
          {fullScreen && (
            <motion.div
              className="text-xs text-zion-cyan/60 text-center max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Please wait while we prepare your experience...
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Specialized loading components
export function PageLoader({ text = 'Loading page...' }: { text?: string }) {
  return (
    <LoadingSpinner
      variant="skeleton"
      size="lg"
      text={text}
      fullScreen
      className="min-h-screen"
    />
  );
}

export function ContentLoader({ text = 'Loading content...' }: { text?: string }) {
  return (
    <LoadingSpinner
      variant="dots"
      size="md"
      text={text}
      className="py-8"
    />
  );
}

export function ButtonLoader({ size = 'sm' }: { size?: 'sm' | 'md' }) {
  return (
    <LoadingSpinner
      variant="spinner"
      size={size}
      text=""
      className="inline-block"
    />
  );
}

export function ProgressLoader({ 
  progress, 
  text = 'Processing...' 
}: { 
  progress: number;
  text?: string;
}) {
  return (
    <LoadingSpinner
      variant="bars"
      size="md"
      text={text}
      showProgress
      progress={progress}
      className="py-4"
    />
  );
}
