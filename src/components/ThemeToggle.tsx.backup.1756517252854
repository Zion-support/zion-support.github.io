import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

type Theme = 'dark' | 'light' | 'system';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('zion-theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
    localStorage.setItem('zion-theme', theme);
  }, [theme, mounted]);

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center space-x-2 p-1 bg-zion-slate-dark rounded-full border border-zion-slate-light/20">
      <button
        onClick={() => toggleTheme('light')}
        className={`p-2 rounded-full transition-colors duration-200 ${theme === 'light' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:bg-zion-slate-light/10'}`}
        aria-label="Switch to light theme"
      >
        <Sun className="h-5 w-5" />
      </button>
      <button
        onClick={() => toggleTheme('dark')}
        className={`p-2 rounded-full transition-colors duration-200 ${theme === 'dark' ? 'bg-zion-purple text-white' : 'text-zion-slate-light hover:bg-zion-slate-light/10'}`}
        aria-label="Switch to dark theme"
      >
        <Moon className="h-5 w-5" />
      </button>
      <button
        onClick={() => toggleTheme('system')}
        className={`p-2 rounded-full transition-colors duration-200 ${theme === 'system' ? 'bg-zion-green text-white' : 'text-zion-slate-light hover:bg-zion-slate-light/10'}`}
        aria-label="Switch to system theme"
      >
        <Monitor className="h-5 w-5" />
      </button>
    </div>
  );
}
