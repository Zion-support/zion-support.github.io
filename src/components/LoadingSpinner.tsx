import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Zap, Brain, Shield, Cloud } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'zion' | 'pulse' | 'dots';
  text?: string;
  showIcon?: boolean;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'zion',
  text,
  showIcon = true
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const iconSize = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'zion':
        return (
          <div className="relative">
            <div className={`${sizeClasses[size]} border-4 border-zion-cyan/20 rounded-full`}></div>
            <motion.div
              className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-zion-cyan border-t-transparent rounded-full`}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            {showIcon && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Zap className={`${iconSize[size]} text-zion-cyan`} />
              </div>
            )}
          </div>
        );
      
      case 'pulse':
        return (
          <motion.div
            className={`${sizeClasses[size]} bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full`}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      
      case 'dots':
        return (
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-zion-cyan rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        );
      
      default:
        return (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className={`${sizeClasses[size]} text-zion-cyan`} />
          </motion.div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {renderSpinner()}
      {text && (
        <motion.p
          className="text-zion-slate-light text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

// Skeleton loading components
export const Skeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`animate-pulse bg-zion-slate-light/20 rounded ${className}`} />
);

export const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({ 
  lines = 1, 
  className = '' 
}) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton
        key={i}
        className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`}
      />
    ))}
  </div>
);

export const SkeletonCard: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-zion-cyan/20">
    <div className="flex items-center space-x-4 mb-4">
      <Skeleton className="w-12 h-12 rounded-full" />
      <div className="flex-1">
        <Skeleton className="h-4 w-3/4 mb-2" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
    <SkeletonText lines={3} />
    <div className="flex space-x-2 mt-4">
      <Skeleton className="h-8 w-20 rounded" />
      <Skeleton className="h-8 w-24 rounded" />
    </div>
  </div>
);

export const SkeletonGrid: React.FC<{ items?: number; className?: string }> = ({ 
  items = 6, 
  className = '' 
}) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
    {Array.from({ length: items }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

// Page loading component
export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner size="xl" variant="zion" text="Loading Zion Tech Group..." />
      <motion.div
        className="mt-8 text-zion-cyan/60 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Preparing your experience...
      </motion.div>
    </div>
  </div>
);

// Content loading component
export const ContentLoader: React.FC<{ type?: 'card' | 'list' | 'grid' }> = ({ 
  type = 'card' 
}) => {
  switch (type) {
    case 'list':
      return (
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
              <Skeleton className="w-10 h-10 rounded-full" />
              <div className="flex-1">
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      );
    
    case 'grid':
      return <SkeletonGrid items={6} />;
    
    default:
      return <SkeletonCard />;
  }
};

// Loading overlay for modals/dialogs
export const LoadingOverlay: React.FC<{ 
  isVisible: boolean; 
  text?: string;
  backdrop?: boolean;
}> = ({ isVisible, text = 'Loading...', backdrop = true }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        backdrop ? 'bg-black/50 backdrop-blur-sm' : ''
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-zion-slate-dark/90 backdrop-blur-lg rounded-2xl p-8 border border-zion-cyan/20">
        <LoadingSpinner size="lg" variant="zion" text={text} />
      </div>
    </motion.div>
  );
};