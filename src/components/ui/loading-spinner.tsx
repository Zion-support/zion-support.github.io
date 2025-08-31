import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps extends React.PropsWithChildren<{}> {
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
  </div>
);

// Simple loading dots
export const LoadingDots: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex space-x-1 ${className}`} role="status" aria-label="Loading">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-2 h-2 bg-cyan-400 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          delay: i * 0.2
        }}
      />
    ))}
  </div>
);

// Skeleton loading component
export const Skeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`animate-pulse bg-gray-300 rounded ${className}`} />
);

// Page loading component
export const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <LoadingSpinner size="lg" color="cyan" text="Loading Zion Tech Group..." />
  </div>
);