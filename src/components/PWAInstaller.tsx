import React from 'react';

interface PWAInstallerProps {
  className?: string;
}

const PWAInstaller: React.FC<PWAInstallerProps> = ({ className = '' }) => {
  return (
    <div className={`pwainstaller ${className}`}>
      <h2>P W A Installer</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

export default PWAInstaller;