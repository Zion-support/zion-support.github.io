<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react.ts';
import { Sun, Moon, Monitor type Theme = 'dark' | 'light' | 'system';
=======
import React, { useState, useEffect  } from 'react.ts';
import { Sun, Moon, Monitor   } from 'lucide-react.ts';

type Theme = 'dark' | 'light' | 'system';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

<<<<<<< HEAD
export function ThemeToggle(...args[]: any):  {
  const [theme, setTheme] = useState<any>('system');
=======
interface ThemeToggleProps extends React.PropsWithChildren<{}> {

  className?: string;

}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {;
  const [theme, setTheme] = useState<any>('system');
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
=======
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Theme = 'light' | 'dark' | 'system';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const [theme, setTheme] = useState<Theme>('system');
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
<<<<<<< HEAD
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme)}
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.toggle('dark', systemTheme === 'dark');
    } else {
      root.classList.toggle('dark', theme === 'dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        const root = window.document.documentElement;
        root.classList.toggle('dark', mediaQuery.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse" />
    );
  }

  const themes: { value: Theme; label: string; icon: React.ComponentType<any> }[] = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor }
  ];

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        onClick={() => {
          const currentIndex = themes.findIndex(t => t.value === theme);
          const nextIndex = (currentIndex + 1) % themes.length;
          setTheme(themes[nextIndex].value);
        }}
        aria-label={`Current theme: ${theme}. Click to cycle through themes.`}
        title={`Current theme: ${theme}. Click to cycle through themes.`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            {themes.find(t => t.value === theme)?.icon({ className: 'w-5 h-5' })}
          </motion.div>
        </AnimatePresence>
      </motion.button>
      
      {/* Theme indicator tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover: anyopacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {themes.find(t  => t.value === theme)?.label} theme
      </div>
    </div>
  );
}

// Alternative dropdown version for more explicit theme selection
export function ThemeToggleDropdown(...args: any[]): any {
  const [theme, setTheme] = useState<any>('system');
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);

=======
    const savedTheme = localStorage.getItem('zion-theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  }, []);

  useEffect(() => {
    if (!mounted) return;

<<<<<<< HEAD
    const root = window.document.documentElement;
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.toggle('dark', systemTheme === 'dark');
    } else {
<<<<<<< HEAD
      root.classList.add(theme);

    localStorage.setItem('zion-theme', theme);
=======
      root.classList.toggle('dark', theme === 'dark');
    }
    
    localStorage.setItem('theme', theme);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  }, [theme, mounted]);

  if (!mounted) {
    return (
      <div className="w-32 h-10 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse" />
    );
  }

  const themes: { value: Theme; label: string; icon: React.ComponentType<any> }[] = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor }
  ];

  return (
    <div className="relative">
      <button
<<<<<<< HEAD
        onClick={() => toggleTheme('light')}
        className={`p-2 rounded-full transition-colors duration-200 ${theme === 'light' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:bg-zion-slate-light/10'}`}
        aria-label="Switch to light theme"

        <Sun className="h-5 w-5" />
      </button>
      <button
        onClick={() => toggleTheme('dark')}
        className={`p-2 rounded-full transition-colors duration-200 ${theme === 'dark' ? 'bg-zion-purple text-white' : 'text-zion-slate-light hover:bg-zion-slate-light/10'}`}
        aria-label="Switch to dark theme"

        <Moon className="h-5 w-5" />
      </button>
      <button
        onClick={() => toggleTheme('system')}
        className={`p-2 rounded-full transition-colors duration-200 ${theme === 'system' ? 'bg-zion-green text-white' : 'text-zion-slate-light hover:bg-zion-slate-light/10'}`}
        aria-label="Switch to system theme"

        <Monitor className="h-5 w-5" />
=======
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Select theme"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {themes.find(t => t.value === theme)?.icon({ className: 'w-4 h-4' })}
        <span className="text-sm font-medium">{themes.find(t => t.value === theme)?.label}</span>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 w-32 bg-white dark: anybg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50"
          >
            {themes.map((themeOption)  => (
              <button
                key={themeOption.value}
                onClick={() => {
                  setTheme(themeOption.value);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-2 px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  theme === themeOption.value
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <themeOption.icon className="w-4 h-4" />
                <span>{themeOption.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
<<<<<<< HEAD
}}}}
=======
};
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
=======
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

export default ThemeToggle;
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
