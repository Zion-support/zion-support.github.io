import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.remove('light', 'dark');
      root.classList.add(systemTheme);
    } else {
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
    }
    
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 bg-zion-slate-light/20 rounded-lg animate-pulse" />
    );
  }

  return (
    <div className="relative">
      <div className="flex items-center bg-zion-slate-light/10 rounded-lg p-1">
        <button
          onClick={() => handleThemeChange('light')}
          className={`p-2 rounded-md transition-all duration-200 ${
            theme === 'light'
              ? 'bg-zion-cyan text-white shadow-lg'
              : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
          }`}
          aria-label="Light theme"
        >
          <Sun className="w-4 h-4" />
        </button>
        
        <button
          onClick={() => handleThemeChange('system')}
          className={`p-2 rounded-md transition-all duration-200 ${
            theme === 'system'
              ? 'bg-zion-cyan text-white shadow-lg'
              : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
          }`}
          aria-label="System theme"
        >
          <Monitor className="w-4 h-4" />
        </button>
        
        <button
          onClick={() => handleThemeChange('dark')}
          className={`p-2 rounded-md transition-all duration-200 ${
            theme === 'dark'
              ? 'bg-zion-cyan text-white shadow-lg'
              : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
          }`}
          aria-label="Dark theme"
        >
          <Moon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}