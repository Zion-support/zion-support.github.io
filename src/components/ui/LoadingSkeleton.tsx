import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

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
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      className={finalClasses}
      style={{ width, height }}
    />
  );
};

// Predefined skeleton components
export const CardSkeleton: React.FC = () => (
  <div className="bg-zion-slate-dark/20 backdrop-blur-sm rounded-lg p-6 border border-zion-cyan/20">
    <div className="flex items-center space-x-4 mb-4">
      <Skeleton width={48} height={48} rounded="full" />
      <div className="flex-1">
        <Skeleton height={20} className="mb-2" />
        <Skeleton height={16} width="60%" />
      </div>
    </div>
    <Skeleton height={16} className="mb-2" />
    <Skeleton height={16} width="80%" />
  </div>
);

export const TableSkeleton: React.FC = () => (
  <div className="bg-zion-slate-dark/20 backdrop-blur-sm rounded-lg border border-zion-cyan/20 overflow-hidden">
    <div className="p-4 border-b border-zion-cyan/20">
      <Skeleton height={24} width="30%" />
    </div>
    <div className="p-4 space-y-3">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex space-x-4">
          <Skeleton height={16} width="20%" />
          <Skeleton height={16} width="40%" />
          <Skeleton height={16} width="25%" />
          <Skeleton height={16} width="15%" />
        </div>
      ))}
    </div>
  </div>
);

export const ListSkeleton: React.FC = () => (
  <div className="space-y-3">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="flex items-center space-x-3">
        <Skeleton width={16} height={16} rounded="full" />
        <Skeleton height={16} width="70%" />
      </div>
    ))}
  </div>
);

export const GridSkeleton: React.FC<{ cols?: number; rows?: number }> = ({ 
  cols = 3, 
  rows = 3 
}) => (
  <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-6`}>
    {[...Array(cols * rows)].map((_, i) => (
      <CardSkeleton key={i} />
    ))}
  </div>
);

export const HeroSkeleton: React.FC = () => (
  <div className="text-center py-20">
    <Skeleton height={64} width="80%" className="mx-auto mb-6" />
    <Skeleton height={32} width="60%" className="mx-auto mb-8" />
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Skeleton width={160} height={48} rounded="lg" />
      <Skeleton width={160} height={48} rounded="lg" />
    </div>
  </div>
);

export const SidebarSkeleton: React.FC = () => (
  <div className="w-64 bg-zion-slate-dark/20 backdrop-blur-sm border-r border-zion-cyan/20 p-4">
    <Skeleton height={32} width="80%" className="mb-6" />
    <div className="space-y-3">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="flex items-center space-x-3">
          <Skeleton width={20} height={20} />
          <Skeleton height={16} width="70%" />
        </div>
      ))}
    </div>
  </div>
);

export const FormSkeleton: React.FC = () => (
  <div className="space-y-6">
    <div>
      <Skeleton height={16} width="30%" className="mb-2" />
      <Skeleton height={40} rounded="md" />
    </div>
    <div>
      <Skeleton height={16} width="25%" className="mb-2" />
      <Skeleton height={40} rounded="md" />
    </div>
    <div>
      <Skeleton height={16} width="40%" className="mb-2" />
      <Skeleton height={100} rounded="md" />
    </div>
    <Skeleton width={120} height={40} rounded="md" />
  </div>
);

export default Skeleton;
