import React from 'react';

interface PWAInstallerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PWAInstaller({ className = '', children }: PWAInstallerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}