'use client';
import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, className }) => {
  return (
    <html lang="en">
      <body className={className}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;