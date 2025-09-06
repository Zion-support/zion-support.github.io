
import React from "react";
import { useTheme } from "@/hooks/useTheme";
interface MobileThemeProviderProps {
<<<<<<< HEAD
  children: React.ReactNode
}
=======
  children: React.ReactNode;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function MobileThemeProvider({ children }: MobileThemeProviderProps) {
  const { theme } = useTheme();
  return (
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>
      {children}
    </div>
  )
}