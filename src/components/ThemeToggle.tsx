import React from 'react';

interface ThemeToggleProps {
  darkMode: boolean;
  onToggle: () => void;
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  darkMode, 
  onToggle, 
  className = '' 
}) => {
  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-lg transition-colors duration-200 ${
        darkMode 
          ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      } ${className}`}
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
      title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;