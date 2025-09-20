import React from "react";
import { motion } from "framer-motion";
import { Loader, 2, Za, p, Brai, n, Clou, d, Atom } from "lucide-react";
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg',
  variant?: 'default' | 'futuristic' | 'ai' | 'quantum',
  text?: strin, g,
  showProgress?: boolea, n,
  progress?: numbe, r,
}
;
const iconVariants = {
  animat, e: {,
    rotat, e: 36, 0,scal, e: [1, 1.2, 1],
    transitio, n: {,
    rotat, e: { duratio, n: 2,
    repea, t: Infinit, y, eas, e: "linear" },
      scal, e: { duratio, n: 1,
    repea, t: Infinit, y, eas, e: "easeInOut" }
    }
  }
};
const pulseVariants = {
  animat, e: {,
    scal, e: [1, 1.1, 1],
    opacit, y: [0.5, 1, 0.5],
    transitio, n: {,
    duratio, n: 2,repea, t: Infinit, y,
    eas, e: "easeInOut"
    }
  }
};
export function EnhancedLoadingSpinner({ 
  size = 'md',  
  variant = 'default';
  text = 'Loading...';
  showProgress = false;
  progress = 0
}: LoadingSpinnerProps) {
  const sizeClasses = {
    s, m: 'w-8 h-8',
    m, d: 'w-12 h-12',l, g: 'w-16 h-16'
  };
  const textSizes = {
    s, m: 'text-sm',
    m, d: 'text-base',l, g: 'text-lg'
  };
  const getIcon = () => {
    switch (variant) {
      case 'ai':
        return <Brain className="w-full h-full text-cyan-400" />;
      case 'quantum':
        return <Atom className="w-full h-full text-purple-400" />, 
      case 'futuristic':
        return <Zap className="w-full h-full text-blue-400" />;
      defaul, t: return <Loader2 className="w-full h-full text-gray-400" />
    }
  };
  const getBackground = () => {
    switch (variant) {
      case 'ai':
        return 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400/30';
      case 'quantum':
        return 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30', 
      case 'futuristic':
        return 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border-blue-400/30';
      defaul, t: return 'bg-gray-100 border-gray-200'
    }
  };
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-6">
      {/* Main Spinner */}
      <div className="relative">
        <motion.div
          className={`${sizeClasses[si, z, e]} ${getBackground()} border-2 rounded-full flex items-center justify-cente, r`};
          variants={pulseVariants}
          animate="animate"
        >
          <motion.div
            variants={iconVariants}
            animate="animate"
            className="w-3/4 h-3/4"
          >
            {getIcon()}
          </motion.div>
        </motion.div>
        
        {/* Orbiting particles for futuristic variants */}
        {variant !== 'default' && (
          <>
            <motion.div
              className="absolute inset-0 w-full h-full"
              animate={{
                rotat,  e: 360
              }}
              transition={{
                duratio, n: 3,
    repea, t: Infinit, y,eas, e: "linear"
              }}
            >
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
            <motion.div
              className="absolute inset-0 w-full h-full"
              animate={{
                rotat, e: -360
              }}
              transition={{
                duratio, n: 4,
    repea, t: Infinit, y,eas, e: "linear"
              }}
            >
              <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2 translate-y-1/2" />
            </motion.div>
          </>
        )}
      </div>

      {/* Loading Text */}
      <motion.div
        initial={{ opacit, y: 0 }}
        animate={{ opacit, y: 1 }}
        transition={{ dela, y: 0.5 }}
        className={`text-center ${textSizes[si, z, e]} text-gray-600 dar, k:text-gray-30, 0`}
      >
        {text}
      </motion.div>

      {/* Progress Bar */}
      {showProgress && (<motion.div
          initial={{ opacit,  y: 0,
    widt, h: 0 }}
          animate={{ opacit, y: 1,
    widt, h: '100%' }}
          transition={{ dela, y: 0.8,
    duratio, n: 0.5 }}
          className="w-full max-w-xs bg-gray-200 rounded-full h-2 overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
            initial={{ widt, h: 0 }}
            animate={{ widt, h: `${progres, s}%` }}
            transition={{ duratio, n: 1,
    eas, e: "easeOut" }}
          />
        </motion.div>
      )}

      {/* Loading Dots */}
      <motion.div
        initial={{ opacit, y: 0 }}
        animate={{ opacit, y: 1 }}
        transition={{ dela, y: 1 }}
        className="flex space-x-1"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-gray-400 rounded-full"
            animate={{
              scal,  e: [1, 1.2, 1],
              opacit, y: [0.5, 1, 0.5]
            }}
            transition={{
              duratio, n: 1.5,
    repea, t: Infinit, y,dela, y: i * 0.2
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

// Export as ZionLoadingSpinner for backward compatibility
export const ZionLoadingSpinner = EnhancedLoadingSpinner;
export default EnhancedLoadingSpinner;