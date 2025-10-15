import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

interface ThemeToggleProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  children,
  className = "",
  title,
  description
}) => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null;
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

    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const themes = [
    { name: 'Light', value: 'light', icon: Sun },
    { name: 'Dark', value: 'dark', icon: Moon },
    { name: 'System', value: 'system', icon: Monitor }
  ];

  if (!mounted) return null;

  return (
    <div className={`enhanced-component bg-slate-800 rounded-lg p-6 ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>}
      {description && <p className="text-gray-300 mb-4">{description}</p>}
      
      <div className="flex space-x-2 mb-6">
        {themes.map((themeOption) => {
          const Icon = themeOption.icon;
          return (
            <button
              key={themeOption.value}
              onClick={() => setTheme(themeOption.value as 'light' | 'dark' | 'system')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                theme === themeOption.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{themeOption.name}</span>
            </button>
          );
        })}
      </div>
      
      {children}
    </div>
  );
};

export default ThemeToggle;
