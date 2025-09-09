import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'dots' | 'bars';
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  text,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <motion.div
              className="absolute inset-0 bg-zion-cyan rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute inset-0 bg-zion-purple rounded-full"
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            />
          </div>
        );

      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-zion-cyan rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        );

      case 'bars':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-1 bg-zion-cyan rounded-full"
                style={{ height: `${(i + 1) * 8}px` }}
                animate={{ scaleY: [1, 2, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </div>
        );

      default:
        return (
          <motion.div
            className={`${sizeClasses[size]} border-2 border-zion-slate-light/20 border-t-zion-cyan rounded-full`}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        );
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      {renderSpinner()}
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-zion-cyan text-sm font-medium text-center"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

// Full screen loading overlay
export const LoadingOverlay: React.FC<{ text?: string; className?: string }> = ({
  text = 'Loading...',
  className = ''
}) => (
  <div className={`fixed inset-0 bg-zion-slate-dark/80 backdrop-blur-sm flex items-center justify-center z-50 ${className}`}>
    <LoadingSpinner size="xl" text={text} />
  </div>
);

// Page loading component
export const PageLoader: React.FC<{ text?: string; className?: string }> = ({
  text = 'Loading page...',
  className = ''
}) => (
  <div className={`min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center ${className}`}>
    <LoadingSpinner size="xl" text={text} />
  </div>
);

export default LoadingSpinner;
