import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  text?: string;
  className?: string;
}

export function LoadingSpinner({ 
  size = 'md', 
  color = 'text-cyan-400',
  text,
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-2 border-t-current rounded-full ${color}`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        role="status"
        aria-label="Loading"
      />
      
      {text && (
        <motion.p
          className={`mt-4 text-gray-400 ${textSizes[size]} font-medium`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-slate-300 font-medium">{text}</span>
        </motion.p>
      )}
      
      <span className="sr-only">Loading...</span>
    </div>
  );
}

// Enhanced loading spinner with dots
export function LoadingDots({ 
  size = 'md',
  color = 'text-cyan-400',
  text,
  className = ''
}: LoadingSpinnerProps) {
  const dotSizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
    xl: 'w-5 h-5'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="flex space-x-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={`${dotSizes[size]} ${color} rounded-full`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {text && (
        <motion.p
          className={`mt-4 text-gray-400 ${textSizes[size]} font-medium`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {text}
        </motion.p>
      )}
      
      <span className="sr-only">Loading...</span>
    </div>
  );
}

// Skeleton loading component
export function LoadingSkeleton({ 
  lines = 3,
  className = ''
}: { 
  lines?: number;
  className?: string;
}) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          className="h-4 bg-gray-300 rounded animate-pulse"
          style={{
            width: `${Math.random() * 40 + 60}%`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
        />
      ))}
    </div>
  );
}

// Full page loading component
export function FullPageLoader({ 
  text = "Loading Zion Tech Group...",
  className = ''
}: {
  text?: string;
  className?: string;
}) {
  return (
    <motion.div className={`min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center ${className}`}>
      <div className="text-center text-white">
        <motion.div
          className="w-32 h-32 border-4 border-gray-700 border-t-cyan-400 rounded-full mx-auto mb-6"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.h2
          className="text-2xl font-semibold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.h2>
        <motion.p
          className="text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Preparing your digital transformation journey...
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
