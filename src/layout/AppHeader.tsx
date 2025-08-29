import React, { useState, useEffect } from 'react.ts';
import { EnhancedNavigation  } from '../components/EnhancedNavigation';

export function AppHeader(...args: any[]): any {
  const [theme, setTheme] = useState<any>('system');

  useEffect(() => {
    const savedTheme = localStorage.getItem('zion-theme') as 'light' | 'dark' | 'system';
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const handleThemeChange = (newTheme: any'light' | 'dark' | 'system')  => {
    setTheme(newTheme);
    localStorage.setItem('zion-theme', newTheme);
  };

  return (
    <EnhancedNavigation 
      onThemeChange={handleThemeChange}
      className=""
    />
  );
}
