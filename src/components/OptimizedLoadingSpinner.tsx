import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'minimal' | 'futuristic';
  text?: string;
  showProgress?: boolean;
  progress?: number;
  className?: string;
}
export const OptimizedLoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'lg',
  variant = 'futuristic',
  text = 'Loading amazing experiences...',
  showProgress = false,
  progress = 0,
  className = ''
}) => {
  const [dots, setDots] = useState('');
  const [mounted, setMounted] = useState(false);
  // Size variants
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };
  // Animated dots effect
  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);
  // Progress bar animation
  const progressVariants = {
    initial: { width: 0 },
    animate: { width: `${progress}%` }
  };
  if (!mounted) return null;
  if (variant === 'minimal') {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="relative">
          <div className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full`} />
          <div className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-cyan-500 border-t-transparent rounded-full animate-spin`} />
        </div>
        {text && (
          <div className="ml-4 text-gray-600 font-medium">
            {text}{dots}
          </div>
        )}
      </div>
    );
  }
  if (variant === 'default') {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <div className="relative mb-4">
          <div className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full`} />
          <div className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-cyan-500 border-t-transparent rounded-full animate-spin`} />
        </div>
        {text && (
          <div className="text-center">
            <div className="text-cyan-500 text-sm animate-pulse font-medium">
              {text}{dots}
            </div>
          </div>
        )}
        {showProgress && (
          <div className="w-48 bg-gray-200 rounded-full h-2 mt-4">
            <motion.div
              className="bg-cyan-500 h-2 rounded-full"
              variants={progressVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        )}
      </div>
    );
  }
  // Futuristic variant (default)
  return (
    <div className={`flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ${className}`}>
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className={`${sizeClasses[size]} border-4 border-cyan-500/20 rounded-full`}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner ring */}
        <motion.div
          className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-cyan-500 border-t-transparent rounded-full animate-spin`}
          style={{ animationDuration: '1.5s' }}
        />
        
        {/* Center content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <motion.div
            className="text-cyan-400 font-bold text-lg"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ZION
          </motion.div>
        </div>
        
        {/* Floating particles */}
        <AnimatePresence>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
              style={{
                top: `${20 + (i * 15)}%`,
                left: `${20 + (i * 20)}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          ))}
        </AnimatePresence>
      </div>
      
      {/* Text and progress */}
      <div className="mt-8 text-center">
        <motion.div
          className="text-cyan-500 text-sm animate-pulse mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {text}{dots}
        </motion.div>
        
        {showProgress && (
          <motion.div
            className="w-48 bg-gray-800 rounded-full h-2 mx-auto"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.div
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
              variants={progressVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};
// Skeleton loading component for content
export const SkeletonLoader: React.FC<{
  className?: string;
  lines?: number;
  height?: string;
}> = ({ className = '', lines = 3, height = 'h-4' }) => (
  <div className={`animate-pulse ${className}`}>
    {[...Array(lines)].map((_, i) => (
      <div
        key={i}
        className={`${height} bg-gray-300 rounded mb-2 ${
          i === lines - 1 ? 'w-3/4' : 'w-full'
        }`}
      />
    ))}
  </div>
);
// Inline loading component
export const InlineLoader: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };
  return (
    <div className={`${sizeClasses[size]} border-2 border-gray-200 border-t-cyan-500 rounded-full animate-spin`} />
  );
};
// Page loading component
export const PageLoader: React.FC = () => (
  <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center">
    <OptimizedLoadingSpinner
      variant="futuristic"
      size="xl"
      text="Loading page"
      showProgress={true}
      progress={100}
    />
  </div>
);