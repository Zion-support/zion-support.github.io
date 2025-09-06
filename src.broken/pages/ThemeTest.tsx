import React from 'react';

interface ThemeTestProps {
  className?: string;
}

const ThemeTest: React.FC<ThemeTestProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ThemeTest</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ThemeTest;