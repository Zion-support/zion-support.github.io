import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  rounded?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  height = 'h-4', 
  width = 'w-full', 
  rounded = 'rounded' 
}) => (
  <div 
    className={`${height} ${width} ${rounded} bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-pulse ${className}`}
    style={{
      backgroundSize: '200% 100%',
      animation: 'shimmer 2s infinite'
    }}
  />
);

interface EnhancedLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'futuristic' | 'minimal';
  showSkeleton?: boolean;
  skeletonType?: 'card' | 'list' | 'hero' | 'table';
  message?: string;
}

const EnhancedLoadingSpinner: React.FC<EnhancedLoadingSpinnerProps> = ({
  size = 'md',
  variant = 'futuristic',
  showSkeleton = false,
  skeletonType = 'card',
  message = 'Loading amazing experiences...'
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64'
  };

  const renderSkeleton = () => {
    switch (skeletonType) {
      case 'hero':
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <Skeleton height="h-12" width="w-3/4" className="mx-auto" />
              <Skeleton height="h-6" width="w-1/2" className="mx-auto" />
              <Skeleton height="h-4" width="w-2/3" className="mx-auto" />
            </div>
            <div className="flex justify-center space-x-4">
              <Skeleton height="h-12" width="w-32" rounded="rounded-xl" />
              <Skeleton height="h-12" width="w-32" rounded="rounded-xl" />
            </div>
          </div>
        );
      
      case 'card':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                <Skeleton height="h-8" width="w-16" className="mx-auto" />
                <Skeleton height="h-4" width="w-full" />
                <Skeleton height="h-4" width="w-3/4" />
                <Skeleton height="h-4" width="w-1/2" />
                <Skeleton height="h-10" width="w-full" rounded="rounded-xl" />
              </div>
            ))}
          </div>
        );
      
      case 'list':
        return (
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <Skeleton height="h-12" width="w-12" rounded="rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton height="h-4" width="w-1/3" />
                  <Skeleton height="h-3" width="w-1/2" />
                </div>
                <Skeleton height="h-8" width="w-20" rounded="rounded-lg" />
              </div>
            ))}
          </div>
        );
      
      case 'table':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} height="h-6" width="w-full" />
              ))}
            </div>
            {[1, 2, 3, 4, 5].map((row) => (
              <div key={row} className="grid grid-cols-4 gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                {[1, 2, 3, 4].map((col) => (
                  <Skeleton key={col} height="h-4" width="w-full" />
                ))}
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  if (showSkeleton) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
        <div className="max-w-7xl mx-auto">
          {renderSkeleton()}
        </div>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="text-center">
          <div className={`${sizeClasses[size]} border-4 border-cyan-400/20 rounded-full mx-auto mb-4 relative`}>
            <div className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-cyan-400 border-t-transparent rounded-full animate-spin`}></div>
          </div>
          <div className="text-cyan-400 text-sm animate-pulse">{message}</div>
        </div>
      </div>
    );
  }

  if (variant === 'futuristic') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="relative">
          {/* Main Spinner */}
          <div className={`${sizeClasses[size]} border-4 border-cyan-400/20 rounded-full relative`}>
            <div className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-cyan-400 border-t-transparent rounded-full animate-spin`}></div>
            
            {/* Inner Glow */}
            <div className={`absolute top-2 left-2 ${sizeClasses[size === 'xl' ? 'lg' : size === 'lg' ? 'md' : 'sm']} bg-cyan-400/10 rounded-full animate-pulse`}></div>
            
            {/* Center Logo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-cyan-400 font-bold text-lg mb-2">ZION</div>
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg mx-auto animate-pulse"></div>
            </div>
          </div>
          
          {/* Orbiting Elements */}
          <div className="absolute inset-0 animate-spin">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50"></div>
          </div>
          
          {/* Loading Text */}
          <div className="mt-8 text-center">
            <motion.div 
              className="text-cyan-400 text-sm animate-pulse"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {message}
            </motion.div>
            
            {/* Progress Bar */}
            <div className="mt-4 w-48 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 3, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="text-center">
        <div className={`${sizeClasses[size]} border-4 border-cyan-400/20 rounded-full mx-auto mb-4 relative`}>
          <div className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-cyan-400 border-t-transparent rounded-full animate-spin`}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400 font-bold text-lg">
            ZION
          </div>
        </div>
        <div className="text-cyan-400 text-sm animate-pulse">{message}</div>
      </div>
    </div>
  );
};

export default EnhancedLoadingSpinner;