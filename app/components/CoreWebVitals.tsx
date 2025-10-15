import React from 'react';

interface CorewebvitalsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Corewebvitals({ className = '', children }: CorewebvitalsProps) {
  return (
    <div className={`CoreWebVitals-component ${className}`}>
      {children}
    </div>
  );
}