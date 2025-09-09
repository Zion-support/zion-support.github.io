import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

export const ThemeToggle: React.FC = () => {
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

    const root = document.documentElement;
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.toggle('dark', systemTheme === 'dark');
    } else {
      root.classList.toggle('dark', theme === 'dark');
    }

    localStorage.setItem('zion-theme', theme);
  }, [theme, mounted]);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  if (!mounted) {
    return (
      <div className="w-12 h-12 bg-zion-slate-light/20 rounded-lg animate-pulse" />
    );
  }

  const themes: { value: Theme; icon: React.ReactNode; label: string }[] = [
    { value: 'light', icon: <Sun className="w-4 h-4" />, label: 'Light mode' },
    { value: 'dark', icon: <Moon className="w-4 h-4" />, label: 'Dark mode' },
    { value: 'system', icon: <Monitor className="w-4 h-4" />, label: 'System preference' }
  ];

  return (
    <div className="relative group">
      <motion.button
        className="flex items-center justify-center w-12 h-12 bg-zion-slate-light/10 hover:bg-zion-slate-light/20 rounded-lg transition-all duration-300 border border-zion-cyan/20 hover:border-zion-cyan/40"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme"
      >
        {themes.find(t => t.value === theme)?.icon}
      </motion.button>

      {/* Dropdown */}
      <div className="absolute right-0 top-full mt-2 w-48 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="p-2 space-y-1">
          {themes.map((themeOption) => (
            <motion.button
              key={themeOption.value}
              onClick={() => handleThemeChange(themeOption.value)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                theme === themeOption.value
                  ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/40'
                  : 'hover:bg-zion-slate-light/10 hover:text-zion-cyan'
              }`}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-zion-cyan">{themeOption.icon}</span>
              <span className="text-sm font-medium">{themeOption.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};