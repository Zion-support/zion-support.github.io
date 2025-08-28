import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Loader2, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket
} from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'dots' | 'bars' | 'futuristic' | 'zion';
  text?: string;
  showProgress?: boolean;
  progress?: number;
  status?: 'loading' | 'success' | 'error' | 'idle';
  onComplete?: () => void;
  timeout?: number;
  showTimeout?: boolean;
  className?: string;
}

interface LoadingState {
  status: 'loading' | 'success' | 'error' | 'idle';
  progress: number;
  message: string;
  icon: React.ComponentType<any>;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  text = 'Loading...',
  showProgress = false,
  progress = 0,
  status = 'loading',
  onComplete,
  timeout = 30000, // 30 seconds default
  showTimeout = true,
  className = ''
}) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(timeout);
  const [loadingStates] = useState<LoadingState[]>([
    {
      status: 'loading',
      progress: 0,
      message: 'Initializing...',
      icon: Zap
    },
    {
      status: 'loading',
      progress: 25,
      message: 'Processing data...',
      icon: Brain
    },
    {
      status: 'loading',
      progress: 50,
      message: 'Securing connection...',
      icon: Shield
    },
    {
      status: 'loading',
      progress: 75,
      message: 'Optimizing performance...',
      icon: Cloud
    },
    {
      status: 'loading',
      progress: 100,
      message: 'Almost ready...',
      icon: Rocket
    }
  ]);

  // Size classes
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  // Progress animation
  useEffect(() => {
    if (showProgress && progress > 0) {
      const timer = setTimeout(() => {
        setCurrentProgress(progress);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [progress, showProgress]);

  // Timeout handling
  useEffect(() => {
    if (timeout > 0 && showTimeout) {
      const interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1000;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timeout, showTimeout]);

  // Auto-progress for demo purposes
  useEffect(() => {
    if (showProgress && progress === 0 && status === 'loading') {
      const interval = setInterval(() => {
        setCurrentProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            if (onComplete) onComplete();
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 500);

      return () => clearInterval(interval);
    }
  }, [showProgress, progress, status, onComplete]);

  // Get current loading state message
  const getCurrentMessage = () => {
    if (text) return text;
    
    const currentState = loadingStates.find(state => 
      currentProgress >= state.progress
    );
    
    return currentState?.message || 'Loading...';
  };

  // Get appropriate icon based on status
  const getStatusIcon = () => {
    switch (status) {
      case 'success':
        return CheckCircle;
      case 'error':
        return AlertCircle;
      case 'idle':
        return Clock;
      default:
        return Loader2;
    }
  };

  // Render different spinner variants
  const renderSpinner = () => {
    const IconComponent = getStatusIcon();
    const iconSize = size === 'xl' ? 32 : size === 'lg' ? 24 : size === 'md' ? 20 : 16;

    switch (variant) {
      case 'pulse':
        return (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className={`${sizeClasses[size]} bg-zion-cyan rounded-full flex items-center justify-center`}
          >
            <IconComponent className="text-black" size={iconSize} />
          </motion.div>
        );

      case 'dots':
        return (
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 0.6, 
                  repeat: Infinity, 
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
                className="w-3 h-3 bg-zion-cyan rounded-full"
              />
            ))}
          </div>
        );

      case 'bars':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                animate={{ height: [20, 40, 20] }}
                transition={{ 
                  duration: 0.8, 
                  repeat: Infinity, 
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
                className="w-2 bg-zion-cyan rounded-full"
              />
            ))}
          </div>
        );

      case 'futuristic':
        return (
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className={`${sizeClasses[size]} border-4 border-transparent border-t-zion-cyan border-r-zion-purple rounded-full`}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className={`absolute inset-0 ${sizeClasses[size]} border-4 border-transparent border-b-zion-neon border-l-zion-cyan rounded-full`}
            />
            <div className={`absolute inset-2 ${sizeClasses[size]} bg-slate-800 rounded-full flex items-center justify-center`}>
              <IconComponent className="text-zion-cyan" size={iconSize * 0.6} />
            </div>
          </div>
        );

      case 'zion':
        return (
          <div className="relative">
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className={`${sizeClasses[size]} border-2 border-zion-cyan/30 rounded-full`}
            />
            
            {/* Middle ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className={`absolute inset-2 ${sizeClasses[size]} border-2 border-zion-purple/50 rounded-full`}
            />
            
            {/* Inner ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className={`absolute inset-4 ${sizeClasses[size]} border-2 border-zion-neon/70 rounded-full`}
            />
            
            {/* Center icon */}
            <div className={`absolute inset-6 ${sizeClasses[size]} bg-slate-800 rounded-full flex items-center justify-center`}>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <IconComponent className="text-zion-cyan" size={iconSize * 0.5} />
              </motion.div>
            </div>
            
            {/* Orbiting particles */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  rotate: 360,
                  x: [0, 20, 0],
                  y: [0, -20, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.7,
                  ease: "easeInOut"
                }}
                className="absolute w-2 h-2 bg-zion-cyan rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  marginLeft: '-4px',
                  marginTop: '-4px'
                }}
              />
            ))}
          </div>
        );

      default:
        return (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className={`${sizeClasses[size]} border-2 border-zion-cyan border-t-transparent rounded-full`}
          />
        );
    }
  };

  // Progress bar component
  const renderProgressBar = () => {
    if (!showProgress) return null;

    return (
      <div className="w-full max-w-xs mx-auto mt-4">
        <div className="flex justify-between text-xs text-slate-400 mb-2">
          <span>Progress</span>
          <span>{Math.round(currentProgress)}%</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${currentProgress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        {showTimeout && timeRemaining > 0 && (
          <div className="text-xs text-slate-500 mt-1 text-center">
            Timeout in {Math.ceil(timeRemaining / 1000)}s
          </div>
        )}
      </div>
    );
  };

  // Status-specific content
  const renderStatusContent = () => {
    switch (status) {
      case 'success':
        return (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-center"
          >
            <CheckCircle className={`${sizeClasses[size]} text-green-500 mx-auto mb-2`} />
            <p className="text-green-400 font-medium">Completed!</p>
          </motion.div>
        );

      case 'error':
        return (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-center"
          >
            <AlertCircle className={`${sizeClasses[size]} text-red-500 mx-auto mb-2`} />
            <p className="text-red-400 font-medium">Error occurred</p>
          </motion.div>
        );

      case 'idle':
        return (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-center"
          >
            <Clock className={`${sizeClasses[size]} text-yellow-500 mx-auto mb-2`} />
            <p className="text-yellow-400 font-medium">Waiting...</p>
          </motion.div>
        );

      default:
        return (
          <div className="text-center">
            {renderSpinner()}
            <AnimatePresence mode="wait">
              <motion.p
                key={getCurrentMessage()}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-slate-300 mt-3 text-sm"
              >
                {getCurrentMessage()}
              </motion.p>
            </AnimatePresence>
            {renderProgressBar()}
          </div>
        );
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center p-6 ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={status}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {renderStatusContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Export default spinner for backward compatibility
export default LoadingSpinner;

// Export specific spinner variants
export const PulseSpinner = (props: Omit<LoadingSpinnerProps, 'variant'>) => (
  <LoadingSpinner {...props} variant="pulse" />
);

export const DotsSpinner = (props: Omit<LoadingSpinnerProps, 'variant'>) => (
  <LoadingSpinner {...props} variant="dots" />
);

export const BarsSpinner = (props: Omit<LoadingSpinnerProps, 'variant'>) => (
  <LoadingSpinner {...props} variant="bars" />
);

export const FuturisticSpinner = (props: Omit<LoadingSpinnerProps, 'variant'>) => (
  <LoadingSpinner {...props} variant="futuristic" />
);

export const ZionSpinner = (props: Omit<LoadingSpinnerProps, 'variant'>) => (
  <LoadingSpinner {...props} variant="zion" />
);
