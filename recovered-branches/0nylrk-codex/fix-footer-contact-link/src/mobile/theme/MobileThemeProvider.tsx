
<<<<<<< HEAD
import React from "react";
import { useTheme } from "@/hooks/useTheme";
interface MobileThemeProviderProps {
  children: React.ReactNode
}
export function MobileThemeProvider({ children }: MobileThemeProviderProps) {
  const { theme } = useTheme();
  return (
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>
=======
import React from "react",
import { useTheme } from "@/hooks/useTheme",
interface MobileThemeProviderProps {
  children: React.ReactNode
import React from "react",;
import { useTheme } from "@/hooks/useTheme",;
interface MobileThemeProviderProps {;
  children: React.ReactNode;
}
;
export function MobileThemeProvider({ children }: MobileThemeProviderProps) {;
  const { theme } = useTheme();
  return (;
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      {children}
    </div>
  )
}