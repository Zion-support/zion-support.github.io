import { motion } from 'framer-motion';
import { Loader2, Zap, Brain, Cpu, Rocket } from 'lucide-react';

interface LoadingSpinnerProps {

  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'futuristic' | 'ai' | 'tech' | 'rocket';
  text?: string;
  showProgress?: boolean;
  progress?: number;
  className?: string;
}

const sizeClasses = {

  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16'
};

const iconComponents = {

  default: Loader2,
  futuristic: Zap,
  ai: Brain,
  tech: Cpu,
  rocket: Rocket
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({

  size = 'md',
  variant = 'default',
  text,
  showProgress = false,
  progress = 0,
  className = ''
}) => {

  const IconComponent = iconComponents[variant];
  const sizeClass = sizeClasses[size];

  const spinnerVariants = {

    animate: {

      rotate: 360,
      transition: {

        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const pulseVariants = {

    animate: {

      scale: [1, 1.1, 1],
      opacity: [0.5, 1, 0.5],
      transition: {

        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const rocketVariants = {

    animate: {

      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {

        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const renderSpinner = () => {

    switch (variant) {

      case 'futuristic':
        return (
          <div className="relative">
            <motion.div
              className={`${sizeClass} border-4 border-cyan-500/30 rounded-full`}
              variants={pulseVariants}
              animate="animate"
            />
            <motion.div
              className={`${sizeClass} border-4 border-transparent border-t-cyan-500 rounded-full absolute inset-0`}
              variants={spinnerVariants}
              animate="animate"
            />
            <motion.div
              className={`${sizeClass} border-4 border-transparent border-r-blue-500 rounded-full absolute inset-0`}
              variants={spinnerVariants}
              animate="animate"
              style={{ animationDelay: '0.2s' }}
            />
          </div>
        );

      case 'ai':
        return (
          <div className="relative">
            <motion.div
              className={`${sizeClass} bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center`}
              variants={pulseVariants}
              animate="animate"
            >
              <Brain className="w-1/2 h-1/2 text-white" />
            </motion.div>
            <motion.div
              className="absolute inset-0 border-2 border-purple-300 rounded-full"
              variants={pulseVariants}
              animate="animate"
              style={{ animationDelay: '0.5s' }}
            />
          </div>
        );

      case 'tech':
        return (
          <div className="relative">
            <motion.div
              className={`${sizeClass} bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center`}
              variants={pulseVariants}
              animate="animate"
            >
              <Cpu className="w-1/2 h-1/2 text-white" />
            </motion.div>
            <motion.div
              className="absolute inset-0 border-2 border-blue-300 rounded-lg"
              variants={pulseVariants}
              animate="animate"
              style={{ animationDelay: '0.3s' }}
            />
          </div>
        );

      case 'rocket':
        return (
          <div className="relative">
            <motion.div
              className={`${sizeClass} bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center`}
              variants={rocketVariants}
              animate="animate"
            >
              <Rocket className="w-1/2 h-1/2 text-white" />
            </motion.div>
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-orange-300 rounded-full"
              variants={pulseVariants}
              animate="animate"
            />
          </div>
        );

      default:
        return (
          <motion.div
            className={`${sizeClass} border-2 border-gray-300 border-t-blue-600 rounded-full`}
            variants={spinnerVariants}
            animate="animate"
          />
        );
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`} role="status" aria-label="Loading">
      <div className="relative">
        {renderSpinner()}
        
        {showProgress && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-medium text-white bg-black/50 px-2 py-1 rounded">
              {Math.round(progress)}%
            </span>
          </div>
        )}
      </div>

      {text && (
        <motion.p
          className="mt-4 text-center text-gray-300 font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {text}
        </motion.p>
      )}

      {showProgress && (
        <div className="w-32 mt-4 bg-gray-700 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      )}

      <span className="sr-only">Loading...</span>
    </div>
  );
};

// Full-screen loading overlay
export const LoadingOverlay: React.FC<LoadingSpinnerProps & { overlay?: boolean }> = ({

  overlay = true,
  ...props
}) => {

  if (!overlay) {

    return <LoadingSpinner {...props} />;
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-slate-800/90 rounded-2xl p-8 border border-slate-700/50">
        <LoadingSpinner {...props} />
      </div>
    </div>
  );
};

// Inline loading spinner for buttons and small elements
export const InlineSpinner: React.FC<{ size?: 'sm' | 'md'; className?: string }> = ({

  size = 'sm',
  className = ''
}) => (
  <LoadingSpinner
    size={size}
    variant="default"
    className={`inline ${className}`}
  />
);

// Page loading spinner with progress
export const PageLoader: React.FC<{ progress?: number; text?: string }> = ({

  progress = 0,
  text = "Loading amazing content..."
}) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner
        size="xl"
        variant="futuristic"
        text={text}
        showProgress={true}
        progress={progress}
      />
      <motion.div
        className="mt-8 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-sm">Please wait while we prepare your experience...</p>
      </motion.div>
    </div>
  </div>
);
