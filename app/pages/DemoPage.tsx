import React from 'react';

interface DemoPageProps {
  className?: string;
}

export default function DemoPage({ className = '' }: DemoPageProps) {
  return (
    <div className={`${className}`}>
      <h2>DemoPage</h2>
      <p>Component content goes here.</p>
    </div>
  );
}