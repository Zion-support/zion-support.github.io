import React from 'react';

interface EnhancedLoadingProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({ className = '', children }) => {
  return (
    <div className={`enhancedloading-component ${className}`}>
      {children}
    </div>
  );
};

EnhancedLoading.displayName = 'EnhancedLoading';

export default EnhancedLoading;
