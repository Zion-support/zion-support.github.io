import React, { useState, useEffect } from 'react';
import { EnhancedNavigation } from '../components/EnhancedNavigation';

interface AppHeaderProps {
  onSidebarToggle?: () => void;
}

export function AppHeader({ onSidebarToggle }: AppHeaderProps) {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

  useEffect(() => {
    const savedTheme = localStorage.getItem('zion-theme') as 'light' | 'dark' | 'system';
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    localStorage.setItem('zion-theme', newTheme);
  };

  return (
    <EnhancedNavigation 
      onThemeChange={handleThemeChange}
      onSidebarToggle={onSidebarToggle}
      className=""
    />
  );
}
