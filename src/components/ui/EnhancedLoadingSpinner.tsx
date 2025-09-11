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
    'Loading AI-powered insights...',
    'Optimizing cloud infrastructure...',
    'Securing your digital assets...',
    'Innovating the future of tech...',
    'Connecting global networks...',
    'Building autonomous systems...',
    'Unleashing quantum capabilities...',
    'Crafting seamless user experiences...',
    'Processing complex data streams...',
    'Initializing advanced algorithms...'
  ];

  useEffect(() => {
    if (variant === 'ai' || variant === 'tech' || variant === 'global') {
      const interval = setInterval(() => {
        setMessageIndex((prevIndex) => (prevIndex + 1) % loadingMessages.length);
      }, 3000); // Change message every 3 seconds
      return () => clearInterval(interval);
    }
  }, [variant, loadingMessages.length]);

  useEffect(() => {
    setCurrentMessage(message);
  }, [message]);

  const spinnerSizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-6 w-6 border-2',
    lg: 'h-8 w-8 border-3',
    xl: 'h-12 w-12 border-4',
  };

  const spinnerColorClasses = {
    default: 'border-t-blue-500',
    ai: 'border-t-purple-500',
    tech: 'border-t-cyan-500',
    global: 'border-t-green-500',
  };

  const iconMap = {
    default: Loader2,
    ai: Brain,
    tech: Zap,
    global: Globe,
  };

  const IconComponent = iconMap[variant];

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.div
        className={`rounded-full animate-spin ${spinnerSizeClasses[size]} ${spinnerColorClasses[variant]} border-solid border-gray-700`}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      >
        {variant !== 'default' && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          >
            <IconComponent className={`h-3 w-3 ${size === 'xl' ? 'h-6 w-6' : ''}`} />
          </motion.div>
        )}
      </motion.div>
      {(variant === 'ai' || variant === 'tech' || variant === 'global') && (
        <AnimatePresence mode="wait">
          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="mt-3 text-sm text-gray-400 text-center max-w-xs"
          >
            {loadingMessages[messageIndex]}
          </motion.p>
        </AnimatePresence>
      )}
      {showProgress && (
        <div className="w-full bg-gray-700 rounded-full h-2.5 mt-3">
          <motion.div
            className="bg-blue-500 h-2.5 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>
      )}
    </div>
  );
};

export const ZionLoadingSpinner: React.FC<Omit<EnhancedLoadingSpinnerProps, 'variant'>> = (props) => (
  <EnhancedLoadingSpinner {...props} variant="tech" />
);

export const TechLoadingSpinner: React.FC<Omit<EnhancedLoadingSpinnerProps, 'variant'>> = (props) => (
  <EnhancedLoadingSpinner {...props} variant="tech" />
);

interface LoadingOverlayProps {
  isOpen: boolean;
  message?: string;
  progress?: number;
  variant?: 'default' | 'ai' | 'tech' | 'global';
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isOpen,
  message,
  progress,
  variant = 'default',
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]"
        >
          <EnhancedLoadingSpinner message={message} showProgress={progress !== undefined} progress={progress} variant={variant} size="xl" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};