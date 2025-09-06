
<<<<<<< HEAD
import React from "react";
import {useTheme} from "@/hooks/useTheme";
interface MobileThemeProviderProps {
  children: React.ReactNode
}

export function MobileThemeProvider({ children }: MobileThemeProviderProps) {;
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      {children}
    </div>
  )
}
