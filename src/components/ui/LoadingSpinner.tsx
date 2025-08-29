import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'custom';
  customColor?: string;
  text?: string;
  showText?: boolean;
  className?: string;
  fullScreen?: boolean;
  backdrop?: boolean;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  customColor,
  text = 'Loading...',
  showText = true,
  className = '',
  fullScreen = false,
  backdrop = false,
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const colorClasses = {
    primary: 'text-zion-cyan',
    secondary: 'text-zion-blue',
    white: 'text-white',
    custom: customColor ? '' : 'text-zion-cyan',
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const textVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const backdropVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const spinnerContent = (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      {/* Main Spinner */}
      <div className="relative">
        <motion.div
          className={`${sizeClasses[size]} ${colorClasses[color]}`}
          style={customColor ? { color: customColor } : {}}
          variants={spinnerVariants}
          animate="animate"
          role="status"
          aria-label="Loading"
        >
          <svg
            className="w-full h-full"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <motion.path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              variants={pulseVariants}
              animate="animate"
            />
          </svg>
        </motion.div>
        
        {/* Pulsing Ring */}
        <motion.div
          className={`absolute inset-0 rounded-full border-2 border-current opacity-20 ${sizeClasses[size]}`}
          style={customColor ? { borderColor: customColor } : {}}
          variants={pulseVariants}
          animate="animate"
        />
      </div>

      {/* Loading Text */}
      {showText && (
        <motion.div
          className="text-center"
          variants={textVariants}
          animate="animate"
        >
          <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
            {text}
          </p>
          {/* Animated Dots */}
          <div className="flex justify-center space-x-1 mt-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-current rounded-full"
                style={customColor ? { backgroundColor: customColor } : {}}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-zion-slate"
        variants={backdropVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {spinnerContent}
      </motion.div>
    );
  }

  if (backdrop) {
    return (
      <motion.div
        className="absolute inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
        variants={backdropVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="bg-white dark:bg-zion-slate rounded-lg p-8 shadow-2xl">
          {spinnerContent}
        </div>
      </motion.div>
    );
  }

  return spinnerContent;
};

// Specialized Loading Components
export const PageLoadingSpinner: React.FC<{ text?: string }> = ({ text = 'Loading page...' }) => (
  <LoadingSpinner
    size="xl"
    color="primary"
    text={text}
    fullScreen={true}
  />
);

export const SectionLoadingSpinner: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => (
  <LoadingSpinner
    size="lg"
    color="secondary"
    text={text}
    className="py-12"
  />
);

export const InlineLoadingSpinner: React.FC<{ size?: 'sm' | 'md' }> = ({ size = 'sm' }) => (
  <LoadingSpinner
    size={size}
    color="primary"
    showText={false}
    className="inline-flex"
  />
);

export const CardLoadingSpinner: React.FC<{ text?: string }> = ({ text = 'Loading content...' }) => (
  <LoadingSpinner
    size="md"
    color="secondary"
    text={text}
    className="py-8"
  />
);
