import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, CheckCircle } from 'lucide-react';

interface LoadingOptimizerProps {
  onOptimizationComplete?: () => void;
  showProgress?: boolean;
  className?: string;
}

const LoadingOptimizer: React.FC<LoadingOptimizerProps> = ({
  onOptimizationComplete,
  showProgress = true,
  className = ''
}) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const optimizationSteps = [
    'Initializing optimization...',
    'Analyzing performance metrics...',
    'Optimizing images...',
    'Compressing assets...',
    'Generating critical CSS...',
    'Minifying JavaScript...',
    'Finalizing optimizations...'
  ];

  useEffect(() => {
    let stepIndex = 0;
    const interval = setInterval(() => {
      if (stepIndex < optimizationSteps.length) {
        setCurrentStep(optimizationSteps[stepIndex]);
        setProgress((stepIndex + 1) * (100 / optimizationSteps.length));
        stepIndex++;
      } else {
        setIsComplete(true);
        setProgress(100);
        clearInterval(interval);
        onOptimizationComplete?.();
      }
    }, 800);

    return () => clearInterval(interval);
  }, [onOptimizationComplete]);

  return (
    <div className={`flex flex-col items-center justify-center space-y-6 ${className}`}>
      {/* Main spinner */}
      <div className="relative">
        <motion.div
          className="w-16 h-16 border-4 border-cyan-200 border-t-cyan-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Inner pulse */}
        <motion.div
          className="absolute inset-2 bg-cyan-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Progress bar */}
      {showProgress && (
        <div className="w-64 space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Optimizing</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      )}

      {/* Current step */}
      {currentStep && (
        <motion.div
          className="flex items-center space-x-2 text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Clock className="w-4 h-4" />
          <span className="text-sm">{currentStep}</span>
        </motion.div>
      )}

      {/* Completion state */}
      {isComplete && (
        <motion.div
          className="flex items-center space-x-2 text-green-600"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CheckCircle className="w-6 h-6" />
          <span className="font-semibold">Optimization Complete!</span>
        </motion.div>
      )}
    </div>
  );
};

export default LoadingOptimizer;