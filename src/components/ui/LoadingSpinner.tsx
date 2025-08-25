import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'dots' | 'bars' | 'quantum';
  className?: string;
  text?: string;
  showText?: boolean;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  className = '',
  text = 'Loading...',
  showText = false
}) => {
=======

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  variant?: 'default' | 'pulse' | 'orbit' | 'matrix';
=======

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  text?: string;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-434d
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
<<<<<<< HEAD
  text = 'Loading...',
  variant = 'default'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6e83
  const renderSpinner = () => {
    switch (variant) {
      case 'pulse':
        return (
<<<<<<< HEAD
          <div className={cn('flex space-x-1', className)}>
            <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        );

      case 'dots':
        return (
          <div className={cn('flex space-x-1', className)}>
            <motion.div
              className="w-2 h-2 bg-zion-cyan rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="w-2 h-2 bg-zion-cyan rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="w-2 h-2 bg-zion-cyan rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
=======
          <div className={`${sizeClasses[size]} relative`}>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"
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
              className="absolute inset-1 bg-zion-blue-dark rounded-full"
              animate={{
                scale: [1, 0.8, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2
              }}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6e83
            />
          </div>
        );

<<<<<<< HEAD
      case 'bars':
        return (
          <div className={cn('flex space-x-1', className)}>
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-1 bg-zion-cyan"
                animate={{ height: ['20px', '40px', '20px'] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </div>
        );

      case 'quantum':
        return (
          <div className={cn('relative', sizeClasses[size], className)}>
            <motion.div
              className="absolute inset-0 border-4 border-zion-cyan/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-0 border-4 border-transparent border-t-zion-cyan rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-2 bg-zion-cyan/20 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
=======
      case 'orbit':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <motion.div
              className="absolute inset-0 border-2 border-zion-cyan/30 rounded-full"
            />
            <motion.div
              className="absolute top-0 left-1/2 w-2 h-2 bg-zion-cyan rounded-full -translate-x-1/2"
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute bottom-0 left-1/2 w-2 h-2 bg-zion-purple rounded-full -translate-x-1/2"
              animate={{
                rotate: -360
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        );

      case 'matrix':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <div className="absolute inset-0 bg-zion-blue-dark rounded-lg overflow-hidden">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-zion-cyan to-transparent"
                  style={{ top: `${(i * 25)}%` }}
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6e83
          </div>
        );

      default:
        return (
<<<<<<< HEAD
          <motion.div
            className={cn(
              'border-4 border-zion-cyan/30 border-t-zion-cyan rounded-full',
              sizeClasses[size],
              className
            )}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
=======
          <div className={`${sizeClasses[size]} relative`}>
            <motion.div
              className="absolute inset-0 border-4 border-zion-cyan/20 rounded-full"
            />
            <motion.div
              className="absolute inset-0 border-4 border-transparent border-t-zion-cyan rounded-full"
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute inset-2 border-4 border-transparent border-t-zion-purple rounded-full"
              animate={{
                rotate: -360
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6e83
        );
    }
  };

  return (
<<<<<<< HEAD
    <div className="flex flex-col items-center justify-center space-y-3">
      {renderSpinner()}
      {showText && (
        <motion.p
          className="text-zion-slate-light text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {text}
        </motion.p>
=======
    <div className="flex flex-col items-center justify-center space-y-4">
      {renderSpinner()}
      {text && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`text-zion-slate-light font-medium ${textSizes[size]}`}
        >
          {text}
        </motion.div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6e83
=======
  color = 'primary',
  text 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'border-zion-cyan',
    secondary: 'border-zion-purple',
    white: 'border-white'
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div
        className={`${sizeClasses[size]} border-2 border-t-transparent ${colorClasses[color]} rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-zion-slate-light text-sm font-medium"
        >
          {text}
        </motion.p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-434d
      )}
    </div>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
// Full screen loading overlay
export const LoadingOverlay: React.FC<{
  isVisible: boolean;
  text?: string;
  variant?: LoadingSpinnerProps['variant'];
  className?: string;
}> = ({ isVisible, text = 'Loading...', variant = 'quantum', className = '' }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      className={cn(
        'fixed inset-0 bg-zion-blue-dark/95 backdrop-blur-md z-50 flex items-center justify-center',
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LoadingSpinner
        size="xl"
        variant={variant}
        text={text}
        showText={true}
      />
    </motion.div>
=======
// Full page loading component
export const FullPageLoader: React.FC<{ text?: string }> = ({ text = 'Loading Zion Tech Group...' }) => {
=======
export const PageLoader: React.FC = () => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-434d
  return (
    <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center">
      <div className="text-center">
        <motion.div
<<<<<<< HEAD
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-2xl">Z</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Zion Tech Group</h1>
          <p className="text-zion-slate-light">Innovation • Technology • Future</p>
        </motion.div>
        
        <LoadingSpinner size="lg" text={text} variant="orbit" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-zion-slate-light text-sm"
        >
          Preparing your digital experience...
        </motion.div>
      </div>
    </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6e83
  );
};

// Inline loading component
<<<<<<< HEAD
export const InlineLoader: React.FC<{
  size?: LoadingSpinnerProps['size'];
  variant?: LoadingSpinnerProps['variant'];
  className?: string;
}> = ({ size = 'sm', variant = 'default', className = '' }) => (
  <div className={cn('inline-flex items-center', className)}>
    <LoadingSpinner size={size} variant={variant} />
  </div>
);

// Button loading state
export const ButtonLoader: React.FC<{
  size?: LoadingSpinnerProps['size'];
  className?: string;
}> = ({ size = 'sm', className = '' }) => (
  <div className={cn('inline-flex items-center', className)}>
    <LoadingSpinner size={size} variant="default" />
  </div>
);
=======
export const InlineLoader: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'sm' }) => {
  return (
    <div className="inline-flex items-center space-x-2">
      <LoadingSpinner size={size} text="" />
      <span className="text-zion-slate-light">Loading...</span>
    </div>
  );
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-6e83
=======
          className="w-16 h-16 border-4 border-t-transparent border-zion-cyan rounded-full mb-6"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-white mb-2"
        >
          Zion Tech Group
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-zion-slate-light"
        >
          Loading amazing things...
        </motion.p>
      </div>
    </div>
  );
};

export const SkeletonLoader: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`animate-pulse bg-zion-blue-light/20 rounded-lg ${className}`}>
      <div className="h-full w-full bg-gradient-to-r from-transparent via-zion-cyan/10 to-transparent animate-shimmer"></div>
    </div>
  );
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-434d
