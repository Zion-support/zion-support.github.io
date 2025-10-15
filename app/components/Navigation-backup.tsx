import React from 'react';

interface NavigationBackupProps {
  className?: string;
  children?: React.ReactNode;
}

export default function NavigationBackup({ className = '', children }: NavigationBackupProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
