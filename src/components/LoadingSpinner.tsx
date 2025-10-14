import React from 'react';
interface LoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className = '', children }) => {
  return (
    <div className={`loadingspinner ${className}`}>
      {children}
    </div>
  );
};
export default LoadingSpinner;
