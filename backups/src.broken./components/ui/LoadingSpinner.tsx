import React from 'react';
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'custom';
  customColor?: string;
  className?: string;
  text?: string;
  showText?: boolean;
}

  const colorClasses = {
    primary: 'border-zion-purple',
    secondary: 'border-zion-cyan',
    white: 'border-white',
    custom: ''
  };

  const borderColor = customColor || colorClasses[color];

  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      <motion.div
        className={cn(
          'border-2 border-t-transparent rounded-full animate-spin',
          sizeClasses[size],
          borderColor
        )}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        role="status"
        aria-label="Loading"
  const colorClasses = {
    primary: 'border-zion-cyan border-t-transparent',
    secondary: 'border-zion-blue border-t-transparent',
    white: 'border-white border-t-transparent',
    custom: customColor ? `border-${customColor} border-t-transparent` : 'border-zion-cyan border-t-transparent'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} ${colorClasses[color]} border-2 rounded-full animate-spin`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        style={{
          borderTopColor: customColor && color === 'custom' ? customColor : undefined
        }}      />

      {showText && (
        <motion.p
// Button loading state
export function ButtonLoader({
  size = 'sm',
  className
}: {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  return (
    <div className={cn('inline-flex items-center', className)}>
      <LoadingSpinner size={size} color="white" />
      <span className="ml-2">Loading...</span>
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
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="w-16 h-16 bg-white/10 rounded-xl mb-4 animate-pulse" />
            <div className="h-6 bg-white/10 rounded-lg mb-3 animate-pulse" />
            <div className="h-4 bg-white/10 rounded-lg mb-2 animate-pulse" />
            <div className="h-4 bg-white/10 rounded-lg w-3/4 animate-pulse" />
          </motion.div>
        ))
      ) : variant === 'list' ? (
        // List placeholders
        Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="flex items-center space-x-4"
          >
            <div className="w-12 h-12 bg-white/10 rounded-full animate-pulse" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-white/10 rounded-lg animate-pulse" />
              <div className="h-3 bg-white/10 rounded-lg w-2/3 animate-pulse" />
            </div>
          </motion.div>
        ))
      ) : variant === 'grid' ? (
        // Grid placeholders
        Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="bg-white/5 rounded-xl p-4 border border-white/10"
          >
            <div className="w-full h-24 bg-white/10 rounded-lg mb-3 animate-pulse" />
            <div className="h-4 bg-white/10 rounded-lg mb-2 animate-pulse" />
            <div className="h-3 bg-white/10 rounded-lg w-2/3 animate-pulse" />
          </motion.div>
        ))
      ) : (
        // Default placeholders
        Array.from({ length: 4 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="h-4 bg-white/10 rounded-lg animate-pulse"
          />
        ))
      )}    </div>
  );
}