import React from 'react';

interface ResponsivecontainerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Responsivecontainer({ className = '', children }: ResponsivecontainerProps) {
  return (
    <div className={`ResponsiveContainer-component ${className}`}>
      {children}
    </div>
  );
}