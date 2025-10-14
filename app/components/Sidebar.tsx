import React from 'react';

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = '' }: SidebarProps) {
  return (
    <div className={`${className}`}>
      <h2>Sidebar</h2>
      <p>Component content goes here.</p>
    </div>
  );
}