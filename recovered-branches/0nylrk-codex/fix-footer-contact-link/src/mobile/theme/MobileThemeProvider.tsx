
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { useTheme } from "@/hooks/useTheme",
=======
import React from &quot;react&quot;;
import { useTheme } from &quot;@/hooks/useTheme&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface MobileThemeProviderProps {
  children: React.ReactNode
}

export function MobileThemeProvider({ children }: MobileThemeProviderProps) {
  const { theme } = useTheme(),
=======
import React from "react";

interface MobileThemeProviderProps {_children: React.ReactNode;}

export function MobileThemeProvider(_{_children}: MobileThemeProviderProps) {_const { theme} = useTheme();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <div className={_`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>
      {_children}
    </div>
  )
}
