import React from 'react';

interface PWAInstallerProps {
  className?: string;
  children?: React.ReactNode;
}

const PWAInstaller: React.FC<PWAInstallerProps> = ({ className, children }) => {
  return (
    <div className={`pwainstaller-component ${className || ''}`}>
      {children}
    </div>
  );
};

export default PWAInstaller;
