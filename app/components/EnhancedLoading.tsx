import React from 'react';

interface EnhancedLoadingProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'enhancedloading ' + className}>
      {children || <p>EnhancedLoading component</p>}
    </div>
  );
};

export default EnhancedLoading;
