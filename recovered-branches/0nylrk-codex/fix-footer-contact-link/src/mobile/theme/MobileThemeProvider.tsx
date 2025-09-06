
import React from "react";
import { useTheme } from "@/hooks/useTheme";
interface MobileThemeProviderProps {
  children: React.ReactNode
}
export function MobileThemeProvider({ children }: MobileThemeProviderProps) {

export function MobileThemeProvider({ children }: MobileThemeProviderProps) {;
  const { theme } = useTheme();
  return (
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>
import React from "react",
import { useTheme } from "@/hooks/useTheme",
interface MobileThemeProviderProps {
  children: React.ReactNode;
}




export function MobileThemeProvider({ children }: MobileThemeProviderProps) {;


  const { theme } = useTheme();
  return (;
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>;
      {children}

    </div>;
  );
}

=======
export /**
 * MobileThemeProvider - Function description
 */
function MobileThemeProvider() {
  const { theme } = use_theme ();
;
  return (
    <div className={`mobile - app ${theme === 'dark' ? 'dark' : 'light'}`}>;
      {children}
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
