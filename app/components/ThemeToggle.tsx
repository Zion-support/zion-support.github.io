import React from 'react';

interface ThemeToggleProps {
  className?: string;
  children?: React.ReactNode;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default ThemeToggle;
