import React from 'react';
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
<<<<<<< HEAD:src/components/LoadingSpinner.tsx

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
=======
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  color = 'white',
  className = ''
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };
  const colorClasses = {
    white: 'text-white',
    blue: 'text-blue-500',
    gray: 'text-gray-500'
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/LoadingSpinner.tsx
  };
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-zion-purple border-t-transparent`} />
    </div>
  );
<<<<<<< HEAD:src/components/LoadingSpinner.tsx
}
=======
};
export default LoadingSpinner;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/LoadingSpinner.tsx
