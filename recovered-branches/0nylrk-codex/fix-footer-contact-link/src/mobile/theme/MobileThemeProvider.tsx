
import React from "react";
import { useTheme } from "@/hooks/useTheme";
interface MobileThemeProviderProps {
  children: React.ReactNode
}

export function MobileThemeProvider({ children }: MobileThemeProviderProps) {
  const { theme } = useTheme($2);
  return (
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>
      {children}
    </div>
  )
}
