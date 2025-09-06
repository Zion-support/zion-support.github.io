

import React from "react";
import { useTheme } from "@/hooks/useTheme";
interface MobileThemeProviderProps {
<<<<<<< HEAD
  children: React.ReactNode
}

interface MobileThemeProviderProps {
  children: React.ReactNode
import React from "react",;
import { useTheme } from "@/hooks/useTheme",;
interface MobileThemeProviderProps {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  children: React.ReactNode;
}




export function MobileThemeProvider({ children }: MobileThemeProviderProps) {;


  const { theme } = useTheme();
<<<<<<< HEAD
  return (;
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======
import {useTheme} from "@/hooks/useTheme";
interface MobileThemeProviderProps {;
  children: React && React.ReactNode;
}

export function MobileThemeProvider(): any ({ children }: MobileThemeProviderProps) {;
  const { theme } = useTheme();

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      {children}

    </div>;
  );
}


