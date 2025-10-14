'use client';
import React from 'react';

interface PWAInstallerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function PWAInstaller({ children, className = '' }: PWAInstallerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}