import React from 'react';

interface ThemeToggleProps {
  className?: string;
  children?: React.ReactNode;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', children }) => {
  return (
    <div className={`themetoggle-component ${className}`}>
      {children}
    </div>
  );
};

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
