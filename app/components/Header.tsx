'use client';
import React from 'react';

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Header({ children, className = '' }: HeaderProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}