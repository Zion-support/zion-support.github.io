import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Zap, Brain, Shield, Cloud } from 'lucide-react';

interface EnhancedLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'pulse' | 'bounce' | 'spin' | 'wave';
  text?: string;
  showProgress?: boolean;
  progress?: number;
  theme?: 'zion' | 'minimal' | 'futuristic';
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-16 h-16',
  lg: 'w-24 h-24',
  xl: 'w-32 h-32'
};

const iconSizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-10 h-10'
};

const iconVariants = [
  { icon: Brain, color: 'from-zion-cyan to-zion-blue', delay: 0 },
  { icon: Shield, color: 'from-zion-purple to-zion-cyan', delay: 0.2 },
  { icon: Cloud, color: 'from-zion-blue to-zion-purple', delay: 0.4 },
  { icon: Zap, color: 'from-zion-cyan to-zion-neon', delay: 0.6 }
];

export const EnhancedLoadingSpinner: React.FC<EnhancedLoadingSpinnerProps> = ({
  size = 'lg',
  variant = 'default',
  text = 'Loading amazing experiences...',
  showProgress = false,
  progress = 0,
  theme = 'zion'
}) => {
  const renderSpinner = () => {
    switch (variant) {
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-zion-slate-dark rounded-full"></div>
            <div className="absolute inset-4 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full animate-pulse delay-100"></div>
          </div>
        );
      
      case 'bounce':
        return (
          <div className="flex space-x-2">
            {iconVariants.map((item, index) => (
              <motion.div
                key={index}
                className={`${iconSizeClasses[size]} bg-gradient-to-r ${item.color} rounded-full p-2`}
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: item.delay,
                  ease: "easeInOut"
                }}
              >
                <item.icon className="w-full h-full text-white" />
              </motion.div>
            ))}
          </div>
        );
      
      case 'wave':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-2 bg-zion-cyan rounded-full"
                animate={{
                  height: [20, 40, 20],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        );
      
      case 'spin':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <div className="absolute inset-0 border-4 border-zion-cyan/20 rounded-full"></div>
            <motion.div
              className="absolute inset-0 border-4 border-zion-cyan border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <div className="absolute inset-2 bg-zion-slate-dark rounded-full flex items-center justify-center">
              <Zap className={`${iconSizeClasses[size]} text-zion-cyan`} />
            </div>
          </div>
        );
      
      default:
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <div className="absolute inset-0 border-4 border-zion-cyan/20 rounded-full"></div>
            <motion.div
              className="absolute inset-0 border-4 border-zion-cyan border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-zion-cyan font-bold text-lg">ZION</div>
            </div>
          </div>
        );
    }
  };

  const renderProgress = () => {
    if (!showProgress) return null;
    
    return (
      <div className="w-full max-w-xs mt-6">
        <div className="flex justify-between text-sm text-zion-cyan/80 mb-2">
          <span>Loading...</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-zion-slate-light rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-zion-cyan to-zion-blue h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
    );
  };

  if (theme === 'minimal') {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className={`${iconSizeClasses[size]} animate-spin text-zion-cyan`} />
        {text && <span className="ml-3 text-zion-cyan">{text}</span>}
      </div>
    );
  }

  if (theme === 'futuristic') {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <div className={`${sizeClasses[size]} border-2 border-zion-cyan/30 rounded-full`}>
            <motion.div
              className="absolute inset-0 border-2 border-zion-cyan rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="absolute inset-2 bg-zion-slate-dark rounded-full flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Zap className={`${iconSizeClasses[size]} text-zion-cyan`} />
              </motion.div>
            </div>
          </div>
        </div>
        {text && (
          <motion.p
            className="mt-4 text-zion-cyan text-center text-sm animate-pulse"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {text}
          </motion.p>
        )}
        {renderProgress()}
      </div>
    );
  }

  // Default Zion theme
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="relative">
        {renderSpinner()}
        {text && (
          <motion.div
            className="mt-4 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-zion-cyan text-sm animate-pulse">{text}</div>
          </motion.div>
        )}
        {renderProgress()}
      </div>
    </div>
  );
};