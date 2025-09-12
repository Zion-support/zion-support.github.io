import React from 'react';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: 'light' | 'dark' | string;
};

export function ThemeProvider({ children, defaultTheme = 'light' }: ThemeProviderProps) {
  return (
    <div data-theme={defaultTheme}>
      {children}
    </div>
  );
}

export default ThemeProvider;

