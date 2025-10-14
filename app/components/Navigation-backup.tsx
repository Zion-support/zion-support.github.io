import React from 'react';

interface NavigationBackupProps {
  className?: string;
}

export default function NavigationBackup({ className = '' }: NavigationBackupProps) {
  return (
    <div className={`${className}`}>
      <h2>Navigation-backup</h2>
      <p>Component content goes here.</p>
    </div>
  );
}