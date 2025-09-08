import { motion } from 'framer-motion';
import { Loader2, Zap, Brain, Atom } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'futuristic' | 'ai' | 'quantum';
  text?: string;
  showProgress?: boolean;
  progress?: number;
  {/* Removed stray closing brace */}

export default function EnhancedLoadingSpinner({ 
  size = 'md', 
  text = 'Loading...',
  className = ''
}: EnhancedLoadingSpinnerProps) {
  const sizeClasses = { sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  const textSizes = { sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  return (<div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} relative`}
        animate={{ rotate: 360  }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} border-4 border-blue-200 rounded-full`} />
        
        {/* Orbiting particles for futuristic variants */}
        {variant !== 'default' && (
  {/* Empty JSX fragment */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
            <motion.div
              className="absolute inset-0 w-full h-full"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-x-1/2 translate-y-1/2" />
            </motion.div>
          </React.Fragment>
        )}
      ></div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`${textSizes[size]} text-gray-600 dark:text-gray-300 font-medium text-center`}
      >
        {text}
      </motion.div>
      
      {/* Dots animation */}
      <div className="flex space-x-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-blue-600 rounded-full"
            animate={{ scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 1.5, 
              repeat: Infinity, 
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
  {/* Removed stray closing brace */}

// Export as ZionLoadingSpinner for backward compatibility
export const ZionLoadingSpinner = EnhancedLoadingSpinner;