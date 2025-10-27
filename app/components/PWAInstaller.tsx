import React from 'react';

interface _PWAInstallerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PWAInstaller({ 
  className = '', 
  children 
}: PWAInstallerProps) {
  return (
    <div className={'pwainstaller ' + className}>
      {children || <p>PWAInstaller component</p>}
    </div>
  );
}
