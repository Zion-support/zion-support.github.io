import React from 'react';

interface ITServicesPageProps {
  className?: string;
}

export default function ITServicesPage({ className = '' }: ITServicesPageProps) {
  return (
    <div className={`${className}`}>
      <h2>ITServicesPage</h2>
      <p>Component content goes here.</p>
    </div>
  );
}