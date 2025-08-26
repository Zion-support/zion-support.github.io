import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme || 'dark';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.toggle('dark', systemTheme === 'dark');
    } else {
      root.classList.toggle('dark', newTheme === 'dark');
    }
    
    localStorage.setItem('theme', newTheme);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  if (!mounted) return null;

  return (
    <div className="relative">
      <div className="flex items-center space-x-1 bg-slate-800/50 rounded-lg p-1 backdrop-blur-sm">
        <button
          onClick={() => handleThemeChange('light')}
          className={`p-2 rounded-md transition-all duration-200 ${
            theme === 'light'
              ? 'bg-cyan-500 text-white shadow-lg'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
          }`}
          aria-label="Light theme"
        >
          <Sun className="w-4 h-4" />
        </button>
        
        <button
          onClick={() => handleThemeChange('dark')}
          className={`p-2 rounded-md transition-all duration-200 ${
            theme === 'dark'
              ? 'bg-cyan-500 text-white shadow-lg'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
          }`}
          aria-label="Dark theme"
        >
          <Moon className="w-4 h-4" />
        </button>
        
        <button
          onClick={() => handleThemeChange('system')}
          className={`p-2 rounded-md transition-all duration-200 ${
            theme === 'system'
              ? 'bg-cyan-500 text-white shadow-lg'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
          }`}
          aria-label="System theme"
        >
          <Monitor className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};