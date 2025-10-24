import React from 'react';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <div className={className}>
      <h1>Header</h1>
      <p>Component content</p>
    </div>
  );
}