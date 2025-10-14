'use client';
import React from 'react';

interface PageBackupProps {
  children?: React.ReactNode;
  className?: string;
}

export default function PageBackup({ children, className = '' }: PageBackupProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}