import React from 'react';

interface PwainstallerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Pwainstaller({ className = '', children }: PwainstallerProps) {
  return (
    <div className={`PWAInstaller-component ${className}`}>
      {children}
    </div>
  );
}