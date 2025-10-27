'use client';
import React from 'react';

interface RootLayoutProps {
  className?: string;
  children?: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ className, children }) => {
  return (
    <div className={className}>
      <h2>Root Layout</h2>
      <p>Root layout component for enhanced functionality.</p>
      {children}
    </div>
  );
};

export default RootLayout;