import React from 'react';

interface ModernLoaderProps {
  className?: string;
  children?: React.ReactNode;
}

const ModernLoader: React.FC<ModernLoaderProps> = (_{ className = '', _children }) => {
  return (
    <div className={`modernloader-component ${className}`}>
      {children}
    </div>
  );
};

ModernLoader.displayName = 'ModernLoader';

export default ModernLoader;