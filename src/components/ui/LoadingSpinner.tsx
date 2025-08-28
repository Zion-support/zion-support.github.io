import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Zap, Brain, Shield, Cloud, Rocket } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'zion' | 'futuristic' | 'minimal';
  showProgress?: boolean;
  progress?: number;
  message?: string;
  showIcon?: boolean;
  fullScreen?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

const iconClasses = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8'
};

const zionIcons = [Brain, Shield, Cloud, Rocket, Zap];

export function LoadingSpinner({
  size = 'md',
  variant = 'default',
  showProgress = false,
  progress = 0,
  message = 'Loading...',
  showIcon = true,
  fullScreen = false,
  className = ''
}: LoadingSpinnerProps) {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Rotate through Zion icons for futuristic variant
  useEffect(() => {
    if (variant === 'futuristic') {
      const interval = setInterval(() => {
        setCurrentIconIndex((prev) => (prev + 1) % zionIcons.length);
      }, 800);
      return () => clearInterval(interval);
    }
  }, [variant]);

  // Auto-hide after progress completes
  useEffect(() => {
    if (showProgress && progress >= 100) {
      const timer = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [showProgress, progress]);

  const renderSpinner = () => {
    switch (variant) {
      case 'zion':
        return (
          <div className="relative">
            <div className={`${sizeClasses[size]} border-2 border-zion-cyan/20 rounded-full`}>
              <motion.div
                className={`${sizeClasses[size]} border-2 border-zion-cyan border-t-transparent rounded-full absolute inset-0`}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className={`${iconClasses[size]} text-zion-cyan`}>
                <Brain />
              </div>
            </motion.div>
          </div>
        );

      case 'futuristic':
        const CurrentIcon = zionIcons[currentIconIndex];
        return (
          <div className="relative">
            <motion.div
              className={`${sizeClasses[size]} bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-neon rounded-full flex items-center justify-center`}
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
            >
              <CurrentIcon className={`${iconClasses[size]} text-white`} />
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-zion-cyan/30"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [1, 0, 1]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: 'easeOut' 
              }}
            />
          </div>
        );

      case 'minimal':
        return (
          <motion.div
            className={`${sizeClasses[size]} border-2 border-zion-cyan/30 border-t-zion-cyan rounded-full`}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
          />
        );

      default:
        return (
          <motion.div
            className={`${sizeClasses[size]} border-2 border-zion-cyan/20 border-t-zion-cyan rounded-full`}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        );
    }
  };

  const renderProgress = () => {
    if (!showProgress) return null;

    return (
      <div className="mt-4 w-full max-w-xs">
        <div className="flex justify-between text-sm text-zion-cyan mb-2">
          <span>Loading...</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      </div>
    );
  };

  const renderMessage = () => {
    if (!message) return null;

    return (
      <motion.p
        className="mt-4 text-zion-cyan text-sm font-medium text-center max-w-xs"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {message}
      </motion.p>
    );
  };

  const content = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {showIcon && renderSpinner()}
      {renderProgress()}
      {renderMessage()}
    </div>
  );

  if (fullScreen) {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          {content}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Specialized loading components for different contexts
export function PageLoadingSpinner() {
  return (
    <LoadingSpinner
      size="xl"
      variant="futuristic"
      message="Preparing your experience..."
      fullScreen
    />
  );
}

export function ComponentLoadingSpinner() {
  return (
    <LoadingSpinner
      size="lg"
      variant="zion"
      message="Loading component..."
    />
  );
}

export function DataLoadingSpinner() {
  return (
    <LoadingSpinner
      size="md"
      variant="minimal"
      message="Fetching data..."
      showProgress
    />
  );
}

export function FormLoadingSpinner() {
  return (
    <LoadingSpinner
      size="sm"
      variant="default"
      message="Processing..."
    />
  );
}

// Loading states for different sections
export function HeroLoadingSpinner() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <LoadingSpinner
        size="xl"
        variant="futuristic"
        message="Loading amazing content..."
      />
    </div>
  );
}

export function ServicesLoadingSpinner() {
  return (
    <div className="py-20 flex items-center justify-center">
      <LoadingSpinner
        size="lg"
        variant="zion"
        message="Loading our services..."
      />
    </div>
  );
}

export function BlogLoadingSpinner() {
  return (
    <div className="py-16 flex items-center justify-center">
      <LoadingSpinner
        size="md"
        variant="minimal"
        message="Loading articles..."
      />
    </div>
  );
}
