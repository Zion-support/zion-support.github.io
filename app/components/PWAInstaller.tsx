'use client';

import React, { memo } from 'react';

interface PWAInstallerProps {
  className?: string;
  children?: React.ReactNode;
}

const PWAInstaller: React.FC<PWAInstallerProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`pwa-installer ${className}`}>
      {children}
    </div>
  );
});

PWAInstaller.displayName = 'PWAInstaller';

export default PWAInstaller;