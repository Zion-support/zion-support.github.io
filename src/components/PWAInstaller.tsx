import React from 'react';

interface PWAInstallerProps {
  className?: string;
  children?: React.ReactNode;
}

export const PWAInstaller: React.FC<PWAInstallerProps> = ({ className = '', children }) => {
  return (
    <div className={`pwainstaller ${className}`}>
      {children}
    </div>
  );
};

export default PWAInstaller;