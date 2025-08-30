import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true);
    useEffect(() => {
        // Check for saved theme preference or default to dark
        const savedTheme = localStorage.getItem('zion-theme');
        if (savedTheme) {
            setIsDark(savedTheme === 'dark');
        }
    }, []);
    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        localStorage.setItem('zion-theme', newTheme ? 'dark' : 'light');
        // Apply theme to document
        if (newTheme) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        }
        else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
    };
    return (<button onClick={toggleTheme} className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group" aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
      {isDark ? (<Sun className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300"/>) : (<Moon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"/>)}
    </button>);
};
export default ThemeToggle;
