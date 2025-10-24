import React from 'react';
interface CorewebvitalsProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Corewebvitals({ className = '', children, ...props }: CorewebvitalsProps) {
  return (
    <div className={`corewebvitals-component ${className}`} {...props}>
      {children}
    </div>
  );
}