import React from 'react';

interface ModernLoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

const ModernLoadingSpinner: React.FC<ModernLoadingSpinnerProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`modernloadingspinner ${className}`}>
      {children}
    </div>
  );
};

export default ModernLoadingSpinner;