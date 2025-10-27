import React from 'react';

interface ThemeToggleProps {
  isDark?: boolean;
  onToggle?: () => void;
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark = false, onToggle, className = '' }) => {
  return (
    <button
      onClick={onToggle}
      className={`theme-toggle ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;

