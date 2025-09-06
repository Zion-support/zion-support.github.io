import React from 'react';

interface ThemeProvider.testProps {
  className?: string;
}

const ThemeProvider.test: React.FC<ThemeProvider.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ThemeProvider.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ThemeProvider.test;