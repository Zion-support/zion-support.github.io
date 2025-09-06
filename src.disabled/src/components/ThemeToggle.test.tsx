import React from 'react';

interface ThemeToggle.testProps {
  className?: string;
}

const ThemeToggle.test: React.FC<ThemeToggle.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ThemeToggle.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ThemeToggle.test;