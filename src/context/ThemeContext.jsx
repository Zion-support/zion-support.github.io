import React, { useState } from 'react';
import * as React from 'react';
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState('system');
    React.useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
<<<<<<< HEAD
            root.classList.add(systemTheme);

        else {
            root.classList.add(theme);

=======
            root.classList.add(systemTheme)}
        else {
            root.classList.add(theme)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    }, [theme]);
    return (<ThemeContext.Provider value = {
  { theme,
  setTheme 






}}>
      {children}
    </ThemeContext.Provider>)};
export const useTheme = () => {
    const context = React.useContext(ThemeContext);
<<<<<<< HEAD
    if (context === null) {
        throw new Error('useTheme must be used within a ThemeProvider')}
    return context};
=======
    if (context === null) {
        throw new Error('useTheme must be used within a ThemeProvider');

    return context;
};
<<<<<<< HEAD
}}}
=======
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
