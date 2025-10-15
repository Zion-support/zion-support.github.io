import React from 'react';

interface AboutProps {
  className?: string;
  children?: React.ReactNode;
}

export default function About({ className = '', children }: AboutProps) {
  return (
    <div className={`About-component ${className}`}>
      {children}
    </div>
  );
}