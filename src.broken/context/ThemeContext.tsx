import React from 'react';

interface ThemeContextProps {
  className?: string;
}

const ThemeContext: React.FC<ThemeContextProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ThemeContext</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ThemeContext;