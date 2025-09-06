


  children: React.ReactNode
}

export function MobileThemeProvider({ children }: MobileThemeProviderProps) {;

  const { theme } = useTheme();
  return (
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>


import React from "react",
import { useTheme } from "@/hooks/useTheme",
interface MobileThemeProviderProps {
  children: React.ReactNode
import React from "react",;
import { useTheme } from "@/hooks/useTheme",;
interface MobileThemeProviderProps {;

  children: React.ReactNode;
}




export function MobileThemeProvider({ children }: MobileThemeProviderProps) {;


  const { theme } = useTheme();

  return (;
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>;



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

  return (
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>;





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


      {children}

    </div>;
  );
}


