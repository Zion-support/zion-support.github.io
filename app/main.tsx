import React from 'react';

interface MainProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Main({ className = '', children }: MainProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}