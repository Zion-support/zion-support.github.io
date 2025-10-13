import React from 'react';

interface PWAInstallerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PWAInstaller({ className = '', children }: PWAInstallerProps) {
  return (
    <div className={`pwainstaller ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">PWAInstaller</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}