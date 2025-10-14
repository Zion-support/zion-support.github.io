'use client';
import React from 'react';

interface NavigationBackupProps {
  children?: React.ReactNode;
  className?: string;
}

export default function NavigationBackup({ children, className = '' }: NavigationBackupProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}