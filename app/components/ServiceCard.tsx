import React from 'react';

interface ServiceCardProps {
  className?: string;
}

export default function ServiceCard({ className = '' }: ServiceCardProps) {
  return (
    <div className={`${className}`}>
      <h2>ServiceCard</h2>
      <p>Component content goes here.</p>
    </div>
  );
}