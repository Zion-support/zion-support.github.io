import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Theme = 'light' | 'dark' | 'system';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
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
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const effectiveTheme = theme === 'system' ? systemTheme : theme;

    root.classList.remove('light', 'dark');
    root.classList.add(effectiveTheme);
    
    // Update CSS custom properties for smooth transitions
    if (effectiveTheme === 'dark') {
      root.style.setProperty('--zion-bg-primary', '#0f172a');
      root.style.setProperty('--zion-bg-secondary', '#1e293b');
      root.style.setProperty('--zion-text-primary', '#f8fafc');
      root.style.setProperty('--zion-text-secondary', '#cbd5e1');
    } else {
      root.style.setProperty('--zion-bg-primary', '#ffffff');
      root.style.setProperty('--zion-bg-secondary', '#f1f5f9');
      root.style.setProperty('--zion-text-primary', '#0f172a');
      root.style.setProperty('--zion-text-secondary', '#475569');
    }

    localStorage.setItem('zion-theme', theme);
  }, [theme, mounted]);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  const themes: { value: Theme; label: string; icon: React.ComponentType<any> }[] = [
    { value: 'light', label: 'Light theme', icon: Sun },
    { value: 'dark', label: 'Dark theme', icon: Moon },
    { value: 'system', label: 'System theme', icon: Monitor }
  ];

  if (!mounted) {
    return (
      <div className={`w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse ${className}`} />
    );
  }

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-1"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {themes.map((themeOption) => {
          const Icon = themeOption.icon;
          const isActive = theme === themeOption.value;
          
          return (
            <motion.button
              key={themeOption.value}
              onClick={() => handleThemeChange(themeOption.value)}
              className={`relative p-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={themeOption.label}
              title={themeOption.label}
            >
              <Icon className="w-4 h-4" />
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
                  layoutId="activeTheme"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
};
