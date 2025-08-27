import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Zap, Brain, Cloud, Shield } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'zion' | 'tech' | 'minimal';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24'
};

const iconSizes = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

export function LoadingSpinner({ 
  size = 'md', 
  variant = 'default', 
  text, 
  fullScreen = false,
  className = ''
}: LoadingSpinnerProps) {
  const containerClasses = fullScreen 
    ? 'min-h-screen flex items-center justify-center bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark'
    : 'flex items-center justify-center';

  const renderSpinner = () => {
    switch (variant) {
      case 'zion':
        return (
          <div className="relative">
            {/* Outer ring */}
            <motion.div 
              className={`${sizeClasses[size]} border-4 border-zion-cyan/20 rounded-full`}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner ring */}
            <motion.div 
              className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-zion-cyan border-t-transparent rounded-full`}
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            {/* Center text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="text-zion-cyan font-bold text-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ZION
              </motion.div>
            </div>
          </div>
        );

      case 'tech':
        return (
          <div className="relative">
            {/* Tech-themed icons rotating */}
            <motion.div
              className="relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Zap className={`${iconSizes[size]} text-zion-cyan absolute`} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Brain className={`${iconSizes[size]} text-zion-blue absolute`} style={{ transform: 'rotate(120deg)' }} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Cloud className={`${iconSizes[size]} text-zion-purple absolute`} style={{ transform: 'rotate(240deg)' }} />
              </div>
            </motion.div>
            {/* Pulsing center */}
            <motion.div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-zion-cyan rounded-full`}
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        );

      case 'minimal':
        return (
          <motion.div
            className={`${sizeClasses[size]} border-2 border-zion-cyan/30 border-t-zion-cyan rounded-full`}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        );

      default:
        return (
          <motion.div
            className={`${sizeClasses[size]} border-4 border-zion-cyan/20 border-t-zion-cyan rounded-full`}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        );
    }
  };

  return (
    <div className={`${containerClasses} ${className}`}>
      <div className="text-center">
        {renderSpinner()}
        
        {text && (
          <motion.p 
            className="mt-4 text-zion-slate-light text-lg font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {text}
          </motion.p>
        )}
        
        {/* Loading dots */}
        <motion.div className="flex justify-center mt-4 space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-zion-cyan rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                delay: i * 0.2 
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// Specialized loading components
export function ZionLoadingSpinner({ size = 'lg', text = 'Loading Zion Tech Group...', fullScreen = true }) {
  return <LoadingSpinner size={size} variant="zion" text={text} fullScreen={fullScreen} />;
}

export function TechLoadingSpinner({ size = 'md', text = 'Initializing...', fullScreen = false }) {
  return <LoadingSpinner size={size} variant="tech" text={text} fullScreen={fullScreen} />;
}

export function MinimalLoadingSpinner({ size = 'sm', fullScreen = false }) {
  return <LoadingSpinner size={size} variant="minimal" fullScreen={fullScreen} />;
}

export default LoadingSpinner;
