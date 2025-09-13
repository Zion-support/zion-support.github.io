import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu, Brain, Shield } from 'lucide-react';

interface EnhancedLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'cyber' | 'quantum';
  message?: string;
  showProgress?: boolean;
  progress?: number;
}

export const EnhancedLoadingSpinner: React.FC<EnhancedLoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  message = 'Loading amazing experiences...',
  showProgress = false,
  progress = 0
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48'
  };

  const iconSize = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSize = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl'
  };

  const getVariantContent = () => {
    switch (variant) {
      case 'cyber':
        return (
          <>
            <motion.div
              className={`${sizeClasses[size]} border-4 border-zion-cyan/20 rounded-full relative`}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="absolute inset-0 border-4 border-zion-cyan border-t-transparent rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-2 border-2 border-zion-purple/30 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Cpu className={`${iconSize[size]} text-zion-cyan`} />
            </motion.div>
          </>
        );
      
      case 'quantum':
        return (
          <>
            <motion.div
              className={`${sizeClasses[size]} relative`}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              {/* Quantum rings */}
              {[0, 1, 2].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute inset-0 border-2 border-zion-purple/40 rounded-full"
                  style={{
                    inset: `${ring * 8}px`,
                    borderColor: `rgba(140, 21, 233, ${0.4 - ring * 0.1})`
                  }}
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2 + ring * 0.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: ring * 0.2
                  }}
                />
              ))}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Brain className={`${iconSize[size]} text-zion-purple`} />
              </motion.div>
            </motion.div>
          </>
        );
      
      default:
        return (
          <>
            <motion.div
              className={`${sizeClasses[size]} border-4 border-zion-cyan/20 rounded-full relative`}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-full border-4 border-zion-cyan border-t-transparent rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap className={`${iconSize[size]} text-zion-cyan`} />
            </motion.div>
          </>
        );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="relative text-center">
        {/* Main Spinner */}
        {getVariantContent()}
        
        {/* Zion Text */}
        <motion.div
          className={`mt-4 font-bold ${textSize[size]} bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent`}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          ZION
        </motion.div>
        
        {/* Message */}
        <motion.div
          className={`mt-2 text-zion-cyan ${textSize[size === 'lg' ? 'md' : 'sm']} animate-pulse`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {message}
        </motion.div>

        {/* Progress Bar */}
        {showProgress && (
          <motion.div
            className="mt-4 w-48 h-2 bg-zion-slate rounded-full overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.div>
        )}

        {/* Floating Elements */}
        <motion.div
          className="absolute -top-4 -left-4 w-2 h-2 bg-zion-cyan rounded-full opacity-60"
          animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-4 -right-4 w-3 h-3 bg-zion-purple rounded-full opacity-60"
          animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-zion-blue rounded-full opacity-60"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>
    </div>
  );
};