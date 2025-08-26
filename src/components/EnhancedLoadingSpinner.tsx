import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Zap, Brain, Rocket, Globe } from 'lucide-react';

interface EnhancedLoadingSpinnerProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
  variant?: 'default' | 'ai' | 'tech' | 'global';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const EnhancedLoadingSpinner: React.FC<EnhancedLoadingSpinnerProps> = ({
  message = 'Loading amazing experiences...',
  showProgress = false,
  progress = 0,
  variant = 'default',
  size = 'lg',
  className = ''
}) => {
  const [currentMessage, setCurrentMessage] = useState(message);
  const [messageIndex, setMessageIndex] = useState(0);

  const loadingMessages = [
    'Loading amazing experiences...',
    'Preparing cutting-edge solutions...',
    'Initializing AI systems...',
    'Connecting to global network...',
    'Optimizing performance...',
    'Almost ready...'
  ];

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40'
  };

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-12 h-12'
  };

  const variantConfigs = {
    default: {
      icon: Loader2,
      primaryColor: 'from-zion-cyan to-zion-blue',
      secondaryColor: 'text-zion-cyan',
      accentColor: 'border-zion-cyan'
    },
    ai: {
      icon: Brain,
      primaryColor: 'from-zion-purple to-zion-cyan',
      secondaryColor: 'text-zion-purple',
      accentColor: 'border-zion-purple'
    },
    tech: {
      icon: Rocket,
      primaryColor: 'from-zion-blue to-zion-purple',
      secondaryColor: 'text-zion-blue',
      accentColor: 'border-zion-blue'
    },
    global: {
      icon: Globe,
      primaryColor: 'from-zion-cyan to-zion-purple',
      secondaryColor: 'text-zion-cyan',
      accentColor: 'border-zion-cyan'
    }
  };

  const config = variantConfigs[variant];
  const IconComponent = config.icon;

  // Rotate through loading messages
  useEffect(() => {
    if (message === 'Loading amazing experiences...') {
      const interval = setInterval(() => {
        setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [message, loadingMessages.length]);

  useEffect(() => {
    if (message === 'Loading amazing experiences...') {
      setCurrentMessage(loadingMessages[messageIndex]);
    }
  }, [messageIndex, message, loadingMessages]);

  return (
    <div className={`flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light ${className}`}>
      <div className="relative text-center">
        {/* Main Spinner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Outer Ring */}
          <div className={`${sizeClasses[size]} border-4 border-zion-slate-light/20 rounded-full relative`}>
            {/* Animated Border */}
            <motion.div
              className={`absolute inset-0 border-4 border-transparent rounded-full bg-gradient-to-r ${config.primaryColor} bg-clip-border`}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner Content */}
            <div className="absolute inset-2 bg-zion-slate-dark rounded-full flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className={`text-2xl font-bold ${config.secondaryColor}`}
              >
                ZION
              </motion.div>
            </div>
          </div>

          {/* Floating Icon */}
          <motion.div
            className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center shadow-lg"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 360]
            }}
            transition={{ 
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 3, repeat: Infinity, ease: "linear" }
            }}
          >
            <IconComponent className="w-4 h-4 text-white" />
          </motion.div>
        </motion.div>

        {/* Loading Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`text-sm font-medium ${config.secondaryColor} animate-pulse`}
            >
              {currentMessage}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Progress Bar */}
        {showProgress && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 w-48 mx-auto"
          >
            <div className="w-full bg-zion-slate-light/20 rounded-full h-2 overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${config.primaryColor} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            <div className="text-xs text-gray-400 mt-2">
              {progress}% Complete
            </div>
          </motion.div>
        )}

        {/* Animated Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex justify-center mt-4 space-x-1"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-zion-cyan rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-1 h-1 bg-zion-cyan rounded-full opacity-60"
              style={{
                left: `${20 + (index * 15)}%`,
                top: `${30 + (index * 10)}%`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedLoadingSpinner;