import React from 'react';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function ResponsiveContainer({ 
  children, 
  className = '' 
}: ResponsiveContainerProps) {
  return (
    <div className={`responsive-container ${className}`}>
      {children}
    </div>
  );
}