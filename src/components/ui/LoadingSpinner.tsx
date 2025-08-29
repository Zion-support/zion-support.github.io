import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Zap, Brain, Shield, Cloud, Rocket } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'futuristic' | 'ai' | 'tech' | 'cyber';
  text?: string;
  showProgress?: boolean;
  progress?: number;
  fullScreen?: boolean;
  backdrop?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16'
};

const iconMap = {
  default: Loader2,
  futuristic: Zap,
  ai: Brain,
  tech: Cloud,
  cyber: Shield
};

export function LoadingSpinner({
  size = 'md',
  variant = 'default',
  text,
  showProgress = false,
  progress = 0,
  fullScreen = false,
  backdrop = true,
  className = ''
}: LoadingSpinnerProps) {
  const IconComponent = iconMap[variant];

  const spinnerVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  const spinVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const progressVariants = {
    initial: { width: 0 },
    animate: { width: `${progress}%` }
  };

  const renderSpinner = () => (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Main Spinner */}
      <div className="relative">
        {/* Background Ring */}
        <div className={`${sizeClasses[size]} rounded-full border-2 border-zion-slate-light/20`} />
        
        {/* Animated Ring */}
        <motion.div
          className={`absolute inset-0 ${sizeClasses[size]} rounded-full border-2 border-transparent border-t-zion-cyan`}
          variants={spinVariants}
          animate="animate"
        />
        
        {/* Center Icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={pulseVariants}
          animate="animate"
        >
          <IconComponent className={`${size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-8 h-8'} text-zion-cyan`} />
        </motion.div>
      </div>

      {/* Loading Text */}
      {text && (
        <motion.p
          className="mt-4 text-zion-slate-light text-center font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}

      {/* Progress Bar */}
      {showProgress && (
        <div className="mt-4 w-48">
          <div className="w-full bg-zion-slate-light/20 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full"
              variants={progressVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          <p className="text-xs text-zion-slate-light text-center mt-2">
            {Math.round(progress)}%
          </p>
        </div>
      )}

      {/* Animated Dots */}
      <motion.div className="flex space-x-1 mt-4">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-zion-cyan rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {backdrop && (
          <motion.div
            className="absolute inset-0 bg-zion-slate-dark/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
        <motion.div
          className="relative z-10"
          variants={spinnerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {renderSpinner()}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      variants={spinnerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {renderSpinner()}
    </motion.div>
  );
}

// Specialized Loading Components
export function AILoadingSpinner(props: Omit<LoadingSpinnerProps, 'variant'>) {
  return <LoadingSpinner {...props} variant="ai" />;
}

export function TechLoadingSpinner(props: Omit<LoadingSpinnerProps, 'variant'>) {
  return <LoadingSpinner {...props} variant="tech" />;
}

export function FuturisticLoadingSpinner(props: Omit<LoadingSpinnerProps, 'variant'>) {
  return <LoadingSpinner {...props} variant="futuristic" />;
}

// Page Loading Spinner
export function PageLoadingSpinner() {
  return (
    <div className="min-h-screen bg-futuristic flex items-center justify-center">
      <LoadingSpinner
        size="xl"
        variant="futuristic"
        text="Loading Zion Tech Group..."
        fullScreen={false}
        className="text-center"
      />
    </div>
  );
}

// Inline Loading Spinner
export function InlineLoadingSpinner({ size = 'sm', className = '' }: { size?: 'sm' | 'md'; className?: string }) {
  return (
    <LoadingSpinner
      size={size}
      variant="default"
      className={`inline-flex ${className}`}
    />
  );
}

// Button Loading Spinner
export function ButtonLoadingSpinner({ size = 'sm', className = '' }: { size?: 'sm' | 'md'; className?: string }) {
  return (
    <LoadingSpinner
      size={size}
      variant="default"
      className={`inline-flex ${className}`}
    />
  );
}