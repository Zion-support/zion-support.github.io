import React from 'react';
import { motion } from 'framer-motion';

interface ModernLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'accent';
  text?: string;
  showProgress?: boolean;
  progress?: number;
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16'
};

const variantClasses = {
  primary: 'text-blue-600',
  secondary: 'text-gray-600',
  accent: 'text-purple-600'
};

export const ModernLoadingSpinner: React.FC<ModernLoadingSpinnerProps> = ({
  size = 'md',
  variant = 'primary',
  text,
  showProgress = false,
  progress = 0,
  className = ''
}) => {
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: 'linear' as const
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut' as const
      }
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div className="relative">
        {/* Outer rotating ring */}
        <motion.div
          className={`${sizeClasses[size]} border-4 border-gray-200 border-t-4 rounded-full ${variantClasses[variant]}`}
          variants={spinnerVariants}
          animate="animate"
        />
        
        {/* Inner pulsing dot */}
        <motion.div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-current rounded-full ${variantClasses[variant]}`}
          variants={pulseVariants}
          animate="animate"
        />
      </div>

      {/* Progress bar */}
      {showProgress && (
        <div className="w-32 bg-gray-200 rounded-full h-2 overflow-hidden">
          <motion.div
            className={`h-full ${variant === 'primary' ? 'bg-blue-600' : variant === 'secondary' ? 'bg-gray-600' : 'bg-purple-600'}`}
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>
      )}

      {/* Loading text */}
      {text && (
        <motion.p
          className={`text-sm font-medium ${variantClasses[variant]} text-center`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}

      {/* Progress percentage */}
      {showProgress && (
        <motion.span
          className={`text-xs font-semibold ${variantClasses[variant]}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {Math.round(progress)}%
        </motion.span>
      )}
    </div>
  );
};

export default ModernLoadingSpinner;