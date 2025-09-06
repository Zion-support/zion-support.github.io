import React from 'react';

interface Hr-platformProps {
  className?: string;
}

const Hr-platform: React.FC<Hr-platformProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Hr-platform</h1>
      <p>This component is under development.</p>
    </div>
  );
