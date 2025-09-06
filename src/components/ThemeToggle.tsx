import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, actualTheme } = useTheme();

  const themes = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ] as const;

  return (
    <div className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-1 border border-gray-700/50">
      {themes.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value as 'light' | 'dark' | 'system')}
          className={`relative flex items-center justify-center w-10 h-10 rounded-md transition-all duration-200 ${
            theme === value
              ? 'text-white'
              : 'text-gray-400 hover:text-gray-300'
          }`}
          title={`Switch to ${label} mode`}
        >
          {theme === value && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-md"
              layoutId="theme-toggle"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <Icon className="relative z-10 w-4 h-4" />
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;