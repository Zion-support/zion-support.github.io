import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
interface LoadingSpinnerProps {
  message?: string;
  progress?: number;
  showProgress?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'dots' | 'pulse' | 'wave' | 'spinner';
  className?: string;
}
const ModernLoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = 'Loading...',
  progress,
  showProgress = false,
  size = 'md',
  variant = 'default',
  className = ''
}) => {
  const [dots, setDots] = useState('');
  useEffect(() => {
    if (variant === 'dots') {
      const interval = setInterval(() => {
        setDots(prev => prev.length >= 3 ? '' : prev + '.');
      }, 500);
      return () => clearInterval(interval);
    }
  }, [variant]);
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };
  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
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
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2
              />
            ))}
          </div>
        );
      case 'pulse':
          <motion.div
            className={`${sizeClasses[size]} bg-blue-500 rounded-full`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1,
              repeat: Infinity
          />
      case 'wave':
            {[0, 1, 2, 3, 4].map((i) => (
                className="w-1 bg-blue-500 rounded-full"
                  height: ['20px', '40px', '20px']
                  delay: i * 0.1
      case 'spinner':
            className={`${sizeClasses[size]} border-4 border-gray-300 border-t-blue-500 rounded-full`}
            animate={{ rotate: 360 }}
              repeat: Infinity,
              ease: 'linear'
      default:
            className={`${sizeClasses[size]} relative`}
              duration: 2,
          >
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-blue-500 rounded-full"></div>
            <div className="absolute inset-2 border-4 border-transparent border-b-blue-400 border-l-blue-400 rounded-full"></div>
            <div className="absolute inset-4 border-4 border-transparent border-t-blue-300 border-r-blue-300 rounded-full"></div>
          </motion.div>
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 ${className}`}
      >
        <div className="text-center">
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6"
            {renderSpinner()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
            <h2 className={`${textSizeClasses[size]} font-semibold text-white`}>
              {message}{variant === 'dots' ? dots : ''}
            </h2>
            {showProgress && progress !== undefined && (
              <div className="w-64 mx-auto">
                <div className="flex justify-between text-sm text-gray-300 mb-2">
                  <span>Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-blue-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
              </div>
            )}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm text-gray-400"
            >
              <p>Please wait while we prepare everything for you...</p>
            </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default ModernLoadingSpinner;
