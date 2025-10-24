import React from 'react';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className }: NavigationProps) {
  return (
    <div className={className}>
      <h1>Navigation</h1>
      <p>Component content</p>
    </div>
  );
}