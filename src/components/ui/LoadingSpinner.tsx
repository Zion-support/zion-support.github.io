import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Loader2, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Pause, 
  Play,
  RotateCcw,
  Zap,
  Brain,
  Cloud,
  Shield,
  Rocket
} from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'bounce' | 'spin' | 'wave' | 'dots' | 'bars';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  text?: string;
  showProgress?: boolean;
  progress?: number;
  showPercentage?: boolean;
  timeout?: number;
  onTimeout?: () => void;
  showSkeleton?: boolean;
  skeletonLines?: number;
  theme?: 'light' | 'dark' | 'auto';
}

export default function LoadingSpinner({
  size = 'md',
  variant = 'default',
  color = 'primary',
  text,
  showProgress = false,
  progress = 0,
  showPercentage = false,
  timeout = 30000,
  onTimeout,
  showSkeleton = false,
  skeletonLines = 3,
  theme = 'auto'
}: LoadingSpinnerProps) {
  const [timeoutReached, setTimeoutReached] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Size classes
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  // Color classes
  const colorClasses = {
    primary: 'text-blue-500',
    secondary: 'text-gray-500',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    error: 'text-red-500',
    info: 'text-cyan-500'
  };

  // Theme classes
  const themeClasses = {
    light: 'bg-white text-gray-900',
    dark: 'bg-gray-900 text-white',
    auto: 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white'
  };

  // Progress simulation
  useEffect(() => {
    if (showProgress && progress === 0) {
      const interval = setInterval(() => {
        if (!isPaused) {
          setCurrentProgress(prev => {
            if (prev >= 100) {
              clearInterval(interval);
              return 100;
            }
            return prev + Math.random() * 15;
          });
        }
      }, 200);

      return () => clearInterval(interval);
    } else if (progress > 0) {
      setCurrentProgress(progress);
    }
  }, [showProgress, progress, isPaused]);

  // Timeout handling
  useEffect(() => {
    if (timeout > 0) {
      const timer = setTimeout(() => {
        setTimeoutReached(true);
        onTimeout?.();
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [timeout, onTimeout]);

  // Loading variants
  const renderSpinner = () => {
    const baseClasses = `${sizeClasses[size]} ${colorClasses[color]}`;

    switch (variant) {
      case 'pulse':
        return (
          <motion.div
            className={`${baseClasses} rounded-full bg-current`}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        );

      case 'bounce':
        return (
          <motion.div
            className={`${baseClasses} rounded-full bg-current`}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        );

      case 'spin':
        return (
          <motion.div
            className={`${baseClasses} rounded-full border-2 border-current border-t-transparent`}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        );

      case 'wave':
        return (
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className={`w-1 h-4 bg-current rounded-full`}
                animate={{ scaleY: [1, 2, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </div>
        );

      case 'dots':
        return (
          <div className="flex items-center gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 bg-current rounded-full`}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        );

      case 'bars':
        return (
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className={`w-1 h-6 bg-current rounded-full`}
                animate={{ scaleY: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </div>
        );

      default:
        return (
          <motion.div
            className={`${baseClasses} rounded-full border-2 border-current border-t-transparent`}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        );
    }
  };

  // Skeleton loader
  const renderSkeleton = () => {
    if (!showSkeleton) return null;

    return (
      <div className="space-y-3 animate-pulse">
        {Array.from({ length: skeletonLines }).map((_, i) => (
          <div
            key={i}
            className={`h-4 bg-gray-200 dark:bg-gray-700 rounded ${
              i === 0 ? 'w-3/4' : i === 1 ? 'w-1/2' : 'w-5/6'
            }`}
          />
        ))}
      </div>
    );
  };

  // Progress bar
  const renderProgress = () => {
    if (!showProgress) return null;

    return (
      <div className="w-full max-w-xs">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Loading...
          </span>
          {showPercentage && (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {Math.round(currentProgress)}%
            </span>
          )}
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <motion.div
            className={`h-2 rounded-full ${
              color === 'primary' ? 'bg-blue-500' :
              color === 'success' ? 'bg-green-500' :
              color === 'warning' ? 'bg-yellow-500' :
              color === 'error' ? 'bg-red-500' :
              color === 'info' ? 'bg-cyan-500' :
              'bg-gray-500'
            }`}
            initial={{ width: 0 }}
            animate={{ width: `${currentProgress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
        <div className="flex items-center justify-between mt-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
          </button>
          <button
            onClick={() => setCurrentProgress(0)}
            className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>
    );
  };

  // Timeout warning
  const renderTimeoutWarning = () => {
    if (!timeoutReached) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg"
      >
        <div className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
          <Clock className="w-4 h-4" />
          <span className="text-sm">Loading is taking longer than expected</span>
        </div>
        <p className="text-xs text-yellow-600 dark:text-yellow-300 mt-1">
          Please check your connection or try refreshing the page
        </p>
      </motion.div>
    );
  };

  // Icon selection based on context
  const getContextIcon = () => {
    if (text?.toLowerCase().includes('ai') || text?.toLowerCase().includes('brain')) {
      return <Brain className="w-4 h-4" />;
    }
    if (text?.toLowerCase().includes('cloud') || text?.toLowerCase().includes('deploy')) {
      return <Cloud className="w-4 h-4" />;
    }
    if (text?.toLowerCase().includes('security') || text?.toLowerCase().includes('shield')) {
      return <Shield className="w-4 h-4" />;
    }
    if (text?.toLowerCase().includes('launch') || text?.toLowerCase().includes('rocket')) {
      return <Rocket className="w-4 h-4" />;
    }
    return <Zap className="w-4 h-4" />;
  };

  return (
    <div className={`flex flex-col items-center justify-center p-6 rounded-lg ${themeClasses[theme]}`}>
      {/* Main Spinner */}
      <div className="flex items-center justify-center mb-4">
        {renderSpinner()}
      </div>

      {/* Loading Text */}
      {text && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 mb-4"
        >
          {getContextIcon()}
          <span className="text-sm font-medium">{text}</span>
        </motion.div>
      )}

      {/* Progress Bar */}
      {renderProgress()}

      {/* Skeleton Loader */}
      {renderSkeleton()}

      {/* Timeout Warning */}
      {renderTimeoutWarning()}

      {/* Loading Tips */}
      <AnimatePresence>
        {showProgress && currentProgress > 0 && currentProgress < 100 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center max-w-xs"
          >
            <p>Please wait while we prepare your content...</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Optimized skeleton loader
export function SkeletonLoader({ 
  className = '', 
  lines = 3, 
  height = 'h-4' 
}: { 
  className?: string; 
  lines?: number; 
  height?: string; 
}) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className={`${height} bg-white/10 rounded-lg animate-pulse`}
        />
      ))}
    </div>
  );
}

// Button loading state
export function ButtonLoader({
  size = 'sm',
  className
}: {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <LoadingSpinner size={size} color="white" />
      <span className="ml-2">Loading...</span>
    </div>
  );
}

// Page loading overlay
export function PageLoaderOverlay({ 
  text = 'Loading page...',
  showSpinner = true 
}: { 
  text?: string; 
  showSpinner?: boolean; 
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="text-center">
        {showSpinner && <LoadingSpinner size="xl" color="primary" />}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="mt-4 text-lg text-gray-300 font-medium"
        >
          {text}
        </motion.p>
      </div>
    </motion.div>
  );
}

// Content loading placeholder
export function ContentPlaceholder({ 
  className = '',
  variant = 'default'
}: { 
  className?: string; 
  variant?: 'default' | 'card' | 'list' | 'grid'; 
}) {
  const variants = {
    default: 'space-y-4',
    card: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
    list: 'space-y-3',
    grid: 'grid grid-cols-2 md:grid-cols-4 gap-4'
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      {variant === 'card' ? (
        // Card placeholders
        Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 rounded-lg p-6 border border-white/10"
          >
            <div className="h-4 bg-white/10 rounded mb-3 animate-pulse" />
            <div className="h-3 bg-white/10 rounded mb-2 animate-pulse" />
            <div className="h-3 bg-white/10 rounded w-2/3 animate-pulse" />
          </motion.div>
        ))
      ) : variant === 'list' ? (
        // List placeholders
        Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-3"
          >
            <div className="w-4 h-4 bg-white/10 rounded-full animate-pulse" />
            <div className="h-3 bg-white/10 rounded flex-1 animate-pulse" />
          </motion.div>
        ))
      ) : variant === 'grid' ? (
        // Grid placeholders
        Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 rounded-lg p-4 border border-white/10"
          >
            <div className="h-3 bg-white/10 rounded mb-2 animate-pulse" />
            <div className="h-2 bg-white/10 rounded w-3/4 animate-pulse" />
          </motion.div>
        ))
      ) : (
        // Default placeholders
        Array.from({ length: 4 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="h-4 bg-white/10 rounded animate-pulse" />
        ))
      )}
    </div>
  );
}

// Enhanced app loading spinner for main app loading
export function AppLoadingSpinner() {
  const icons = ['🤖', '☁️', '🔒', '💡'];
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative">
        {/* Main spinning ring */}
        <div className="w-32 h-32 border-4 border-slate-700 rounded-full relative">
          <div className="absolute inset-0 border-4 border-transparent border-t-cyan-400 rounded-full animate-spin"></div>
          <div className="absolute inset-0 border-4 border-transparent border-r-blue-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          <div className="absolute inset-0 border-4 border-transparent border-b-purple-500 rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
        </div>
        
        {/* Floating icons */}
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            className="absolute text-2xl"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut"
            }}
          >
            <span 
              style={{
                position: 'absolute',
                top: `${Math.cos(index * Math.PI / 2) * 60}px`,
                left: `${Math.sin(index * Math.PI / 2) * 60}px`,
              }}
            >
              {icon}
            </span>
          </motion.div>
        ))}
      </div>
      
      {/* Loading text */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-white mb-2">Loading Zion Tech Group</h2>
        <p className="text-gray-400">Preparing your futuristic experience...</p>
      </motion.div>
      
      {/* Progress dots */}
      <div className="flex gap-2 mt-6">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-cyan-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}