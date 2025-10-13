import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

export default function LoadingSpinner({ className = '', children }: LoadingSpinnerProps) {
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className = '',
  text = 'Loading...'
}) => {
  const sizeClasses = {,
    sm: 'w-4 h-4',
      md: 'w-8 h-8',
      lg: 'w-12 h-12'
  };

  return (
    <div className={`${className}`}>
      {children}
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-cyan-500 ${sizeClasses[size]}`}></div>
      {text && (
        <p className="mt-2 text-sm text-gray-600">{text}</p>
      )}
  text,
  className = ''
  const sizeClasses = {
    md: 'w-6 h-6',
    lg: 'w-8 h-8'

      <div
        data-testid="loading-spinner"
        className={`${sizeClasses[size]} border-2 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin`}
      />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {text}
        </p>

  size?: 'sm' | 'md' | 'lg' | 'xl';

  text = 'Loading...',
}: LoadingSpinnerProps) {
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'

    <div className={`flex flex-col items-center justify-center min-h-screen ${className}`}>
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`}></div>
      {text && <p className="mt-2 text-sm text-gray-600">{text}</p>}
    </div>
  );
export default function LoadingSpinner({ className = '', children, ...props }: LoadingSpinnerProps) {
        <div className="component" {...props}>

export default LoadingSpinner;
export default function Loadingspinner({ className = '', children, ...props }: LoadingspinnerProps) {
export default $1;
