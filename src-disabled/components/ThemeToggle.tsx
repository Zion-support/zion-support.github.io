import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
const ThemeToggle: React.FC = () => {,
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme:,  dark)').matches;',
    if (savedTheme === 'dark' || (!savedTheme &&,  prefersDark)) {'
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);,
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"",
      aria-label="Toggle theme""
    >
{theme === 'light' ? (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </button>
 import { motion } from 'framer - motion' import { Sun, Moon, Monitor } from 'lucide - react' import { useTheme } from './ThemeProvider' const ThemeToggle: React.FC = () => { const { theme, setTheme } = useTheme ()  const themes = [ { name: 'light', icon: Sun, label: 'Light' }, { name: 'dark', icon: Moon, label: 'Dark' }, { name: 'system', icon: Monitor, label: 'System' } ] return (<div role='button' className='relative'> <div role='button' className='flex items - center space - x-1 bg - zion - slate - light / 30 rounded - lg p - 1'> {themes.map ( (themeOption) => { const Icon = themeOption.icon const isActive = theme === themeOption.name return (<motion.button key={themeOption.name} onClick={ () => setTheme (themeOption.name as 'light' | 'dark' | 'system') } className={`relative px - 3 py - 2 rounded - md transition - all duration - 200 flex items - center space - x-2 ${ isActive ? 'text - white' : 'text - gray - 400 hover:text - white' }`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} > {isActive && (<motion.div layoutId='theme - bg' className='absolute inset - 0 bg - gradient - to - r from - zion - cyan to - zion - purple rounded - md' initial={false} transition={{ type: 'spring', stiffness: 500, damping: 30 }} />) } <Icon className='w - 4 h - 4 relative z - 10' /> <span className='text - sm font - medium relative z - 10 hidden sm: block'> {themeOption.label} </span> </motion.button>)  })} </div> </div>)  } export default ThemeToggle';`"'"
 import { motion } from 'framer - motion' import { Sun, Moon, Monitor } from 'lucide - react' import { useTheme } from './ThemeProvider' const ThemeToggle: React.FC = () => { const { theme, setTheme } = useTheme ()  const themes = [ { name: 'light', icon: Sun, label: 'Light' }, { name: 'dark', icon: Moon, label: 'Dark' }, { name: 'system', icon: Monitor, label: 'System' } ] return (<div role='button' className='relative'> <div role='button' className='flex items - center space - x-1 bg - zion - slate - light / 30 rounded - lg p - 1'> {themes.map ( (themeOption) => { const Icon = themeOption.icon const isActive = theme === themeOption.name return (<motion.button key={themeOption.name} onClick={ () => setTheme (themeOption.name as 'light' | 'dark' | 'system') } className={`relative px - 3 py - 2 rounded - md transition - all duration - 200 flex items - center space - x-2 ${ isActive ? 'text - white' : 'text - gray - 400 hover:text - white' }`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} > {isActive && (<motion.div layoutId='theme - bg' className='absolute inset - 0 bg - gradient - to - r from - zion - cyan to - zion - purple rounded - md' initial={false} transition={{ type: 'spring', stiffness: 500, damping: 30 }} />) } <Icon className='w - 4 h - 4 relative z - 10' /> <span className='text - sm font - medium relative z - 10 hidden sm: block'> {themeOption.label} </span> </motion.button>)  }) } </div> </div>)  } export default ThemeToggle';`"'"

import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, actualTheme } = useTheme();

  const themes = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' }
  ] as const;

  return (
    <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
      {themes.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value as 'light' | 'dark' | 'system')}
          className={`flex items-center space-x-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
            theme === value
              ? 'bg-background text-foreground shadow-sm
              : 'text-muted-foreground hover:text-foreground`;
          }`}`;
          title={`Switch to ${label} theme`}
        >
          <Icon size={16} />
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
