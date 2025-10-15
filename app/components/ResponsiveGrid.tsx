import React from 'react';

interface ResponsivegridProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Responsivegrid({ className = '', children }: ResponsivegridProps) {
  return (
    <div className={`ResponsiveGrid-component ${className}`}>
      {children}
    </div>
  );
}