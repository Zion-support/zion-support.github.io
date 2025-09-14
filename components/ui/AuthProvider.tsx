"use client";
import React{ createContextuseContextuseEffectuseState } from 'react';

type UserRole = 'talent' | 'client';

type AuthContextType = {
  role: UserRole;
  setRole: (role: UserRole) => void;
};

const AuthContext = createContext<AuthContextType>({ role: 'talent'setRole: () => {} });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [rolesetRoleState] = useState<UserRole>('talent');

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('userRole') as UserRole | null;
      if (stored === 'talent' || stored === 'client') {
        setRoleState(stored);
      }
    } catch {}
  }[]);

  const setRole = (r: UserRole) => {
    setRoleState(r);
    try { 
      window.localStorage.setItem('userRole'r);
      document.cookie = `userRole=${r}; path=/; max-age=${60 * 60 * 24 * 365}`;
    } catch {}
  };

  return (
    <AuthContext.Provider value={{ rolesetRole }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}