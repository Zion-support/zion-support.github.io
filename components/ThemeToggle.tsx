import React from 'react';

interface ThemeToggleProps {
  theme: string;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full shadow-lg z-50"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;