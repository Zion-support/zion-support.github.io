
import React from &quot;react&quot;;
import { useTheme } from &quot;@/hooks/useTheme&quot;;

interface MobileThemeProviderProps {
  children: React.ReactNode;
}

export function MobileThemeProvider({ children }: MobileThemeProviderProps) {
  const { theme } = useTheme();
  
  return (
    <div className={`mobile-app ${theme === 'dark' ? 'dark' : 'light'}`}>
      {children}
    </div>
  );
}
