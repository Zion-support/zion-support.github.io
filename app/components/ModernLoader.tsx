import React from 'react';

interface ModernLoaderProps {
  className?: string;
  children?: React.ReactNode;
}

const ModernLoader: React.FC<ModernLoaderProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`modernloader ${className}`}>
      {children || <p>ModernLoader component</p>}
    </div>
  );
};

export default ModernLoader;