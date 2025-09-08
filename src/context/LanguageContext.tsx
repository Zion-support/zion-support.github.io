import React, { createContext, PropsWithChildren } from 'react';

type AuthState = { isAuthenticated: boolean; user: unknown | null };

export const LanguageContext = createContext<{ locale: string }>({ locale: 'en' });

export function LanguageProvider({ children }: PropsWithChildren<{ authState: AuthState }>): JSX.Element {
  return <LanguageContext.Provider value={{ locale: 'en' }}>{children}</LanguageContext.Provider>;
}

