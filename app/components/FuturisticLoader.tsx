import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

interface FuturisticLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const FuturisticLoader: React.FC<FuturisticLoaderProps> = ({
  size = 'md',
  text = 'Loading...',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <>
      <Helmet>
        <title>Loading - Zion Tech Group</title>
      </Helmet>
      
      <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
        <motion.div
          className={`${sizeClasses[size]} relative`}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-cyan-500/20 rounded-full" />
          
          {/* Inner ring */}
          <motion.div
            className="absolute inset-1 border-4 border-cyan-500 rounded-full border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
          />
          
          {/* Center dot */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
        
        {text && (
          <motion.p
            className="text-gray-600 font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            {text}
          </motion.p>
        )}
      </div>
    </>
  );
};

export default FuturisticLoader;