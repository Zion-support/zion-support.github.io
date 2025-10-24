import React from 'react';

interface ServiceCardProps {
  className?: string;
}

export default function ServiceCard({ className }: ServiceCardProps) {
  return (
    <div className={className}>
      <h1>ServiceCard</h1>
      <p>Component content</p>
    </div>
  );
}