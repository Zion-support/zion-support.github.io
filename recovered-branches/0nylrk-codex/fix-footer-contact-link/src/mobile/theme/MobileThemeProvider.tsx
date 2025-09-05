
import React from "react";

interface MobileThemeProviderProps {_children: React.ReactNode;}

export function MobileThemeProvider(_{_children}: MobileThemeProviderProps) {_const { theme} = useTheme();
  
  return (
    <div className={_`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>
      {_children}
    </div>
  );
}
