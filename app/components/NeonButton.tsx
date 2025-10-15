import React from 'react';

interface NeonbuttonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Neonbutton({ className = '', children }: NeonbuttonProps) {
  return (
    <div className={`NeonButton-component ${className}`}>
      {children}
    </div>
  );
}