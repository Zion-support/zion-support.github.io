import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Cpu, Database } from 'lucide-react';
interface EnhancedLoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'tech' | 'minimal' | 'futuristic';
  text?: string;
  showProgress?: boolean;
  progress?: number;
}
export const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({
  size = 'md',
  variant = 'default',
  text = 'Loading...',
  showProgress = false,
  progress = 0
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };
  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };
  const renderSpinner = () => {
    switch (variant) {
      case 'tech':
        return (
          <div className="relative">
            {/* Outer ring */}
            <motion.div
              className={`${sizeClasses[size]} border-4 border-zion-blue-dark/30 rounded-full`}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner ring */}
            <motion.div
              className={`${sizeClasses[size]} border-4 border-transparent border-t-zion-cyan rounded-full absolute inset-0`}
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Cpu className="w-1/3 h-1/3 text-zion-purple animate-pulse" />
            </div>
          </div>
        );
      case 'futuristic':
        return (
          <div className="relative">
            {/* Hexagon background */}
            <div className={`${sizeClasses[size]} bg-gradient-to-r from-zion-purple to-zion-cyan rounded-2xl flex items-center justify-center relative overflow-hidden`}>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue"
                animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ backgroundSize: '200% 200%' }}
              />
              {/* Center content */}
              <div className="relative z-10 text-white font-bold text-2xl">
                Z
              </div>
              {/* Floating particles */}
              <motion.div
                className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full"
                animate={{ y: [0, -10, 0], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-2 right-2 w-2 h-2 bg-white rounded-full"
                animate={{ y: [0, 10, 0], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </div>
          </div>
        );
      case 'minimal':
        return (
          <motion.div
            className={`${sizeClasses[size]} border-2 border-zion-cyan rounded-full border-t-transparent`}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        );
      default:
        return (
          <div className="relative">
            {/* Main spinner */}
            <motion.div
              className={`${sizeClasses[size]} border-4 border-zion-blue-dark/20 rounded-full`}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            {/* Gradient border */}
            <motion.div
              className={`${sizeClasses[size]} border-4 border-transparent border-t-zion-cyan border-r-zion-purple rounded-full absolute inset-0`}
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            {/* Center sparkle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-1/3 h-1/3 text-zion-cyan" />
              </motion.div>
            </div>
          </div>
        );
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-8">
      {/* Spinner */}
      <div className="mb-6">
        {renderSpinner()}
      </div>
      {/* Loading text */}
      {text && (
        <motion.div
          className={`text-center ${textSizes[size]}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-zion-slate-light mb-2">{text}</div>
          {/* Animated dots */}
          <div className="flex justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-zion-cyan rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      )}
      {/* Progress bar */}
      {showProgress && (
        <motion.div
          className="w-64 max-w-full mt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-zion-blue-dark/30 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <div className="text-center text-sm text-zion-slate-light mt-2">
            {progress}% Complete
          </div>
        </motion.div>
      )}
      {/* Tech indicators */}
      {variant === 'tech' && (
        <motion.div
          className="flex items-center gap-4 mt-6 text-zion-slate-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-zion-cyan" />
            <span className="text-xs">AI Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-zion-purple" />
            <span className="text-xs">Data Loading</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};
export default EnhancedLoading;