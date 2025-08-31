import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Circle, CheckCircle, AlertCircle, Clock, Zap, Brain, Server, Cloud, Shield } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'dots' | 'pulse' | 'spinner' | 'progress' | 'success' | 'error' | 'loading';
  text?: string;
  showText?: boolean;
  className?: string;
  ariaLabel?: string;
  progress?: number;
  theme?: 'light' | 'dark' | 'auto';
}

export function EnhancedLoadingSpinner({
  size = 'md',
  variant = 'default',
  text,
  showText = true,
  className = '',
  ariaLabel,
  progress,
  theme = 'auto'
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  const getDefaultText = () => {
    if (text) return text;
    
    switch (variant) {
      case 'success':
        return 'Completed successfully';
      case 'error':
        return 'An error occurred';
      case 'loading':
        return 'Loading...';
      case 'progress':
        return progress ? `${Math.round(progress)}% complete` : 'Processing...';
      default:
        return 'Loading...';
    }
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`${sizeClasses[size]} bg-current rounded-full`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        );

      case 'pulse':
        return (
          <motion.div
            className={`${sizeClasses[size]} bg-current rounded-full`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );

      case 'spinner':
        return (
          <motion.div
            className={`${sizeClasses[size]} border-2 border-current border-t-transparent rounded-full`}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );

      case 'progress':
        return (
          <div className="relative">
            <div className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full`}>
              <motion.div
                className="absolute inset-0 border-4 border-current border-t-transparent rounded-full"
                initial={{ rotate: -90 }}
                animate={{ rotate: progress ? (progress / 100) * 360 - 90 : -90 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            {progress !== undefined && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`${textSizeClasses[size]} font-medium`}>
                  {Math.round(progress)}%
                </span>
              </div>
            )}
          </div>
        );

      case 'success':
        return (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <CheckCircle className={`${sizeClasses[size]} text-green-500`} />
          </motion.div>
        );

      case 'error':
        return (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <AlertCircle className={`${sizeClasses[size]} text-red-500`} />
          </motion.div>
        );

      case 'loading':
        return (
          <motion.div
            className={`${sizeClasses[size]} border-2 border-current border-t-transparent rounded-full`}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );

      default:
        return (
          <motion.div
            className={`${sizeClasses[size]} border-2 border-current border-t-transparent rounded-full`}
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

  const getThemeClasses = () => {
    if (theme === 'light') return 'text-gray-700';
    if (theme === 'dark') return 'text-white';
    return 'text-zion-cyan dark:text-zion-cyan-light';
  };

  return (
    <div
      className={`flex flex-col items-center justify-center space-y-3 ${className}`}
      role="status"
      aria-label={ariaLabel || getDefaultText()}
      aria-live="polite"
    >
      {renderSpinner()}
      
      {showText && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`${textSizeClasses[size]} font-medium text-center ${getThemeClasses()}`}
        >
          {getDefaultText()}
        </motion.p>
      )}
    </div>
  );
}

// Specialized loading components for different contexts
export function AILoadingSpinner({ size = 'lg', text }: { size?: 'sm' | 'md' | 'lg' | 'xl'; text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8">
      <motion.div
        className="relative"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        <Brain className={`${size === 'sm' ? 'w-8 h-8' : size === 'md' ? 'w-12 h-12' : size === 'lg' ? 'w-16 h-16' : 'w-20 h-20'} text-zion-cyan`} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <h3 className="text-lg font-semibold text-zion-slate-dark dark:text-white mb-2">
          AI Processing
        </h3>
        <p className="text-zion-slate-light dark:text-zion-slate-light">
          {text || 'Analyzing your request with advanced AI algorithms...'}
        </p>
      </motion.div>
    </div>
  );
}

export function ServiceLoadingSpinner({ service, size = 'lg' }: { service: string; size?: 'sm' | 'md' | 'lg' | 'xl' }) {
  const getServiceIcon = () => {
    switch (service.toLowerCase()) {
      case 'ai':
      case 'artificial intelligence':
        return <Brain className={`${size === 'sm' ? 'w-6 h-6' : size === 'md' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-16 h-16'} text-zion-cyan`} />;
      case 'cloud':
      case 'cloud computing':
        return <Cloud className={`${size === 'sm' ? 'w-6 h-6' : size === 'md' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-16 h-16'} text-zion-cyan`} />;
      case 'cybersecurity':
      case 'security':
        return <Shield className={`${size === 'sm' ? 'w-6 h-6' : size === 'md' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-16 h-16'} text-zion-cyan`} />;
      case 'infrastructure':
      case 'server':
        return <Server className={`${size === 'sm' ? 'w-6 h-6' : size === 'md' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-16 h-16'} text-zion-cyan`} />;
      default:
        return <Zap className={`${size === 'sm' ? 'w-6 h-6' : size === 'md' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-16 h-16'} text-zion-cyan`} />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8">
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {getServiceIcon()}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <h3 className="text-lg font-semibold text-zion-slate-dark dark:text-white mb-2">
          Initializing {service}
        </h3>
        <p className="text-zion-slate-light dark:text-zion-slate-light">
          Setting up your {service.toLowerCase()} service...
        </p>
      </motion.div>
    </div>
  );
}

export function PageLoadingSpinner({ pageName }: { pageName: string }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zion-slate-dark via-zion-slate-darker to-zion-slate-dark">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          className="w-20 h-20 mx-auto mb-6"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Circle className="w-full h-full text-zion-cyan" strokeWidth={1} />
        </motion.div>
        
        <h1 className="text-2xl font-bold text-white mb-2">
          Loading {pageName}
        </h1>
        
        <p className="text-zion-slate-light">
          Please wait while we prepare your experience...
        </p>
        
        <motion.div
          className="mt-6 flex justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-zion-cyan rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

// Loading overlay component
export function LoadingOverlay({ 
  isVisible, 
  children, 
  spinnerVariant = 'default',
  text = 'Loading...',
  backdrop = true 
}: {
  isVisible: boolean;
  children: React.ReactNode;
  spinnerVariant?: 'default' | 'dots' | 'pulse' | 'spinner' | 'progress' | 'success' | 'error' | 'loading';
  text?: string;
  backdrop?: boolean;
}) {
  if (!isVisible) return <>{children}</>;

  return (
    <div className="relative">
      {children}
      <div className={`absolute inset-0 flex items-center justify-center ${backdrop ? 'bg-black/50 backdrop-blur-sm' : ''}`}>
        <EnhancedLoadingSpinner
          variant={spinnerVariant}
          text={text}
          size="lg"
          className="bg-white dark:bg-zion-slate-dark rounded-lg p-6 shadow-xl"
        />
      </div>
    </div>
  );
}
