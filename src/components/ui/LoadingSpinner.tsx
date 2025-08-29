import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'dots' | 'bars' | 'spinner';
  text?: string;
  className?: string;
}

export function LoadingSpinner({ 
  size = 'md', 
  variant = 'default', 
  text,
  className = '' 
}: LoadingSpinnerProps) {
  const [dots, setDots] = useState('');
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    if (variant === 'dots') {
      const interval = setInterval(() => {
        setDots(prev => prev.length >= 3 ? '' : prev + '.');
      }, 500);
      return () => clearInterval(interval);
    }
  }, [variant]);

  useEffect(() => {
    if (showProgress && progress > currentProgress) {
      const timer = setTimeout(() => {
        setCurrentProgress(prev => Math.min(prev + 1, progress));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [progress, currentProgress, showProgress]);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <motion.div
              className="absolute inset-0 bg-zion-cyan rounded-full"
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
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-zion-cyan rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 0.6,
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
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-1 bg-zion-cyan rounded-full"
                style={{ height: sizeClasses[size] }}
                animate={{
                  scaleY: [1, 2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        );

      case 'spinner':
        return (
          <motion.div
            className={`${sizeClasses[size]} border-2 border-zion-slate-light border-t-zion-cyan rounded-full`}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );

      default:
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <motion.div
              className="absolute inset-0 border-2 border-zion-slate-light border-t-zion-cyan rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute inset-1 border-2 border-zion-blue/30 border-t-zion-blue rounded-full"
              animate={{ rotate: -360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        );
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative">
        {renderSpinner()}
        
        {/* Glow effect for certain variants */}
        {(variant === 'default' || variant === 'spinner') && (
          <motion.div
            className="absolute inset-0 rounded-full bg-zion-cyan/20 blur-md"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </div>
      
      {text && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-zion-text-secondary text-sm font-medium text-center"
        >
          {renderSpinner()}
        </motion.div>
      </AnimatePresence>

      {text && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-gray-600 dark:text-gray-400 text-center max-w-xs"
        >
          {text}{variant === 'dots' ? dots : ''}
        </motion.p>
      )}
      
      {/* Accessibility */}
      <div className="sr-only" role="status" aria-live="polite">
        {text || 'Loading...'}
      </div>
    </div>
  );
}

// Export a default loading spinner for backward compatibility
export const ZionLoadingSpinner = LoadingSpinner;
export const EnhancedLoadingSpinner = LoadingSpinner;

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
      <LoadingSpinner size={size} variant="spinner" />
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
        {showSpinner && <LoadingSpinner size="xl" variant="spinner" />}
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
            className="h-4 bg-white/10 rounded animate-pulse"
          />
        ))
      )}
    </div>
  );
}