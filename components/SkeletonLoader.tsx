import React from 'react';
interface SkeletonLoaderProps {
  lines?: number, className?: string;
}
const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
<<<<<<< HEAD
  lines;
}) => {
  return (
=======
    lines = 3
    className = ''
  }) => {
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 bg-gray-200 rounded mb-2 ${
            index === lines - 1 ? 'w-3/4' : 'w-full';
          }`}
        />
      ))}
    </div>;
  );
}
export default SkeletonLoader;