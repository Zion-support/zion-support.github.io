import React from 'react';

interface FuturisticservicecardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Futuristicservicecard({ className = '', children }: FuturisticservicecardProps) {
  return (
    <div className={`FuturisticServiceCard-component ${className}`}>
      {children}
    </div>
  );
}