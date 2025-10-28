'use client';
import React from 'react';

interface RootLayoutProps {
  className?: string;
  children?: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ className = '', children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default RootLayout;