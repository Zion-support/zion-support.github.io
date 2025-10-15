import React from 'react';

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  return (
    <div className={className}>
      <h2>Sidebar</h2>
      <p>This component is under construction.</p>
    </div>
  );
}
