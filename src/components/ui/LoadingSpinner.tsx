import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle, AlertCircle, Zap, Brain, Rocket } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'success' | 'error' | 'pulse' | 'dots' | 'bars' | 'futuristic';
  text?: string;
  showProgress?: boolean;
  progress?: number;
  autoProgress?: boolean;
  duration?: number;
  onComplete?: () => void;
  className?: string;
}

export function LoadingSpinner({
  size = 'md',
  variant = 'default',
  text,
  showProgress = false,
  progress = 0,
  autoProgress = false,
  duration = 3000,
  onComplete,
  className = ''
}: LoadingSpinnerProps) {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  // Auto-progress functionality
  useEffect(() => {
    if (autoProgress && !isComplete) {
      const interval = setInterval(() => {
        setCurrentProgress(prev => {
          if (prev >= 100) {
            setIsComplete(true);
            onComplete?.();
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [autoProgress, isComplete, onComplete]);

  // Manual progress update
  useEffect(() => {
    if (progress !== undefined) {
      setCurrentProgress(progress);
      if (progress >= 100) {
        setIsComplete(true);
        onComplete?.();
      }
    }
  }, [progress, onComplete]);

  const renderSpinner = () => {
    switch (variant) {
      case 'success':
        return (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`${sizeClasses[size]} text-green-500`}
          >
            <CheckCircle className="w-full h-full" />
          </motion.div>
        );

      case 'error':
        return (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`${sizeClasses[size]} text-red-500`}
          >
            <AlertCircle className="w-full h-full" />
          </motion.div>
        );

      case 'pulse':
        return (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className={`${sizeClasses[size]} bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full`}
          />

        );

      case 'dots':
        return (
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                className="w-3 h-3 bg-cyan-500 rounded-full"
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
                animate={{ height: [20, 40, 20] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
                className="w-2 bg-gradient-to-t from-cyan-500 to-blue-500 rounded"
              />
            ))}
          </div>
        );

      case 'futuristic':
        return (
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className={`${sizeClasses[size]} border-4 border-slate-700 rounded-full`}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-transparent border-t-cyan-500 border-r-blue-500 rounded-full"
              />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center"
            >
              <Brain className="w-1/2 h-1/2 text-white" />
            </motion.div>
          </div>
        );

      default:
        return (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className={`${sizeClasses[size]} text-cyan-500`}
          >
            <Loader2 className="w-full h-full" />
          </motion.div>
        );
    }
  };

  const renderProgress = () => {
    if (!showProgress) return null;

    return (
      <div className="mt-4 w-full">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Loading...</span>
          <span>{Math.round(currentProgress)}%</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${currentProgress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full relative"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
          </motion.div>
        </div>
      </div>
    );
  };

  return (
    <div className={`flex flex-col items-center justify-center p-6 ${className}`}>
      <AnimatePresence mode="wait">
        {isComplete ? (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-16 h-16 text-green-500 mx-auto mb-4"
            >
              <CheckCircle className="w-full h-full" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-green-400 font-semibold"
            >
              Complete!
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {renderSpinner()}
            
            {text && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className={`mt-4 text-gray-300 ${textSizeClasses[size]}`}
              >
                {text}
              </motion.p>
            )}

            {renderProgress()}

            {/* Loading tips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-xs text-gray-500 max-w-xs"
            >
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Zap className="w-3 h-3 text-yellow-500" />
                <span>Pro tip:</span>
              </div>
              <p className="leading-relaxed">
                {variant === 'futuristic' 
                  ? "Our AI is processing your request with cutting-edge technology"
                  : "We're working hard to get everything ready for you"
                }
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Specialized loading components
export function PageLoader() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <LoadingSpinner
        variant="futuristic"
        size="xl"
        text="Loading Zion Tech Group"
        showProgress
        autoProgress
        duration={4000}
      />
    </div>
  );
}

export function ContentLoader() {
  return (
    <div className="p-8">
      <LoadingSpinner
        variant="pulse"
        size="lg"
        text="Loading content..."
      />
    </div>
  );
}

export function DataLoader() {
  return (
    <div className="p-4">
      <LoadingSpinner
        variant="bars"
        size="md"
        text="Fetching data..."
      />
    </div>
  );
}

export function FormLoader() {
  return (
    <div className="p-6">
      <LoadingSpinner
        variant="dots"
        size="sm"
        text="Processing..."
      />
    </div>
  );
}
