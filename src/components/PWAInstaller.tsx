import React from 'react';

interface PWAInstallerProps {
  className?: string;
}

export default function PWAInstaller({ className }: PWAInstallerProps) {
  return (
    <div className={className}>
      <h1>PWAInstaller</h1>
      <p>Component content</p>
    </div>
  );
}