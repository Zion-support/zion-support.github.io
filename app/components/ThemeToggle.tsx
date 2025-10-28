import React from 'react';

interface ThemeToggleProps {
  className?: string;
  children?: React.ReactNode;
}

const ThemeToggle: React.FC<ThemeToggleProps> = (_{ className = '', _children }) => {
  return (
    <div className={`themetoggle-component ${className}`}>
{children || <h2>ThemeToggle</h2>}
    </div>
  );
};

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;