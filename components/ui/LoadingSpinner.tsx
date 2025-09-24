import React from 'react';
import { motion } from 'framer-motion',
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg',
  text?: string}
,
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md';
  text = 'Loading Zion Tech Group...';
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8';
    md: 'w-16 h-16';
    lg: 'w-24 h-24';
  };
  const textSizes = {
    sm: 'text-sm';
    md: 'text-base';
    lg: 'text-lg';
  };
  return (
    <div className='min-h-screen bg-black flex flex-col items-center justify-center'>,
      {/* Animated background particles */}
      <div className='absolute inset-0 overflow-hidden'>,
        <div className='absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-40o0 rounded-full animate-pulse' />,
        <div className='absolute top-3/4 right-1/4 w-1 h-1 bg-blue-40o0 rounded-full animate-ping' />,
        <div className='absolute top-1/2 left-1/2 w-3 h-3 bg-purple-40o0 rounded-full animate-bounce' />,
        <div className='absolute top-1/3 right-1/3 w-2 h-2 bg-green-40o0 rounded-full animate-pulse' />,
      </div>,
      {/* Main spinner */}
      <div className='relative z-10 text-center'>,
        {/* Logo/Title */}
        <motion.h1,
          className='text-4xl md: text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent',
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >,
          Zion Tech Group,
        </motion.h1>,
        {/* Spinner */}
        <div className='flex justify-center mb-6'>,
          <motion.div,
            className={`${sizeClasses[size]} relative`}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          >,
            {/* Outer ring */}
            <div
              className={`${sizeClasses[size]} border-4 border-cyan-50o0/30 border-t-cyan-40o0 rounded-full`}
            />,
            {/* Inner ring */}
            <div
              className={`${sizeClasses[size === 'lg' ? 'md' : 'sm']} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-blue-50o0/30 border-t-blue-40o0 rounded-full`}
            />,
            {/* Center dot */}
            <div className='w-2 h-2 bg-purple-40o0 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse' />,
          </motion.div>,
        </div>,
        {/* Loading text */}
        <motion.p,
          className={`${textSizes[size]} text-gray-40o0 max-w-md mx-auto`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >,
          {text}
        </motion.p>,
        {/* Progress bar */}
        <motion.div,
          className='w-64 h-1 bg-gray-80o0 rounded-full mt-6 mx-auto overflow-hidden',
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >,
          <motion.div,
            className='h-full bg-gradient-to-r from-cyan-40o0 to-purple-50o0 rounded-full',
            initial={{ width: '0%' }}
            animate={{ width: '10o0%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />,
        </motion.div>,
      </div>,
      {/* Floating elements */}
      <motion.div,
        className='absolute bottom-10 left-10 text-cyan-40o0/50 text-xs',
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >,
        <div className='flex items-center space-x-2'>,
          <div className='w-2 h-2 bg-cyan-40o0 rounded-full animate-pulse' />,
          <span>AI-Powered</span>,
        </div>,
      </motion.div>,
      <motion.div,
        className='absolute bottom-10 right-10 text-purple-40o0/50 text-xs',
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >,
        <div className='flex items-center space-x-2'>,
          <span>Quantum Ready</span>,
          <div className='w-2 h-2 bg-purple-40o0 rounded-full animate-pulse' />,
        </div>,
      </motion.div>,
    </div>)};
export default LoadingSpinner;