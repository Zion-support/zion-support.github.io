import React from 'react';
import { motion } from 'framer-motion';

interface EnhancedLoadingProps {
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({
  variant = 'spinner',
  size = 'md',
  text,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const renderSpinner = () => (
    <motion.div
      className={`${sizeClasses[size]} border-2 border-blue-400/30 border-t-blue-400 rounded-full`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  );

  const renderDots = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`${sizeClasses[size]} bg-blue-400 rounded-full`}
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

  const renderPulse = () => (
    <motion.div
      className={`${sizeClasses[size]} bg-blue-400 rounded-full`}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.7, 1, 0.7]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );

  const renderBars = () => (
    <div className="flex space-x-1">
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className={`w-1 ${size === 'sm' ? 'h-3' : size === 'md' ? 'h-6' : 'h-8'} bg-blue-400 rounded-full`}
          animate={{
            scaleY: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.1
          }}
        />
      ))}
    </div>
  );

  const renderVariant = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'bars':
        return renderBars();
      default:
        return renderSpinner();
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-3 ${className}`}>
      {renderVariant()}
      {text && (
        <motion.p
          className="text-sm text-gray-400 text-center"
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

export default EnhancedLoading;