import React from 'react';

interface ThemeToggleProps {
  darkMode: boolean;
  onToggle: () => void;
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, onToggle, className = '' }) => {
  return (
    <button
      onClick={onToggle}
      className={`relative inline-flex items-center justify-center w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className} ${
        darkMode 
          ? 'bg-blue-600' 
          : 'bg-gray-300'
      }`}
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
      title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
    ></button>
      <span
        className={`inline-block w-4 h-4 bg-white rounded-full shadow-lg transform transition-transform duration-200 ${
          darkMode ? 'translate-x-3' : '-translate-x-3'
        }`}
      >
        <span className="sr-only">
          {darkMode ? 'Dark mode enabled' : 'Light mode enabled'}
        </span>
      </span>
      {/* Icons */}
      <span className="absolute left-1 text-xs">
        {darkMode ? '🌙' : '☀️'}
      </span>
      <span className="absolute right-1 text-xs">
        {darkMode ? '☀️' : '🌙'}
      </span>
    </button>
  );
};

export default ThemeToggle;