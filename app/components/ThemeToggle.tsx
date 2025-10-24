'use client'
import React from 'react';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Theme Toggle</h2>
      <p className="text-gray-600">This is a placeholder component for Theme Toggle.</p>
    </div>
  );
};

export default ThemeToggle;
