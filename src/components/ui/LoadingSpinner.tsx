import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'futuristic' | 'cyber' | 'quantum';
  text?: string;
  showText?: boolean;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'futuristic',
  text = 'Loading...',
  showText = true,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'futuristic':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 border-2 border-zion-cyan/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner ring */}
            <motion.div
              className="absolute inset-1 border-2 border-zion-purple/50 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Center dot */}
            <motion.div
              className="absolute inset-2 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        );

      case 'cyber':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            {/* Cyber grid */}
            <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg">
              <div className="absolute inset-0.5 bg-zion-slate rounded-md" />
            </div>
            
            {/* Scanning line */}
            <motion.div
              className="absolute inset-0.5 bg-gradient-to-r from-transparent via-zion-cyan to-transparent rounded-md"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Corner indicators */}
            <div className="absolute top-0 left-0 w-1 h-1 bg-zion-cyan rounded-full" />
            <div className="absolute top-0 right-0 w-1 h-1 bg-zion-purple rounded-full" />
            <div className="absolute bottom-0 left-0 w-1 h-1 bg-zion-blue rounded-full" />
            <div className="absolute bottom-0 right-0 w-1 h-1 bg-zion-cyan rounded-full" />
          </div>
        );

      case 'quantum':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            {/* Quantum particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-zion-cyan rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
                animate={{
                  x: Math.cos((i * 60) * Math.PI / 180) * 16,
                  y: Math.sin((i * 60) * Math.PI / 180) * 16,
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Center core */}
            <motion.div
              className="absolute inset-1/4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </div>
        );

      default:
        return (
          <div className={`${sizeClasses[size]} relative`}>
            {/* Classic spinner */}
            <div className="absolute inset-0 border-2 border-zion-cyan/20 rounded-full" />
            <motion.div
              className="absolute inset-0 border-2 border-transparent border-t-zion-cyan rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        );
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-3 ${className}`}>
      {/* Spinner */}
      <div className="relative">
        {renderSpinner()}
        
        {/* Pulse effect for futuristic variant */}
        {variant === 'futuristic' && (
          <motion.div
            className="absolute inset-0 border-2 border-zion-cyan/20 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>

      {/* Loading text */}
      {showText && (
        <motion.div
          className={`text-center ${textSizeClasses[size]}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className="text-zion-cyan font-medium">{text}</span>
          
          {/* Animated dots */}
          <motion.span
            className="inline-block ml-1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            ...
          </motion.span>
        </motion.div>
      )}

      {/* Progress indicator for larger sizes */}
      {(size === 'lg' || size === 'xl') && (
        <div className="w-24 h-1 bg-zion-slate rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      )}
    </div>
  );
};

// Skeleton loading component
export const SkeletonLoader: React.FC<{
  className?: string;
  lines?: number;
  variant?: 'text' | 'card' | 'avatar';
}> = ({ className = '', lines = 3, variant = 'text' }) => {
  if (variant === 'card') {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="bg-zion-slate/20 rounded-lg p-4 space-y-3">
          <div className="h-4 bg-zion-slate/30 rounded w-3/4" />
          <div className="h-3 bg-zion-slate/30 rounded w-1/2" />
          <div className="h-3 bg-zion-slate/30 rounded w-2/3" />
        </div>
      </div>
    );
  }

  if (variant === 'avatar') {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="bg-zion-slate/30 rounded-full w-12 h-12" />
      </div>
    );
  }

  return (
    <div className={`animate-pulse space-y-2 ${className}`}>
      {[...Array(lines)].map((_, i) => (
        <div
          key={i}
          className={`h-3 bg-zion-slate/30 rounded ${
            i === 0 ? 'w-3/4' : i === lines - 1 ? 'w-1/2' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
};

// Full page loader
export const FullPageLoader: React.FC<{
  text?: string;
  variant?: LoadingSpinnerProps['variant'];
}> = ({ text = 'Loading Zion Tech Group...', variant = 'futuristic' }) => {
  return (
    <div className="fixed inset-0 bg-futuristic flex items-center justify-center z-50">
      <div className="text-center">
        <LoadingSpinner size="xl" variant={variant} text={text} />
        
        {/* Additional loading info */}
        <motion.div
          className="mt-8 text-zion-cyan/70 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p>Preparing your experience...</p>
          <p className="text-xs mt-2">Powered by cutting-edge technology</p>
        </motion.div>
      </div>
    </div>
  );
};
