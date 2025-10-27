import React from 'react';

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Header({ className, children }: HeaderProps) {
  return (
    <header className={`bg-white shadow-sm ${className || ''}`}>
      {children}
    </header>
  );
}