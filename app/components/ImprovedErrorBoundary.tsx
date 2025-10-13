import React from 'react';

interface ImprovederrorboundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Improvederrorboundary({ className = '', children, ...props }: ImprovederrorboundaryProps) {
  return (
    <div className={`improvederrorboundary-component ${className}`} {...props}>
      {children}
    </div>
  );
}
