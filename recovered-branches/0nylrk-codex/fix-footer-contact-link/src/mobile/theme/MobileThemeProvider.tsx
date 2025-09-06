
import React from "react";
<<<<<<< HEAD
import { useTheme } from "@/hooks/useTheme";
interface MobileThemeProviderProps {
  children: React.ReactNode
}
export function MobileThemeProvider({ children }: MobileThemeProviderProps) {
  const { theme } = useTheme();
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
      {children}
<<<<<<< HEAD
    </div>
  )
}
=======
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
