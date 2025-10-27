'use client';
import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function RootLayout({ children, className = '' }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={className}>
        {children}
      </body>
    </html>
  );
}
