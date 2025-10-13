import React from 'react';

interface LinkProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Link({ className = '', children, ...props }: LinkProps) {
  return (
    <div className={`link-component ${className}`} {...props}>
      {children}
    </div>
  );
}
