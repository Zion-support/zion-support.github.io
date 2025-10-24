'use client';

import React from 'react';

interface PageBackupProps {
  children?: React.ReactNode;
  className?: string;
}

const PageBackup: React.FC<PageBackupProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default PageBackup;