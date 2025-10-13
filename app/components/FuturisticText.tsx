import React from 'react';

export default function Futuristictext({ className = '', children, ...props }: FuturistictextProps) {
  return (
    <div className={`futuristic-text ${className}`} {...props}>
      {children}
    </div>
  );
}