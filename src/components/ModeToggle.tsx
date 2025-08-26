import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
}