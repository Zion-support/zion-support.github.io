import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  className?: string;
  variant?: 'default' | 'pulse' | 'dots' | 'bars';
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  className = '',
  variant = 'default'
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute inset-1 bg-slate-900 rounded-full"
              animate={{
                scale: [1, 0.8, 1]
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
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-cyan-500 rounded-full"
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
                className="w-2 bg-gradient-to-t from-cyan-500 to-blue-600 rounded-full"
                animate={{
                  height: [20, 40, 20],
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

      default:
        return (
          <motion.div
            className={`${sizeClasses[size]} border-4 border-slate-700 border-t-cyan-500 rounded-full`}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {renderSpinner()}
      {text && (
        <motion.p
          className={`mt-4 text-cyan-400 font-medium ${textSizes[size]}`}
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <motion.div
        className="w-24 h-24 border-4 border-slate-700 border-t-cyan-500 rounded-full mx-auto mb-6"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.h2
        className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-2"
        animate={{
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Zion Tech Group
      </motion.h2>
      <motion.p
        className="text-slate-400"
        animate={{
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        Loading amazing experiences...
      </motion.p>
    </div>
  </div>
);

export const SkeletonLoader: React.FC<{
  className?: string;
  lines?: number;
  height?: string;
}> = ({ className = '', lines = 3, height = 'h-4' }) => (
  <div className={`space-y-3 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <motion.div
        key={i}
        className={`${height} bg-slate-700 rounded animate-pulse`}
        style={{
          width: i === lines - 1 ? '75%' : '100%'
        }}
      />
    ))}
  </div>
);

export const CardSkeleton: React.FC<{
  className?: string;
  showImage?: boolean;
  lines?: number;
}> = ({ className = '', showImage = true, lines = 3 }) => (
  <div className={`bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 ${className}`}>
    {showImage && (
      <div className="w-full h-48 bg-slate-700 rounded-lg mb-4 animate-pulse" />
    )}
    <SkeletonLoader lines={lines} />
  </div>
);

export default LoadingSpinner;