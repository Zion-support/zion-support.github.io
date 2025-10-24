'use client';
import React from 'react';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>ThemeToggle</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default ThemeToggle;
