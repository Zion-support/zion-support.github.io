import * as React from 'react';
  export const ThemeProvider = ({ children }) => {
export const useTheme = () => {

    'use client';

    const ThemeContext = React.createContext ({
      theme: 'dark',
      setTheme: () => null,
    }) ;

    const [theme, setTheme] = React.useState ('dark') ;

    React.useEffect ( () => {
      const root = window.document.documentElement;
      root.classList.remove ('light', 'dark') ;
      root.classList.add (theme) ;
    }, [theme]) ;

    const value = {
      theme,
      setTheme,
    };

    return (<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>) ;
  };

  const context = React.useContext (ThemeContext) ;
  if (context === null) {
    throw new Error ('useTheme must be used within a ThemeProvider') ;
  }
  return context;
};
