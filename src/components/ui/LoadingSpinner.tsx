import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Zap, Brain, Cloud, Rocket } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'bounce' | 'spin' | 'dots' | 'tech';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

export function LoadingSpinner({
  size = 'md',
  variant = 'default',
  text,
  fullScreen = false,
  className = ''
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
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
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        );

      case 'bounce':
        return (
          <motion.div
            className={`${sizeClasses[size]} bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full`}
            animate={{
              y: [0, -20, 0]
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );

      case 'dots':
        return (
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-cyan-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        );

      case 'tech':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="w-full h-full border-4 border-transparent border-t-cyan-400 border-r-blue-500 border-b-purple-500 border-l-green-400 rounded-full" />
            </motion.div>
            <div className="absolute inset-2 bg-slate-800 rounded-full flex items-center justify-center">
              <Zap className="w-1/2 h-1/2 text-cyan-400" />
            </div>
          </div>
        );

      case 'spin':
      default:
        return (
          <motion.div
            className={`${sizeClasses[size]} border-4 border-slate-700 border-t-cyan-400 rounded-full`}
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

  const content = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {renderSpinner()}
      {text && (
        <motion.p
          className={`mt-4 text-gray-300 ${textSizes[size]} text-center max-w-xs`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center z-50">
        {content}
      </div>
    );
  }

  return content;
}

// Specialized loading components for different contexts
export function PageLoadingSpinner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="xl" variant="tech" />
        <motion.p
          className="mt-6 text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading Zion Tech Group...
        </motion.p>
        <motion.div
          className="mt-4 flex justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-100" />
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-200" />
        </motion.div>
      </div>
    </div>
  );
}

export function ServiceLoadingSpinner({ service }: { service: string }) {
  const serviceIcons = {
    'AI': Brain,
    'Cloud': Cloud,
    'DevOps': Rocket,
    'default': Zap
  };

  const Icon = serviceIcons[service as keyof typeof serviceIcons] || serviceIcons.default;

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <motion.div
        className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>
      <LoadingSpinner size="md" variant="dots" />
      <p className="mt-4 text-gray-400 text-center">
        Loading {service} services...
      </p>
    </div>
  );
}

export function InlineLoadingSpinner({ size = 'sm' }: { size?: 'sm' | 'md' }) {
  return (
    <div className="inline-flex items-center">
      <LoadingSpinner size={size} variant="spin" />
      <span className="ml-2 text-sm text-gray-400">Loading...</span>
    </div>
  );
}