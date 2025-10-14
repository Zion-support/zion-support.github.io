import React from 'react';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
  return (
    <div className={`${className}`}>
      <h2>Header</h2>
      <p>Component content goes here.</p>
    </div>
  );
}