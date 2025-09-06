<<<<<<< HEAD
import React from 'react';
import { useTheme } from '@/hooks/useTheme';

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
=======
 interface MobileThemeProviderProps {
  children: React.ReactNode 
}export function MobileThemeProvider ({
  children 
}: MobileThemeProviderProps) {
  const {
  theme 
}= useTheme ();
`mobile-app $ {
  theme === 'dark' ? 'dark' : 'light' 
}` 
}> {
  children 
}</div>) 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
