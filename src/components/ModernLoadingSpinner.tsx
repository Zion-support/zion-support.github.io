import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModernLoadingSpinnerProps {

  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'futuristic' | 'ai' | 'cyber' | 'quantum';
  text?: string;
  showProgress?: boolean;
  progress?: number;
  duration?: number;
  onComplete?: () => void;
}

const loadingVariants = {

  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

const spinnerVariants = {

  rotate: {

    rotate: 360,
    transition: {

      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  },
  pulse: {

    scale: [1, 1.1, 1],
    opacity: [0.5, 1, 0.5],
    transition: {

      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  float: {

    y: [-10, 10, -10],
    transition: {

      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const iconVariants = {

  rotate: {

    rotate: 360,
    transition: {

      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }
  },
  pulse: {

    scale: [1, 1.2, 1],
    transition: {

      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const ModernLoadingSpinner: React.FC<ModernLoadingSpinnerProps> = ({

  size = 'md',
  variant = 'default',
  text = 'Loading...',
  showProgress = false,
  progress = 0,
  duration = 3000,
  onComplete
}) => {

  const [currentProgress, setCurrentProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const sizeClasses = {

    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const textSizes = {

    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  // Progress simulation
  useEffect(() => {

    if (showProgress && !isComplete) {

      const interval = setInterval(() => {

        setCurrentProgress(prev => {

          if (prev >= 100) {

            setIsComplete(true);
            onComplete?.();
            return 100;
          }
          return prev + 1;
        });
      }, duration / 100);

      return () => clearInterval(interval);
    }
  }, [showProgress, duration, onComplete, isComplete]);

  // Auto-complete after duration
  useEffect(() => {

    if (!showProgress && duration) {

      const timer = setTimeout(() => {

        setIsComplete(true);
        onComplete?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, showProgress, onComplete]);

  const renderSpinner = () => {

    switch (variant) {

      case 'futuristic':
        return (
          <div className="relative">
            <motion.div
              className={`${sizeClasses[size]} border-4 border-transparent rounded-full`}
              style={{

                background: 'linear-gradient(45deg, #22ddd2, #a855f7, #10b981)',
                backgroundSize: '200% 200%'
              }}
              animate={{

                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{

                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute inset-0 border-4 border-slate-800 rounded-full"
              animate={{ rotate: 360 }}
              transition={{

                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        );

      case 'ai':
        return (
          <div className="relative">
            <motion.div
              className={`${sizeClasses[size]} flex items-center justify-center`}
              animate="pulse"
              variants={spinnerVariants}
            >
              <Brain className="w-full h-full text-cyan-400" />
            </motion.div>
            <motion.div
              className="absolute inset-0 border-2 border-cyan-400 rounded-full"
              animate="rotate"
              variants={spinnerVariants}
            />
          </div>
        );

      case 'cyber':
        return (
          <div className="relative">
            <motion.div
              className={`${sizeClasses[size]} flex items-center justify-center`}
              animate="pulse"
              variants={spinnerVariants}
            >
              <Shield className="w-full h-full text-purple-400" />
            </motion.div>
            <motion.div
              className="absolute inset-0 border-2 border-purple-400 rounded-full"
              style={{

                background: 'conic-gradient(from 0deg, transparent, #a855f7, transparent)'
              }}
              animate={{ rotate: 360 }}
              transition={{

                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        );

      case 'quantum':
        return (
          <div className="relative">
            <motion.div
              className={`${sizeClasses[size]} flex items-center justify-center`}
              animate="float"
              variants={spinnerVariants}
            >
              <Cpu className="w-full h-full text-green-400" />
            </motion.div>
            <motion.div
              className="absolute inset-0 border-2 border-green-400 rounded-full"
              animate={{

                scale: [1, 1.5, 1],
                opacity: [1, 0.3, 1]
              }}
              transition={{

                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        );

      default:
        return (
          <motion.div
            className={`${sizeClasses[size]} border-4 border-slate-600 border-t-cyan-400 rounded-full`}
            animate={{ rotate: 360 }}
            transition={{

              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );
    }
  };

  const renderProgressBar = () => {

    if (!showProgress) return null;

    return (
      <div className="w-full max-w-xs mt-4">
        <div className="flex justify-between text-sm text-slate-400 mb-2">
          <span>Loading...</span>
          <span>{currentProgress}%</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <motion.div
            className="h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${currentProgress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    );
  };

  const renderLoadingText = () => {

    if (!text) return null;

    const loadingDots = text.split('').map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{

          delay: index * 0.1,
          duration: 0.3
        }}
        className="inline-block"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ));

    return (
      <motion.div
        className={`${textSizes[size]} text-slate-300 mt-4 text-center`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {loadingDots}
      </motion.div>
    );
  };

  if (isComplete) {

    return (
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={`${sizeClasses[size]} flex items-center justify-center text-green-400`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <Zap className="w-full h-full" />
        </motion.div>
        <motion.p
          className="text-slate-300 mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Ready!
        </motion.p>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="flex flex-col items-center justify-center p-8"
        variants={loadingVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Main Spinner */}
        <div className="relative">
          {renderSpinner()}
          
          {/* Floating particles for futuristic variants */}
          {variant === 'futuristic' && (
            <>
              <motion.div
                className="absolute -top-2 -left-2 w-2 h-2 bg-cyan-400 rounded-full"
                animate={{

                  x: [0, 10, 0],
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{

                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -top-2 -right-2 w-2 h-2 bg-purple-400 rounded-full"
                animate={{

                  x: [0, -10, 0],
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{

                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-2 h-2 bg-green-400 rounded-full"
                animate={{

                  x: [0, 10, 0],
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{

                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </>
          )}
        </div>

        {/* Progress Bar */}
        {renderProgressBar()}

        {/* Loading Text */}
        {renderLoadingText()}

        {/* Additional Loading Indicators */}
        {variant === 'ai' && (
          <motion.div
            className="flex space-x-2 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-cyan-400 rounded-full"
                animate={{

                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{

                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};