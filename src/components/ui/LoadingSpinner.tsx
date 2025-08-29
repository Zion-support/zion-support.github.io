import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Zap, Brain, Shield, Rocket } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'pulse' | 'skeleton' | 'futuristic';
  message?: string;
  showIcon?: boolean;
  iconType?: 'default' | 'ai' | 'tech' | 'security' | 'rocket';
}

export function LoadingSpinner({ 
  size = 'md', 
  variant = 'spinner',
  message = 'Loading...',
  showIcon = true,
  iconType = 'default'
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const getIcon = () => {
    switch (iconType) {
      case 'ai':
        return <Brain className={`${sizeClasses[size]} text-blue-500`} />;
      case 'tech':
        return <Zap className={`${sizeClasses[size]} text-yellow-500`} />;
      case 'security':
        return <Shield className={`${sizeClasses[size]} text-green-500`} />;
      case 'rocket':
        return <Rocket className={`${sizeClasses[size]} text-purple-500`} />;
      default:
        return <Loader2 className={`${sizeClasses[size]} text-blue-500`} />;
    }
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-blue-500 rounded-full"
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

      case 'pulse':
        return (
          <motion.div
            className={`${sizeClasses[size]} bg-blue-500 rounded-full`}
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
        );

      case 'skeleton':
        return (
          <div className="space-y-3">
            <div className="flex space-x-4">
              <div className="rounded-full bg-gray-300 dark:bg-gray-600 h-12 w-12 animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6 animate-pulse" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-4/6 animate-pulse" />
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6 animate-pulse" />
            </div>
          </div>
        );

      case 'futuristic':
        return (
          <div className="relative">
            <motion.div
              className={`${sizeClasses[size]} border-4 border-blue-500 border-t-transparent rounded-full`}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className={`${sizeClasses[size]} absolute inset-0 border-4 border-cyan-400 border-t-transparent rounded-full`}
              animate={{ rotate: -360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute inset-2 bg-blue-500 rounded-full"
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
          </div>
        );

      default:
        return (
          <motion.div
            className={`${sizeClasses[size]} border-4 border-blue-500 border-t-transparent rounded-full`}
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
    <div className="flex flex-col items-center justify-center space-y-4 p-8">
      {showIcon && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {getIcon()}
        </motion.div>
      )}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {renderSpinner()}
      </motion.div>
      
      {message && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-600 dark:text-gray-400 text-center text-sm font-medium"
        >
          {message}
        </motion.p>
      )}
    </div>
  );
}

// Skeleton Loading Components
export function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-pulse">
      <div className="flex items-center space-x-4 mb-4">
        <div className="rounded-full bg-gray-300 dark:bg-gray-600 h-12 w-12" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />
          <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2" />
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded" />
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6" />
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-4/6" />
      </div>
      <div className="flex space-x-2 mt-4">
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-16" />
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-20" />
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-14" />
      </div>
    </div>
  );
}

export function SkeletonGrid({ rows = 3, cols = 3 }: { rows?: number; cols?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: rows * cols }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export function SkeletonHero() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg p-8 animate-pulse">
      <div className="text-center space-y-4">
        <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mx-auto" />
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-2/3 mx-auto" />
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mx-auto" />
        <div className="flex justify-center space-x-4 pt-4">
          <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-24" />
          <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-24" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonTable({ rows = 5 }: { rows?: number }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/4" />
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="px-6 py-4">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 bg-gray-300 dark:bg-gray-600 rounded" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2" />
              </div>
              <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-20" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkeletonSidebar() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 animate-pulse">
      <div className="space-y-4">
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4" />
        <div className="space-y-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full" />
          ))}
        </div>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/2" />
        </div>
      </div>
    </div>
  );
}

// Loading States for Different Components
export function LoadingState({ 
  type = 'default',
  message = 'Loading...',
  showSkeleton = false 
}: {
  type?: 'default' | 'page' | 'section' | 'component';
  message?: string;
  showSkeleton?: boolean;
}) {
  if (showSkeleton) {
    switch (type) {
      case 'page':
        return (
          <div className="space-y-8">
            <SkeletonHero />
            <SkeletonGrid rows={2} cols={3} />
          </div>
        );
      case 'section':
        return <SkeletonGrid rows={2} cols={2} />;
      case 'component':
        return <SkeletonCard />;
      default:
        return <SkeletonGrid rows={1} cols={1} />;
    }
  }

  return (
    <LoadingSpinner
      variant="futuristic"
      size="lg"
      message={message}
      showIcon={true}
      iconType="ai"
    />
  );
}