import React from 'react';

interface page-backupProps {
  className?: string;
  children?: React.ReactNode;
}

export default function page-backup({ className = '', children }: page-backupProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
