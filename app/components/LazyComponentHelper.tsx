import React from 'react';

interface LazycomponenthelperProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Lazycomponenthelper({ className = '', children }: LazycomponenthelperProps) {
  return (
    <div className={`LazyComponentHelper-component ${className}`}>
      {children}
    </div>
  );
}