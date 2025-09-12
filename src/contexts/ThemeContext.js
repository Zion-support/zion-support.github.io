import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
const ThemeContext = createContext(undefined);
export function ThemeProvider({ children, defaultTheme = 'system', }) {
    const [theme, setTheme] = useLocalStorage('theme', defaultTheme);
    const [resolvedTheme, setResolvedTheme] = useState('light');
    useEffect(() => {
        const updateResolvedTheme = () => {
            if (theme === 'system') {
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
                    .matches
                    ? 'dark'
                    : 'light';
                setResolvedTheme(systemTheme);
            }
            else {
                setResolvedTheme(theme);
            }
        };
        updateResolvedTheme();
        // Listen for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            if (theme === 'system') {
                updateResolvedTheme();
            }
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [theme]);
    useEffect(() => {
        const root = document.documentElement;
        // Remove existing theme classes
        root.classList.remove('light', 'dark');
        // Add new theme class
        root.classList.add(resolvedTheme);
        // Update meta theme-color
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', resolvedTheme === 'dark' ? '#0f172a' : '#ffffff');
        }
    }, [resolvedTheme]);
    const value = {
        theme,
        setTheme,
        resolvedTheme,
    };
    return (_jsx(ThemeContext.Provider, { value: value, children: children }));
}
export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
