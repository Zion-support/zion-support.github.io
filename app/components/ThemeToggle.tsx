import React from 'react';

interface ThemeToggleProps {
  className?: string;
  children?: React.ReactNode;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'themetoggle ' + className}>
      {children || <p>ThemeToggle component</p>}
    </div>
  );
};

export default ThemeToggle;
