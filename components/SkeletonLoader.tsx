import React from 'react';

interface SkeletonLoaderProps {
  lines?: number, className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
<<<<<<< HEAD
    lines = 3,
    className = ''
  }) => {
=======
<<<<<<< HEAD
    lines = 3,
    className = ''
  }) => {
=======
  lines = 3;
  className = '';
}) => {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 bg-gray-200 rounded mb-2 ${
            index === lines - 1 ? 'w-3/4' : 'w-full';
          }`}
        />
      ))}
    </div>
  );
};

export default SkeletonLoader;