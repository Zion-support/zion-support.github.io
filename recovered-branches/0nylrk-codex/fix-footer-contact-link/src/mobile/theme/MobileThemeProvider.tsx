

  const { theme } = useTheme();
  return (
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>

  return (
  const { theme } = useTheme();
  return (
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>
=======
import React from "react",
import { useTheme } from "@/hooks/useTheme",
=======
import React from './react';
import { use_theme } from '@/hooks / use_theme';

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
interface MobileThemeProviderProps {
  children: React.ReactNode
import React from "react",;
import { useTheme } from "@/hooks/useTheme",;
interface MobileThemeProviderProps {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  children: React.ReactNode;
}




export function MobileThemeProvider({ children }: MobileThemeProviderProps) {;


  const { theme } = useTheme();
  return (;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>;
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      {children}

    </div>;
  );
}

