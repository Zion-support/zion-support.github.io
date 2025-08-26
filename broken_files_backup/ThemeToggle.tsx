<<<<<<< HEAD:src/components/ThemeToggle.tsx
import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle(): JSX.Element {
  const { mode, toggleTheme } = useTheme();

=======
import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('zion-theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('zion-theme', newTheme ? 'dark' : 'light');
    // Apply theme to document
    if (newTheme) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  };
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/ThemeToggle.tsx
  return (
    <Button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
    >
      {mode === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
<<<<<<< HEAD:src/components/ThemeToggle.tsx
}
=======
};
export default ThemeToggle;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/ThemeToggle.tsx
