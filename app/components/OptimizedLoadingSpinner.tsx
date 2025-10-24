import React from 'react';

interface OptimizedLoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'optimizedloadingspinner ' + className}>
      {children || <p>OptimizedLoadingSpinner component</p>}
    </div>
  );
};

export default OptimizedLoadingSpinner;
