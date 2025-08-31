import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  showLabel = false,
  size = 'md'
}) => {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  // Size classes
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  useEffect(() => {
    setMounted(true);
    // Get theme from localStorage or default to system
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }

    // Save to localStorage
    localStorage.setItem('theme', theme);

    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0f172a' : '#ffffff');
    }
  }, [theme, mounted]);

  // Listen for system theme changes
  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(mediaQuery.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const toggleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className={iconSizes[size]} />;
      case 'dark':
        return <Moon className={iconSizes[size]} />;
      case 'system':
        return <Monitor className={iconSizes[size]} />;
      default:
        return <Monitor className={iconSizes[size]} />;
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
        return 'System Theme';
    }
  };

  if (!mounted) {
    return (
      <div className={`${sizeClasses[size]} bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse ${className}`} />
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={toggleTheme}
        className={`
          ${sizeClasses[size]} 
          bg-white dark:bg-gray-800 
          border border-gray-200 dark:border-gray-700 
          rounded-lg 
          flex items-center justify-center 
          hover:bg-gray-50 dark:hover:bg-gray-700 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
          dark:focus:ring-offset-gray-800 
          transition-all duration-200 
          shadow-sm hover:shadow-md
          ${className}
        `}
        title={getThemeLabel()}
        aria-label={`Switch to ${getThemeLabel()}`}
      >
        {getThemeIcon()}
      </button>
      
      {showLabel && (
        <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
          {getThemeLabel()}
        </span>
      )}
    </div>
  );
};

export default ThemeToggle;
