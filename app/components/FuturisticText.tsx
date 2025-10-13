import React from 'react';

interface FuturistictextProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FuturisticText({ className = '', children, ...props }: FuturistictextProps) {
  return (
    <div className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 ${className}`} {...props}>
      {children}
    </div>
  );
}
