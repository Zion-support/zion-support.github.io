import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  animate?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  width,
  height,
  rounded = 'md',
  animate = true
}) => {
  const baseClasses = `bg-zion-slate-light/20 border border-zion-slate-light/10`;
  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    full: 'rounded-full'
  };

  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height) style.height = typeof height === 'number' ? `${height}px` : height;

  const Component = animate ? motion.div : 'div';
  const props = animate ? {
    animate: { opacity: [0.5, 1, 0.5] },
    transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
  } : {};

  return (
    <Component
      className={`${baseClasses} ${roundedClasses[rounded]} ${className}`}
      style={style}
      {...props}
    />
  );
};

// Predefined skeleton components
export const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({ 
  lines = 1, 
  className = '' 
}) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton
        key={i}
        height={16}
        className={i === lines - 1 ? 'w-3/4' : 'w-full'}
      />
    ))}
  </div>
);

export const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`p-6 space-y-4 ${className}`}>
    <Skeleton height={24} width="60%" />
    <SkeletonText lines={3} />
    <div className="flex gap-2">
      <Skeleton height={32} width={80} />
      <Skeleton height={32} width={100} />
    </div>
  </div>
);

export const SkeletonAvatar: React.FC<{ size?: number; className?: string }> = ({ 
  size = 40, 
  className = '' 
}) => (
  <Skeleton
    width={size}
    height={size}
    rounded="full"
    className={className}
  />
);

export const SkeletonButton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <Skeleton
    height={40}
    width={120}
    rounded="lg"
    className={className}
  />
);

export default Skeleton;