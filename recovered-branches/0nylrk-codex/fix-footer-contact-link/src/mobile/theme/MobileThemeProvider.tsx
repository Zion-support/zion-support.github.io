
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
=======
import React from "react",;
import { useTheme } from "@/hooks/useTheme",;
interface MobileThemeProviderProps {;
  children: React.ReactNode;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
export function MobileThemeProvider({ children }: MobileThemeProviderProps) {;
  const { theme } = useTheme();
  return (;
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>;
      {children}
    </div>;
  );
}
;