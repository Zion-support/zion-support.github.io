import React from 'react';

interface FuturisticbuttonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Futuristicbutton({ className = '', children, ...props }: FuturisticbuttonProps) {
  return (
    <div className={`futuristicbutton-component ${className}`} {...props}>
      {children}
    </div>
  );
}
