import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('system');

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        
        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
<<<<<<< HEAD
            root.classList.add(systemTheme);
        } else {
            root.classList.add(theme);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
=======
            root.classList.add(systemTheme)}
        else {
            root.classList.add(theme)}
    }, [theme]);
    return (<ThemeContext.Provider value = {
  { theme,
  setTheme 
}}>
      {children}
    </ThemeContext.Provider>)};
export const useTheme = () => {
    const context = React.useContext(ThemeContext);
    if (context === null) {
        throw new Error('useTheme must be used within a ThemeProvider');
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
    return context;
};
