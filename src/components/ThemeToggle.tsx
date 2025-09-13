import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
    setTheme(newTheme);
  };

  const getIcon = () => {
    if (theme === 'system') {
      return '🖥️';
    }
    return resolvedTheme === 'dark' ? '🌙' : '☀️';
  };

  const getLabel = () => {
    if (theme === 'system') {
      return 'System theme';
    }
    return resolvedTheme === 'dark' ? 'Dark theme' : 'Light theme';
  };

  return (
    <button
      className="theme-toggle"
      onClick={handleThemeChange}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
      title={getLabel()}
    >
      <span className="theme-toggle-icon" role="img" aria-hidden="true">
        {getIcon()}
      </span>
      <span className="theme-toggle-label">
        {getLabel()}
      </span>
    </button>
  );
};

export default ThemeToggle;