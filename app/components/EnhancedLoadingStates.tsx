'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Brain, Cloud, Shield, Code, Zap, Cpu, Database } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-purple-500',
    secondary: 'text-cyan-500',
    accent: 'text-pink-500'
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    >
      <Loader2 className="w-full h-full" />
    </motion.div>
  );
};

interface PageLoaderProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
}

export const PageLoader: React.FC<PageLoaderProps> = ({
  message = 'Loading...',
  showProgress = false,
  progress = 0
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated background circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-32 h-32 border-2 border-purple-500 border-opacity-20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="w-24 h-24 border-2 border-cyan-500 border-opacity-30 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="w-16 h-16 border-2 border-pink-500 border-opacity-40 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {/* Main loading icon */}
          <div className="relative z-10 flex items-center justify-center">
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
            >
              <Brain className="w-10 h-10 text-white" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {message}
        </motion.h2>

        {showProgress && (
          <div className="w-64 mx-auto mb-4">
            <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-gray-300 text-sm mt-2">{progress}% Complete</p>
          </div>
        )}

        <motion.div
          className="flex justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-purple-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

interface ServiceLoaderProps {
  service: 'ai' | 'cloud' | 'security' | 'development' | 'database';
  message?: string;
}

export const ServiceLoader: React.FC<ServiceLoaderProps> = ({
  service,
  message = 'Loading service...'
}) => {
  const serviceConfig = {
    ai: { icon: Brain, color: 'from-purple-500 to-pink-500', text: 'AI Solutions' },
    cloud: { icon: Cloud, color: 'from-cyan-500 to-blue-500', text: 'Cloud Services' },
    security: { icon: Shield, color: 'from-red-500 to-orange-500', text: 'Security Solutions' },
    development: { icon: Code, color: 'from-green-500 to-emerald-500', text: 'Development Tools' },
    database: { icon: Database, color: 'from-yellow-500 to-orange-500', text: 'Database Services' }
  };

  const config = serviceConfig[service];
  const IconComponent = config.icon;

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <motion.div
        className={`w-16 h-16 bg-gradient-to-r ${config.color} rounded-full flex items-center justify-center mb-4`}
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
      >
        <IconComponent className="w-8 h-8 text-white" />
      </motion.div>
      
      <motion.h3
        className="text-lg font-semibold text-white mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {config.text}
      </motion.h3>
      
      <motion.p
        className="text-gray-300 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {message}
      </motion.p>
    </div>
  );
};

interface SkeletonLoaderProps {
  lines?: number;
  className?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  lines = 3,
  className = ''
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-gray-700 rounded mb-2 ${
            i === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
};

interface CardSkeletonProps {
  count?: number;
}

export const CardSkeleton: React.FC<CardSkeletonProps> = ({ count = 4 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="bg-gray-800 rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="animate-pulse">
            <div className="w-12 h-12 bg-gray-700 rounded-lg mb-4" />
            <div className="h-4 bg-gray-700 rounded mb-2" />
            <div className="h-4 bg-gray-700 rounded mb-4 w-3/4" />
            <div className="space-y-2">
              <div className="h-3 bg-gray-700 rounded" />
              <div className="h-3 bg-gray-700 rounded w-5/6" />
              <div className="h-3 bg-gray-700 rounded w-4/6" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};