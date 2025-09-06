import React from 'react';

interface UseThemeProps {
  className?: string;
}

const UseTheme: React.FC<UseThemeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UseTheme</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UseTheme;