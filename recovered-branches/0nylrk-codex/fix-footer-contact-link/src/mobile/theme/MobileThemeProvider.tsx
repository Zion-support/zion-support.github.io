
<<<<<<< HEAD
import React from "react";
import { useTheme } from "@/hooks/useTheme";
interface MobileThemeProviderProps {
  children: React.ReactNode
}
<<<<<<< HEAD
export function MobileThemeProvider({ children }: MobileThemeProviderProps) {
=======

export function MobileThemeProvider({ children }: MobileThemeProviderProps) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {children}
    </div>
  )
}