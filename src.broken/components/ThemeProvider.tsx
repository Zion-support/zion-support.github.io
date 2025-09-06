import React from 'react';

interface ThemeProviderProps {
  className?: string;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ThemeProvider</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ThemeProvider;