import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export interface LoadingSpinnerProps {
  variant?: 'default' | 'success' | 'error' | 'warning' | 'progress';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  progress?: number; // 0-100
  message?: string;
  showProgress?: boolean;
  autoHide?: boolean;
  autoHideDelay?: number;
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

const variantConfig = {
  default: {
    icon: Loader2,
    color: 'text-zion-cyan',
    bgColor: 'bg-zion-cyan/20'
  },
  success: {
    icon: CheckCircle,
    color: 'text-green-500',
    bgColor: 'bg-green-500/20'
  },
  error: {
    icon: XCircle,
    color: 'text-red-500',
    bgColor: 'bg-red-500/20'
  },
  warning: {
    icon: AlertCircle,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/20'
  },
  progress: {
    icon: Loader2,
    color: 'text-zion-cyan',
    bgColor: 'bg-zion-cyan/20'
  }
};

export const EnhancedLoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  variant = 'default',
  size = 'md',
  progress = 0,
  message,
  showProgress = false,
  autoHide = false,
  autoHideDelay = 3000,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentProgress, setCurrentProgress] = useState(0);

  const config = variantConfig[variant];
  const IconComponent = config.icon;

  useEffect(() => {
    if (autoHide && variant !== 'default') {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, autoHideDelay);
      return () => clearTimeout(timer);
    }
  }, [autoHide, autoHideDelay, variant]);

  useEffect(() => {
    if (showProgress && progress !== undefined) {
      const timer = setTimeout(() => {
        setCurrentProgress(progress);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [progress, showProgress]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
        className={`flex flex-col items-center justify-center space-y-3 ${className}`}
      >
        <div className={`relative ${sizeClasses[size]}`}>
          {variant === 'progress' && showProgress ? (
            <div className="relative w-full h-full">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-gray-200"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className={config.color}
                  strokeLinecap="round"
                  initial={{ strokeDasharray: 0, strokeDashoffset: 0 }}
                  animate={{
                    strokeDasharray: `${(currentProgress / 100) * 283}`,
                    strokeDashoffset: 0
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-xs font-semibold ${config.color}`}>
                  {Math.round(currentProgress)}%
                </span>
              </div>
            </div>
          ) : (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className={`${config.color} ${variant === 'default' ? 'animate-spin' : ''}`}
            >
              <IconComponent className="w-full h-full" />
            </motion.div>
          )}
        </div>

        {message && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-center text-zion-slate-light max-w-xs"
          >
            {message}
          </motion.p>
        )}

        {showProgress && variant === 'progress' && (
          <div className="w-32 bg-gray-200 rounded-full h-2">
            <motion.div
              className={`h-2 rounded-full ${config.bgColor}`}
              initial={{ width: 0 }}
              animate={{ width: `${currentProgress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default EnhancedLoadingSpinner;
