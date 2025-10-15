import React from 'react';

interface ThemetoggleProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Themetoggle({ className = '', children }: ThemetoggleProps) {
  return (
    <div className={`ThemeToggle-component ${className}`}>
      {children}
    </div>
  );
}