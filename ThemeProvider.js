import React from 'react';

export function ThemeProvider({ children, defaultTheme = 'light', storageKey = 'theme' }) {
  return (
    <div data-theme={defaultTheme}>
      {children}
    </div>
  );
}