import React from 'react';

interface ThemeToggleProps {
  className?: string;
  children?: React.ReactNode;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', children }) => {
  return (
    <div className={`themetoggle ${className}`}>
      {children}
    </div>
  );
};

export default ThemeToggle;