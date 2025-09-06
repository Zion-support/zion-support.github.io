import React from 'react';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ThemeToggle</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ThemeToggle;