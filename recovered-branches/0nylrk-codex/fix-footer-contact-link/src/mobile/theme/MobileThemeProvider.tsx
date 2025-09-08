  const { theme } = useTheme();
  return (
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>
import React from "react",
import { useTheme } from "@/hooks/useTheme",
  const { theme } = useTheme();
  return (
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>
import React from "react",
import { useTheme } from "@/hooks/useTheme",
import React from './react';
import { use_theme } from '@/hooks / use_theme';
interface MobileThemeProviderProps {

  children: React.ReactNode;
}

export function MobileThemeProvider({ children }: MobileThemeProviderProps) {;

  const { theme } = useTheme();

  return (
    <div className={`mobile-app ${theme === "dark" ? "dark" : "light"}`}>
      {children}
    </div>
  );
}
export function MobileThemeProvider(): any ({ children }: MobileThemeProviderProps) {;
  const { theme } = useTheme();

  return (
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>;

  return (
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>;




      {children}

    </div>;
  );
}