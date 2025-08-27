import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Zap, Brain, Shield, Cloud } from 'lucide-react';

interface EnhancedLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'zion' | 'tech';
  text?: string;
  showProgress?: boolean;
  progress?: number;
}

const icons = {
  default: Loader2,
  zion: Zap,
  tech: Brain,
};

export function EnhancedLoadingSpinner({
  size = 'md',
  variant = 'default',
  text,
  showProgress = false,
  progress = 0,
}: EnhancedLoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const Icon = icons[variant];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center space-y-4"
    >
      {/* Main Spinner */}
      <div className="relative">
        <motion.div
          variants={spinVariants}
          animate="animate"
          className={`${sizeClasses[size]} text-zion-cyan`}
        >
          <Icon className="w-full h-full" />
        </motion.div>
        
        {/* Orbiting dots for tech variant */}
        {variant === 'tech' && (
          <>
            <motion.div
              variants={pulseVariants}
              animate="animate"
              className="absolute -top-1 -right-1 w-2 h-2 bg-zion-purple rounded-full"
            />
            <motion.div
              variants={pulseVariants}
              animate="animate"
              style={{ animationDelay: '0.5s' }}
              className="absolute -bottom-1 -left-1 w-2 h-2 bg-zion-cyan rounded-full"
            />
            <motion.div
              variants={pulseVariants}
              animate="animate"
              style={{ animationDelay: '1s' }}
              className="absolute -top-1 -left-1 w-2 h-2 bg-zion-blue rounded-full"
            />
          </>
        )}
      </div>

      {/* Loading Text */}
      {text && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-sm font-medium text-center"
        >
          {text}
        </motion.p>
      )}

      {/* Progress Bar */}
      {showProgress && (
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '100%' }}
          transition={{ delay: 0.3 }}
          className="w-32 h-2 bg-zinc-700 rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"
          />
        </motion.div>
      )}

      {/* Loading Dots Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex space-x-1"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            className="w-2 h-2 bg-zion-cyan rounded-full"
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

// Specialized loading components
export function ZionLoadingSpinner(props: Omit<EnhancedLoadingSpinnerProps, 'variant'>) {
  return <EnhancedLoadingSpinner {...props} variant="zion" />;
}

export function TechLoadingSpinner(props: Omit<EnhancedLoadingSpinnerProps, 'variant'>) {
  return <EnhancedLoadingSpinner {...props} variant="tech" />;
}

// Loading overlay for full-screen loading
export function LoadingOverlay({ 
  text = "Loading...", 
  showProgress = false, 
  progress = 0 
}: {
  text?: string;
  showProgress?: boolean;
  progress?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-zinc-900/80 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <EnhancedLoadingSpinner
        size="lg"
        variant="zion"
        text={text}
        showProgress={showProgress}
        progress={progress}
      />
    </motion.div>
  );
}