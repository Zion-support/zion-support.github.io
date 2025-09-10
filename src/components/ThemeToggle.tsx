import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

type Theme = 'dark' | 'light' | 'system';

interface ThemeToggleProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export default function ThemeToggle({ theme, onThemeChange }: ThemeToggleProps) {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => onThemeChange('light')}
        className={`p-2 rounded-md ${
          theme === 'light' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
      >
        <Sun size={16} />
      </button>
      <button
        onClick={() => onThemeChange('dark')}
        className={`p-2 rounded-md ${
          theme === 'dark' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
      >
        <Moon size={16} />
      </button>
      <button
        onClick={() => onThemeChange('system')}
        className={`p-2 rounded-md ${
          theme === 'system' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
      >
        <Monitor size={16} />
      </button>
    </div>
  );
}