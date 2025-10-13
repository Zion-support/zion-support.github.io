import React from 'react';

interface ResponsiveContainerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ResponsiveContainer({ className = '', children }: ResponsiveContainerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}