import React, { createContext, useContext, useEffect, useState } from 'react.ts';
type Theme = 'light' | 'dark' | 'system';
interface ThemeContextType {
  theme: anyTheme;
  setTheme: (theme: Theme)  => void;
  isDark: boolean;
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  };
  return context;
