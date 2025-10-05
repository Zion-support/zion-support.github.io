import React from 'react';

// Fallback: simple passthrough provider while ThemeContext is absent
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>;
};

export default ThemeProvider;
