import React from 'react';
interface ErrorhandlerProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Errorhandler({ className = '', children, ...props }: ErrorhandlerProps) {
  return (
    <div className={`errorhandler-component ${className}`} {...props}>
      {children}
    </div>
  );
}