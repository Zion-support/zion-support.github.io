import React from 'react';
export type PWAInstallerProps = {
  // Add your props here
};

interface PWAInstallerProps {
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
