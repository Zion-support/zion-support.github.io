import React from 'react';

interface MicroSAASCardProps {
  className?: string;
}

export default function MicroSAASCard({ className }: MicroSAASCardProps) {
  return (
    <div className={className}>
      <h1>MicroSAASCard</h1>
      <p>Component content</p>
    </div>
  );
}