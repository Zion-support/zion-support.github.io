import React from 'react';

interface ThemeToggleProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ThemeToggle({ className = '', children }: ThemeToggleProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}