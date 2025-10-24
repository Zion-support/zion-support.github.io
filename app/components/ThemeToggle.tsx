
import {useState, useEffect} from 'react';
import {Sun, Moon} from 'lucide-react';

const ThemeToggle: React.FC = () => {const [isDark, setIsDark] = useState(true);
'use client';
import { useState, useEffect} from 'react';
import { Sun, Moon} from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    // Check for saved theme preference or default to dark;
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (const savedTheme = == 'light' || (!savedTheme && !prefersDark)) {
      setIsDark(false);
      document.documentElement.classList.remove('dark');} else {setIsDark(true);
      document.documentElement.classList.add('dark');}
  }, []);

  const toggleTheme = () => {const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');} else {document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');}
  };

export default function ThemeToggle() {return (

      {isDark ? (
        <Sun className="w-5h-5ml-2"   /></Sun>
  ) : (
        <Moon className="w-5h-5ml-2"   /></Moon>
  )}

  );
}
import React from 'react';

const ThemeToggle: React.FC<ThemeToggleProps> = () => {
  return (
    <div className="themetoggle">
      <h2>ThemeToggle</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default ThemeToggle;
