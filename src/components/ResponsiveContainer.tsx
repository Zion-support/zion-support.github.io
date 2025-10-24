import React from 'react';

interface ResponsiveContainerProps {
  className?: string;
}

export default function ResponsiveContainer({ className }: ResponsiveContainerProps) {
  return (
    <div className={className}>
      <h1>ResponsiveContainer</h1>
      <p>Component content</p>
    </div>
  );
}