import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'title' | 'paragraph' | 'avatar' | 'card' | 'button';
  lines?: number;
  height?: string;
  width?: string;
}

export function LoadingSkeleton({ 
  className = '', 
  variant = 'text', 
  lines = 1, 
  height, 
  width 
}: SkeletonProps) {
  const baseClasses = 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse';
  
  const variants = {
    text: 'h-4 w-full',
    title: 'h-8 w-3/4',
    paragraph: 'h-4 w-full',
    avatar: 'h-12 w-12 rounded-full',
    card: 'h-32 w-full rounded-lg',
    button: 'h-10 w-24 rounded-lg'
  };

  const variantClasses = variants[variant];
  const customHeight = height ? `h-[${height}]` : '';
  const customWidth = width ? `w-[${width}]` : '';

  if (variant === 'paragraph' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <motion.div
            key={index}
            className={`${baseClasses} ${variantClasses} ${customHeight} ${customWidth}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses} ${customHeight} ${customWidth} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    />
  );
}

// Specialized skeleton components
export function CardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
      <div className="flex items-center space-x-4 mb-4">
        <LoadingSkeleton variant="avatar" />
        <div className="flex-1 space-y-2">
          <LoadingSkeleton variant="title" />
          <LoadingSkeleton variant="text" />
        </div>
      </div>
      <div className="space-y-2">
        <LoadingSkeleton variant="paragraph" lines={3} />
      </div>
      <div className="flex justify-between items-center mt-4">
        <LoadingSkeleton variant="button" />
        <LoadingSkeleton variant="text" width="w-20" />
      </div>
    </div>
  );
}

export function HeroSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`min-h-screen flex items-center justify-center ${className}`}>
      <div className="text-center space-y-6">
        <LoadingSkeleton variant="title" className="h-16 w-96 mx-auto" />
        <LoadingSkeleton variant="paragraph" className="h-6 w-80 mx-auto" />
        <LoadingSkeleton variant="paragraph" className="h-6 w-72 mx-auto" />
        <div className="flex justify-center space-x-4">
          <LoadingSkeleton variant="button" className="h-12 w-32" />
          <LoadingSkeleton variant="button" className="h-12 w-32" />
        </div>
      </div>
    </div>
  );
}

export function ServicesGridSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {Array.from({ length: 6 }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
}

export function TableSkeleton({ rows = 5, className = '' }: { rows?: number; className?: string }) {
  return (
    <div className={`bg-white rounded-lg shadow-sm overflow-hidden ${className}`}>
      <div className="px-6 py-4 border-b border-gray-200">
        <LoadingSkeleton variant="title" className="h-6 w-32" />
      </div>
      <div className="divide-y divide-gray-200">
        {Array.from({ length: rows }).map((_, index) => (
          <div key={index} className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <LoadingSkeleton variant="avatar" className="h-8 w-8" />
                <LoadingSkeleton variant="text" className="w-32" />
              </div>
              <LoadingSkeleton variant="text" className="w-20" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}