import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'cyan';
  text?: string;
  showText?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-32 h-32'
};

const colorClasses = {
  primary: 'border-cyan-400',
  secondary: 'border-blue-400',
  white: 'border-white',
  cyan: 'border-cyan-400'
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  text = 'Loading...',
  showText = true,
  className = ''
}) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`} role="status" aria-label="Loading">
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full opacity-20`}></div>
        
        {/* Animated spinner */}
        <motion.div
          className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-t-transparent ${colorClasses[color]} rounded-full`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Center dot for larger sizes */}
        {size === 'xl' && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
      
      {/* Loading text */}
      {showText && text && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-center"
        >
          <div className={`text-${color === 'white' ? 'white' : 'cyan'}-400 text-sm animate-pulse`}>
            {text}
          </div>
        </motion.div>
      )}
      
      {/* Screen reader text */}
      <span className="sr-only">Loading, please wait</span>
    </div>
  );
};

// Optimized spinner for inline use
export const InlineSpinner: React.FC<{ size?: 'sm' | 'md'; className?: string }> = ({ 
  size = 'sm', 
  className = '' 
}) => (
  <div className={`inline-flex items-center ${className}`} role="status" aria-label="Loading">
    <motion.div
      className={`${size === 'sm' ? 'w-4 h-4' : 'w-6 h-6'} border-2 border-t-transparent border-cyan-400 rounded-full`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
    />
    <span className="sr-only">Loading</span>
  </div>
);

// Full-screen loading overlay
export const FullScreenLoader: React.FC<{ 
  text?: string; 
  showLogo?: boolean;
  className?: string;
}> = ({ 
  text = 'Loading amazing experiences...', 
  showLogo = true,
  className = ''
}) => (
  <div className={`fixed inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center z-50 ${className}`}>
    <div className="relative text-center">
      {showLogo && (
        <div className="mb-6">
          <div className="w-24 h-24 border-4 border-cyan-400/20 rounded-full mx-auto mb-4"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400 font-bold text-xl">
            ZION
          </div>
        </div>
      )}
      
      <LoadingSpinner size="lg" color="cyan" text={text} />
    </div>
  </div>
);

// Skeleton loading component
export const SkeletonLoader: React.FC<{ 
  className?: string;
  lines?: number;
}> = ({ 
  className = '', 
  lines = 3 
}) => (
  <div className={`animate-pulse ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <div
        key={index}
        className={`h-4 bg-gray-300 rounded mb-2 ${
          index === lines - 1 ? 'w-3/4' : 'w-full'
        }`}
      />
    ))}
  </div>
);

export default LoadingSpinner;