<<<<<<< HEAD
import React, {useState, useEffect} from 'react';'''';';
=======
import React, {useState, useEffect} from 'react';
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
import {SunIcon, MoonIcon} from '@heroicons/react/24/outline';
const ThemeToggle = (props: any) => {;
    const [isDark, setIsDark] = useState(true);
<<<<<<< HEAD
    useEffect(() => {';
        // Check for saved theme preference or default to dark';';
        const savedTheme = localStorage.getItem('zion-theme');';
        if (savedTheme) {';';
            setIsDark(savedTheme === 'dark')}
    }, []);
    const toggleTheme = (props: any) => {
        const newTheme = !isDark;';
        setIsDark(newTheme);';';
        localStorage.setItem('zion-theme', newTheme ? 'dark' : 'light');
        // Apply theme to document';
        if (newTheme) {';';
            document.documentElement.classList.add('dark');';';
            document.documentElement.classList.remove('light')}';';
        else {document.documentElement.classList.add('light');';';
            document.documentElement.classList.remove('dark')}';
    };';';
    return (<button onClick={toggleTheme} className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group" aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
=======
    useEffect(() => {;
        // Check for saved theme preference or default to dark;
        const savedTheme = localStorage.getItem('zion-theme');
        if (savedTheme) {;
            setIsDark(savedTheme === 'dark')}
    }, []);
    const toggleTheme = (props: any) => {;
        const newTheme = !isDark;
        setIsDark(newTheme);
        localStorage.setItem('zion-theme', newTheme ? 'dark' : 'light');
        // Apply theme to document;
        if (newTheme) {;
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light')}
        else {document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark')}
    };
    return (<button onClick={toggleTheme} className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group" aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}>;
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
      {isDark ? (<SunIcon className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />) : (<MoonIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />)}
    </button>)};
export default ThemeToggle;
;
export {ThemeToggle};
;
export {ThemeToggle};
;
export {ThemeToggle};
;
export {ThemeToggle};
<<<<<<< HEAD

export {ThemeToggle};';
;';;';
=======
;
export {ThemeToggle};
;
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
