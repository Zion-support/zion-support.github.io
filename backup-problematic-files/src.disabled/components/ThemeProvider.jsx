import React from 'react';

const ThemeProvider = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ThemeProvider</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ThemeProvider;
