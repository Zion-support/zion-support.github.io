import React from "react";
import { motion } from "framer-motion";
import { Loader2, Zap, Brain, Shield, Cloud } from "lucide-react";
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'dots' | 'pulse' | 'tech' | 'ai',
  message?: string;
  showProgress?: boolean;
  progress?: number;
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',md: 'w-8 h-8',lg: 'w-12 h-12',xl: 'w-16 h-16'
};
const iconSizeClasses = {
  sm: 'w-3 h-3',md: 'w-6 h-6',lg: 'w-8 h-8',xl: 'w-12 h-12'
};
export const EnhancedLoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md';
  variant = 'default',
  message;
  showProgress = false;
  progress = 0;
  className = ''
}) => {
  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-blue-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 0.6,repeat: Infinity,delay: i * 0.2
                }}
              />
            ))}
          </div>
        );
      case 'pulse':
        return (
          <motion.div
            className={`${sizeClasses[size]} bg-gradient-to-r from-blue-500 to-purple-600 rounded-full`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 1,repeat: Infinity
            }}
          />
        );
      case 'tech':
        return (
          <div className="relative">
            <motion.div
              className={`${sizeClasses[size]} border-4 border-blue-200 border-t-blue-600 rounded-full`}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,repeat: Infinity,ease: 'linear'
              }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: -360 }}
              transition={{
                duration: 1,repeat: Infinity,ease: 'linear'
              }}
            >
              <Zap className={`${iconSizeClasses[size]} text-blue-600`} />
            </motion.div>
          </div>
        );
      case 'ai':
        return (
          <div className="relative">
            <motion.div
              className={`${sizeClasses[size]} border-4 border-purple-200 border-t-purple-600 rounded-full`}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.5,repeat: Infinity,ease: 'linear'
              }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2,repeat: Infinity
              }}
            >
              <Brain className={`${iconSizeClasses[size]} text-purple-600`} />
            </motion.div>
          </div>
        );
      default: return (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,repeat: Infinity,ease: 'linear'
            }}
          >
            <Loader2 className={`${sizeClasses[size]} text-blue-600`} />
          </motion.div>
        );
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      {renderSpinner()}
      
      {message && (
        <motion.p
          className="text-gray-600 dark: text-gray-300 text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {message}
        </motion.p>
      )}

      {showProgress && (
        <div className="w-48">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Loading...</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      )}
    </div>
  );
},

// Specialized loading components for different contexts
export const TechLoadingSpinner: React.FC<{ message?: string }> = ({ message }) => (
  <EnhancedLoadingSpinner
    variant="tech"
    size="lg"
    message={message || "Loading advanced features..."}
  />
);
export const AILoadingSpinner: React.FC<{ message?: string }> = ({ message }) => (
  <EnhancedLoadingSpinner
    variant="ai"
    size="lg"
    message={message || "AI is processing..."}
  />
);
export const PageLoadingSpinner: React.FC<{ message?: string }> = ({ message }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <EnhancedLoadingSpinner
      variant="pulse"
      size="xl"
      message={message || "Preparing amazing experiences..."}
    />
  </div>
);
export default EnhancedLoadingSpinner;