import React from 'react';

interface FuturisticbuttonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Futuristicbutton({ className = '', children }: FuturisticbuttonProps) {
  return (
    <div className={`FuturisticButton-component ${className}`}>
      {children}
    </div>
  );
}