import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  animate?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  width = '100%', 
  height = '20px', 
  rounded = 'md',
  animate = true 
}) => {
  const baseClasses = `bg-zion-slate-dark/50 ${rounded !== 'none' ? `rounded-${rounded}` : ''}`;
  const finalClasses = `${baseClasses} ${className}`;
  
  const skeleton = (
    <div 
      className={finalClasses}
      style={{ width, height }}
    />
  );

  if (!animate) return skeleton;

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: [0.3, 0.7, 0.3] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={finalClasses}
      style={{ width, height }}
    />
  );
};

// Predefined skeleton components
export const CardSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
    <div className="flex items-center space-x-4 mb-4">
      <Skeleton className="w-12 h-12 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton height="16px" width="60%" />
        <Skeleton height="14px" width="40%" />
      </div>
    </div>
    <div className="space-y-3">
      <Skeleton height="16px" />
      <Skeleton height="16px" width="80%" />
      <Skeleton height="16px" width="60%" />
    </div>
  </div>
);

export const TableSkeleton: React.FC = () => (
  <div className="space-y-3">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="flex space-x-4">
        <Skeleton height="20px" width="20%" />
        <Skeleton height="20px" width="30%" />
        <Skeleton height="20px" width="25%" />
        <Skeleton height="20px" width="25%" />
      </div>
    ))}
  </div>
);

export const ListSkeleton: React.FC = () => (
  <div className="space-y-3">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="flex items-center space-x-3">
        <Skeleton className="w-4 h-4 rounded-full" />
        <Skeleton height="16px" width="100%" />
      </div>
    ))}
  </div>
);

export const GridSkeleton: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[...Array(6)].map((_, i) => (
      <CardSkeleton key={i} />
    ))}
  </div>
);

export default Skeleton;