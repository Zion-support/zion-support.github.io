
<<<<<<< HEAD
import React from "react",;
import { useTheme } from "@/hooks/useTheme",;
;
interface MobileThemeProviderProps {;
  children:React.ReactNode;
}
;
export function MobileThemeProvider({ children } MobileThemeProviderProps) {;
  const { theme } = useTheme(),;
  ;
  return (;
    <div className={`mobile-app ${theme === 'dark' ? 'dark' :'light'}`}>;
      {children}
    </div>;
  ),;
=======
import React from "react",
import { useTheme } from "@/hooks/useTheme",interface MobileThemeProviderProps {
  children: React.ReactNode
}

export function MobileThemeProvider({ children }: MobileThemeProviderProps) {
  const { theme } = useTheme(),
import React from "react";

interface MobileThemeProviderProps {_children: React.ReactNode;}

export function MobileThemeProvider(_{_children}: MobileThemeProviderProps) {_const { theme} = useTheme();
  
  return (
    <div className={_`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>
      {_children}
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
