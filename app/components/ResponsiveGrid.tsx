import React from 'react';

interface ResponsivegridProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Responsivegrid({ className = '', children, ...props }: ResponsivegridProps) {
  return (
    <div className={`responsivegrid-component ${className}`} {...props}>
      {children}
    </div>
  );
}