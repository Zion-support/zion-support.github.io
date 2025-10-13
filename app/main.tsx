import React from 'react';

interface MainProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Main({ className = '', children, ...props }: MainProps) {
  return (
    <div className={`main-component ${className}`} {...props}>
      {children}
    </div>
  );
}
