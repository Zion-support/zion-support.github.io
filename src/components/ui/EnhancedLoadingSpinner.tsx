import React from 'react';
import { motion } from 'framer-motion';

interface EnhancedLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  showProgress?: boolean;
  progress?: number;
  variant?: 'default' | 'futuristic' | 'minimal';
}

export function EnhancedLoadingSpinner({
  size = 'md',
  text = 'Loading...',
  showProgress = false,
  progress = 0,
  variant = 'futuristic'
}: EnhancedLoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center">
        <div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`} />
        {text && <span className={`ml-3 ${textSizes[size]} text-gray-600`}>{text}</span>}
      </div>
    );
  }

  if (variant === 'default') {
    return (
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin`} />
        {text && <p className={`${textSizes[size]} text-gray-600 font-medium`}>{text}</p>}
        {showProgress && (
          <div className="w-48 bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-blue-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        )}
      </div>
    );
  }

  // Futuristic variant (default)
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      {/* Main spinner with gradient */}
      <div className="relative">
        <div className={`${sizeClasses[size]} border-4 border-cyan-400/20 rounded-full`} />
        <motion.div
          className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-cyan-400 border-t-transparent rounded-full`}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner glow effect */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${sizeClasses[size === 'xl' ? 'lg' : size === 'lg' ? 'md' : 'sm']} bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-sm`} />
        
        {/* Center logo/text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-cyan-400 font-bold text-lg animate-pulse">ZION</div>
        </div>
      </div>

      {/* Loading text */}
      <div className="text-center space-y-2">
        <motion.p
          className={`${textSizes[size]} text-cyan-400 animate-pulse`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {text}
        </motion.p>
        
        {/* Animated dots */}
        <div className="flex justify-center space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-cyan-400 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>

      {/* Progress bar if enabled */}
      {showProgress && (
        <div className="w-64 bg-gray-800/50 rounded-full h-3 border border-cyan-400/30">
          <motion.div
            className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full relative overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: [-100, 100] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      )}

      {/* Floating particles */}
      <div className="relative w-full h-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Export default for backward compatibility
export default EnhancedLoadingSpinner;