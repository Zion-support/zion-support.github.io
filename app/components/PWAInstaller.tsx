import React from 'react';

interface PWAInstallerProps {
  className?: string;
  children?: React.ReactNode;
}

const PWAInstaller: React.FC<PWAInstallerProps> = ({ className = '', children }) => {
  return (
    <div className={`pwainstaller-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">PWAInstaller</h3>
          <p className="text-gray-600">This is the PWAInstaller component.</p>
        </div>
      )}
    </div>
  );
};

export default PWAInstaller;