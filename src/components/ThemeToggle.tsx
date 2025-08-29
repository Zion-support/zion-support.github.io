import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor, Palette } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Get theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('zion-theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        setTheme('system');
        applyTheme('light');
      }
    }
  }, []);

  const applyTheme = (selectedTheme: Theme) => {
    const root = document.documentElement;
    
    if (selectedTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      root.classList.toggle('light', systemTheme === 'light');
      root.classList.toggle('dark', systemTheme === 'dark');
    } else {
      root.classList.toggle('light', selectedTheme === 'light');
      root.classList.toggle('dark', selectedTheme === 'dark');
    }
    
    // Update CSS custom properties
    if (selectedTheme === 'light') {
      root.style.setProperty('--zion-bg-primary', '#ffffff');
      root.style.setProperty('--zion-bg-secondary', '#f8fafc');
      root.style.setProperty('--zion-text-primary', '#0f172a');
      root.style.setProperty('--zion-text-secondary', '#475569');
    } else {
      root.style.setProperty('--zion-bg-primary', '#0f172a');
      root.style.setProperty('--zion-bg-secondary', '#1e293b');
      root.style.setProperty('--zion-text-primary', '#f8fafc');
      root.style.setProperty('--zion-text-secondary', '#cbd5e1');
    }
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('zion-theme', newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-5 h-5" />;
      case 'dark':
        return <Moon className="w-5 h-5" />;
      case 'system':
        return <Monitor className="w-5 h-5" />;
      default:
        return <Palette className="w-5 h-5" />;
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light Mode';
      case 'dark':
        return 'Dark Mode';
      case 'system':
        return 'System Theme';
      default:
        return 'Theme';
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-xl bg-zion-slate/20 border border-zion-cyan/30 hover:border-zion-cyan/50 hover:bg-zion-slate/30 transition-all duration-300 group"
        aria-label={`Current theme: ${getThemeLabel()}. Click to change theme.`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-zion-cyan group-hover:text-zion-cyan-light"
        >
          {getThemeIcon()}
        </motion.div>
        
        {/* Hover effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute right-0 top-full mt-2 w-48 bg-zion-slate/95 backdrop-blur-xl border border-zion-cyan/30 rounded-2xl shadow-2xl shadow-zion-cyan/20 z-50 overflow-hidden"
            >
              <div className="p-2">
                {[
                  { value: 'light' as Theme, icon: Sun, label: 'Light Mode', description: 'Clean, bright interface' },
                  { value: 'dark' as Theme, icon: Moon, label: 'Dark Mode', description: 'Easy on the eyes' },
                  { value: 'system' as Theme, icon: Monitor, label: 'System Theme', description: 'Follows OS preference' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleThemeChange(option.value)}
                    className={`w-full flex items-center p-3 rounded-xl text-left transition-all duration-200 hover:bg-zion-cyan/10 hover:border-zion-cyan/30 ${
                      theme === option.value 
                        ? 'bg-zion-cyan/20 border border-zion-cyan/50 text-zion-cyan' 
                        : 'text-zion-text-secondary hover:text-zion-text-primary'
                    }`}
                  >
                    <option.icon className={`w-5 h-5 mr-3 ${theme === option.value ? 'text-zion-cyan' : 'text-zion-text-secondary'}`} />
                    <div>
                      <div className="font-medium">{option.label}</div>
                      <div className="text-xs opacity-70">{option.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
