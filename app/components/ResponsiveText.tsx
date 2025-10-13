import React from 'react';

interface ResponsiveTextProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ResponsiveText({ className = '', children }: ResponsiveTextProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}